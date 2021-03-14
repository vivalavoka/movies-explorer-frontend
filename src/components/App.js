import React from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import { moviesUrl } from '../utils/constants';
import moviesApi from '../utils/movies-api';
import mainApi from '../utils/main-api';
import cardFilter from '../utils/card-filter';
import CurrentUserContext from '../contexts/CurrentUserContext';

import Header from './Header/Header';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Register from './Register/Register';
import Login from './Login/Login';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Profile from './Profile/Profile';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { cardLimit } from '../utils/constants';
import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      cardLimit: {},
      movies: [],
      findedMovies: [],
      moviesLoading: false,
      savedMovies: [],
      findedSavedMovies: [],
      savedMoviesLoading: false,
      currentUser: {},
    };
    this.checkToken = this.checkToken.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
    this.checkCardLimit = this.checkCardLimit.bind(this);
    this.setResizeEventHandler = this.setResizeEventHandler.bind(this);
    this.setMovies = this.setMovies.bind(this);
    this.setSavedMovies = this.setSavedMovies.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.saveMovieHandler = this.saveMovieHandler.bind(this);
  }

  componentDidMount() {
    this.checkToken().then(() => {
      this.loadMovies();
    });
    this.checkCardLimit();
    this.setResizeEventHandler();
  }

  checkToken() {
    return mainApi.getProfile()
      .then(res => {
        this.setCurrentUser(res);
        this.setState({ loggedIn: true });
        this.props.history.push('/');
        return Promise.resolve();
      })
      .catch(err => {
        console.error(err);
      });
  }

  setResizeEventHandler() {
    var resizeTimeout;
    const resizeThrottler = () => {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          this.checkCardLimit();
        }, 66);
      }
    }

    window.addEventListener('resize', resizeThrottler, false);
  }

  checkCardLimit() {
    const windowWith = window.screen.width;
    if (windowWith < cardLimit.medium.minSize) {
      this.setState({
        cardLimit: cardLimit.small,
      });
    } else if (windowWith < cardLimit.big.minSize) {
      this.setState({
        cardLimit: cardLimit.medium,
      });
    } else {
      this.setState({
        cardLimit: cardLimit.big,
      });
    }
  }

  loadMovies() {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
      this.setMovies(movies);
    } else {
      this.setState({
        moviesLoading: true,
      }, () => {
        moviesApi.getMovies()
          .then(res => {
            if (res) {
              this.setMovies(res);
              this.saveMovies(res);
              this.setState({
                moviesLoading: false,
              })
            }
          })
          .catch(err => {
            console.error(err);
          });
        mainApi.getSavedMovies()
          .then(res => {
            if (res) {
              this.setSavedMovies(res);
            }
          })
          .catch(err => {
            console.error(err);
          });
      });
    }
  }

  setMovies(movies) {
    this.setState({
      movies: movies.map((item) => {
        const { image } = item;
        const { url, formats } = image || {};

        return {
          id: item.id,
          nameRU: item.nameRU,
          nameEN: item.nameEN,
          country: item.country,
          director: item.director,
          duration: item.duration,
          description: item.description,
          image: url ? `${moviesUrl}${url}` : null,
          trailer: item.trailerLink,
          thumbnail: formats && formats.thumbnail && formats.thumbnail.url,
          saved: this.state.movies.some(({ id }) => item.id === id),
        };
      }),
    }, () => {
      this.searchHandler({ text: '' });
    });
  }

  setSavedMovies(savedMovies) {
    this.setState({
      savedMovies,
    }, () => {
      this.searchHandler({ text: '' });
    })
  }

  setCurrentUser({ _id, name, email }) {
    this.setState({
      currentUser: {
        id: _id,
        name,
        email,
      }
    });
  }

  saveMovies(movies) {
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  searchHandler(filter) {
    this.setState({
      findedMovies: cardFilter(this.state.movies)(filter),
      findedSavedMovies: cardFilter(this.state.savedMovies)(filter),
    });
  }

  registerHandler({ name, email, password }) {
    return mainApi.register(name, email, password);
  }

  authHandler({ email, password }) {
    return mainApi.auth(email, password)
      .then(() => {
        this.checkToken();
      });
  }

  saveMovieHandler(movieId) {
    const movie = this.state.movies.find(({ id }) => id === movieId);
    console.log('movie: ', movie);
    return mainApi.saveMovie(movie);
  }

  render() {
    return (
      <CurrentUserContext.Provider value={this.state.currentUser} >
        <div className="app">
          <Switch>
            <Route path="/signup">
              <Register onSubmit={this.registerHandler} />
            </Route>
            <Route path="/signin">
              <Login onSubmit={this.authHandler} />
            </Route>
            <ProtectedRoute path="/profile" loggedIn={this.state.loggedIn}>
              <Header loggedIn={this.state.loggedIn} />
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute path="/movies" loggedIn={this.state.loggedIn}>
              <Header loggedIn={this.state.loggedIn} />
              <Movies cards={this.state.findedMovies} searchHandler={this.searchHandler} cardLimit={this.state.cardLimit} isLoading={this.state.moviesLoading} onSaveMovie={this.saveMovieHandler} />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies" loggedIn={this.state.loggedIn}>
              <Header loggedIn={this.state.loggedIn} />
              <SavedMovies cards={this.state.findedSavedMovies} searchHandler={this.searchHandler} isLoading={this.state.savedMoviesLoading} />
              <Footer />
            </ProtectedRoute>
            <Route path="/" exact>
              <Header loggedIn={this.state.loggedIn} />
              <Main />
              <Footer />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </CurrentUserContext.Provider >
    );
  }
}

export default withRouter(App);

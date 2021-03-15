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
import Tooltip from './Tooltip/Tooltip';
import Footer from './Footer/Footer';
import { cardLimit } from '../utils/constants';
import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipOpen: false,
      tooltipData: {
        type: '',
        code: null,
        message: '',
      },
      loggedIn: true,
      cardLimit: {},
      movies: [],
      findedMovies: [],
      moviesLoading: false,
      savedMovies: [],
      findedSavedMovies: [],
      savedMoviesLoading: false,
      currentUser: {},
    };
    this.closeTootlipHandler = this.closeTootlipHandler.bind(this);
    this.openTootlipHandler = this.openTootlipHandler.bind(this);
    this.checkToken = this.checkToken.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
    this.loadSavedMovies = this.loadSavedMovies.bind(this);
    this.checkCardLimit = this.checkCardLimit.bind(this);
    this.setResizeEventHandler = this.setResizeEventHandler.bind(this);
    this.setMovies = this.setMovies.bind(this);
    this.setSavedMovies = this.setSavedMovies.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.saveMovieHandler = this.saveMovieHandler.bind(this);
    this.deleteMovieHandler = this.deleteMovieHandler.bind(this);
  }

  componentDidMount() {
    this.checkCardLimit();
    this.setResizeEventHandler();
    this.checkToken()
      .then(() => {
        this.setState({
          moviesLoading: true,
          savedMoviesLoading: true,
        });
        return Promise.resolve();
      })
      .then(() => {
        return this.loadSavedMovies();
      })
      .then(() => {
        return this.loadMovies();
      })
      .then(() => {
        return this.searchHandler({ text: '' });
      })
      .then(() => {
        this.setState({
          moviesLoading: false,
          savedMoviesLoading: false,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  closeTootlipHandler() {
    this.setState({
      isTooltipOpen: false,
      tooltipData: {
        type: '',
        code: null,
        message: '',
      },
    })
  }

  openTootlipHandler({ type, code = null, message }) {
    this.setState({
      isTooltipOpen: true,
      tooltipData: {
        type,
        code,
        message,
      },
    })
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
    let _cardLimit = cardLimit.big;
    if (windowWith < cardLimit.medium.minSize) {
      _cardLimit = cardLimit.small;
    } else if (windowWith < cardLimit.big.minSize) {
      _cardLimit = cardLimit.medium;
    } else {
      _cardLimit = cardLimit.big;
    }
    this.setState({
      cardLimit: _cardLimit,
    });
  }

  loadMovies() {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (movies) {
      this.setMovies(movies);
    } else {
      return moviesApi.getMovies()
        .then(res => {
          if (res) {
            this.setMovies(res);
            this.saveMovies(res);
          }
        })
    }
  }

  loadSavedMovies() {
    return mainApi.getSavedMovies()
      .then(res => {
        if (res) {
          this.setSavedMovies(res);
        }
      })
      .catch(err => {
        console.error(err);
      });
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
          year: item.year,
          country: item.country,
          director: item.director,
          duration: item.duration,
          description: item.description,
          image: url ? `${moviesUrl}${url}` : null,
          trailer: item.trailerLink,
          thumbnail: formats && formats.thumbnail && formats.thumbnail.url ? `${moviesUrl}${formats.thumbnail.ur}` : null,
          saved: this.state.savedMovies.some(({ movieId }) => item.id === movieId),
        };
      }),
    });
  }

  setSavedMovies(savedMovies) {
    this.setState({
      savedMovies,
    });
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
    const { id, saved, ...movie } = this.state.movies.find(({ id }) => id === movieId);
    return mainApi.saveMovie({
      ...movie,
      movieId: id,
    });
  }

  deleteMovieHandler(movieId) {
    return mainApi.deleteMovie(movieId);
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
              <Movies
                cards={this.state.findedMovies}
                searchHandler={this.searchHandler}
                cardLimit={this.state.cardLimit}
                isLoading={this.state.moviesLoading}
                onSaveMovie={this.saveMovieHandler}
                onDeleteMovie={this.deleteMovieHandler}
              />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies" loggedIn={this.state.loggedIn}>
              <Header loggedIn={this.state.loggedIn} />
              <SavedMovies
                cards={this.state.findedSavedMovies}
                searchHandler={this.searchHandler}
                isLoading={this.state.savedMoviesLoading}
                onDeleteMovie={this.deleteMovieHandler}
              />
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
        <Tooltip
          isOpen={this.state.isTooltipOpen}
          onClose={this.closeTootlipHandler}
          type={this.state.tooltipData.type}
          code={this.state.tooltipData.code}
          message={this.state.tooltipData.message}
        />
      </CurrentUserContext.Provider >
    );
  }
}

export default withRouter(App);

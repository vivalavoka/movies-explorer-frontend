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
import Register from './Register/Register';
import Login from './Login/Login';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Profile from './Profile/Profile';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      movies: [],
      findedMovies: [],
      moviesLoading: false,
      savedMovies: [],
      findedSavedMovies: [],
      savedMoviesLoading: false,
      currentUser: {},
    };
    this.loadMovies = this.loadMovies.bind(this);
    this.setMovies = this.setMovies.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    this.loadMovies();
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
      });
    }
  }

  setMovies(movies) {
    this.setState({
      movies: movies.map((item) => ({
        id: item.id,
        name: item.nameRU,
        duration: item.duration,
        photo: item.image && item.image.url ? `${moviesUrl}${item.image.url}` : null,
        saved: this.state.movies.some(({ id }) => item.id === id),
      })),
    }, () => {
      this.searchHandler({ text: '' });
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

  render() {
    return (
      <CurrentUserContext.Provider value={this.state.currentUser} >
        <div className="app">
          <Switch>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/profile">
              <Header loggedIn={this.state.loggedIn} />
              <Profile />
            </Route>
            <Route path="/movies">
              <Header loggedIn={this.state.loggedIn} />
              <Movies cards={this.state.findedMovies} searchHandler={this.searchHandler} isLoading={this.state.moviesLoading} />
              <Footer />
            </Route>
            <Route path="/saved-movies">
              <Header loggedIn={this.state.loggedIn} />
              <SavedMovies cards={this.state.findedSavedMovies} searchHandler={this.searchHandler} isLoading={this.state.savedMoviesLoading} />
              <Footer />
            </Route>
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

import React from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import CurrentUserContext from '../contexts/CurrentUserContext.js';

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
      loggedIn: false,
      currentUser: {},
    };
    setTimeout(() => {
      this.setState({
        loggedIn: true,
      })
    }, 5000);
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
              <Movies />
              <Footer />
            </Route>
            <Route path="/saved-movies">
              <Header loggedIn={this.state.loggedIn} />
              <SavedMovies />
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

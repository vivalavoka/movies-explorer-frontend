import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

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

function App() {
  const isLoggedIn = false;
  return (
    <div className="app">
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/notfound">
          <NotFoundPage />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route>
          <Header isLoggedIn={isLoggedIn}/>
          <Route path="/movies">
            <Movies/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);

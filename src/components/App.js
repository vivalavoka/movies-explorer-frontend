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
  const isLoggedIn = true;
  return (
    <div className="app">
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Header isLoggedIn={isLoggedIn}/>
          <Profile />
        </Route>
        <Route path="/movies">
          <Header isLoggedIn={isLoggedIn}/>
          <Movies/>
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header isLoggedIn={isLoggedIn}/>
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/" exact>
          <Header isLoggedIn={isLoggedIn}/>
          <Main />
          <Footer />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default withRouter(App);

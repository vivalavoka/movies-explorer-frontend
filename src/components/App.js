import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import Header from './Header/Header';
import Register from './Register/Register';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import MovieCard from './MovieCard/MovieCard';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';

import MovieCardPhoto from '../images/movie-card_1.png';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/not-found">
          <NotFoundPage />
        </Route>
        <Route path="/profile">
          {/* <Header isLoggedIn={false} /> */}
          <Profile />
        </Route>
        <Route path="/movies">
          {/* <Header isLoggedIn={false} /> */}
          <MovieCard name="В погоне за Бенкси" duration="27 минут" photo={MovieCardPhoto} />
        </Route>
        <Route path="/" exact>
          {/* <Header isLoggedIn={false} /> */}
          <Main />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);

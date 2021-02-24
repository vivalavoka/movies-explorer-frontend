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
import Movies from './Movies/Movies';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';


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
          <Movies/>
          <Footer />
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

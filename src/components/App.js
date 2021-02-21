import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import Header from './Header/Header';
import Register from './Register/Register';
import Login from './Login/Login';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/not-found">
          <NotFoundPage />
        </Route>
        <Route path="/" exact>
          <Header isLoggedIn={false} />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);

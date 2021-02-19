import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <Header isLoggedIn={true} /> */}
      <Switch>
        <Route path="/sign-up">
        </Route>
        <Route path="/sign-in">
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);

import Header from './Header/Header';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <Header isLoggedIn={true}/> */}
      <NotFoundPage/>
    </div>
  );
}

export default App;

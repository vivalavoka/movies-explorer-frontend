import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header isLoggedIn={true}/>
      <Footer/>
    </div>
  );
}

export default App;

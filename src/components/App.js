import Header from './Header/Header';
import Form from './Form/Form';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header isLoggedIn={true} />
      <Form name="registration" />
      <Footer />
    </div>
  );
}

export default App;

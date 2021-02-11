import logo from "../../images/logo-min.svg";
import Button from '../Button/Button';
import List from '../List/List';
import './Header.css';

export default function Headers(props) {
  const {isLoggedIn} = props;
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />

      {isLoggedIn &&
      <nav>
        <List>
          <li className="header__item"><a className="header__link header__link_active" href='#'>Фильмы</a></li>
          <li className="header__item"><a className="header__link" href='#'>Сохраненные фильмы</a></li>
        </List>
      </nav>}

      {isLoggedIn
        ? <div className="header__panel">
          <Button className="header__profile-button" borderRadius="40">Аккаунт</Button>
        </div>
        : <div className="header__panel">
          <Button className="header__sign-button">Регистрация</Button>
          <Button className="header__sign-button header__signin" color="green" borderRadius="3">Войти</Button>
        </div>}
    </header>
  );
}

import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import List from '../List/List';
import ProfileLink from '../ProfileLink/ProfileLink';
import Sidebar from '../Sidebar/Sidebar';

import './Header.css';

function Header(props) {
  const { isLoggedIn } = props;
  const { pathname } = props.location;
  return (
    <header className={`header ${pathname === '/' ? 'header__color_green' : 'header__color_gray'}`}>
      <Logo />

      {isLoggedIn &&
        <Sidebar />
      }

      {isLoggedIn && <nav className="header__navigation">
        <List>
          <li className="header__item"><NavLink className="header__link" activeClassName="header__link_active" to="/movies">Фильмы</NavLink></li>
          <li className="header__item"><NavLink className="header__link" activeClassName="header__link_active" to="/saved-movies">Сохраненные фильмы</NavLink></li>
        </List>
      </nav>}

      <div className="header__panel">
        {isLoggedIn
          ? <ProfileLink to="/profile" />
          : <div>
            <Link className="header__sign-button" to="/signup">Регистрация</Link>
            <Link className="header__sign-button" to="/signin"><Button className="header__signin" color="green" borderRadius="3">Войти</Button></Link>
          </div>}
      </div>
    </header>
  );
}

export default withRouter(Header);

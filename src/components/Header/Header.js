import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import List from '../List/List';
import ProfileLink from '../ProfileLink/ProfileLink';
import Sidebar from '../Sidebar/Sidebar';

import './Header.css';

export default function Header(props) {
  const { loggedIn } = props;
  return (
    <header className="header">
      <div className="header__content">
        <Logo />

        {loggedIn && <Sidebar />}

        {loggedIn && <nav className="header__navigation">
          <List>
            <li className="header__item">
              <NavLink className="header__link" activeClassName="header__link_active" to="/movies">Фильмы</NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link" activeClassName="header__link_active" to="/saved-movies">Сохраненные фильмы</NavLink>
            </li>
          </List>
        </nav>}

        {loggedIn
          ? <ProfileLink className="header__profile" to="/profile" />
          : <div className="header__panel">
            <Link className="header__sign-button" to="/signup">Регистрация</Link>
            <Link className="header__sign-button" to="/signin">
              <Button className="header__signin" color="green" borderRadius="3">Войти</Button>
            </Link>
          </div>}
      </div>
    </header>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '../List/List';
import ProfileLink from '../ProfileLink/ProfileLink';

import './Sidebar.css';

export default function Sidebars(props) {
  const [sidebarOpened, setSidebarOpened] = React.useState(false);

  function toggleSidebar() {
    return sidebarOpened ? closeSidebar() : openSidebar();
  }

  function openSidebar() {
    setSidebarOpened(true);
  }

  function closeSidebar() {
    setSidebarOpened(false);
  }

  return (
    <div className="sidebar">
      <div>
        <button className="sidebar__burger-button" onClick={toggleSidebar}><span className={`sidebar__burger-icon ${sidebarOpened && 'sidebar__burger-icon_close'}`}></span></button>
      </div>
      <div className={`sidebar__overlay ${!sidebarOpened && 'sidebar__overlay_hidden'}`}></div>
      <div className={`sidebar__content ${!sidebarOpened && 'sidebar__content_hidden'}`}>
        <List className="sidebar__navigation">
          <li className="sidebar__item"><NavLink className="sidebar__link" activeClassName="sidebar__link_active" to='/' exact onClick={closeSidebar}>Главная</NavLink></li>
          <li className="sidebar__item"><NavLink className="sidebar__link" activeClassName="sidebar__link_active" to='/movies' onClick={closeSidebar}>Фильмы</NavLink></li>
          <li className="sidebar__item"><NavLink className="sidebar__link" activeClassName="sidebar__link_active" to='/saved-movies' onClick={closeSidebar}>Сохраненные фильмы</NavLink></li>
        </List>
        <div className="sidebar__panel">
          <ProfileLink to="/profile" />
        </div>
      </div>
    </div>
  );
}

import React from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext.js';

import Button from '../Button/Button';
import List from '../List/List';
import './Profile.css';

const STATE = {
  info: 'info',
  edit: 'edit',
  saving: 'saving',
}

function Profile(props) {
  const [profileState, setProfileState] = React.useState(STATE.info);
  const currentUser = React.useContext(CurrentUserContext);
  function editProfileHandler() {
    setProfileState(STATE.edit);
  }

  function saveProfileHandler() {
    setProfileState(STATE.saving);
    setTimeout(() => {
      setProfileState(STATE.info);
    }, 2000);
  }

  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__welcome-text">Привет, {currentUser.name}!</h1>
        <List className="profile__info-list" vertical={true}>
          <li className="profile__info-item"><span className="profile__info-key">Имя</span><span className="profile__info-value">{currentUser.name}</span></li>
          <li className="profile__info-item"><span className="profile__info-key">Почта</span><span className="profile__info-value">{currentUser.email}</span></li>
        </List>
        {profileState === STATE.info
          ? <List vertical={true}>
            <li className="profile__action-item"><Button className="profile__action_edit" onClick={editProfileHandler}>Редактировать</Button></li>
            <li className="profile__action-item"><Button className="profile__action_sign-out">Выйти из аккаунта</Button></li>
          </List>
          : <List vertical={true}>
            <li className="profile__action-item"><span className="profile__error-msg"></span></li>
            <li className="profile__action-item"><Button disabled={profileState === STATE.saving} className="profile__save-btn" color="blue" borderRadius="3" onClick={saveProfileHandler}>Сохранить</Button></li>
          </List>
        }
      </div>
    </section>
  );
}

export default Profile;
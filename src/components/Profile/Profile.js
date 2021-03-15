import React from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext.js';

import Form from '../Form/Form';
import Button from '../Button/Button';
import List from '../List/List';
import './Profile.css';

const STATE = {
  info: 'info',
  edit: 'edit',
  saving: 'saving',
}

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // const [profileName, setProfileName] = React.useState(currentUser.name);
  // const [profileEmail, setProfileEmail] = React.useState(currentUser.email);
  const [profileName, setProfileName] = React.useState('Владимир');
  const [profileEmail, setProfileEmail] = React.useState('ex@mple.com');

  const [profileState, setProfileState] = React.useState(STATE.info);
  function editProfileHandler() {
    setProfileState(STATE.edit);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'profile-name':
        setProfileName(value);
        break;
      case 'profile-email':
        setProfileEmail(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProfileState(STATE.saving);
    props.onSubmit({
      name: profileName,
      email: profileEmail,
    }).then(() => {
      setProfileState(STATE.info);
    });
  }

  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__welcome-text">Привет, {currentUser.name}!</h1>
        <form name={props.name} className="form" noValidate onSubmit={handleSubmit}>
          <fieldset className="form__fieldset">
            <label className="profile__info-item">
              <span className="profile__info-key">Имя</span>
              <input disabled={profileState !== STATE.edit} name="profile-name" id="profile-name" className="input profile__info-value" type="text" required onChange={handleChange} value={profileName} />
            </label>
            <label className="profile__info-item">
              <span className="profile__info-key">Почта</span>
              <input disabled={profileState !== STATE.edit} name="profile-email" id="profile-email" className="input profile__info-value" type="email" required onChange={handleChange} value={profileEmail} />
            </label>
          </fieldset>
          <fieldset className="form__fieldset">
            {profileState === STATE.info
              ? <List vertical={true}>
                <li className="profile__action-item"><Button className="profile__action_edit" onClick={editProfileHandler}>Редактировать</Button></li>
                <li className="profile__action-item"><Button className="profile__action_sign-out" onClick={props.onLogout}>Выйти из аккаунта</Button></li>
              </List>
              : <List vertical={true}>
                <li className="profile__action-item"><span className="profile__error-msg"></span></li>
                <li className="profile__action-item"><Button type="submit" disabled={profileState === STATE.saving} className="profile__save-btn" color="blue" borderRadius="3" >Сохранить</Button></li>
              </List>
            }
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Profile;
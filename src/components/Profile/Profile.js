import React from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext.js';

import { isNameValid } from '../../utils/validator';
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

  const [profileName, setProfileName] = React.useState(currentUser.name);
  const [nameError, setNameError] = React.useState('');
  const [profileEmail, setProfileEmail] = React.useState(currentUser.email);
  const [emailError, setEmailError] = React.useState('');
  const [isValid, setValid] = React.useState(false);
  const [profileState, setProfileState] = React.useState(STATE.info);

  const inputName = React.useRef(null);
  const inputEmail = React.useRef(null);

  React.useEffect(() => {
    hasInvalidInput();
  }, []);

  function editProfileHandler() {
    setProfileState(STATE.edit);
    inputName.current.focus();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'profile-name':
        setProfileName(value);
        checkName();
        break;
      case 'profile-email':
        setProfileEmail(value);
        checkEmail();
        break;
      default:
        break;
    }
    hasInvalidInput();
  }

  function checkName() {
    if (isNameValid(inputName.current.value)) {
      setNameError('');
    } else {
      setNameError('Имя должно состоять только из знаков латиницы, пробелов и дефисов');
    }
  }

  function checkEmail() {
    if (inputEmail.current.validity.valid) {
      setEmailError('');
    } else {
      setEmailError('Неверный формат почты');
    }
  }

  function hasInvalidInput() {
    setValid(isNameValid(inputName.current.value) && inputEmail.current.validity.valid);
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
              <input disabled={profileState !== STATE.edit} ref={inputName} name="profile-name" id="profile-name" className="input profile__info-value" type="text" required onChange={handleChange} value={profileName} />
            </label>
            <label className="profile__info-item">
              <span className="profile__info-key">Почта</span>
              <input disabled={profileState !== STATE.edit} ref={inputEmail} name="profile-email" id="profile-email" className="input profile__info-value" type="email" required onChange={handleChange} value={profileEmail} />
            </label>
          </fieldset>
          <fieldset className="form__fieldset">
            {profileState === STATE.info
              ? <List vertical={true}>
                <li className="profile__action-item"><Button className="profile__action_edit" onClick={editProfileHandler}>Редактировать</Button></li>
                <li className="profile__action-item"><Button className="profile__action_sign-out" onClick={props.onLogout}>Выйти из аккаунта</Button></li>
              </List>
              : <List vertical={true}>
                <li className="profile__action-item"><span className="profile__error-msg">{nameError || emailError}</span></li>
                <li className="profile__action-item"><Button type="submit" disabled={profileState === STATE.saving || !isValid} className="profile__save-btn" color="blue" borderRadius="3" >Сохранить</Button></li>
              </List>
            }
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Profile;
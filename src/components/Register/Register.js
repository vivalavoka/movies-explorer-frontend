import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import { isNameValid } from '../../utils/validator';
import './Register.css';

function Register(props) {
  const [userName, setUserName] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [isValid, setValid] = React.useState(false);
  const inputName = React.useRef(null);
  const inputEmail = React.useRef(null);
  const inputPassword = React.useRef(null);

  React.useEffect(() => {
    hasInvalidInput();
    inputName.current.focus();
  }, []);


  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'user-name':
        setUserName(value);
        checkName();
        break;
      case 'user-email':
        setUserEmail(value);
        checkEmail();
        break;
      case 'user-password':
        setUserPassword(value);
        checkPassword();
        break;
      default:
        break;
    }
    hasInvalidInput()
  }

  function checkName() {
    if (inputName.current.validity.valid) {
      setNameError('');
    } else {
      setNameError('Имя должен состоять только из латиницы, пробелов и дефисов');
    }
  }

  function checkEmail() {
    if (inputEmail.current.validity.valid) {
      setEmailError('');
    } else {
      setEmailError('Неверный формат почты');
    }
  }

  function checkPassword() {
    if (inputPassword.current.validity.valid) {
      setPasswordError('');
    } else {
      setPasswordError('Пароль должен быть не менее 8 символов');
    }
  }

  function hasInvalidInput() {
    setValid(isNameValid(inputName.current.value) && inputPassword.current.validity.valid && inputEmail.current.validity.valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      name: userName,
      email: userEmail,
      password: userPassword,
    });
  }

  return (
    <section className="register">
      <div className="register__content">
        <Logo className="register__logo" />
        <h1 className="register__welcome-text">Добро пожаловать!</h1>
        <Form btnText="Зарегистрироваться" onSubmit={handleSubmit} isValid={isValid}>
          <label className="form__input-wrapper">
            <span className="form__input-placeholder">Имя</span>
            <input name="user-name" id="user-name" ref={inputName} className={`input form__input ${nameError && `form__input_wrong`}`} type="text" required onChange={handleChange} />
            <span id="user-name-error" className="form__input-error">{nameError}</span>
          </label>
          <label className="form__input-wrapper">
            <span className="form__input-placeholder">Email</span>
            <input name="user-email" id="user-email" ref={inputEmail} className={`input form__input ${emailError && `form__input_wrong`}`} type="email" required onChange={handleChange} />
            <span id="user-email-error" className="form__input-error">{emailError}</span>
          </label>
          <label className="form__input-wrapper">
            <span className="form__input-placeholder">Пароль</span>
            <input name="user-password" id="user-password" ref={inputPassword} className={`input form__input ${passwordError && `form__input_wrong`}`} type="password" required onChange={handleChange} minLength="8" />
            <span id="user-password-error" className="form__input-error">{passwordError}</span>
          </label>
        </Form>
        <p className="register__sign-in">Уже зарегистрированы? <Link to="/signin" className="register__login-link">Войти</Link></p>
      </div>
    </section>
  );
}

export default withRouter(Register);
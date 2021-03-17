import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import './Login.css';

function Login(props) {
  const [userEmail, setUserEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [isValid, setValid] = React.useState(false);

  const inputEmail = React.useRef(null);
  const inputPassword = React.useRef(null);

  React.useEffect(() => {
    inputEmail.current.focus();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
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
    hasInvalidInput();
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
    setValid(inputPassword.current.validity.valid && inputEmail.current.validity.valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserEmail('');
    setUserPassword('');
    props.onSubmit({
      email: userEmail,
      password: userPassword,
    });
  }

  return (
    <section className="register">
      <div className="register__content">
        <Logo className="register__logo" />
        <h1 className="register__welcome-text">Рады видеть!</h1>
        <Form btnText="Войти" btnClassName="" isValid={isValid} onSubmit={handleSubmit}>
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
        <p className="register__sign-in">Еще не зарегистрированы? <Link to="/signup" className="register__login-link">Регистрация</Link></p>
      </div>
    </section>
  );
}

export default withRouter(Login);
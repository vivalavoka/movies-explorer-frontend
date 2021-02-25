import { Link, withRouter } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import './Register.css';

function Register(props) {
  return (
    <section className="register">
      <div className="register__content">
        <Logo className="register__logo" />
        <h1 className="register__welcome-text">Добро пожаловать!</h1>
        <Form btnText="Зарегистрироваться" btnClassName="">
          <label className="form__input-wrapper">
            <span className="form__input-placeholder">Имя</span>
            <input name="user-name" id="user-name" className="input form__input" type="text" required />
            <span id="user-name-error" className="form__input-error"></span>
          </label>
          <label className="form__input-wrapper">
            <span className="form__input-placeholder">Email</span>
            <input name="user-email" id="user-email" className="input form__input" type="email" required />
            <span id="user-email-error" className="form__input-error"></span>
          </label>
          <label className="form__input-wrapper">
            <span className="form__input-placeholder">Пароль</span>
            <input name="user-password" id="user-password" className="input form__input" type="password" required />
            <span id="user-password-error" className="form__input-error"></span>
          </label>
        </Form>
        <p className="register__sign-in">Уже зарегистрированы? <Link to="/signin" className="register__login-link">Войти</Link></p>
      </div>
    </section>
  );
}

export default withRouter(Register);
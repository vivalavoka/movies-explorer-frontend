import { Link, withRouter } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import './Login.css';

function Login(props) {
  return (
    <section className="register">
      <div className="register__content">
        <Logo className="register__logo" />
        <h1 className="register__welcome-text">Рады видеть!</h1>
        <Form btnText="Войти" btnClassName="">
          <label className="form__input-wrapper">
            <span className="form__input-placeholder">Email</span>
            <input name="user-email" id="user-email" className="input form__input form__input_wrong" type="email" required />
            <span id="user-email-error" className="form__input-error"></span>
          </label>
          <label className="form__input-wrapper">
            <span className="form__input-placeholder">Пароль</span>
            <input name="user-password" id="user-password" className="input form__input" type="password" required />
            <span id="user-password-error" className="form__input-error"></span>
          </label>
        </Form>
        <p className="register__sign-in">Еще не зарегистрированы? <Link to="/signup" className="register__login-link">Регистрация</Link></p>
      </div>
    </section>
  );
}

export default withRouter(Login);
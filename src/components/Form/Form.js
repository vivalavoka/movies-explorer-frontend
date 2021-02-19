import React from 'react';
import Button from '../Button/Button';
import './Form.css';

export default function Form(props) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form name={props.name} className="form" noValidate onSubmit={handleSubmit}>
      <label className="form__input-wrapper">
        <span className="form__input-placeholder">Имя</span>
        <input name="avatar-link" id="avatar-link" className="input form__input" type="text" required />
        <span id="avatar-link-error" className="form__input-error">что-то пошло не так</span>
      </label>
      <label className="form__input-wrapper">
        <span className="form__input-placeholder">Email</span>
        <input name="avatar-link" id="avatar-link" className="input form__input" type="email" required />
        <span id="avatar-link-error" className="form__input-error"></span>
      </label>
      <label className="form__input-wrapper">
        <span className="form__input-placeholder">Пароль</span>
        <input name="avatar-link" id="avatar-link" className="input form__input" type="password" required />
        <span id="avatar-link-error" className="form__input-error"></span>
      </label>
      <Button className="form__button" color="blue" borderRadius="3">Зарегистрироваться</Button>
    </form>
  )
};

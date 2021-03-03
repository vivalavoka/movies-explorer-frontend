import React from 'react';
import Button from '../Button/Button';
import './Form.css';

export default function Form(props) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form name={props.name} className="form" noValidate onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        {props.children}
      </fieldset>
      <fieldset className="form__fieldset">
        <span id="api-error" className="form__api-error"></span>
        <Button className="form__button" color="blue" borderRadius="3" type="submit">{props.btnText}</Button>
      </fieldset>
    </form>
  )
};

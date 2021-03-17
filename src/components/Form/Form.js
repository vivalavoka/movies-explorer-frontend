import React from 'react';
import Button from '../Button/Button';
import './Form.css';

export default function Form(props) {
  return (
    <form name={props.name} className="form" noValidate onSubmit={props.onSubmit}>
      <fieldset className="form__fieldset">
        {props.children}
      </fieldset>
      <fieldset className="form__fieldset">
        <span id="api-error" className="form__api-error"></span>
        <Button className="form__button" color="blue" borderRadius="3" type="submit" disabled={!props.isValid}>{props.btnText}</Button>
      </fieldset>
    </form>
  )
};

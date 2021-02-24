import React from 'react';
import Button from '../Button/Button';
import ToggleButton from '../ToggleButton/ToggleButton';
import './SearchForm.css';

export default function SearchForm(props) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form name={props.name} className={`${props.className} search-form`} noValidate onSubmit={handleSubmit}>
      <div className="search-form__main-fieldset">
        <input name="search-text" id="search-text" className="search-form__text" placeholder="Фильм" type="text" required />
        <Button className="search-form__button" color="blue" borderRadius="3" type="submit">Найти</Button>
      </div>
      <div className="search-form__filters">
        <ToggleButton name="short-films" text="Короткометражки" />
      </div>
    </form>
  )
};

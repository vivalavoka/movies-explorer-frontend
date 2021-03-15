import React from 'react';
import Button from '../Button/Button';
import ToggleButton from '../ToggleButton/ToggleButton';
import './SearchForm.css';

export default function SearchForm(props) {
  const [formValid, setFormValid] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [shortFilmsOnly, setShortFilmsOnly] = React.useState(false);
  const [currentFilter, setCurrentFilter] = React.useState({ text: '', shortFilmsOnly: false });

  React.useEffect(() => {
    setFormValid(!(searchText === currentFilter.text && shortFilmsOnly === currentFilter.shortFilmsOnly));
  }, [searchText, shortFilmsOnly, currentFilter]);

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'search-text':
        setSearchText(value);
        break;
      case 'short-films':
        setShortFilmsOnly(!shortFilmsOnly);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filter = {
      text: searchText,
      shortFilmsOnly,
    };
    props.onSubmit(filter);
    setCurrentFilter(filter);
  }

  return (
    <form name={props.name} className={`${props.className} search-form`} noValidate onSubmit={handleSubmit}>
      <div className="search-form__main-fieldset">
        <input name="search-text" id="search-text" className="search-form__text" placeholder="Фильм" type="search" required value={searchText} onChange={handleChange} />
        <Button className="search-form__button" color="blue" borderRadius="3" type="submit" disabled={!formValid}>Найти</Button>
      </div>
      <span className="search-form__error-msg"></span>
      <div className="search-form__filters">
        <ToggleButton name="short-films" text="Короткометражки" checked={shortFilmsOnly} onChange={handleChange} />
      </div>
    </form>
  )
};

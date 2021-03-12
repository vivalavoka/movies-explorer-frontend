import React from 'react';
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import { movieCardStates } from '../../utils/constants';
import './Movies.css';

import Button from '../Button/Button';

export default function Movies(props) {
  return (
    <section className="movies">
      <SearchForm className="movies__search-form" onSubmit={props.searchHandler} />
      <MovieCardList className="movies__card-list" isLoading={props.isLoading} cards={props.cards.map((card) => ({
        name: card.name,
        duration: card.duration,
        photo: card.photo,
        state: card.saved ? movieCardStates.saved : movieCardStates.to_save,
      }))} />
      {props.cards.length ? <Button className="movies__more-btn" color="dark-gray" borderRadius="6">Ещё</Button> : null}
    </section>
  )
};

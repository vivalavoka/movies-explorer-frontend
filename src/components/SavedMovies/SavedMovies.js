import React from 'react';
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import { movieCardStates } from '../../utils/constants';
import './SavedMovies.css';

export default function SavedMovies(props) {
  return (
    <section className="movies">
      <SearchForm className="movies__search-form" />
      <MovieCardList className="movies__card-list" isLoading={props.isLoading} cards={props.cards.map((card) => ({
        name: card.name,
        duration: card.duration,
        photo: card.photo,
        state: card.saved ? movieCardStates.saved : movieCardStates.to_save,
      }))} />
    </section>
  )
};

import React from 'react';
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import { movieCardStates } from '../../utils/constants';
import './SavedMovies.css';

export default function SavedMovies(props) {
  return (
    <section className="movies">
      <SearchForm className="movies__search-form" onSubmit={props.searchHandler} />
      <MovieCardList className="movies__card-list"
        isLoading={props.isLoading}
        cards={props.cards.map((card) => ({
          id: card._id,
          name: card.nameRU,
          duration: card.duration,
          image: card.image,
          trailer: card.trailer,
          state: movieCardStates.delete,
        }))}
        onDeleteMovie={props.onDeleteMovie}
      />
    </section>
  )
};

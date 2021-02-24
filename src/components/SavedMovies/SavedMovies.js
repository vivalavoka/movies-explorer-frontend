import React from 'react';
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

import MovieCardPhoto_1 from '../../images/movie-card_1.png';
import MovieCardPhoto_2 from '../../images/movie-card_2.png';
import MovieCardPhoto_3 from '../../images/movie-card_3.png';

export default function SavedMovies(props) {
  return (
    <section className="movies">
      <SearchForm className="movies__search-form" />
      <MovieCardList className="movies__card-list" cards={[{
          name: "В погоне за Бенкси",
          duration: "27 минут",
          photo: MovieCardPhoto_1,
          state: "delete",
        }, {
          name: "В погоне за Бенкси",
          duration: "27 минут",
          photo: MovieCardPhoto_2,
          state: "delete",
        }, {
          name: "В погоне за Бенкси",
          duration: "27 минут",
          photo: MovieCardPhoto_3,
          state: "delete",
        }]}
      />
    </section>
  )
};

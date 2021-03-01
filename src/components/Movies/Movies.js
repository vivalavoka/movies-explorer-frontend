import React from 'react';
import { Route } from "react-router";
import MovieCardList from '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

import MovieCardPhoto_1 from '../../images/movie-card_1.png';
import MovieCardPhoto_2 from '../../images/movie-card_2.png';
import MovieCardPhoto_3 from '../../images/movie-card_3.png';
import Button from '../Button/Button';


export default function Movies(props) {
  return (
    <section className="movies">
      <SearchForm className="movies__search-form" />
      <Preloader />
      <MovieCardList className="movies__card-list" cards={[{
          name: "В погоне за Бенкси",
          duration: "27 минут",
          photo: MovieCardPhoto_1,
          state: "saved",
        }, {
          name: "В погоне за Бенкси",
          duration: "27 минут",
          photo: MovieCardPhoto_2,
          state: "delete",
        }, {
          name: "В погоне за Бенкси",
          duration: "27 минут",
          photo: MovieCardPhoto_3,
          state: "toSave",
        }]}
      />
      <Route path="/movies">
        <Button className="movies__more-btn" color="dark-gray" borderRadius="6">Ещё</Button>
      </Route>
    </section>
  )
};

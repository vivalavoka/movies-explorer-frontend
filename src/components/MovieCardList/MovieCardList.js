import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieCardList.css';

export default function MovieCardList(props) {

  return (
    <ul className={`${props.className} card-list`}>
      {props.cards.map(({name, duration, photo, state}, index) => (
        <li index={index} className="card-list__item">
          <MovieCard name={name} duration={duration} photo={photo} state={state} />
        </li>
      ))}
    </ul>
  )
}
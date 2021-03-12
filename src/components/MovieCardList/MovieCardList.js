import React from 'react';
import Preloader from '../Preloader/Preloader';
import MovieCard from '../MovieCard/MovieCard';
import './MovieCardList.css';

export default function MovieCardList(props) {
  return (
    <div className={props.className}>
      {
        props.isLoading
          ? <Preloader />
          : props.cards.length
            ? <ul className="card-list">
              {props.cards.map(({ name, duration, photo, state }, index) => (
                <li key={index} className="card-list__item">
                  <MovieCard name={name} duration={duration} photo={photo} state={state} />
                </li>
              ))}
            </ul>
            : <span className="card-list__not-found-msg">Ничего не найдено</span>
      }
    </div>
  )
}
import React from 'react';
import JackdowIcon from '../../images/jackdow-min.svg';
import Button from '../Button/Button';
import './MovieCard.css';

export default function MovieCard(props) {
  const isSaved = !!props.saved;

  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{props.name}</h2>
        <span className="movie-card__duration">{props.duration}</span>
      </div>
      <img className="movie-card__photo" src={props.photo} alt={props.name}/>
      <div className="movie-card__panel">
        <Button className="movie-card__save-btn" color={isSaved ? 'pink' : 'dark-gray'} borderRadius="30">
          {
            isSaved
            ? <img className="movie-card__jackdow-icon" src={JackdowIcon} alt="Сохранено"/>
            : 'Сохранить'
          }

        </Button>
      </div>
    </div>
  )
}
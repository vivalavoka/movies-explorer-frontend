import React from 'react';
import DeleteIcon from '../../images/delete-icon-min.svg';
import JackdowIcon from '../../images/jackdow-min.svg';
import Button from '../Button/Button';
import { movieCardStates } from '../../utils/constants';
import './MovieCard.css';

function getBtnSettings({ state }) {
  switch (state) {
    case movieCardStates.saved:
      return {
        content: (<img className="movie-card__jackdow-icon" src={JackdowIcon} alt="Сохранено" />),
        color: 'pink',
      };
    case movieCardStates.delete:
      return {
        content: (<img className="movie-card__delete-icon" src={DeleteIcon} alt="Удалить" />),
        color: 'dark-gray',
      };
    case movieCardStates.to_save:
    default:
      return {
        content: 'Сохранить',
        color: 'dark-gray',
      };;
  }
}

export default function MovieCard(props) {
  const { content, color } = getBtnSettings(props);

  function onClickHandler() {
    switch (props.state) {
      case movieCardStates.saved:
        break;
      case movieCardStates.to_save:
        props.onSave(props.id);
        break;
      default:
        break;
    }
    return
  }
  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{props.name}</h2>
        <span className="movie-card__duration">{props.duration}&nbsp;минут</span>
      </div>
      <img className="movie-card__photo" src={props.image} alt={props.name} />
      <div className="movie-card__panel">
        <Button className="movie-card__save-btn" color={color} borderRadius="30" onClick={onClickHandler}>
          {content}
        </Button>
      </div>
    </div>
  )
}
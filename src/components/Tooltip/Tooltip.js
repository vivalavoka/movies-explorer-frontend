import React from 'react';
import Button from '../Button/Button';

import './Tooltip.css';

function getTitle(type) {
  switch (type) {
    case 'error':
      return 'Ошибка';
    case 'success':
      return 'Успешно';
    case 'info':
      return 'Информация';
    default:
      return '';
  }
}

export default function Tooltip(props) {
  const isOpenned = props.isOpen && props.type && props.message;
  const title = getTitle(props.type);

  return (
    <div className={`tooltip tooltip_theme_${props.type} ${isOpenned && 'tooltip_opened'}`}>
      <div className={`tooltip__header tooltip__header_theme_${props.type}`}>
        <p className="tooltip__title">{title}</p>
      </div>
      <div className="tooltip__body">
        {props.code && <span className="tooltip__code">Code: {props.code}</span>}
        <p className="tooltip__message">{props.message}</p>
        <Button className="tooltip__btn" bordered borderRadius="40" onClick={props.onClose}>Закрыть</Button>
      </div>
    </div>
  );
}

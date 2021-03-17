import React from 'react';
import Button from '../Button/Button';

import './Tooltip.css';

function getTitle(type, title) {
  switch (type) {
    case 'error':
      return title || 'Ошибка';
    case 'success':
      return 'Успешно';
    case 'info':
      return 'Информация';
    default:
      return '';
  }
}

export default function Tooltip(props) {
  const isOpenned = props.isOpen && props.type;
  const title = getTitle(props.type, props.title);

  const message = props.message || 'Что-то пошло не так';
  return (
    <div className={`tooltip tooltip_theme_${props.type} ${isOpenned && 'tooltip_opened'}`}>
      <div className={`tooltip__header tooltip__header_theme_${props.type}`}>
        <p className="tooltip__title">{title}</p>
      </div>
      <div className="tooltip__body">
        <p className="tooltip__message">{message}</p>
        <Button className="tooltip__btn" bordered borderRadius="40" onClick={props.onClose}>Закрыть</Button>
      </div>
    </div>
  );
}

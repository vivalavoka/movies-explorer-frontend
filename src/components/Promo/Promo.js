import React from 'react';
import Button from '../Button/Button';
import webEarth from '../../images/web-earth-min.svg'
import './Promo.css';
import SectionBlock from '../SectionBlock/SectionBlock';

export default function Promo(props) {
  return (
    <SectionBlock className="promo">
      <div className="promo__content">
        <img className="promo__logo" src={webEarth} alt="logo" />
        <div className="promo__info">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <Button className="promo__more" bordered={true} borderRadius="3">Узнать больше</Button>
        </div>
      </div>
    </SectionBlock>
  )
}
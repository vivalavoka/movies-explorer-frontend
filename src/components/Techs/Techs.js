import React from 'react';
import SectionBlock from '../SectionBlock/SectionBlock';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.css';

export default function Techs(props) {
  return (
    <SectionBlock id="techs" className="techs">
      <SectionTitle className="techs__title" text='Технологии' />
      <h3 className="techs__subtitle">7 Технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__list">
        <span className="techs__item">HTML</span>
        <span className="techs__item">CSS</span>
        <span className="techs__item">JS</span>
        <span className="techs__item">React</span>
        <span className="techs__item">Git</span>
        <span className="techs__item">Express.js</span>
        <span className="techs__item">mongoDB</span>
      </div>
    </SectionBlock>
  )
}
import React from 'react';
import List from '../List/List';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.css';

export default function Techs(props) {
  return (
    <section className="techs">
      <div className="techs__content">
        <SectionTitle className="techs__title" text='Технологии' />
        <h3 className="techs__subtitle">7 Технологий</h3>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <List className="techs__list" vertical={false}>
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </List>
      </div>
    </section >
  )
}
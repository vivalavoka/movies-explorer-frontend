import React from 'react';
import SectionBlock from '../SectionBlock/SectionBlock';
import SectionTitle from '../SectionTitle/SectionTitle';
import './About.css';

export default function About(props) {
  return (
    <SectionBlock className="about">
      <SectionTitle className="about__title" text='О проекте' />
      <div className="about__article-list">
        <article>
          <h2 className="about__article-title">Дипломный проект включал 5 этапов</h2>
          <p className="about__article-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article>
          <h2 className="about__article-title">На выполнение диплома ушло 5 недель</h2>
          <p className="about__article-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about__timing">
        <span className="about__timing-block about__backend-timing">1 неделя</span>
        <span className="about__timing-block about__frontend-timing">4 неделя</span>
        <span className="about__timing-block about__timing-title">Back-end</span>
        <span className="about__timing-block about__timing-title">Front-end</span>
      </div>
    </SectionBlock>
  )
}
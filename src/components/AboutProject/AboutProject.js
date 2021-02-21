import React from 'react';
import SectionBlock from '../SectionBlock/SectionBlock';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

export default function AboutProject(props) {
  return (
    <SectionBlock className="about-project">
      <SectionTitle className="about-project__title" text='О проекте' />
      <div className="about-project__article-list">
        <article>
          <h2 className="about-project__article-title">Дипломный проект включал 5 этапов</h2>
          <p className="about-project__article-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article>
          <h2 className="about-project__article-title">На выполнение диплома ушло 5 недель</h2>
          <p className="about-project__article-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about-project__timing">
        <span className="about-project__timing-block about-project__backend-timing">1 неделя</span>
        <span className="about-project__timing-block about-project__frontend-timing">4 неделя</span>
        <span className="about-project__timing-block about-project__timing-title">Back-end</span>
        <span className="about-project__timing-block about-project__timing-title">Front-end</span>
      </div>
    </SectionBlock>
  )
}
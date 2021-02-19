import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './About.css';

export default function About(props) {
  return (
    <section className="about">
      <div className="about__content">
        <SectionTitle className="about__title" text='О проекте' />
        <div className="about__article-list">
          <article>
            <h2 className="about__article-title">Дипломный проект включал 5 этапов</h2>
            <p className="about__article-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article>
            <h2 className="about__article-title">Дипломный проект включал 5 этапов</h2>
            <p className="about__article-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
        </div>
      </div>
    </section >
  )
}
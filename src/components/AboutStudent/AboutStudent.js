import React from 'react';
import List from '../List/List';
import SectionBlock from '../SectionBlock/SectionBlock';
import SectionTitle from '../SectionTitle/SectionTitle';
import StudentPhoto from '../../images/portfolio-photo.jpg';
import ExternalLink from '../ExternalLink/ExternalLink';
import './AboutStudent.css';

export default function AboutStudent(props) {
  return (
    <SectionBlock id="about-student" className="student">
      <SectionTitle className="student__title" text='Студент' />
      <div className="student__content">
        <img className="student__photo" src={StudentPhoto} alt="Фотография студента" />
        <div className="student__info">
          <h3 className="student__name">Владимир</h3>
          <p className="student__short-info">Fullstack-разработчик, 26 лет</p>
          <p className="student__description">Я родился и живу в Москве, магистр информационных технологий, закончил факультет программной инженерии МИРЭА. В данный момент работаю в e-grocery сфере в качестве backend-разработчика. В свободное время улучшаю свои навыки в разработке адаптивных веб-приложений.</p>
          <List className="student__links">
            <li className="student_link-wrapper"><ExternalLink className="student__link" href="https://www.facebook.com/stardach" text="Facebook" /></li>
            <li className="student_link-wrapper"><ExternalLink className="student__link" href="https://github.com/vivalavoka/" text="Github" /></li>
          </List>
        </div>
      </div>
    </SectionBlock>
  )
}
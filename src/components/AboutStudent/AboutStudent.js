import React from 'react';
import List from '../List/List';
import SectionBlock from '../SectionBlock/SectionBlock';
import SectionTitle from '../SectionTitle/SectionTitle';
import StudentPhoto from '../../images/portfolio-photo.jpg';
import './AboutStudent.css';

export default function AboutStudent(props) {
  return (
    <SectionBlock id="about-student" className="student">
      <SectionTitle className="student__title" text='Студент' />
      <div className="student__content">
        <img className="student__photo" src={StudentPhoto} alt="Фотография студента" />
        <div className="student__info">
          <h3 className="student__name">Владимир</h3>
          <p className="student__short-info">Backend-разработчик, 26 лет</p>
          <p className="student__description">Я родился и живу в Москве, закончил факультет программной инженерии МИРЭА.
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <List className="student__links">
            <li className="student_link-wrapper"><a className="student__link" href="https://www.facebook.com/stardach" rel="noreferrer" target="_blank">Facebook</a></li>
            <li className="student_link-wrapper"><a className="student__link" href="https://github.com/vivalavoka/" rel="noreferrer" target="_blank">Github</a></li>
          </List>
        </div>
      </div>
    </SectionBlock>
  )
}
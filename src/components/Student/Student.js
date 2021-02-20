import React from 'react';
import List from '../List/List';
import SectionBlock from '../SectionBlock/SectionBlock';
import SectionTitle from '../SectionTitle/SectionTitle';
import StudentPhoto from '../../images/student-photo.svg';
import './Student.css';

export default function Student(props) {
  return (
    <SectionBlock className="student">
      <SectionTitle className="student__title" text='Студент' />
      <img src={StudentPhoto} alt="Фотография студента" />
      <div className="student__content">
        <h3 className="student__name">Владимир</h3>
        <span className="student__info">Backend-разработчик, 26 лет</span>
        <p className="student__description">Я родился и живу в Москве, закончил факультет программной инженерии МИРЭА.
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <List className="student__links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Github</a></li>
        </List>
      </div>
    </SectionBlock>
  )
}
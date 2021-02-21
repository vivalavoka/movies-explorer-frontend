import React from 'react';
import List from '../List/List';
import SectionBlock from '../SectionBlock/SectionBlock';
import './Portfolio.css';

export default function Portfolio(props) {
  return (
    <SectionBlock className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <List className="portfolio__links" vertical={true}>
        <li className="portfolio__link-wrapper"><a className="portfolio__link" href="#">Статичный сайт<span className="portfolio__arrow"></span></a></li>
        <li><a href="#">Адаптивный сайт</a></li>
        <li><a href="#">Одностраничное приложение</a></li>
      </List>
    </SectionBlock>
  )
}
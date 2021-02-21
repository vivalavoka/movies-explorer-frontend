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
        <li className="portfolio__link-wrapper"><a className="portfolio__link" href="#">Адаптивный сайт<span className="portfolio__arrow"></span></a></li>
        <li className="portfolio__link-wrapper"><a className="portfolio__link" href="#">Одностраничное приложение<span className="portfolio__arrow"></span></a></li>
      </List>
    </SectionBlock>
  )
}
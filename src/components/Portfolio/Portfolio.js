import React from 'react';
import List from '../List/List';
import SectionBlock from '../SectionBlock/SectionBlock';
import './Portfolio.css';

export default function Portfolio(props) {
  return (
    <SectionBlock id="portfolio" className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <List className="portfolio__links" vertical={true}>
        <li className="portfolio__link-wrapper"><a className="portfolio__link" href="https://vivalavoka.github.io/how-to-learn/" rel="noreferrer" target="_blank">Статичный сайт<span className="portfolio__arrow"></span></a></li>
        <li className="portfolio__link-wrapper"><a className="portfolio__link" href="https://vivalavoka.github.io/russian-travel/index.html" rel="noreferrer" target="_blank">Адаптивный сайт<span className="portfolio__arrow"></span></a></li>
        <li className="portfolio__link-wrapper"><a className="portfolio__link" href="https://nechitaylo.students.nomoredomains.work/" rel="noreferrer" target="_blank">Одностраничное приложение<span className="portfolio__arrow"></span></a></li>
      </List>
    </SectionBlock>
  )
}
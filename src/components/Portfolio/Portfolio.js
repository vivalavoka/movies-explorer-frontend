import React from 'react';
import ExternalLink from '../ExternalLink/ExternalLink';
import List from '../List/List';
import SectionBlock from '../SectionBlock/SectionBlock';
import './Portfolio.css';

export default function Portfolio(props) {
  return (
    <SectionBlock id="portfolio" className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <List className="portfolio__links" vertical={true}>
        <li className="portfolio__link-wrapper"><ExternalLink className="portfolio__link" href="https://vivalavoka.github.io/how-to-learn/">Статичный сайт<span className="portfolio__arrow"></span></ExternalLink></li>
        <li className="portfolio__link-wrapper"><ExternalLink className="portfolio__link" href="https://vivalavoka.github.io/russian-travel/index.html">Адаптивный сайт<span className="portfolio__arrow"></span></ExternalLink></li>
        <li className="portfolio__link-wrapper"><ExternalLink className="portfolio__link" href="https://nechitaylo.students.nomoredomains.work/">Одностраничное приложение<span className="portfolio__arrow"></span></ExternalLink></li>
      </List>
    </SectionBlock>
  )
}
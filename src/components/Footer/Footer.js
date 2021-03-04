import ExternalLink from '../ExternalLink/ExternalLink';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__list">
          <li className="footer__item"><ExternalLink className="footer__link" href="https://praktikum.yandex.ru/" text="Яндекс.Практикум"/></li>
          <li className="footer__item"><ExternalLink className="footer__link" href="https://github.com/vivalavoka/" text="Github"/></li>
          <li className="footer__item"><ExternalLink className="footer__link" href="https://www.facebook.com/stardach" text="Facebook"/></li>
        </ul>
      </div>
    </footer>
  )
}
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__list">
          <li className="footer__item"><a className="footer__link" href="#">Яндекс.Практикум</a></li>
          <li className="footer__item"><a className="footer__link" href="#">Github</a></li>
          <li className="footer__item"><a className="footer__link" href="#">Facebook</a></li>
        </ul>
      </div>
    </footer>
  )
}
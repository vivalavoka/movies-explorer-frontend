import { Link, withRouter } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage(prop) {
  return (
    <section className="not-found">
      <div>
        <h1 className="not-found__text">404</h1>
        <p className="not-found__description">Страница не найдена</p>
      </div>
      <Link to="/" className="not-found__back">Назад</Link>
    </section>
  );
}

export default withRouter(NotFoundPage);

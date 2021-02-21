import Button from '../Button/Button';
import List from '../List/List';
import './Profile.css';

function Profile(props) {
  return (
    <section className="profile">
      <div className="profile__content">
        <h1 className="profile__welcome-text">Привет, Виталий!</h1>
        <List className="profile__info-list" vertical={true}>
          <li className="profile__info-item"><span className="profile__info-key">Имя</span><span className="profile__info-value">Виталий</span></li>
          <li className="profile__info-item"><span className="profile__info-key">Почта</span><span className="profile__info-value">ex@mple.com</span></li>
        </List>
        <List vertical={true}>
          <li className="profile__action-item"><Button className="profile__action_edit">Редактировать</Button></li>
          <li className="profile__action-item"><Button className="profile__action_sign-out">Выйти из аккаунта</Button></li>
        </List>
      </div>
    </section>
  );
}

export default Profile;
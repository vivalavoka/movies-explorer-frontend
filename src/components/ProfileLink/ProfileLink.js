import {Link } from 'react-router-dom';
import Button from '../Button/Button';

import './ProfileLink.css';

export default function ProfileLink(props) {
    return (
        <Link to={props.to} className={`${props.className} profile-link`}>
            <Button className="profile-link__button" borderRadius="40">Аккаунт<span className="profile-link__icon"></span></Button>
        </Link>
    );
}

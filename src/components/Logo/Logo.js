import { Link } from "react-router-dom";
import logo from "../../images/logo-min.svg";
import './Logo.css';

export default function Logo(props) {
  return (
    <Link to="/">
      <img src={logo} className={`${props.className} logo`} alt="logo" />
    </Link>
  );
}

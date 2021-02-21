import logo from "../../images/logo-min.svg";
import './Logo.css';

export default function Logo(props) {
  return (
    <img src={logo} className={`${props.className} logo`} alt="logo" />
  );
}

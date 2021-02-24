import './ToggleButton.css';

/**
 *
 * @param {Object} props
 * @param {String} name input name
 * @param {String} text button text
 */
export default function ToggleButton(props) {
  return (
    <div className="toggle-button__container">
      <input type="checkbox" name={props.name} id={props.name} className="toggle-button__input" />
      <label for={props.name} className="toggle-button__text">{props.text}</label>
    </div>
  )
}
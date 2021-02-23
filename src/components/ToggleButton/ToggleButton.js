import './ToggleButton.css';

/**
 *
 * @param {Object} props
 * @param {String} className proxy classnames
 * @param {boolean} bordered is bordered
 * @param {String} color green|dark-gray|blue|pink
 * @param {String} borderRadius 3|6|30|40
 */
export default function ToggleButton(props) {
  return (
    <div className="toggle-button__container">
      <input type="checkbox" name={props.name} id={props.name} className="toggle-button__input" />
      <label for={props.name} className="toggle-button__text">{props.text}</label>
    </div>
  )
}
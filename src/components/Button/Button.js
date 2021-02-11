import './Button.css';

/**
 *
 * @param {Object} props
 * @param {String} className proxy classnames
 * @param {boolean} bordered is bordered
 * @param {String} color green|dark-gray|blue|pink
 * @param {String} borderRadius 3|6|30|40
 */
export default function Button(props) {
  const {className, onClick, disabled, bordered, color, borderRadius} = props;
  const _bordered = bordered ? `button_bordered` : '';
  const _color = color ? `button_color_${color}` : '';
  const _borderRadius = borderRadius ? `button_border-radius_${borderRadius}` : '';
  return (
    <button className={`button ${_bordered} ${_color} ${_borderRadius} ${className}`} disabled={disabled} onClick={onClick}>{props.children}</button>
  );
}
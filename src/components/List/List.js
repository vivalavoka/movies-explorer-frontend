import './List.css';

/**
 *
 * @param {Object} props Props
 * @param {String} props.direction horizontal|vertical
 */
export default function List(props) {
  const { className = '', vertical } = props;
  const _direction = vertical ? 'list_direction_vertical' : 'list_direction_horizontal';
  return (
    <ul className={`${className} list ${_direction}`}>
      {props.children}
    </ul>
  );
}

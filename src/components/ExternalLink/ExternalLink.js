import './ExternalLink.css';

export default function ExternalLink(props) {
  const _content = props.children || props.text;
  return (
    <a className={`${props.className} external-link`} href={props.href} rel="noreferrer" target="_blank">
      {_content}
    </a>
  );
}

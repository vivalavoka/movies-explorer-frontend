import React from 'react';
import './SectionTitle.css';

export default function SectionTitle(props) {
  const { text = '', className = '' } = props;
  return (
    <h1 className={`${className} section-title`}>{text}</h1>
  )
}
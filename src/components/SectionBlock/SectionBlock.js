import React from 'react';
import './SectionBlock.css';

export default function SectionBlock(props) {
  return (
    <section className={`${props.className} section`}>
      <div className="section__content">
        {props.children}
      </div>
    </section >
  )
}
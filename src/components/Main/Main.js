import React from 'react';
import Promo from '../Promo/Promo';
import About from '../About/About';
import './Main.css';

export default function Main(props) {
  return (
    <main className="content">
      <Promo />
      <About />
    </main>
  )
}
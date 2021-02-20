import React from 'react';
import Promo from '../Promo/Promo';
import About from '../About/About';
import Techs from '../Techs/Techs';
import './Main.css';

export default function Main(props) {
  return (
    <main className="content">
      <Promo />
      <About />
      <Techs />
    </main>
  )
}
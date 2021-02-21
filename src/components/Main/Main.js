import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutStudent from '../AboutStudent/AboutStudent';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';

export default function Main(props) {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutStudent />
      <Portfolio />
    </main>
  )
}
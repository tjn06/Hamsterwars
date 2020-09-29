import React from 'react';
import '../../styles/battlemode.css';
// import { Link } from 'react-router-dom'

function Battlemode() {
    return (
      <div className="container-fight">
      <h1 className="stats">FIGHT</h1>
      <div className="hamster-fight-1">
        <h2 className="hamster-fight-1-name">HamsterName1</h2>
        <img className="hamster-pic-1" src="../pics/hamster-1.svg" alt=""/>
        </div>
        <div className="versus">VS</div>
      <div className="hamster-fight-2" >
        <img className="hamster-pic-2" src="../pics/hamster-2.svg" alt=""/>
        <h2 className="hamster-fight-2-name">HamsterName2</h2>
      </div>
  </div>
    );
  }

export default Battlemode;
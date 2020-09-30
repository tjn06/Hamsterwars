import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/winner.css';

function Winner() {
    return (
      <div className="container-winner">
      <button className="go-to-next-battle">GO TO NEXT BATTLE</button>
      <h1 className="winner">WINNER</h1>
      <div className="container-winner-inside">
      <div className="container-winner-name-ranking">  
      <h3 className="hamster-winner-name">Timmy</h3>
      <h2 className="hamster-winner-world-ranking">WORLD RANKING</h2>
      <h2 className="hamster-winner-world-ranking-number">NR. 25</h2>
      </div>
      <img className="hamster-winner-pic" src="../pics/hamster-1.svg" alt=""/>
      </div>
      <div className="winner-details" >
      <h5 className="winner-percentage-text">WINNING PERCENTAGE</h5>
        {/* BAR */}
        <h5 className="winner-percentage-number">75%</h5>
        <h4 className="winner-battles">BATTLES: 21</h4>
        <h4 className="winner-won-battles">WON BATTLES: 18</h4>
        <h4 className="winner-lost-battles">LOST BATTLES: 3</h4>
        <h4 className="winner-favourite-food">FAVORITE FOOD: MJÖLK</h4>
        <h4 className="winner-loves">LOVES: BONDAGE</h4>
        <h4 className="winner-age">AGE: 23</h4>
        </div>
      </div>
    );
  }

export default Winner;
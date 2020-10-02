import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/topStrongest.scoped.css';

function Topstrongest({ showHideFromStatsMobile, sendPoint }) {

  const [showOrHideButton, setShowOrHideButton] = useState('none');
  const [wins, setWins] = useState(false)
  let ham1 = {};
  let ham2 = {};
  let ham3 = {};
  let ham4 = {};
  let ham5 = {};
  if (wins) {
    ham1 = wins[0];
    ham2 = wins[1];
    ham3 = wins[2];
    ham4 = wins[3];
    ham5 = wins[4];

  }
  useEffect(() => {
    if (sendPoint === 'xs') {
      setShowOrHideButton('back-to-stats')
    } else {
      setShowOrHideButton('none')
    }
  }, [sendPoint]);

  useEffect(() => {
    fetch("https://hamsterwarz-api.herokuapp.com/hamsters/wins")
      .then(res => res.json())
      .then(response => {
        setWins(response)
      });
  }, [])
  return (
    <div className="container">
      <button className={`${showOrHideButton}`} onClick={() => showHideFromStatsMobile(['show', 'hide', 'hide', 'hide'])} >BACK TO STATS</button>
      <h1 className="top-ten-strongest">TOP 5 STRONGEST</h1>
      <ul className="list">
        <li className="hamster-1"> <p className="name">1. {ham1.name}:</p> &nbsp; <p className="percent">{ham1.wins}</p></li>
        <li className="hamster-2"> <p className="name">2. {ham2.name}:</p> &nbsp; <p className="percent">{ham2.wins}</p></li>
        <li className="hamster-3"> <p className="name">3. {ham3.name}:</p> &nbsp; <p className="percent">{ham3.wins}</p></li>
        <li> <p className="name">4. {ham4.name}:</p> &nbsp; <p className="percent">{ham4.wins}</p></li>
        <li> <p className="name">5. {ham5.name}:</p> &nbsp; <p className="percent">{ham5.wins}</p></li>

      </ul>
    </div>
  );
}

export default Topstrongest;
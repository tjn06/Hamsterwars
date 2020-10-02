import React, { useState, useEffect } from 'react'
import "../../styles/topWeakest.scoped.css";
// import "../../styles/stats.scoped.css";

function Topweakest({ showHideFromStatsMobile, sendPoint }) {

  const [showOrHideButton, setShowOrHideButton] = useState('none');
  const [defeats, setDefeats] = useState(false)
  let ham1 = {};
  let ham2 = {};
  let ham3 = {};
  let ham4 = {};
  let ham5 = {};
  if (defeats) {
    ham1 = defeats[0];
    ham2 = defeats[1];
    ham3 = defeats[2];
    ham4 = defeats[3];
    ham5 = defeats[4];

  }
  useEffect(() => {
    if (sendPoint === 'xs') {
      setShowOrHideButton('back-to-stats')
    } else {
      setShowOrHideButton('none')
    }
  }, [sendPoint]);
  useEffect(() => {
    fetch("https://hamsterwarz-api.herokuapp.com/hamsters/defeats")
      .then(res => res.json())
      .then(response => {
        setDefeats(response)
      });
  }, [])
  return (
    <div className="container">
      <button className={`${showOrHideButton}`} onClick={() => showHideFromStatsMobile(['show', 'hide', 'hide', 'hide'])} >BACK TO STATS</button>
      <h1 className="top-ten-weakest">TOP 5 WEAKEST</h1>
      <ul className="list">
        <li className="hamster-1"> <p className="name">1. {ham1.name}:</p> &nbsp; <p className="percent">{ham1.defeats}</p></li>
        <li className="hamster-2"> <p className="name">2. {ham2.name}:</p> &nbsp; <p className="percent">{ham2.defeats}</p></li>
        <li className="hamster-3"> <p className="name">3. {ham3.name}:</p> &nbsp; <p className="percent">{ham3.defeats}</p></li>
        <li> <p className="name">4. {ham4.name}:</p> &nbsp; <p className="percent">{ham4.defeats}</p></li>
        <li> <p className="name">5. {ham5.name}:</p> &nbsp; <p className="percent">{ham5.defeats}</p></li>
      </ul>
    </div>
  );
}

export default Topweakest;

import React, { useState, useEffect } from 'react'
import '../../styles/battlemode.scoped.css';
import "../../index.css"
import Winner from "../../components/Battlemode/Winner"

function Battlemode() {
  const [userData, setUserdata] = useState(false)
  const [winner, setWinner] = useState(false)
  const [loser, setLoser] = useState(false)
  let hamster1 = {};
  let hamster2 = {};
  if (userData) {
    hamster1 = userData[0];
    hamster2 = userData[1];
  }
  function next() {
    fetch("https://hamsterwarz-api.herokuapp.com/battle")
      .then(res => res.json())
      .then(response => {
        setUserdata(response)
      });
  }
  useEffect(() => {
    fetch("https://hamsterwarz-api.herokuapp.com/battle")
      .then(res => res.json())
      .then(response => {
        setUserdata(response)
      });

  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function handleClick(hamster) {
    setWinner(hamster)
    if (winner) {

      console.log(winner, "kek");
      updateWinner(winner.id)

    }
  }
  function updateWinner(hamsterId) {
    fetch(`https://hamsterwarz-api.herokuapp.com/hamsters/updatewins/${hamsterId}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res)
      .then(response => {
        JSON.stringify(response)
      });

  }
  function updateDefeats(hamsterId) {
    fetch(`https://hamsterwarz-api.herokuapp.com/battle/hamsters/updatedefeats/${hamsterId}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res)
      .then(response => {
        JSON.stringify(response)
      });

  }
  return (
    <div className="container-fight">
      <h1 className="stats">FIGHT</h1>
      <div className="hamster-fight-1" onClick={() => handleClick(hamster1)}>
        <h2 className="hamster-fight-1-name">{hamster1.name}</h2>
        <img className="hamster-pic-1" src={userData ? require(`../../hamsters/${hamster1.imgName}`) : "../../hamsters/hamster-1.jpg"} alt="" />
      </div>
      <div className="versus">VS</div>
      <div className="hamster-fight-2" onClick={() => handleClick(hamster2)} >
        <img className="hamster-pic-2" src={userData ? require(`../../hamsters/${hamster2.imgName}`) : "../../hamsters/hamster-11.jpg"} alt="" />
        <h2 className="hamster-fight-2-name">{hamster2.name}</h2>
      </div>
      <button onClick={() => {
        next();
        scrollToTop();
      }} className="go-to-next-battle">GO TO NEXT BATTLE</button>

      { winner ? <Winner value={winner} /> : null}
    </div>
  );
}

export default Battlemode;
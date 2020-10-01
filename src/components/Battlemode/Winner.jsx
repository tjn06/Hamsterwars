
import React, { useEffect, useState } from 'react'
import '../../styles/winner.scoped.css';
function Winner({ value }) {


  return (
    <div className="container-winner">

      <h1 className="winner">WINNER</h1>
      <div className="container-winner-inside">
        <div className="container-winner-name-ranking">
          <h3 className="hamster-winner-name">{value.name}</h3>

        </div>
        <img className="hamster-winner-pic" src={value ? require(`../../hamsters/${value.imgName}`) : "../../hamsters/hamster-1.jpg"} alt="Hamster" />
      </div>
      <div className="winner-details" >
        <h4 className="winner-battles">BATTLES: {value.games}</h4>
        <h4 className="winner-won-battles">WON BATTLES: {value.wins}</h4>
        <h4 className="winner-lost-battles">LOST BATTLES: {value.defeats}</h4>
        <h4 className="winner-favourite-food">FAVORITE FOOD: {value.favFood}</h4>
        <h4 className="winner-loves">LOVES: {value.loves}</h4>
        <h4 className="winner-age">AGE: {value.age}</h4>
      </div>
    </div>
  );
}

export default Winner;
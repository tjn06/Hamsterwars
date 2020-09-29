import React from 'react'
// import { Link } from 'react-router-dom'

function Topstrongest() {
    return (
      <div className="container">
        <button className="back-to-stats">BACK TO STATS</button>
        <h1 className="top-ten-strongest">TOP 10 STRONGEST</h1>
        <ul className="list">
          <li className="hamster-1"> <p className="name">1. Goran</p> &nbsp; <p className="percent">75%</p></li>
          <li className="hamster-2"> <p className="name">2. Betty</p> &nbsp; <p className="percent">72%</p></li>
          <li className="hamster-3"> <p className="name">3. Claes</p> &nbsp; <p className="percent">69%</p></li>
          <li> <p className="name">4. Brutus</p> &nbsp; <p className="percent">65%</p></li>
          <li> <p className="name">5. Manki</p> &nbsp; <p className="percent">61%</p></li>
          <li> <p className="name">6. Lusen</p> &nbsp; <p className="percent">59%</p></li>
          <li> <p className="name">7. Snori</p> &nbsp; <p className="percent">55%</p></li>
          <li> <p className="name">8. Hedda</p> &nbsp; <p className="percent">52%</p></li>
          <li> <p className="name">9. Tobias</p> &nbsp; <p className="percent">51%</p></li>
          <li> <p className="name">10. Mats</p> &nbsp; <p className="percent">49%</p></li>
        </ul>
      </div>
    );
  }

export default Topstrongest;
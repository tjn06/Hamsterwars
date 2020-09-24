import React from 'react'
// import { Link } from 'react-router-dom'

function Allhamsters({screenAndHamster}) {

  
    return (
      
        <div>
        <h2>Allhamsters</h2>
        <p>Delete hamster</p>
        <div className="stats-or-delete" onClick={() => screenAndHamster("Killit", "Bummsey")}>
          Bummsey
        </div>
      </div>
    );
  }

export default Allhamsters;
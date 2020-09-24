import React from 'react'
// import { Link } from 'react-router-dom'

function Ko({deleteItem, setCurrentScreenInKo}) {
    return (
      
        <div>
        <button onClick={() => setCurrentScreenInKo('allStatsDesktop')}>Back to stats</button>
        <h2>Ko</h2>
        <p>{deleteItem} is deleted !</p>
      </div>
    );
  }

export default Ko;
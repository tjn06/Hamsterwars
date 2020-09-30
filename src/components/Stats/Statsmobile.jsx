import React from 'react';
import '../../styles/statsMobile.css';
// import { Link } from 'react-router-dom'

function Statsmobile({showHideFromStatsMobile}) {
    return (
      <div className="container">
        <h1 className="stats">STATS</h1>
        <div className="all-hamsters" onClick={() => showHideFromStatsMobile(['hide' , 'show', 'hide', 'hide'])}><h2 className="all-hamsters-in">ALL HAMSTERS</h2><p className="all-hamsters-check-all">CHECK ALL  HAMSTERS OR DELETE</p></div>
        <div className="top-ten-strongest" onClick={() => showHideFromStatsMobile(['hide' , 'hide', 'show', 'hide'])}><h2 className="top-ten-strongest-in">TOP 10 STRONGEST</h2></div>
        <div className="top-ten-weakest" onClick={() => showHideFromStatsMobile(['hide' , 'hide', 'hide', 'show'])}><h2 className="top-ten-weakest-in">TOP 10 WEAKEST</h2></div>
        <button className="back-to-battlemode" >BACK TO BATTLEMODE</button>
      </div>
    );
  }

export default Statsmobile;
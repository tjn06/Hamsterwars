import React from 'react'
import '../styles/addHamster.css';
// import { Link } from 'react-router-dom'

function Add() {
    return (
      <div className="container">
        <header>
          <div className="add-hamster-menu">ADD HAMSTER</div>
          <div className="hamster-stats-menu">HAMSTER STATS</div>
          <div className="battlemode-menu">BATTLEMODE</div>
        </header>
        <h1 className="add-hamster">ADD HAMSTER</h1>
        <form action className="form">
          <div className="form-block">
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="fname"  />
          </div>
          <div className="form-block">                
            <label htmlFor="lname">Favorite food</label>
            <input type="text" id="lname" name="lname"  />
          </div>
          <div className="form-block">
            <label htmlFor="lname">Age</label>
            <input type="text" id="lname" name="lname"  />
          </div>
          <div className="form-block">
            <label htmlFor="lname">Loves</label>
            <input type="text" id="lname" name="lname"  />
          </div>
          <div className="form-block">
            <label htmlFor="lname">Image</label>
            <input type="text" id="lname" name="lname"  />
          </div>
          <button className="add-hamster-button">ADD HAMSTER</button>
        </form>
        <button className="back-to-battlemode">&lt; GO TO BATTLEMODE &gt;</button>
      </div>
    );
  }

export default Add;
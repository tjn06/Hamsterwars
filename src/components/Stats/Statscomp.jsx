import React, { useState, useEffect } from "react";
import "../../styles/statscomp.css";

import Allhamsters from "./Allhamsters";
import Topstrongest from "./Topstrongest";
import Topsweakest from "./Topweakest";


function Statscomp({}) {

	return (
        <div className="container">
        <button class="back-to-battlemode"> GO TO BATTLEMODE </button>
        <div className="all-hamsters-container">
        
        <h1 class="stats">STATS</h1>
            <h1 className="all-hamsters">ALL HAMSTERS</h1>
            <Allhamsters />
        </div>
        <div className="all-containers">
        <div className="weakest-container">
            <h1 className="top-ten-strongest">TOP 10 STRONGEST</h1>
            <Topstrongest />
            </div>
            <div className="weakest-container">
                <h1 className="top-ten-weakest">TOP 10 WEAKEST</h1>
                <ul className="list-top-ten-weakest">
                    <li className="hamster-1"> <p className="name">1. Goran</p> &nbsp <p className="percent-weakest">75%</p></li>
                    <li className="hamster-2"> <p className="name">2. Betty</p> &nbsp <p className="percent-weakest">72%</p></li>
                    <li className="hamster-3"> <p className="name">3. Claes</p> &nbsp <p className="percent-weakest">69%</p></li>
                    <li> <p className="name">4. Brutus</p> &nbsp <p className="percent-weakest">65%</p></li>
                    <li> <p className="name">5. Manki</p> &nbsp <p className="percent-weakest">61%</p></li>
                    <li> <p className="name">6. Lusen</p> &nbsp <p className="percent-weakest">59%</p></li>
                    <li> <p className="name">7. Snori</p> &nbsp <p className="percent-weakest">55%</p></li>
                    <li> <p className="name">8. Hedda</p> &nbsp <p className="percent-weakest">52%</p></li>
                    <li> <p className="name">9. Tobias</p> &nbsp <p className="percent-weakest">51%</p></li>
                    <li> <p className="name">10. Mats</p> &nbsp <p className="percent-weakest">49%</p></li>
                </ul>
            </div>
        </div>
    </div>
	);
}

export default Statscomp;

import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import Ko from "./Ko";
import "../../../styles/killIt.css";

function Killit({ item, setCurrentScreenInKillit, sendPoint }) {
	let desktopOrMobile = "";

	useEffect(() => {
		if (sendPoint === "xs") {
			desktopOrMobile = "Statsmobile";
		} else {
			desktopOrMobile = "allStatsDesktop";
		}
	}, [sendPoint]);

	const [ifKilled, setIfKilled] = useState(false);
	if (!ifKilled) {
		return (
			<div>
				<div>
					<button
						onClick={() =>
							setCurrentScreenInKillit(desktopOrMobile)
						}
					>
						Back to stats
					</button>
					<h2>{item}</h2>
					<p>{item}</p>
					<button onClick={() => setIfKilled(true)}>KILL IT!</button>
				</div>
				<div className="container-kill">
					<button className="go-to-next-battle">
						GO TO NEXT BATTLE
					</button>
					<div className="container-kill-inside">
						<div className="container-kill-name-ranking">
							<h3 className="hamster-kill-name">Timmy</h3>
							<h2 className="hamster-kill-world-ranking">
								WORLD RANKING
							</h2>
							<h2 className="hamster-kill-world-ranking-number">
								NR. 25
							</h2>
						</div>
						<img
							className="hamster-kill-pic"
							src="../pics/hamster-1.svg"
							alt=""
						/>
					</div>
					<div className="kill-details">
						<h5 className="kill-percentage-text">
							WINNING PERCENTAGE
						</h5>
						{/* BAR */}
						<h5 className="kill-percentage-number">75%</h5>
						<h4 className="kill-battles">BATTLES: 21</h4>
						<h4 className="kill-won-battles">WON BATTLES: 18</h4>
						<h4 className="kill-lost-battles">LOST BATTLES: 3</h4>
						<h4 className="kill-favourite-food">
							FAVORITE FOOD: MJÖLK
						</h4>
						<h4 className="kill-loves">LOVES: BONDAGE</h4>
						<h4 className="kill-age">AGE: 23</h4>
					</div>
					<button className="kill-it-button">KILL IT!</button>
				</div>
			</div>
		);
	} else {
		return (
			<Ko
				deleteItem={item}
				setCurrentScreenInKo={setCurrentScreenInKillit}
			/>
		);
	}
}

export default Killit;

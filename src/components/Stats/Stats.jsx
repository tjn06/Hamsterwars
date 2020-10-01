import React, { useState, useEffect } from "react";
import "../../styles/stats.scoped.css";

import Allhamsters from "./Allhamsters";
import Statsmobile from "./Statsmobile";
import Topstrongest from "./Topstrongest";
import Topsweakest from "./Topweakest";
import Killit from "./Delete/Killit";
import UseBreakpoints from "./UseBreakpoint";

function Stats() {
	const ALLSTATSDESKTOP = "allStatsDesktop",
		STATSMOBILE = "Statsmobile",
		KILLIT = "Killit",
		KO = "Ko";

	const [showHide, setshowHide] = useState(["show", "hide", "hide", "hide"]);
	const [currentScreen, setCurrentScreen] = useState(ALLSTATSDESKTOP);
	const [deleteHamster, setDeleteHamster] = useState();

	const point = UseBreakpoints();

	useEffect(() => {
		if (point === "xs" && currentScreen !== KILLIT) {
			setCurrentScreen(STATSMOBILE);
		} else if (point === "lg" && currentScreen !== KILLIT) {
			setCurrentScreen(ALLSTATSDESKTOP);
		} else {
			setCurrentScreen(KILLIT);
		}
	}, [point, currentScreen]);

	function screenAndHamsterStats(killIt, hamsterDelete) {
		setCurrentScreen(killIt);
		setDeleteHamster(hamsterDelete);
	}

	const allStatsDesktop = (
    <div className="black">
		<div className="container">
			<button className="back-to-battlemode"> GO TO BATTLEMODE </button>
			<h1 className="stats">STATS</h1>
			<div className="all-hamsters-container">
				<Allhamsters
					setCurrentScreenInAllHamsters={setCurrentScreen}
					showHamsterinAllStats={screenAndHamsterStats}
				/>
				<div>
					<Topstrongest />
				</div>
				<div>
					<Topsweakest />
				</div>
        </div>

		</div>
    </div>
	);

	const statsMobileSize = (
		<div>
			<div className={`${showHide[0]}`}>
				<Statsmobile showHideFromStatsMobile={setshowHide} />
			</div>
			<div className={`${showHide[1]}`}>
				<Allhamsters
					showHideFromStatsMobile={setshowHide}
					showHamsterinAllStats={screenAndHamsterStats}
					// setCurrentScreenInAllHamsters={setCurrentScreen}
					sendPoint={point}
				/>{" "}
			</div>
			<div className={`${showHide[2]}`}>
				<Topstrongest
					showHideFromStatsMobile={setshowHide}
					sendPoint={point}
				/>
			</div>
			<div className={`${showHide[3]}`}>
				<Topsweakest
					showHideFromStatsMobile={setshowHide}
					sendPoint={point}
				/>
			</div>
		</div>
	);

	let content = null;
	switch (currentScreen) {
		case ALLSTATSDESKTOP:
			content = allStatsDesktop;
			break;
		case STATSMOBILE:
			content = statsMobileSize;
			break;
		case KILLIT:
			content = (
				<Killit
					item={deleteHamster}
					setCurrentScreenInKillit={setCurrentScreen}
					sendPoint={point}
				/>
			);
			break;
		default:
			content = allStatsDesktop;
	}

	return (
		<div>
			<div className="">{content}</div>
		</div>
	);
}

export default Stats;

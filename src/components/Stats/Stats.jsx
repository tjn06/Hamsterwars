import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import '../../styles/stats.scoped.css';

import Allhamsters from './Allhamsters';
import Statsmobile from './Statsmobile';
import Topstrongest from './Topstrongest';
import Topsweakest from './Topweakest';
import Killit from './Delete/Killit';
import UseBreakpoints from './UseBreakpoint';

function Stats() {

  const point = UseBreakpoints();

  const ALLSTATSDESKTOP = 'allStatsDesktop', STATSMOBILE = 'Statsmobile', KILLIT = 'Killit', KO = 'Ko';

  useEffect(() => {
    if (point === 'xs') {
      setCurrentScreen(STATSMOBILE);
    } else {
      setCurrentScreen(ALLSTATSDESKTOP);
    }
  }, [point]);


  const [showHide, setshowHide] = useState(['show', 'hide', 'hide', 'hide']);
  const [currentScreen, setCurrentScreen] = useState(ALLSTATSDESKTOP);
  const [deleteHamster, setDeleteHamster] = useState();

  function screenAndHamsterStats (killIt, hamsterDelete) {
    setCurrentScreen(killIt);
    setDeleteHamster(hamsterDelete)
  }

  const allStatsDesktop = (
    <div className="">
      <div><Allhamsters setCurrentScreenInAllHamsters={setCurrentScreen}
      showHamsterinAllStats={screenAndHamsterStats}
      /></div>
      <div><Topstrongest/></div>
      <div><Topsweakest/></div>
  </div>
  )

  const statsMobileSize = (
    <div>
      <div className={`${showHide[0]}`}><Statsmobile showHideFromStatsMobile={setshowHide} /></div>
      <div className={`${showHide[1]}`}><Allhamsters showHideFromStatsMobile={setshowHide}
      showHamsterinAllStats={screenAndHamsterStats}
        // setCurrentScreenInAllHamsters={setCurrentScreen}
        sendPoint={point}
        /> </div>
      <div className={`${showHide[2]}`}><Topstrongest showHideFromStatsMobile={setshowHide}
        sendPoint={point}
      /></div>
      <div className={`${showHide[3]}`}><Topsweakest showHideFromStatsMobile={setshowHide}
        sendPoint={point}
      /></div>
  </div>
  )

  
  let content = null;
  switch (currentScreen) {
    case ALLSTATSDESKTOP:
      content = ( allStatsDesktop )
        break;
    case (STATSMOBILE):
      content = ( statsMobileSize )
    break;
    case KILLIT:
      content = ( <Killit item={deleteHamster}
      setCurrentScreenInKillit={setCurrentScreen}
      sendPoint={point}
      /> )
        break;
    default:
      content = (allStatsDesktop)
  }

  return (

    <div style={{ padding: 20 }}>
      {/* <h2 class="red">Stats</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p> */}
      
      <span className="white">
      <div className="">{content}</div>
      </span>

    </div>
  );
}

export default Stats;
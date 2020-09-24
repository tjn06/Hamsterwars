import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../../App.css';

import Allhamsters from './Allhamsters';
import Statsmobile from './Statsmobile';
import Topstrongest from './Topstrongest';
import Topsweakest from './Topweakest';
import Killit from './Delete/Killit';

function Stats() {


  const ALLSTATSDESKTOP = 'allStatsDesktop', STATSMOBILE = 'Statsmobile', KILLIT = 'Killit';

  function screenAndHamsterAllStats (screenAllhamsters, hamsterDelete) {
    setCurrentScreen(screenAllhamsters);
    setDeleteHamster(hamsterDelete)
  }

  const [currentScreen, setCurrentScreen] = useState(ALLSTATSDESKTOP);
  const [deleteHamster, setDeleteHamster] = useState();
  const [cssShowHide, setCssShowHide] = useState('show-component');

  const allStatsDesktop = (
    <div className="">
      <Statsmobile />
      <div className={`${cssShowHide}`}><Allhamsters screenAndHamster={screenAndHamsterAllStats}
      setDeleteHamsterFromAllHamsters={setDeleteHamster}/></div>
      <div><Topstrongest/></div>
      <div><Topsweakest/></div>
  </div>
  )

  let content = null;
  switch (currentScreen) {
    case ALLSTATSDESKTOP:
      content = ( allStatsDesktop )
        break;
    case KILLIT:
      content = ( <Killit item={deleteHamster}
      setCurrentScreenInKillit={setCurrentScreen}/> )
        break;
    default:
      content = ( allStatsDesktop )
  }

  return (

    <div style={{ padding: 20 }}>
      {/* <h2 class="red">Stats</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p> */}
      <div className="">{content}</div>
    </div>
  );
}

export default Stats;
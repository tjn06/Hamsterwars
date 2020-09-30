import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Ko from './Ko';
import UseBreakpoints from '../UseBreakpoint';

function Killit({item, setCurrentScreenInKillit, sendPoint}) {
  const point = UseBreakpoints();

  const [desktopOrMobile, setDesktopOrMobile] = useState();

  useEffect(() => {
    if (point === 'xs') {
      setDesktopOrMobile('Statsmobile');
    } else {
      setDesktopOrMobile('allStatsDesktop');
    }
  }, [point]);

  const [ifKilled, setIfKilled] = useState(false);
    if (!ifKilled) {
      return (
        <div>
          <button onClick={() => setCurrentScreenInKillit(desktopOrMobile)}>Back to hamsters</button>
          <h2>{item}</h2>
          <p>{item}</p>
          <button onClick={() => setIfKilled(true)}>KILL IT!</button>
      </div>
      );
    } else {
      return (
        <Ko deleteItem={item}
        setCurrentScreenInKo={setCurrentScreenInKillit}
        sendPointKo = {desktopOrMobile} />
    );
    }
  }

export default Killit;
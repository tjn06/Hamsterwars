import React, { useState, useEffect } from 'react'
import UseBreakpoints from '../UseBreakpoint';

function Ko({deleteItem, setCurrentScreenInKo, sendPointKo}) {

  const point = UseBreakpoints();
  const [desktopOrMobile, setDesktopOrMobile] = useState(sendPointKo);
  const [buttonMessage, setButtonMessage] = useState('');

  useEffect(() => {
    if (point === 'xs') {
      setDesktopOrMobile('Statsmobile');
      setButtonMessage('BACK TO HAMSTERS')
    } else {
      setDesktopOrMobile('allStatsDesktop');
      setButtonMessage('BACK TO STATS')
    }
  }, [point]);

    return (
      <div>
        <button onClick={() => setCurrentScreenInKo(desktopOrMobile)}>{buttonMessage}</button>
        <h2>Ko</h2>
        <p>{deleteItem} is deleted !</p>
      </div>
    );
  }

export default Ko;
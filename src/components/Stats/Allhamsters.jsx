import React, { useState, useEffect } from 'react'
import '../../styles/allHamsters.scoped.css'


function Allhamsters({showHideFromStatsMobile, showHamsterinAllStats, sendPoint}) {
  const [showOrHideButton, setShowOrHideButton] = useState('none');

  useEffect(() => {
    if (sendPoint === 'xs') {
      setShowOrHideButton('back-to-stats')
    } else {
      setShowOrHideButton('none')
    }
  }, [sendPoint]);
  
    return (
      <div className="container">
        <button className={`${showOrHideButton}`} onClick={() => showHideFromStatsMobile(['show' , 'hide', 'hide', 'hide'])}>BACK TO STATS</button>
        <h1 className="all-hamsters">ALL HAMSTERS</h1>
        <ul className="list">
          <li onClick={() => showHamsterinAllStats('Killit', 'Goran')} className="hamster-1"> <p className="name">1. Goran</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Betty')} className="hamster-2"> <p className="name">2. Betty</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Claes')} className="hamster-3"> <p className="name">3. Claes</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Brutus')}> <p className="name">4. Brutus</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Molooc')}> <p className="name">5. Molooc</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Lusen')}> <p className="name">6. Lusen</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Snori')}> <p className="name">7. Snori</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Hedda')}> <p className="name">8. Hedda</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Tobias')}> <p className="name">9. Tobias</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Mats')}> <p className="name">10. Mats</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Brutus')}> <p className="name">11. Brutus</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Manki')}> <p className="name">12. Manki</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Lusen')}> <p className="name">13. Lusen</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Snori')}> <p className="name">14. Snori</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Hedda')}> <p className="name">15. Hedda</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Tobias')}> <p className="name">16. Tobias</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Mats')}> <p className="name">17. Mats</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Brutus')}> <p className="name">18. Brutus</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Manki')}> <p className="name">19. Manki</p></li>
          <li onClick={() => showHamsterinAllStats('Killit', 'Lusen')}> <p className="name">20. Lusen</p></li>
        </ul>
      </div>
    );
  }

export default Allhamsters;
import React from 'react'
// import { Link } from 'react-router-dom'
import '../../styles/allHamsters.scoped.css'
function Allhamsters({screenAndHamster}) {

  
    return (
      <div className="container">
        <button className="back-to-stats">BACK TO STATS</button>
        <h1 className="all-hamsters">ALL HAMSTERS</h1>
        <ul className="list">
          <li className="hamster-1"> <p className="name">1. Goran</p></li>
          <li className="hamster-2"> <p className="name">2. Betty</p></li>
          <li className="hamster-3"> <p className="name">3. Claes</p></li>
          <li> <p className="name">4. Brutus</p></li>
          <li> <p className="name">5. Manki</p></li>
          <li> <p className="name">6. Lusen</p></li>
          <li> <p className="name">7. Snori</p></li>
          <li> <p className="name">8. Hedda</p></li>
          <li> <p className="name">9. Tobias</p></li>
          <li> <p className="name">10. Mats</p></li>
          <li> <p className="name">11. Brutus</p></li>
          <li> <p className="name">12. Manki</p></li>
          <li> <p className="name">13. Lusen</p></li>
          <li> <p className="name">14. Snori</p></li>
          <li> <p className="name">15. Hedda</p></li>
          <li> <p className="name">16. Tobias</p></li>
          <li> <p className="name">17. Mats</p></li>
          <li> <p className="name">18. Brutus</p></li>
          <li> <p className="name">19. Manki</p></li>
          <li> <p className="name">20. Lusen</p></li>
        </ul>
      </div>
    );
  }

export default Allhamsters;
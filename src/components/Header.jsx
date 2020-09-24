import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/add" style={{ padding: 5 }}>
          Add Hamster
        </Link>
        <Link to="/stats" style={{ padding: 5 }}>
          Hamster stats
        </Link>
        <Link to="/battlemode" style={{ padding: 5 }}>
          Battlemode
        </Link>
      </nav>
    );
  }

export default Header;
import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
      <nav style={{ margin: 10 }}>
        <NavLink to="/" activeClassName="active" end >
          Home
        </NavLink>
        <NavLink to="/add" activeClassName="active"  >
          Add Hamster
        </NavLink>
        <NavLink to="/stats" activeClassName="active"  >
          Hamster stats
        </NavLink>
        <NavLink to="/battlemode" activeClassName="active"  >
          Battlemode
        </NavLink>
      </nav>
    );
  }

export default Header;
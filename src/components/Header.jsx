import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.scoped.css';

      function Header() {
        return (
          <nav >
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
import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "../styles/header.scoped.css";


function Header() {

  

	return (
		<div class="nav-wrapper" >
			<nav class="nav">
				<div className="logo">
					<img src={require("../pics/headerlogo.svg")} alt="" />
				</div>
				<div class="navigation">
					<div class="nav-toogler" />
					<ul class="nav-items">
						<NavLink
							to="/"
							className="toHome"
							activeClassName="active"
							end
						>
							Home
						</NavLink>
						<NavLink
							to="/add"
							className="toAdd"
							activeClassName="active"
						>
							Add Hamster
						</NavLink>
						<NavLink
							to="/stats"
							className="toStats"
							activeClassName="active"
						>
							Hamster stats
						</NavLink>
						<NavLink
							to="/battlemode"
							className="toBattlemode"
							activeClassName="active"
						>
							Battlemode
						</NavLink>
					</ul>
				</div>
			</nav>
		</div>
	);
}

//     <div class="nav-wrapper">
//     <nav class="nav">
//         <div class="navigation">
//             <div class="nav-toogler"></div>
//         </div>
//     </nav>
// </div>

export default Header;

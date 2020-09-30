import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "../styles/header.scoped.css";

function Header() {
	function menu() {
		let navWrapper = document.querySelector(".nav-wrapper"),
			navToogler = document.querySelector(".nav-toogler");
		navToogler.addEventListener("click", function(event) {
			navWrapper.classList.toggle("active");
		});
	}
	return (
		<div className="nav-wrapper" onClick={() => menu()}>
			<nav className="nav">
								<div className="logo">
					<img src={require("../pics/headerlogo.svg")} alt="" />
				</div>
				<div className="navigation">
					<div className="nav-toogler" />
					<ul className="nav-items">
						<div className="flex-icons">
							{" "}
							<img src={require("../pics/home.svg")} alt="" />
							<NavLink
								to="/"
								className="toHome"
								activeClassName="active"
								end
							>
								Home
							</NavLink>
						</div>
						<div className="flex-icons">
							<img src={require("../pics/add.svg")} alt="" />
							<NavLink
								to="/add"
								className="toAdd"
								activeClassName="active"
							>
								Add Hamster
							</NavLink>
						</div>
						<div className="flex-icons">
							<img src={require("../pics/stats.svg")} alt="" />
							<NavLink
								to="/stats"
								className="toStats"
								activeClassName="active"
							>
								Hamster stats
							</NavLink>
						</div>
						<div className="flex-icons">
            <img src={require("../pics/battle.svg")} alt="" />
							<NavLink
								to="/battlemode"
								className="toBattlemode"
								activeClassName="active"
							>
								Battlemode
							</NavLink>
						</div>
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

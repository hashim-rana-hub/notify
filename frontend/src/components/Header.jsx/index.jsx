import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonButton from "../Common/CommonButton";

const Header = () => {
	const user = localStorage.getItem("user");

	console.log("user from   headrer ", user);
	return (
		<nav className="navbar bg-secondary navbar-dark p-4">
			<div className="container">
				<span className="navbar-brand mb-0 h1">
					<Link to="/" className="navbar-brand mb-0 h1">
						CheckList-Champ
					</Link>
				</span>
				<ul className="navbar-nav ms-auto flex-row">
					{user && (
						<li className="nav-item me-4">
							<CommonButton text="View Your Notes" />
						</li>
					)}
					{user && (
						<li className="nav-item">
							<CommonButton text="Logout" />
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Header;

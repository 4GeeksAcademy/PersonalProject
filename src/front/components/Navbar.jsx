import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleToggle = () => setShowMenu((prev) => !prev);

	const handleNavClick = () => setShowMenu(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<i className="fa-brands fa-web-awesome brand"></i>
				<button
					className="navbar-toggler"
					type="button"
					onClick={handleToggle}
					aria-controls="navbarNavDropdown"
					aria-expanded={showMenu}
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className={`collapse navbar-collapse justify-content-end${showMenu ? " show" : ""}`} id="navbarNavDropdown">
					<ul className="navbar-nav" onClick={handleNavClick}>
						<li className="nav-item nav-option">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item nav-option">
							<a className="nav-link" href="#">Features</a>
						</li>
						<li className="nav-item nav-option">
							<a className="nav-link" href="#">Pricing</a>
						</li>
						{/* Dropdown solo visible en móvil */}
						<li className="nav-item dropdown d-lg-none nav-option">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown link
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li>
					</ul>
					<form className="d-flex ms-lg-auto w-auto  my-2 my-lg-0" style={{ maxWidth: "350px" }}>
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-dark" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	);
};
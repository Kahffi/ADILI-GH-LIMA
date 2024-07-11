import "./navbar.css";
import adiliLogo from "../assets/Logo.png";
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<a className="navbar-logo">
					<img src={adiliLogo} alt="logo" />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;

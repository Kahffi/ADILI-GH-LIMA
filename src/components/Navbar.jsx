import "./navbar.css";
import adiliLogo from "../assets/Logo.png";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase/firebase";

const Navbar = () => {
	const routePath = useLocation().pathname;
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<a className="navbar-logo"></a>

				{routePath === "/" ? null : (
					<div className="user-profile">
						<img
							src={auth.currentUser.photoURL}
							alt="user-profile"
							style={{ borderRadius: "100%", width: "35px", height: "35px" }}
						/>
						<h6>{auth?.currentUser.displayName}</h6>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;

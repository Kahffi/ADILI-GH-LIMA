import "./intro.css"; // Pastikan Anda membuat file CSS ini juga
import { Link } from "react-router-dom";

const Intro = ({ onLogin }) => {
	const handleGoogleSignIn = () => {
		console.log("Sign In with Google");
		onLogin();
	};

	return (
		<div className="landing-page">
			<img id="intro-bg" src="./Image/Adili.png" alt="bg" />
			<div className="signin">
				<Link to="/home-page">
					<button onClick={handleGoogleSignIn} className="google-sign-in-btn">
						Sign in with Google
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Intro;

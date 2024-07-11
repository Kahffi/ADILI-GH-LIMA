import React from "react";
import "./intro.css"; // Pastikan Anda membuat file CSS ini juga

const Intro = ({ onLogin }) => {
	const handleGoogleSignIn = () => {
		console.log("Sign In with Google");
		onLogin();
	};

	return (
		<div className="landing-page">
			<img id="intro-bg" src="./Image/Adili.png" alt="bg" />
			<div className="signin">
				<button onClick={handleGoogleSignIn} className="google-sign-in-btn">
					Sign in with Google
				</button>
			</div>
		</div>
	);
};

export default Intro;

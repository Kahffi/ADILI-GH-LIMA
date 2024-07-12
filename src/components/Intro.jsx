import "./intro.css"; // Pastikan Anda membuat file CSS ini juga
import { Link } from "react-router-dom";
import { auth, signInWithGoogle, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const Intro = ({ onLogin }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	// const handleGoogleSignIn = () => {
	// 	console.log("Sign In with Google");
	// 	onLogin();
	// };

	return (
		<div className="landing-page">
			<img id="intro-bg" src="./Image/Adili.png" alt="bg" />
			<div className="signin">
				<Link to="/home-page">
					<button onClick={signInWithGoogle} className="google-sign-in-btn">
						Sign in with Google
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Intro;

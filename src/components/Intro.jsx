import "./intro.css"; 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Intro = ({ onLogin }) => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate(); 

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			if (currentUser) {
				onLogin(); 
				navigate("/home-page"); 
			}
		});
		return () => {
			unsubscribe();
		};
	}, [navigate, onLogin]); 

	const handleGoogleSignIn = async () => {
		try {
			await signInWithGoogle();
			onLogin(); 
			navigate("/home-page"); 
		} catch (error) {
			console.error("Google Sign In Error:", error);
		}
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

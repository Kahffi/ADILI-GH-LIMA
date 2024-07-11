import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAEJMIWS-Q3En9G3xbqqk46pnBCs606Y7E",
	authDomain: "gh-lima.firebaseapp.com",
	projectId: "gh-lima",
	storageBucket: "gh-lima.appspot.com",
	messagingSenderId: "763942727917",
	appId: "1:763942727917:web:96c087e42e62ccf8eb5ce4",
	measurementId: "G-YJL27X0Z0X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (setLoading) => {
	setLoading(true);
	signInWithPopup(auth, provider)
		.then((result) => {
			setLoading(false);
			sessionStorage.setItem("uid", result.user.uid);
			getUserByUID(result.user.uid).then((userById) => {
				if (userById === null || userById === {})
					addUser(result.user, sessionStorage.getItem("token"));
				else updateToken(sessionStorage.getItem("token"), result.user);
			});
		})
		.catch((error) => {
			setLoading(false);
			console.log(error);
		});
};

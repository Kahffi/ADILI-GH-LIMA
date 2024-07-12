import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
	return signInWithPopup(auth, provider);
};

export { auth, db, signInWithGoogle };

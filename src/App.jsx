import { useState } from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAEJMIWS-Q3En9G3xbqqk46pnBCs606Y7E",
	authDomain: "gh-lima.firebaseapp.com",
	projectId: "gh-lima",
	storageBucket: "gh-lima.appspot.com",
	messagingSenderId: "763942727917",
	appId: "1:763942727917:web:96c087e42e62ccf8eb5ce4",
	measurementId: "G-YJL27X0Z0X",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
	return <></>;
}

export default App;

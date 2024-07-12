import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import GMapView from "./components/pages/Mainpage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};
	return (
		<Router>
			<Navbar />
			<div className="content">
				<Routes>
					<Route
						path="/"
						element={
							!isLoggedIn ? <Intro onLogin={handleLogin} /> : <GMapView />
						}
					/>
					<Route path="home-page" element={<GMapView />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

import React, { useState } from "react";
import "./floatbutton.css";
import Popup from "./PopUp"; // File CSS untuk gaya float button
import Popup2 from "./PopUp2";
import Popup3 from "./PopUp3";

const FloatButton = ({ icon, popupContent, positionClass, popupType }) => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`float-button ${positionClass}`}>
			<button className="float-btn" onClick={togglePopup}>
				<img src={icon} alt="icon" className="button-icon" />
			</button>
			{isOpen && (
				<>
					{popupType === "popup1" && (
						<Popup content={popupContent} onClose={togglePopup} />
					)}
					{popupType === "popup2" && (
						<Popup2 content={popupContent} onClose={togglePopup} />
					)}
					{popupType === "popup3" && (
						<Popup3 content={popupContent} onClose={togglePopup} />
					)}
				</>
			)}
		</div>
	);
};

export default FloatButton;

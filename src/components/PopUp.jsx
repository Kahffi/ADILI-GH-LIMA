import React from "react";
import "./popup.css"; // File CSS untuk gaya popup
import seru from "../assets/seruu.png";
const Popup = ({ content, onClose }) => {
	return (
		<div className="popup">
			<span className="close-btn" onClick={onClose}>
				&times;
			</span>
			<div className="popup-header">
				<img id="icon" src={seru} alt="icon" />
				<h2>Cek Keadilan di Sekitar Anda!</h2>
				<p className="hdua">
					Masyarakat Indonesia di sekitar Anda menghadapi banyak tantangan
					hukum. Telusuri lebih jauh untuk memberikan bantuan, atau memohon
					pertolongan!
				</p>
			</div>
			<div className="popup-body">
				<div></div>
				{/* Tambahkan lebih banyak case card di sini sesuai kebutuhan */}
			</div>
		</div>
	);
};

export default Popup;

import React from 'react';
import './popup3.css'; // File CSS untuk gaya popup2
import hukumm from "../assets/hukumm.png"; // Sesuaikan dengan path ikon yang Anda gunakan

const Popup3 = ({ content, onClose }) => {
  return (
    <div className="popup3">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <div className="popup-header">
        <img src={hukumm} alt="icon" />
        <h2>Temui Ahli Hukum terbaik</h2>
        <p>Ada banyak ahli hukum yang dapat membantu menyelesaikan permasalahan hukum Anda dan seluruh Masyarakat Indonesia!</p>
      </div>
      <div className="popup-body">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Popup3;

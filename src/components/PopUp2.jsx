import React from 'react';
import './popup2.css'; // File CSS untuk gaya popup baru
import psii from '../assets/psii.png';

const Popup2 = ({ onClose }) => {
  return (
    <div className="popup2">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <div className="popup-header">
        <img id="icon" src={psii} alt="icon" />
        <h2>Temui Psikolog terbaik</h2>
        <p>
        Ada banyak ahli hukum yang dapat membantu menyelesaikan permasalahan hukum Anda dan seluruh Masyarakat Indonesia!
        </p>
      </div>
      <div className="popup-body">

        <div>
          {/* Tambahkan lebih banyak konten di sini sesuai kebutuhan */}
        </div>
      </div>
    </div>
  );
};

export default Popup2;

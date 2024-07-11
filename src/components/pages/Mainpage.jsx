import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GMapView = () => {
	const mapTilerApiKey = "KCwVKzPssuOk5YIeApg0"; // Ganti dengan API key Anda dari MapTiler

	return (
		<MapContainer
			center={[51.505, -0.09]}
			zoom={13}
			style={{ height: "80vh", width: "100%" }}
		>
			<TileLayer
				url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapTilerApiKey}`}
				attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default GMapView;

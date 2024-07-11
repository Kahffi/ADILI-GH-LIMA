import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMapEvents,
	useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
let currentPosition;

function FlyToPosition() {
	const map = useMap();

	// please change this line of code in the future
	setTimeout(() => {
		map.locate().on("locationfound", (e) => {
			map.flyTo(e.latlng, 16);
			currentPosition = e.latlng;
		});
		return null;
	}, 3000);
}

const GMapView = () => {
	const mapTilerApiKey = "KCwVKzPssuOk5YIeApg0"; // Ganti dengan API key Anda dari MapTiler

	return (
		<MapContainer
			id="map"
			center={[6.175, 106.8283]}
			zoom={13}
			style={{ height: "90vh", width: "100%" }}
		>
			<TileLayer
				url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapTilerApiKey}`}
				attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
			/>
			<FlyToPosition />
		</MapContainer>
	);
};

export default GMapView;

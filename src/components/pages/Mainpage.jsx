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
let currentPosition = null;

function FlyToPosition() {
	console.log("Running");
	const map = useMap();
	const [position, setPosition] = useState(null);
	useEffect(() => {
		map.locate().on("locationfound", (e) => {
			setPosition(e.latlng);
			map.flyTo(e.latlng, 16);
		});
	}, [map]);

	return position === null ? null : (
		<Marker position={position}>
			<Popup>Halo</Popup>
		</Marker>
	);
}

const GMapView = () => {
	const mapTilerApiKey = "KCwVKzPssuOk5YIeApg0"; // Ganti dengan API key Anda dari MapTiler
	const bounds = [
		[6.274449, 95.217575], // Barat Laut
		[-11.00832, 141.019444], // Tenggara
	];

	return (
		<MapContainer
			id="map"
			center={[-6.175392, 106.827153]}
			zoom={13}
			style={{ height: "88.5vh", width: "100%" }}
			maxBounds={bounds}
			maxBoundsViscosity={0.5}
		>
			<TileLayer
				url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapTilerApiKey}`}
				attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
			/>
			<FlyToPosition />
			<div>HALO SEMUANYA</div>
		</MapContainer>
	);
};

export default GMapView;

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
import FloatButton from "../FloatButton";
import { CaseForm } from "../CaseForm"; // Import CaseForm
import icon1 from "../../assets/seru.png";
import icon2 from "../../assets/hukum.png";
import icon3 from "../../assets/psi.png";
import { auth } from "../../firebase/firebase";
import L from "leaflet";

function FlyToPosition() {
	const map = useMap();
	const [position, setPosition] = useState(null);
	const [icon, setIcon] = useState(null);

	useEffect(() => {
		// Tunggu hingga auth.currentUser tersedia
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user && user.photoURL) {
				setIcon(createIcon(user.photoURL));
			}
		});

		// Bersihkan langganan saat komponen unmount
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		map.locate().on("locationfound", (e) => {
			setPosition(e.latlng);
			map.flyTo(e.latlng, 16);
		});
	}, [map]);

	return position === null || icon === null ? null : (
		<Marker position={position} icon={icon}>
			<Popup>Halo</Popup>
		</Marker>
	);
}

function createIcon(url) {
	return new L.Icon({
		iconUrl: url,
		iconSize: [30, 30],
		iconAnchor: [15, 30], // Center the icon correctly
		popupAnchor: [0, -30], // Adjust the popup position
	});
}

function CreateMarker({ setFormPosition, setShowForm }) {
	useMapEvents({
		dblclick: (e) => {
			console.log("Halos");
			setFormPosition(e.latlng);
			setShowForm(true);
		},
	});

	return null;
}

const GMapView = () => {
	const mapTilerApiKey = "KCwVKzPssuOk5YIeApg0"; // Ganti dengan API key Anda dari MapTiler
	const [markers, setMarkers] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [formPosition, setFormPosition] = useState(null);

	const bounds = [
		[6.274449, 95.217575], // Barat Laut
		[-11.00832, 141.019444], // Tenggara
	];

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setMarkers((prevMarkers) => [...prevMarkers, formPosition]);
		setShowForm(false);
		setFormPosition(null);
	};

	return (
		<div style={{ position: "relative" }}>
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
				<CreateMarker
					setFormPosition={setFormPosition}
					setShowForm={setShowForm}
				/>
				{markers.map((location, index) => (
					<Marker key={index} position={location}>
						<Popup>Marker {index + 1}</Popup>
					</Marker>
				))}
			</MapContainer>
			{showForm && <CaseForm onSubmit={handleFormSubmit} />}
			<div className="float-button float-button-1">
				<FloatButton
					icon={icon1}
					popupContent="Content for Button 1"
					popupType="popup1"
				/>
			</div>
			<div className="float-button float-button-2">
				<FloatButton
					icon={icon2}
					popupContent="Content for Button 2"
					popupType="popup3"
				/>
			</div>
			<div className="float-button float-button-3">
				<FloatButton
					icon={icon3}
					popupContent="Content for Button 3"
					popupType="popup2"
				/>
			</div>
		</div>
	);
};

export default GMapView;

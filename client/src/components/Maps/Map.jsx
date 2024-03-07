import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";

const telanganaGeoJSON = {
  // Replace with actual Telangana district GeoJSON data
  type: "FeatureCollection",
  features: [],
};

const MapComponent = () => {
  // Create a ref to store the drawn features
  const featureGroupRef = useRef(null);

  // Maintain state to track drawn feature details (optional for customization)
  const [drawnFeatures, setDrawnFeatures] = useState([]);

  // Define a function to handle draw and edit events
  const handleDraw = (e) => {
    const { layerType, layer } = e;

    // Optionally log coordinates for debugging
    console.log("Drawn layer coordinates:", layer.getLatLngs());

    // Access the drawn feature's details (optional for customization)
    const featureData = {
      type: layerType,
      coords: layer.getLatLngs(),
      // Add other properties as needed
    };

    // Update drawn features state (optional for storing and displaying)
    setDrawnFeatures((prevFeatures) => [...prevFeatures, featureData]);

    // You can also persist the data to a database or perform other actions here
  };

  return (
    <div className="bg-gray-100 p-4">
      <h3 className="text-xl font-bold text-center">
        Distance Travelled by Karyakartha today
      </h3>
      <h3>5.3km</h3>
      <div className="mt-8">
        <MapContainer
          center={[18.1124, 78.4467]} // Center on Telangana
          zoom={10}
          scrollWheelZoom={false}
          style={{ height: "300px", width: "100%" }} // Responsive size
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            data={telanganaGeoJSON}
            style={{ color: "blue", weight: 2 }}
          />{" "}
          {/* Highlight Telangana district */}
          <FeatureGroup ref={featureGroupRef}>
            <EditControl
              position="topright"
              onCreated={handleDraw}
              onEdited={handleDraw}
              onDeleted={handleDraw}
              draw={{
                rectangle: true,
                circle: true,
                circlemarker: true,
                // Add other drawing tools as needed
              }}
            />
          </FeatureGroup>
        </MapContainer>
      </div>
      {/* Optionally display drawn features details (customize as needed) */}
      {drawnFeatures.length > 0 && (
        <div>
          <h2>Drawn Features:</h2>
          <ul>
            {drawnFeatures.map((feature, index) => (
              <li key={index}>
                Type: {feature.type} - Coordinates: {feature.coords.toString()}
                {/* Display other properties as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MapComponent;

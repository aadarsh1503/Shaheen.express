import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ExtraServices from "./ExtraServices";

const ManPower = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);
  const [distance, setDistance] = useState(null);

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  // Fetch location suggestions from OpenStreetMap API
  const fetchSuggestions = async (query, type) => {
    try {
      if (query.length > 1) {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            query
          )}`
        );
        const data = await response.json();
        if (type === "pickup") {
          setPickupSuggestions(data);
        } else {
          setDropoffSuggestions(data);
        }
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Handle debounce for input fields
  const handleInputChange = (value, type) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    const timeout = setTimeout(() => fetchSuggestions(value, type), 300); // 300ms debounce
    setDebounceTimeout(timeout);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion, type) => {
    const location = `${suggestion.display_name}`;
    const coords = {
      lat: parseFloat(suggestion.lat),
      lng: parseFloat(suggestion.lon),
    };

    if (type === "pickup") {
      setPickupLocation(location);
      setPickupCoords(coords);
      setPickupSuggestions([]); // Clear suggestions
    } else {
      setDropoffLocation(location);
      setDropoffCoords(coords);
      setDropoffSuggestions([]); // Clear suggestions
    }
  };

  // Calculate distance between two coordinates
  useEffect(() => {
    if (pickupCoords && dropoffCoords) {
      const rad = (x) => (x * Math.PI) / 180;
      const R = 6371; // Earth's radius in km
      const dLat = rad(dropoffCoords.lat - pickupCoords.lat);
      const dLng = rad(dropoffCoords.lng - pickupCoords.lng);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(pickupCoords.lat)) *
          Math.cos(rad(dropoffCoords.lat)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      setDistance((R * c).toFixed(2)); // Distance in km
    }
  }, [pickupCoords, dropoffCoords]);

  // Component to dynamically adjust map bounds
  const AdjustMapBounds = ({ pickupCoords, dropoffCoords }) => {
    const map = useMap();

    useEffect(() => {
      if (pickupCoords && dropoffCoords) {
        const bounds = [
          [pickupCoords.lat, pickupCoords.lng],
          [dropoffCoords.lat, dropoffCoords.lng],
        ];
        map.fitBounds(bounds, { padding: [50, 50] }); // Adjust map bounds to include both markers
      } else if (pickupCoords) {
        map.setView([pickupCoords.lat, pickupCoords.lng], 14); // Center on pickup
      } else if (dropoffCoords) {
        map.setView([dropoffCoords.lat, dropoffCoords.lng], 14); // Center on dropoff
      }
    }, [pickupCoords, dropoffCoords, map]);

    return null;
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-gray-100">
      {/* Input Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold">
          Where should we pick up and drop off your items?
        </h2>

        {/* Pickup Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Pickup Location"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={pickupLocation}
            onChange={(e) => {
              setPickupLocation(e.target.value);
              handleInputChange(e.target.value, "pickup");
            }}
          />
          {pickupSuggestions.length > 0 && (
            <ul className="absolute left-0 w-full bg-white border border-gray-300 shadow-md max-h-60 overflow-y-auto z-10">
              {pickupSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(suggestion, "pickup")}
                >
                  {suggestion.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dropoff Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Drop-off Location"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dropoffLocation}
            onChange={(e) => {
              setDropoffLocation(e.target.value);
              handleInputChange(e.target.value, "dropoff");
            }}
          />
          {dropoffSuggestions.length > 0 && (
            <ul className="absolute left-0 w-full bg-white border border-gray-300 shadow-md max-h-60 overflow-y-auto z-10">
              {dropoffSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(suggestion, "dropoff")}
                >
                  {suggestion.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Distance */}
        {distance && (
          <p className="text-lg font-semibold text-green-600">
            Total Distance: {distance} km
          </p>

          
        )}
        <ExtraServices />
      </div>
      
      {/* Map Section */}
      <div className="w-full z-0  lg:w-1/2 h-[500px] rounded-lg overflow-hidden">
        <MapContainer
          center={[20, 77]} // Default: India center
          zoom={5}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {pickupCoords && <Marker position={pickupCoords} />}
          {dropoffCoords && <Marker position={dropoffCoords} />}
          <AdjustMapBounds pickupCoords={pickupCoords} dropoffCoords={dropoffCoords} />
        </MapContainer>
      </div>
    </div>
  );
};

export default ManPower;

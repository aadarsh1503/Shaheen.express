import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [mapVisible, setMapVisible] = useState(true); // Track map visibility

  // Toast utility for showing notifications
  const showToast = (message, type = "warning") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  // Fetch location suggestions from OpenStreetMap API
  const fetchSuggestions = async (query, type) => {
    try {
      if (query.length > 1) {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            query
          )}&countrycodes=BH&accept-language=en`
        );
        const data = await response.json();
  
        const bahrainSuggestions = data.filter((item) =>
          item.display_name.toLowerCase().includes("bahrain")
        );
  
        if (bahrainSuggestions.length === 0) {
          showToast("No locations found in Bahrain. Please try again.", "error");
        }
  
        if (type === "pickup") {
          setPickupSuggestions(bahrainSuggestions);
        } else {
          setDropoffSuggestions(bahrainSuggestions);
        }
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
  

  // Handle debounce for input fields
  const handleInputChange = (value, type) => {
    if (value.length > 1) {
      fetchSuggestions(value, type);
    }
    setMapVisible(true); // Ensure the map is visible when editing inputs
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion, type) => {
    const location = `${suggestion.display_name}`;
    const coords = {
      lat: parseFloat(suggestion.lat),
      lng: parseFloat(suggestion.lon),
    };
  
    const hasSpecificDetails = location.split(",").length > 3; // Check for more detailed address
  
    if (type === "pickup") {
      setPickupLocation(location);
      setPickupCoords(coords);
      setPickupSuggestions([]); // Clear suggestions
    } else {
      setDropoffLocation(location);
      setDropoffCoords(coords);
      setDropoffSuggestions([]); // Clear suggestions
    }
  
    // Show toast for incomplete location details
    if (!hasSpecificDetails) {
      showToast(
        "Please specify your location with area and street details.",
        "warning"
      );
    }
  };
  <TileLayer
  url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
  attribution="&copy; OpenStreetMap contributors, Tiles style by OSM France"
/>


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
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Correctly define c
        setDistance((R * c).toFixed(2)); // Calculate distance in km
      }
  }, [pickupCoords, dropoffCoords]);

  // Component to dynamically adjust map bounds
  const AdjustMapBounds = ({ pickupCoords, dropoffCoords }) => {
    const map = useMap();

    useEffect(() => {
        // Show toast for manually entered pickup location
        if (
          pickupLocation &&
          !pickupCoords &&
          pickupLocation.length > 5 &&
          !pickupLocation.toLowerCase().includes("bahrain")
        ) {
          showToast("Please enter a valid location in Bahrain.", "error");
        }
      
        // Show toast for manually entered dropoff location
        if (
          dropoffLocation &&
          !dropoffCoords &&
          dropoffLocation.length > 5 &&
          !dropoffLocation.toLowerCase().includes("bahrain")
        ) {
          showToast("Please enter a valid location in Bahrain.", "error");
        }
      }, [pickupLocation, dropoffLocation, pickupCoords, dropoffCoords]);

    return null;
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-gray-100">
      {/* Toast Container */}


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
            onFocus={() => setMapVisible(true)} // Show map on focus
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
            onFocus={() => setMapVisible(true)} // Show map on focus
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
      {mapVisible && (
        <div className="w-full lg:-mt-32 z-0 lg:w-1/2 h-[500px] rounded-lg overflow-hidden">
         <MapContainer
  center={[26.2235, 50.5822]} // Default: Bahrain
  zoom={12}
  style={{ width: "100%", height: "100%" }}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
    attribution="&copy; OpenStreetMap contributors, Tiles style by OSM France"
  />
  {pickupCoords && <Marker position={pickupCoords} />}
  {dropoffCoords && <Marker position={dropoffCoords} />}
  <AdjustMapBounds pickupCoords={pickupCoords} dropoffCoords={dropoffCoords} />
</MapContainer>

        </div>
      )}
    </div>
  );
};

export default ManPower;

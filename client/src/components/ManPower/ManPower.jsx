import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Map1 from "./Map1.jpg";
import SummaryComponent from "./SummaryComponent";

const pickupIcon = new L.Icon({
  iconUrl: Map1,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const dropoffIcon = new L.Icon({
  iconUrl: "/path-to-your-dropoff-image.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const ManPower = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);
  const [distance, setDistance] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(""); // State for date
  const [selectedTime, setSelectedTime] = useState(""); // State for time

  const vehicles = [
    { id: 1, label: "Walker", icon: "🚶", charge: "Kwd 30" },
    { id: 2, label: "Rider", icon: "🏍️", charge: "Kwd 50" },
    { id: 3, label: "Private Car/Van Driver", icon: "🚘", charge: "Kwd 110" },
  ];

  const navigate = useNavigate();

  const fetchSuggestions = async (query, type) => {
    try {
      if (query.length > 1) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout after 5 seconds
        
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=BH&accept-language=en`,
          { signal: controller.signal }
        );
        
        const data = await response.json();
        clearTimeout(timeoutId);
        
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
      if (error.name === 'AbortError') {
        console.log('Request timed out');
      } else {
        console.error("Error fetching suggestions:", error);
      }
    }
  };

  // Handle debounce for input fields
  let debounceTimer;

  const handleInputChange = (value, type) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (value.length > 1) {
        fetchSuggestions(value, type);
      }
    }, 300); // Waits 300ms after the user stops typing
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion, type) => {
    const location = `${suggestion.display_name}`;
    const coords = {
      lat: parseFloat(suggestion.lat),
      lng: parseFloat(suggestion.lon),
    };

    const hasSpecificDetails = location.split(",").length > 3;

    if (type === "pickup") {
      setPickupLocation(location);
      setPickupCoords(coords);
      setPickupSuggestions([]);
    } else {
      setDropoffLocation(location);
      setDropoffCoords(coords);
      setDropoffSuggestions([]);
    }

    if (!hasSpecificDetails) {
      showToast(
        "Please specify your location with area and street details.",
        "warning"
      );
    }
  };

  // Function to convert 24-hour format to 12-hour AM/PM format
  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(":");
    const hours = parseInt(hour);
    const isPM = hours >= 12;
    const formattedHour = hours % 12 || 12; // Convert to 12-hour format
    const formattedTime = `${formattedHour}:${minute} ${isPM ? "PM" : "AM"}`;
    return formattedTime;
  };

  const handleSubmit = () => {
    if (pickupLocation && dropoffLocation && selectedVehicle && selectedDate && selectedTime) {
      const selectedVehicleDetails = vehicles.find((v) => v.id === selectedVehicle);
  
      const data = {
        pickupLocation,
        dropoffLocation,
        vehicle: {
          label: selectedVehicleDetails.label,
          charge: parseFloat(selectedVehicleDetails.charge.replace("Kwd ", "")), // Convert charge to number
        },
        distance: parseFloat(distance), // Ensure distance is a number
        selectedDate,
        selectedTime: convertTo12HourFormat(selectedTime), // Convert time to AM/PM format
      };
  
      setSubmittedData(data);
      navigate("/summaryComponent", { state: { submittedData: data } });
    } else {
      alert("Please select both pickup and dropoff locations, a vehicle, and a date/time.");
    }
  };
  

  useEffect(() => {
    if (pickupCoords && dropoffCoords) {
      const rad = (x) => (x * Math.PI) / 180;
      const R = 6371;
      const dLat = rad(dropoffCoords.lat - pickupCoords.lat);
      const dLng = rad(dropoffCoords.lng - pickupCoords.lng);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(pickupCoords.lat)) *
          Math.cos(rad(dropoffCoords.lat)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      setDistance((R * c).toFixed(2));
    }
  }, [pickupCoords, dropoffCoords]);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-gray-100">
      {/* Input Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold">
          Where should we pick up and drop off your items?
        </h2>

        {/* Date and Time Inputs */}
        <div className="flex gap-4">
          {/* Date Input */}
          <div className="relative w-1/2">
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          {/* Time Input */}
          <div className="relative w-1/2">
            <input
              type="time"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />
          </div>
        </div>

        {/* Pickup Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Pickup Location"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            value={pickupLocation}
            onChange={(e) => {
              setPickupLocation(e.target.value);
              handleInputChange(e.target.value, "pickup");
            }}
          />
          {pickupSuggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded shadow-lg max-h-60 overflow-y-auto">
              {pickupSuggestions.map((suggestion) => (
                <div
                  key={suggestion.place_id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion, "pickup")}
                >
                  {suggestion.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dropoff Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Dropoff Location"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            value={dropoffLocation}
            onChange={(e) => {
              setDropoffLocation(e.target.value);
              handleInputChange(e.target.value, "dropoff");
            }}
          />
          {dropoffSuggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded shadow-lg max-h-60 overflow-y-auto">
              {dropoffSuggestions.map((suggestion) => (
                <div
                  key={suggestion.place_id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion, "dropoff")}
                >
                  {suggestion.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Vehicle Selection */}
        <div className="grid-cols-3 grid">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`cursor-pointer p-4 hover:text-white border rounded-lg hover:bg-dgreen ${
                selectedVehicle === vehicle.id ? "bg-red-100" : ""
              }`}
              onClick={() => setSelectedVehicle(vehicle.id)}
            >
              <div className="flex items-center justify-center text-xl">
                {vehicle.icon}
              </div>
              <p className="text-center ">{vehicle.label}</p>
              <p className="text-center ">{vehicle.charge}</p>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
         className="w-full py-3 bg-dgreen text-white hover:text-dgreen hover:ring-2 hover:ring-dgreen font-semibold rounded-lg hover:bg-white"

          onClick={handleSubmit}
        >
          Proceed
        </button>
      </div>

      {/* Map Section */}
      <div className="w-full z-0 lg:w-1/2 h-[500px] rounded-lg overflow-hidden">
        <MapContainer
          center={[26.2235, 50.5822]}
          zoom={12}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors, Tiles style by OSM France"
          />
          {pickupCoords && (
            <Marker position={pickupCoords} icon={pickupIcon}>
              <Popup>{pickupLocation}</Popup>
            </Marker>
          )}
          {dropoffCoords && (
            <Marker position={dropoffCoords} icon={dropoffIcon}>
              <Popup>{dropoffLocation}</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      {/* Summary Component */}
      {submittedData && <SummaryComponent data={submittedData} />}
    </div>
  );
};

export default ManPower;

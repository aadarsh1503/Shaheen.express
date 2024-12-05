import React, { useState } from "react";

const ExtraServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [mediumBoxes, setMediumBoxes] = useState(0);
  const [largeBoxes, setLargeBoxes] = useState(0);
  const [submittedData, setSubmittedData] = useState(null);

  // Box prices
  const mediumBoxPrice = 159.0; // Price for a medium box (in MYR)
  const largeBoxPrice = 159.0; // Price for a large box (in MYR)
  const deliveryCharge = 31.8; // Delivery charge

  // Total Calculation
  const calculateTotal = () => {
    const mediumBoxTotal = mediumBoxes * mediumBoxPrice;
    const largeBoxTotal = largeBoxes * largeBoxPrice;
    return mediumBoxTotal + largeBoxTotal + deliveryCharge;
  };
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [manpowerCounts, setManpowerCounts] = useState({
    walker: 0,
    rider: 0,
    private_car: 0,
  });

  // Vehicle options and prices
  const vehicles = [
    { id: "walker", label: "Walker", icon: "🚶" },
    { id: "rider", label: "Rider", icon: "🏍️" },
    { id: "private_car", label: "Private Car / Van Driver", icon: "🚗" },
  ];

  // Handle manpower count increase
  const increaseManpower = (vehicleId) => {
    setManpowerCounts((prevCounts) => ({
      ...prevCounts,
      [vehicleId]: prevCounts[vehicleId] + 1,
    }));
  };

  // Handle manpower count decrease
  const decreaseManpower = (vehicleId) => {
    setManpowerCounts((prevCounts) => ({
      ...prevCounts,
      [vehicleId]: prevCounts[vehicleId] > 0 ? prevCounts[vehicleId] - 1 : 0,
    }));
  };

  const handleSubmit = () => {
    // Create data summary on submission
    const data = {
      mediumBoxCount: mediumBoxes,
      mediumBoxTotal: mediumBoxes * mediumBoxPrice,
      largeBoxCount: largeBoxes,
      largeBoxTotal: largeBoxes * largeBoxPrice,
      deliveryCharge,
      total: calculateTotal(),
    };
    setSubmittedData(data);

    // Reset form and hide it
    setSelectedService(null);
    setMediumBoxes(0);
    setLargeBoxes(0);
  };

  return (
    <div className="mt-10">
        <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Choose Your Vehicle
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className={`p-4 border rounded-lg shadow-md cursor-pointer ${
              selectedVehicle === vehicle.id
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setSelectedVehicle(vehicle.id)}
          >
            <div className="text-4xl text-center mb-2">{vehicle.icon}</div>
            <p className="text-center text-sm font-medium">{vehicle.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {vehicles.map((vehicle) => (
          <div
            key={`counter-${vehicle.id}`}
            className={`mt-4 p-4 border rounded-lg flex items-center justify-between ${
              selectedVehicle === vehicle.id
                ? "block"
                : "hidden"
            }`}
          >
            <span className="text-sm font-medium">
              Manpower for {vehicle.label}
            </span>
            <div className="flex items-center space-x-4">
              <button
                className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center hover:bg-gray-400"
                onClick={() => decreaseManpower(vehicle.id)}
              >
                -
              </button>
              <span className="text-lg font-semibold">
                {manpowerCounts[vehicle.id]}
              </span>
              <button
                className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center hover:bg-gray-400"
                onClick={() => increaseManpower(vehicle.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Add Extra Services for Your Shipment
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { id: "boxes", label: "Boxes", icon: "📦" },
          { id: "wrapping", label: "Wrapping", icon: "➕" },
          { id: "assembly", label: "Assembly / Disassembly", icon: "🔧" },
          { id: "insurance", label: "Insurance", icon: "🛡️" },
          { id: "stairCarry", label: "Stair Carry", icon: "🪜" },
          { id: "longPush", label: "Long Push", icon: "📏" },
        ].map((service) => (
          <div
            key={service.id}
            className={`p-4 border rounded-lg shadow-md relative group cursor-pointer ${
              selectedService === service.id ? "bg-gray-200" : "bg-white"
            }`}
            onClick={() => setSelectedService(service.id)}
          >
            <div className="text-4xl text-center mb-2">{service.icon}</div>
            <p className="text-center text-sm font-medium">{service.label}</p>
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 transition">
              <button
                className="bg-white text-black px-4 py-1 rounded-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service.id);
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Conditional Form for Boxes */}
      {selectedService === "boxes" && (
  <div className="fixed top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
    <h3 className="text-lg font-semibold mb-4 text-center">Select Box Types</h3>

    {/* Medium Boxes Counter */}
    <div className="flex items-center justify-between mb-4">
      <p className="text-sm font-medium">Medium Box</p>
      <div className="flex items-center space-x-4">
        <button
          className="px-2 py-1 bg-gray-300 rounded-lg"
          onClick={() => setMediumBoxes((prev) => Math.max(0, prev - 1))}
        >
          -
        </button>
        <span>{mediumBoxes}</span>
        <button
          className="px-2 py-1 bg-gray-300 rounded-lg"
          onClick={() => setMediumBoxes((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <span className="text-sm text-gray-500">MYR {mediumBoxes * mediumBoxPrice}</span>
    </div>

    {/* Large Boxes Counter */}
    <div className="flex items-center justify-between mb-4">
      <p className="text-sm font-medium">Large Box</p>
      <div className="flex items-center space-x-4">
        <button
          className="px-2 py-1 ml-4 bg-gray-300 rounded-lg"
          onClick={() => setLargeBoxes((prev) => Math.max(0, prev - 1))}
        >
          -
        </button>
        <span>{largeBoxes}</span>
        <button
          className="px-2 py-1 bg-gray-300 rounded-lg"
          onClick={() => setLargeBoxes((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <span className="text-sm text-gray-500">MYR {largeBoxes * largeBoxPrice}</span>
    </div>

    {/* Delivery Charge Section */}
    {mediumBoxes > 0 || largeBoxes > 0 ? (
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium">Delivery Charge</p>
        <span className="text-sm text-gray-500">MYR {deliveryCharge.toFixed(2)}</span>
      </div>
    ) : null}

    {/* Total Price Display */}
    <div className="mb-4">
      <p className="text-lg font-medium">Total: MYR {calculateTotal().toFixed(2)}</p>
    </div>

    {/* Buttons */}
    <div className="flex justify-between">
      {/* Cancel Button */}
      <button
        className="w-1/3 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
        onClick={() => {
          setSelectedService(null); // Close the modal
          setMediumBoxes(0); // Reset medium boxes count
          setLargeBoxes(0); // Reset large boxes count
        }}
      >
        Cancel
      </button>

      {/* Submit Button */}
      <button
        className="w-1/3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  </div>
)}


      {/* Display Submitted Data */}
      {submittedData && (
  <div className="mt-6 p-4 border rounded-lg bg-gray-50">
    <h3 className="text-lg font-semibold mb-4">Summary</h3>
    <p className="text-sm">
      <strong>Medium Box:</strong> x {submittedData.mediumBoxCount || 0} MYR{" "}
      {(submittedData.mediumBoxTotal || 0).toFixed(2)}
    </p>
    <p className="text-sm">
      <strong>Large Box:</strong> x {submittedData.largeBoxCount || 0} MYR{" "}
      {(submittedData.largeBoxTotal || 0).toFixed(2)}
    </p>
    <p className="text-sm">
      <strong>Delivery Charge:</strong> MYR {(submittedData.deliveryCharge || 0).toFixed(2)}
    </p>
    <p className="text-sm font-bold mt-2">
      Total: MYR {(submittedData.total || 0).toFixed(2)}
    </p>

    {/* Proceed to Payment Button */}
    <button
      className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600"
      onClick={() => {
        // Add your payment page navigation logic here
        console.log("Proceed to Payment");
      }}
    >
      Proceed to Payment
    </button>
  </div>


      )}
    </div>
  );
};

export default ExtraServices;

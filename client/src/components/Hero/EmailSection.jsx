import React, { useState } from "react";

const EmailSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const topics = [
    { label: "Customer care", email: "customercare@example.com" },
    { label: "Seller Care", email: "sellercare@example.com" },
    { label: "Business enquiries", email: "business@example.com" },
  ];

  return (
    <div className="bg-[#f0f8ff] lg:h-[500px]">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto justify-between items-center p-8 rounded-md">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-dgreen">
            Ready to Grow With Us?
          </h2>
          <p className="text-gray-500 mt-2">
            We are more than happy to discuss with you!
          </p>
          {/* Email Section */}
          <div className="mt-6 relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="bg-gray-100  rounded-md ">
                <img
                  src="https://gtl.id/icon_email.svg"
                  alt="Email Icon"
                  className="h-12 w-12"
                />
              </div>
              <span className="text-dgreen font-semibold">EMAIL</span>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute mt-2 w-56 bg-white rounded-md shadow-lg">
                {topics.map((topic, index) => (
                  <a
                    key={index}
                    href={`mailto:${topic.email}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {topic.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://gtl.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_7.c6d64f8d.jpg&w=1080&q=75"
            alt="Placeholder"
            className="rounded-md w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailSection;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i4 from "./i4.jpg";
import i6 from "./i6.jpg";

const EmailSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  const topics = [
    { label: "Customer care", email: "ask@shaheen.express" },
    { label: "Seller Care", email: "contact@shaheen.express" },
    { label: "Business enquiries", email: "info@shaheen.express" },
  ];

  const images = [i1, i2, i3, i4, i6];

  // Detect RTL mode on component mount
  useEffect(() => {
    const dir = document.documentElement.dir;
    setIsRTL(dir === "rtl");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
    >
      <div className="bg-[#f0f8ff] lg:h-[500px]">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto justify-between items-center p-8 rounded-md">
          {/* Left Side */}
          <div className="w-full md:w-1/2 ">
            <h2 className="text-xl md:text-2xl font-bold text-dgreen">
              Ready to Grow With Us?
            </h2>
            <p className="text-gray-500 mt-2">
              We are more than happy to discuss with you!
            </p>
            {/* Email Section */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="bg-gray-100 mt-4 rounded-md">
                <img
                  src="https://gtl.id/icon_email.svg"
                  alt="Email Icon"
                  className="h-12 px-1 w-12"
                />
              </div>
              <span className="text-dgreen mt-4 font-semibold">EMAIL</span>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute mt-2 z-50 w-56 bg-white rounded-md shadow-lg">
                {topics.map((topic, index) => (
                  <a
                    key={index}
                    href={`mailto:${topic.email}`}
                    className="block px-4 py-2 font-poppins text-gray-700 hover:bg-gray-100"
                  >
                    {topic.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
            {/* Show only the first image */}
            <img
              src={images[4]}
              alt="Static Slide"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmailSection;

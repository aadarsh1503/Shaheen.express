import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i4 from "./i4.jpg";
import i6 from "./i6.jpg";

const EmailSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const topics = [
    { label: "Customer care", email: "ask@shaheen.express" },
    { label: "Seller Care", email: "contact@shaheen.express" },
    { label: "Business enquiries", email: "info@shaheen.express" },
  ];

  const images = [i1, i2, i3, i4, i6];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Automatic slider functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

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
                <div className="bg-gray-100 rounded-md">
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
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
            {/* Image Carousel with Slide Animation */}
            <div className="relative w-full h-full overflow-hidden">
              <motion.div
                key={currentImageIndex} // Add key to trigger re-render for animation
                className="flex transition-all duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-full h-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      duration: 0.5,
                    }}
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-dgreen" : "bg-gray-300"}`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmailSection;

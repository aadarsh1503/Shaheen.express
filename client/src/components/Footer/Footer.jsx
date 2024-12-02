import React from "react";
import { useState } from "react";
import i1 from "./i1.png";
import "./Footer.css"

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const emailOptions = [
    { label: "Customer Care", email: "ask@shaheen.express" },
    { label: "Seller Care", email: "contact@shaheen.express" },
    { label: "Business Enquiries", email: "info@shaheen.express" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <footer className="bg-white text-gray-600 text-sm py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Column 1 */}
        <div className="group">
          <h3 className="text-gray-800 font-bold uppercase mb-4 group-hover:text-dgreen transition-colors duration-300">
            SHAHEEN EXPRESS
          </h3>
          <p className="group-hover:scale-105 transition-transform duration-300">
            Shaheen Express is the key to your seamless logistics experience and helps you
            to focus on business growth.
          </p>
        </div>

        {/* Column 2 */}
        <div className="group">
          <h3 className="text-gray-800 font-bold uppercase mb-4 group-hover:text-dgreen transition-colors duration-300">
            HEADQUARTER
          </h3>
          <p className="group-hover:translate-x-2 transition-transform duration-300">
            Flat 22, Building 661, Block 712, Road 1208, P.O. Box 54121, Manama, Kingdom of Bahrain
          </p>
        </div>

        {/* Column 3 */}
        <div className="group">
          <h3 className="text-gray-800 font-bold uppercase mb-4 group-hover:text-dgreen transition-colors duration-300">
            INFORMATION
          </h3>
          <ul className="space-y-2">
            {[
              { name: "About Us", href: "/aboutUs" },
              { name: "Services", href: "/#services" },
              { name: "Why Us", href: "/#why-us" },
              { name: "FAQ", href: "/faq" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms and Conditions", href: "/t&c" },
              { name: "Tracking", href: "/tracking-Form" },
              { name: "Careers", href: "#careers" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-dgreen hover:text-gray-800 hover:underline transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-gray-800 font-bold uppercase mb-4">CONTACT</h3>
          <p>Got a question? We’d love to hear from you!</p>

          <div
            className="flex items-center space-x-2 mt-4 cursor-pointer group"
            onClick={toggleDropdown}
          >
            <div className="bg-gray-100 rounded-full shadow-md transform group-hover:scale-110 transition-transform duration-300">
              <img
                src="https://gtl.id/icon_email.svg"
                alt="Email Icon"
                className="h-8 w-8"
              />
            </div>
            <span className="text-sm font-semibold text-dgreen group-hover:text-gray-800 transition-colors duration-300">
              Email
            </span>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="mt-2 bg-white shadow-md rounded-lg p-4 w-56 animate-fadeIn"
            >
              <ul>
                {emailOptions.map((option, index) => (
                  <li key={index} className="mb-2 last:mb-0">
                    <a
                      href={`mailto:${option.email}`}
                      className="flex flex-col text-sm hover:text-dgreen transition-colors duration-300"
                    >
                      <span className="font-semibold">{option.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center">
        <img
          src={i1} // Replace with your logo
          alt="Logo"
          className="mx-auto w-32 h-20 mb-4 hover:rotate-6 transition-transform duration-300"
        />
        <p className="hover:text-dgreen transition-colors duration-300">
          Copyright © 2024 SHAHEEN EXPRESS, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

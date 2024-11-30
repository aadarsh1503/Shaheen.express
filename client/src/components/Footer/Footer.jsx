import React from "react";
import { useState } from "react";
import i1 from "./i1.png"

const Footer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const emailOptions = [
      { label: "Customer Care", email: "customercare@example.com" },
      { label: "Seller Care", email: "sellercare@example.com" },
      { label: "Business Enquiries", email: "business@example.com" },
    ];
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <footer className="bg-white text-gray-600 text-sm py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Column 1 */}
        <div>
          <h3 className="text-gray-800 font-bold uppercase mb-4">SHAHEEN EXPRESS</h3>
          <p>
            Shaheen Express is the key to your seamless logistics experience and helps you
            to focus on business growth.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-gray-800 font-bold uppercase mb-4">HEADQUARTER</h3>
          <p>
            Jl. Mayjen DI Panjaitan No. 1C, RT.01 / RW.06, Kebon Pala, Kec. Makasar,
            Jakarta Timur, DKI Jakarta 13650
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-gray-800 font-bold uppercase mb-4">INFORMATION</h3>
          <ul className="space-y-2">
            <li>
              <a href="/aboutUs" className="text-dgreen hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/#services" className="text-dgreen hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/#why-us" className="text-dgreen hover:underline">
                Why Us
              </a>
            </li>
            <li>
              <a href="/faq" className="text-dgreen hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-dgreen hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/t&c" className="text-dgreen hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/tracking-Form" className="text-dgreen hover:underline">
                Tracking
              </a>
            </li>
            <li>
              <a href="#careers" className="text-dgreen hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
      <h3 className="text-gray-800 font-bold uppercase mb-4">CONTACT</h3>
      <p>Got a question? We’d love to hear from you!</p>
      
      <div className="flex items-center space-x-2 mt-4 cursor-pointer" onClick={toggleDropdown}>
        <div className="bg-gray-100 rounded-full shadow-md">
        <img
                  src="https://gtl.id/icon_email.svg"
                  alt="Email Icon"
                  className="h-8 w-8"
                />
        </div>
        <span className="text-sm font-semibold text-dgreen">Email</span>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="mt-2 bg-white shadow-md rounded-lg p-4 w-56">
          <ul>
            {emailOptions.map((option, index) => (
              <li key={index} className="mb-2 last:mb-0">
                <a
                  href={`mailto:${option.email}`}
                  className="flex flex-col text-sm hover:text-dgreen"
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
          className="mx-auto w-32 h-20 mb-4"
        />
        <p>
          Copyright © 2023 GOTO LOGISTICS (PT. Paket Anak Bangsa, PT. Swift Logistics
          Solutions), All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for React Router navigation
import i1 from "./i1.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const emailOptions = [
    { label: "Customer Care", email: "ask@shaheen.express" },
    { label: "Seller Care", email: "contact@shaheen.express" },
    { label: "Business Enquiries", email: "info@shaheen.express" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-dgreen py-10">
      <nav className="text-white bg-dgreen fixed top-0 shadow-lg w-full z-50">
        <div className="container mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src={i1} // Replace with your logo
                alt="Logo"
                className="h-22 w-44"
              />
            </a>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex font-semibold items-center space-x-6 text-sm uppercase tracking-wide">
            <Link to="/#services" className="hover:text-gray-200">
              Services
            </Link>
            <Link to="/#why-us" className="hover:text-gray-200">
              Why Us
            </Link>
            <Link to="/#clients" className="hover:text-gray-200">
              Clients
            </Link>
            <Link to="/#partners" className="hover:text-gray-200">
              Partners
            </Link>
            <Link to="/faq" className="hover:text-gray-200">
              FAQ
            </Link>
            <Link to="/privacy-policy" className="hover:text-gray-200">
              Privacy Policy
            </Link>
            <Link to="/T&C" className="hover:text-gray-200">
              T&C
            </Link>
            <Link to="/tracking-Form" className="hover:text-gray-200">
              Tracking
            </Link>
            <a
              href="https://www.talentportal.bh/#pills-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-darkred hover:text-lightgreen font-semibold hover:underline"
            >
              <span className="hover:text-gray-200">Careers</span>
            </a>

            {/* Email Section */}
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                <div className="rounded-full shadow-md">
                  <img
                    src="https://gtl.id/icon_email.svg"
                    alt="Email Icon"
                    className="h-4 w-4"
                  />
                </div>
                <span className="text-sm font-semibold">EMAIL</span>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-lg p-4 w-44">
                  <ul>
                    {emailOptions.map((option, index) => (
                      <li key={index} className="mb-2">
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

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            {!isMobileMenuOpen ? (
              <FaBars
                className="text-2xl cursor-pointer"
                onClick={toggleMobileMenu}
              />
            ) : (
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dgreen text-white text-sm uppercase font-semibold tracking-wide py-4 space-y-4">
            <Link
              to="/#services"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/#why-us"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Why Us
            </Link>
            <Link
              to="/#clients"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Clients
            </Link>
            <Link
              to="/#partners"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Partners
            </Link>
            <Link
              to="/faq"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              FAQ
            </Link>
            <Link
              to="/privacy-policy"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Privacy Policy
            </Link>
            <Link
              to="/T&C"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              T&C
            </Link>
            <Link
              to="/tracking-Form"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Tracking
            </Link>
            <a
              href="https://www.talentportal.bh/#pills-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              Careers
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import HomeService from "./HomeService";
import LogisticsSection from "./LogisticsSection";
import Testimonials from "./Testimonials";
import EmailSection from "./EmailSection";
import ClientsSection from "./ClientsSection";
import Partners from "./Partners";
import i7 from "./i7.jpg";

const Hero = () => {
  return (
    <>
      <div className="bg-dgreen font-poppins">
        <motion.section
          className="flex flex-col max-w-7xl mx-auto lg:flex-row items-center justify-between px-8 lg:px-20 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Side Content */}
          <motion.div
            className="text-left text-white space-y-6 lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <h1 className="text-4xl lg:text-7xl mb-4 font-bold leading-tight">
              The Key to Your
              <br />
              Seamless
              <br />
              Logistics
              <br /> Experience
            </h1>
            <motion.a
              href="/aboutUs"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-white text-dgreen font-semibold text-lg py-6 px-12 rounded shadow-lg hover:bg-dgreen hover:text-white transition duration-300 hover:outline hover:outline-2 hover:outline-white">
                LEARN MORE
              </button>
            </motion.a>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="lg:w-1/2 mt-8 lg:mt-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <img
              src={i7} // Replace this with your image URL
              alt="Logistics warehouse"
              className="rounded-lg lg:h-96 h-full p-2"
            />
          </motion.div>
        </motion.section>
      </div>

      {/* Add scroll animations for sections */}
     
        <HomeService />
      
        <LogisticsSection />
    
        <ClientsSection />
     
        <Partners />
    
        <Testimonials />
     
        <EmailSection />
    
    </>
  );
};

export default Hero;

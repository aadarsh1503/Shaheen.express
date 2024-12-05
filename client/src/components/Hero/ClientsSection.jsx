import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import i1 from "./images/i1.png";
import i2 from "./images/i2.png";
import i3 from "./images/i3.png";
import i4 from "./images/i4.png";
import i5 from "./images/i5.png";
import i6 from "./images/i6.png";
import i7 from "./images/i7.png";
import i8 from "./images/i8.png";
import i9 from "./images/i9.png";
import i10 from "./images/i10.png";

const ClientsSection = () => {
  return (
    <motion.section
      id="clients"
      className="py-12 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
    >

      <h2 className="text-center text-sm text-dgreen font-bold tracking-wide uppercase">
        Clients
      </h2>
      <p className="text-center text-black text-2xl mb-4 font-semibold my-4">
        We’re Happy to Grow Together
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 justify-items-center items-center max-w-3xl mx-auto">
        {/* Replace the src with your images */}
        <img
          src={i5}
          alt="Client 1"
          className="w-[239.33px] h-[200px] object-contain hover:scale-105 transform transition-transform duration-300"
        />
        <img
          src={i2}
          alt="Client 2"
          className="w-[239.33px] h-[200px] object-contain hover:scale-105 transform transition-transform duration-300"
        />
        <img
          src={i3}
          alt="Client 3"
          className="w-[239.33px] h-[200px] object-contain hover:scale-105 transform transition-transform duration-300"
        />
        <img
          src={i1}
          alt="Client 4"
          className="w-[239.33px] h-[200px] object-contain hover:scale-105 transform transition-transform duration-300"
        />
        <img
          src={i6}
          alt="Client 5"
          className="w-[239.33px] h-[200px] object-contain hover:scale-105 transform transition-transform duration-300"
        />
        <img
          src={i7}
          alt="Client 6"
          className="w-[239.33px] lg:ml-56 ml-0 h-[200px] object-contain hover:scale-105 transform transition-transform duration-300"
        />
        <img
          src={i8}
          alt="Client 7"
          className="w-[239.33px] lg:ml-56 ml-0 h-[200px] object-contain hover:scale-105 transform transition-transform duration-300"
        />
        <img
          src={i9}
          alt="Client 8"
          className="w-[239.33px] lg:ml-56 ml-0 h-[200px] object-contain hover:scale-105 transform transition-transform duration-300"
        />
        <img
          src={i10}
          alt="Client 9"
          className="w-[239.33px] lg:ml-56 ml-0 h-[200px] object-contain hover:scale-105 transform transition-transform duration-300"
        />
      </div>
    </motion.section>
  );
};

export default ClientsSection;

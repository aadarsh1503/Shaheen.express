import React from "react";
import { motion } from "framer-motion";
import a1 from "./PartnersImages/a1.png"
import a2 from "./PartnersImages/a2.png"
import a4 from "./PartnersImages/a4.png"
import a6 from "./PartnersImages/a6.png"
import a7 from "./PartnersImages/a7.png"

const Partners = () => {
  return (
    <motion.div
     id="partners"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section className="py-12 items-center">
 
        <h2 className="text-center text-sm text-dgreen font-bold tracking-wide uppercase">
          Partners
        </h2>
        <p className="text-center text-black text-2xl font-semibold mb-8 my-4">
          We Work With The Best
        </p>
        <div className="grid grid-cols-3 gap- justify-items-center items-center max-w-4xl mx-auto">
          {/* Replace the src with your images */}
          <img
            src={a1}
            alt="Client 1"
            className="w-[239.33px] h-[200px] object-contain"
          />
          <img
            src={a2}
            alt="Client 2"
            className="w-[239.33px] h-[200px] object-contain"
          />
          <img
            src={a4}
            alt="Client 3"
            className="w-[239.33px] h-[200px] object-contain"
          />
          <img
            src={a6}
            alt="Client 4"
            className="w-[239.33px] lg:ml-64 h-[200px] object-contain"
          />
          <img
            src={a7}
            alt="Client 5"
            className="w-[239.33px] lg:ml-64 h-[200px] object-contain"
          />
         
        </div>
      </section>
    </motion.div>
  );
};

export default Partners;

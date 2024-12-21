import React from "react";
import { motion } from "framer-motion";
import i3 from "./i3.svg";
import i4 from "./i4.svg";
import i5 from "./i5.svg";
import i6 from "./i6.svg";
import i7 from "./i7.svg";
import i8 from "./i8.svg";

const LogisticsSection = () => {
  return (
    <section id="why-us" className="bg-gray-100 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
 
        <h3 className="text-dgreen font-bold text-sm mb-4 uppercase tracking-widest">
          Why Us?
        </h3>
        <h2 className="text-2xl font-semibold text-gray-900">
          Partner of Your Logistics Operation
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Feature 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-center"
        >
          <img
            src={i3}
            alt="Marketplace Integration"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            Marketplace Integration
          </h3>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center"
        >
          <img
            src={i4}
            alt="99.99% Stock Accuracy"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            99.99% Stock Accuracy
          </h3>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-center"
        >
          <img
            src={i6}
            alt="Real-Time Dashboard"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            Real-time dashboard to monitor inventory and delivery tracking
          </h3>
        </motion.div>

        {/* Feature 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-center"
        >
          <img
            src={i5}
            alt="Same Day Fulfillment"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            Same Day Fulfillment and 3-day<br /> Delivery all around Bahrain 
          </h3>
        </motion.div>

        {/* Feature 5 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="text-center"
        >
          <img
            src={i7}
            alt="Manage Orders"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            Manage orders end to end across multiple partners we operate with
          </h3>
        </motion.div>

        {/* Feature 6 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="text-center"
        >
          <img
            src={i8}
            alt="Dedicated Tracer Team"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            Dedicated Tracer and CS Team
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default LogisticsSection;

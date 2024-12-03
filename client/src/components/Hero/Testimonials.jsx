import React, { useState } from "react";
import { motion } from "framer-motion";
import i1 from "./i1.avif"
import i100jpg from "./i100jpg.jpg"
import i101 from "./i101.jpg"
import i102 from "./i102.jpg"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah T.",
      Designation:"Operations Manager,Global E-Commerce Brand",
      text: "Partnering with Shaheen Express has been a game-changer for our international operations. Their seamless integration of real-time tracking, fast delivery times, and reliable customer service has significantly boosted our customer satisfaction. We can now ship to multiple regions without worrying about delays or issues. The team is always proactive in addressing challenges, and their innovative solutions have helped us scale our business more efficiently. We couldn't ask for a more dependable logistics partner.",
      image: i1,
    },
    {
      id: 2,
      name: "John M",
      Designation:"Supply Chain Director, Leading Manufacturing Company",
      text: "As a global manufacturer, timely and cost-effective delivery is critical to our production schedules. We've worked with Shaheen Express for over three years, and they’ve consistently exceeded our expectations. From handling complex customs processes to managing time-sensitive shipments. They communicate transparently, providing updates and offering solutions when unexpected issues arise. Their ability to adapt to our evolving needs has made them an essential part of our supply chain.",
      image: i100jpg,
    },
    {
      id: 3, 
      name: "Lisa D.",
      Designation:"Logistics Coordinator, Nationwide Retail Chain",
      text: "Shaheen Express has completely transformed our distribution network. Their team took the time to understand our business and implemented a tailored logistics solution that maximized efficiency and reduced our costs. We’ve seen a drastic reduction in shipping errors, and our inventory management has improved thanks to their real-time tracking technology. Their dedication to meeting deadlines and their ability to handle seasonal spikes in demand has made them an indispensable part of our retail operations.",
      image: i102,
    },
    {
      id: 4,
      Designation:"Regional Logistics Manager, International Freight Company",
      name: "Michael Green",
      text: "Our e-commerce platform relies on precise and dependable logistics, and Shaheen Express has consistently delivered. Their ability to handle large-scale shipments with accuracy and care has helped us maintain our reputation for timely deliveries. The team's commitment to providing personalized service, coupled with their innovative tracking tools, ensures that our customers are always informed. Their collaborative approach and problem-solving mindset have been crucial in navigating the complexities of international shipping.",
      image: i101,
    }
    
   
  ];

  const [current, setCurrent] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const handleNext = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const reorderedTestimonials = [
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
    testimonials[(current + 3) % testimonials.length],
  ];

  const truncateText = (text, lines = 2) =>
    text.split(" ").length > lines * 0.4
      ? text.split(" ").slice(0, lines * 10).join(" ") + "..."
      : text;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-gray-100 py-20"
    >
      <div className="lg:text-sm text-2xl text-dgreen text-center font-bold max-w-5xl mx-auto mb-6">
        TESTIMONIALS
      </div>
      <h2 className="text-center font-semibold text-2xl">What Our Happy Client Say</h2>

      {/* Desktop View */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:flex justify-center items-center"
      >
        <button
          onClick={handlePrev}
          className="text-gray-600 hover:text-gray-800 p-4 bg-gray-200 rounded-full focus:outline-none mx-4"
        >
          &#8592;
        </button>

        <div className="flex items-center gap-12 mt-32">
          {reorderedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`relative transition-all duration-1000 ease-in-out flex flex-col items-center font-poppins bg-white shadow-md p-3 rounded-lg
                ${index === 1
                  ? "scale-110 opacity-100 h-[540px] w-[332px] mb-9 transform shadow-xl transition-transform"
                  : "scale-90 opacity-60 w-64 bg-gray-300 transform transition-transform"}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            >
              <div
                className={`absolute -top-10 flex justify-center items-center w-24 h-24 rounded-full overflow-hidden border-4 ${index === 1 ? "border-lightgreen" : "border-gray-200"}`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`object-cover w-full h-full ${index === 1 ? "scale-110" : "scale-100"}`}
                />
              </div>
              <div className="text-5xl text-dgreen mt-4 lg:mt-10 ml-0 lg:-ml-56">“</div>
              <p className="text-dgreen font-bold ">{testimonial.name}</p>
              <p className="text-center text-gray-400 font-poppins font-thin text-sm mb-4">{testimonial.Designation}</p>
              <p className="text-gray-500 max-w-7xl text-">
                {index === 1 ? testimonial.text : truncateText(testimonial.text)}
              </p>
              <div className="text-5xl text-dgreen ml-0 lg:ml-56 mt-2">”</div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="text-gray-600 hover:text-gray-800 p-4 bg-gray-200 rounded-full focus:outline-none mx-4"
        >
          &#8594;
        </button>
      </motion.div>

      {/* Mobile View */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-1 gap-8 lg:hidden mt-10 px-4"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-dgreen font-bold mb-1">{testimonial.name}</div>
            <p className="text-gray-600 max-w-7xl text-center">
              {expandedId === testimonial.id
                ? testimonial.text
                : truncateText(testimonial.text)}
            </p>
            <button
              onClick={() =>
                setExpandedId((prev) => (prev === testimonial.id ? null : testimonial.id))
              }
              className="text-dgreen font-medium mt-2"
            >
              {expandedId === testimonial.id ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;

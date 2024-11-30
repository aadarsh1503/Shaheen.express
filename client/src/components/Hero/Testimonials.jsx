import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/f625e3501ea153e0acad867f/pexels-photo-9668543.jpeg",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://plus.unsplash.com/premium_photo-1672373830660-4655ca9de6c3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Alex Johnson",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      id: 4,
      name: "Emily Davis",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://media.istockphoto.com/id/2003613572/photo/smiling-bearded-man-in-glasses-at-a-casual-business-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=E6AxIWxGEEqdXFxRCpWM77mFqrv19U2gV11mCnljs3g=",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const reorderedTestimonials = [
    testimonials[(current + 0) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="lg:text-sm text-2xl text-dgreen text-center font-bold max-w-5xl mx-auto mb-6">
        TESTIMONIALS
      </div>
      <h2 className='text-center font-semibold text-2xl'>What Our Happy Client Say</h2>
      
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="text-gray-600 hover:text-gray-800 p-4 bg-gray-200 rounded-full focus:outline-none mx-4"
        >
          &#8592;
        </button>

        <div className="flex items-center gap-12 mt-32">
          {reorderedTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative transition-all duration-1000 ease-in-out flex flex-col items-center bg-white shadow-md p-6 rounded-lg
                ${index === 1
                  ? "scale-110 opacity-100 h-86 w-72 transform shadow-xl transition-transform"
                  : "scale-90 opacity-60 w-64 transform transition-transform"}`}
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
              <p className="text-dgreen font-bold mb-1">{testimonial.name}</p>
              <p className="text-gray-600 max-w-7xl text-center">{testimonial.text}</p>
              <div className="text-5xl text-dgreen ml-0 lg:ml-56 mt-2">”</div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="text-gray-600 hover:text-gray-800 p-4 bg-gray-200 rounded-full focus:outline-none mx-4"
        >
          &#8594;
        </button>
      </div>

      {/* Mobile View */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 lg:hidden mt-10 px-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg"
          >
            <div
              className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 mb-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-dgreen font-bold mb-1">{testimonial.name}</div>
            <p className="text-gray-600 max-w-7xl text-center">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

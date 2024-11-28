import React from 'react';
import HomeService from './HomeService';
import LogisticsSection from './LogisticsSection';
import Testimonials from './Testimonials';
import EmailSection from './EmailSection';

const Hero = () => {
  return (
    <>
    <div className='bg-dgreen '>
    <section className="flex flex-col max-w-7xl mx-auto lg:flex-row items-center justify-between px-8 lg:px-20 py-16">
      {/* Left Side Content */}
      
      <div className="text-left text-white space-y-6 lg:w-1/2">
        <h1 className="text-4xl lg:text-7xl mb-4 font-bold leading-tight">
          The Key to Your<br />
          Seamless<br />
          Logistics<br /> Experience
        </h1>
        <button className="bg-lime-400 text-green-900 font-semibold m text-lg py-6 px-12 rounded shadow-lg hover:bg-lime-300 transition duration-300">
          LEARN MORE
        </button>
      </div>

      {/* Right Side Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="https://gtl.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.fc5c6752.png&w=1920&q=75" // Replace this with your image URL
          alt="Logistics warehouse"
          className="rounded-lg shadow-md"
        />
      </div>

    </section>
    </div>
    <HomeService />
    <LogisticsSection />
    <Testimonials />
    <EmailSection />
    </>

  );
};

export default Hero;

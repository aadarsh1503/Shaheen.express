import React from 'react';
import HomeService from './HomeService';
import LogisticsSection from './LogisticsSection';
import Testimonials from './Testimonials';
import EmailSection from './EmailSection';
import ClientsSection from './ClientsSection';
import Partners from './Partners';

const Hero = () => {
  return (
    <>
    <div className='bg-dgreen font-poppins '>
    <section className="flex flex-col max-w-7xl mx-auto lg:flex-row items-center justify-between px-8 lg:px-20 py-24">
      {/* Left Side Content */}
      
      <div className="text-left text-white space-y-6 lg:w-1/2">
        <h1 className="text-4xl lg:text-7xl mb-4 font-bold leading-tight">
          The Key to Your<br />
          Seamless<br />
          Logistics<br /> Experience
        </h1>
        <a href='/aboutUs'>
        <button className="bg-white text-dgreen font-semibold text-lg py-6 px-12 rounded shadow-lg hover:bg-dgreen hover:text-white transition duration-300 hover:outline hover:outline-2 hover:outline-white">
          LEARN MORE
        </button>
        </a>
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
    <ClientsSection />
    <Partners />
    <Testimonials />
    <EmailSection />
    </>

  );
};

export default Hero;

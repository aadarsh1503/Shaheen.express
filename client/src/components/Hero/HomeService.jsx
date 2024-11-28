import React from "react";

const HomeService = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-white  mb-4">Hii</h1>
        <h3 className="text-dgreen font-bold uppercase tracking-wide text-sm mb-6">
          S E R V I C E
        </h3>
        <h2 className="text-2xl font-bold text-gray-800">
          What We Do To Help Your Business Grow
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Fulfillment Card */}
        <div className="text-center max-w-2xl">
          <img
            src="https://gtl.id/icons/fulfillment.svg"
            alt="Fulfillment"
            className="mx-auto w-20 h-20"
          />
          <h3 className="mt-6 text-lg font-semibold text-gray-800">
            Fulfillment
          </h3>
          <p className="mt-3 text-gray-500 text-lg">
            Storing your products with assured QC and customized service
          </p>
        </div>

        {/* Delivery Card */}
        <div className="text-center max-w-2xl">
          <img
            src="https://gtl.id/icons/delivery.svg"
            alt="Delivery"
            className="mx-auto w-20 h-20"
          />
          <h3 className="mt-6 text-lg font-semibold text-gray-800">
            Delivery
          </h3>
          <p className="mt-3 text-gray-500 text-lg">
            Ship to your end customers in quickest time and at cheapest price
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeService;

import React from "react";

const LogisticsSection = () => {
  return (
    <section id="why-us" className="bg-gray-100 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="mb-10 text-gray-100">hii</h1>
        <h3 className="text-dgreen font-bold text-sm mb-4  uppercase tracking-widest">
          Why Us?
        </h3>
        <h2 className="text-2xl font-semibold text-gray-900">
          Partner of Your Logistics Operation
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Feature 1 */}
        <div className="text-center">
          <img
            src="https://gtl.id/icons/marketplace-integration.svg"
            alt="Marketplace Integration"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            Marketplace Integration
          </h3>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <img
            src="https://gtl.id/icons/high-inventory-accuracy.svg"
            alt="99.99% Stock Accuracy"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            99.99% Stock Accuracy
          </h3>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <img
            src="https://gtl.id/icons/dashboard.svg"
            alt="Real-Time Dashboard"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            Real-time dashboard to monitor inventory and delivery tracking
          </h3>
        </div>

        {/* Feature 4 */}
        <div className="text-center">
          <img
            src="https://gtl.id/icons/vast-distribution-network.svg"
            alt="Same Day Fulfillment"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg  font-semibold text-gray-600">
            Same Day Fulfillment and 3-day<br /> Delivery all around Indonesia
          </h3>
        </div>

        {/* Feature 5 */}
        <div className="text-center">
          <img
            src="https://gtl.id/icons/manage-orders.svg"
            alt="Manage Orders"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            Manage orders end to end across multiple partners we operate with
          </h3>
        </div>

        {/* Feature 6 */}
        <div className="text-center">
          <img
            src="https://gtl.id/icons/customer-service.svg"
            alt="Dedicated Tracer Team"
            className="mx-auto w-16 h-16"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-600">
            Dedicated Tracer and CS Team
          </h3>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;

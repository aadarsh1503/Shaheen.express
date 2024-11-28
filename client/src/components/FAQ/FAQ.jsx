import React from 'react';
import EmailSection from '../Hero/EmailSection';

const FAQ = () => {
  return (
    <div className='bg-white'> 
    <div className="bg-dgreen text-white py-10 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6">FAQ</h1>
        <p className="text-lg font-medium mb-12">Frequently Asked Questions</p>
        </div>
        </div>
        {/* FAQ Content */}
        <div className="bg-white font-poppins max-w-4xl mx-auto text-black p-6 rounded-md ">
          <h2 className="text-2xl  font-bold text-green-600 mb-6">General</h2>

          {/* FAQ Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div>
              <h3 className="text-18px font-semibold mb-2">
                What kind of products that GTL could handle?
              </h3>
              <p className="text-sm text-lgray">
                We welcome all types of products, both in warehouse and delivery
                service. As long as it is under permission of Indonesia's law.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-18px font-semibold mb-2">
                How can I get the pricing for GTL service?
              </h3>
              <p className="text-sm text-lgray">
                We are committed to find the best rate tailored to each client’s
                specific request. Please kindly drop your inquiry details to{' '}
                <a
                  href="mailto:sales@gtl.id"
                  className="text-green-600 underline"
                >
                  sales@gtl.id
                </a>
                .
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="text-18px font-semibold mb-2">
                Once I join GTL, how can I know the updates of my products?
              </h3>
              <p className="text-sm text-lgray">
                GTL will provide you with a dashboard, containing detailed
                movement of each items/parcel. It is presented with graphics for
                your convenience, hence you could quickly gather the information
                for your business decisions.
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <h3 className="text-18px font-semibold mb-2">
                What is the operational hour of GTL?
              </h3>
              <p className="text-sm text-lgray">
                For inbound (receiving goods), we are open from Monday to Friday
                at 9:00 - 17:00 WIB and Saturday at 7:00 - 12:00 WIB. For
                outbound service, we are happily open 24/7 hours.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white font-poppins max-w-4xl mx-auto text-black p-6 rounded-md ">
          <h2 className="text-2xl  font-bold text-green-600 mb-6">Warehouse Service</h2>

          {/* FAQ Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div>
              <h3 className="text-18px font-semibold mb-2">
              Where are GTL warehouses located at?
              </h3>
              <p className="text-sm text-lgray">
              For now, our main warehouse is located in Cawang, East Jakarta. In the near future, we are expanding our warehouses to main cities all around Indonesia.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-18px font-semibold mb-2">
              Does GTL have insurance for damage or lost products?
              </h3>
              <p className="text-sm text-lgray">
              We provide insurance (optional) for our client. Please kindly contact us to sales@gtl.id for further inquiries regarding insurance premium, T&C, and claiming procedure.
                .
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="text-18px font-semibold mb-2">
              Can I use customized packaging for my products?
              </h3>
              <p className="text-sm text-lgray">
              Yes, of course! You could share the details for your required packaging to our team and we are more than happy to help you.
              </p>
            </div>

            {/* Item 4 */}
            
          </div>
        </div>
        <div className="bg-white font-poppins max-w-4xl mx-auto text-black p-6 rounded-md ">
          <h2 className="text-2xl  font-bold text-green-600 mb-6">Warehouse Service</h2>

          {/* FAQ Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div>
              <h3 className="text-18px font-semibold mb-2">
              How does the COD service work?
              </h3>
              <p className="text-sm text-lgray">
              You only need to fill in supporting documents, choose the reconciliation package that suits your business best, and we are all set for your seamless COD experience.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-18px font-semibold mb-2">
              Can GTL help me track my parcels?
              </h3>
              <p className="text-sm text-lgray">
              Sure, not only our systems have been integrated with 3PL partners, we also have dedicated tracers who will help you track and follow-up your parcels' whereabouts.
                .
              </p>
            </div>

            
          </div>
        </div>
   
<EmailSection />
    </div>
  );
};

export default FAQ;

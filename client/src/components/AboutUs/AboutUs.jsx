import React from 'react'

const AboutUs = () => {
  return (
    <div>
          <div className="bg-dgreen font-poppins text-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="lg:text-7xl text-2xl font-poppins font-bold mb-2">About Us</h1>
        <p className="text-base mb-12">Commerce & Logistics Made Easy</p>
        </div>
        </div>
        <div>
        <div className='text-lg max-w-6xl p-4 mt-10 mx-auto '>
        GoTo Logistics (GTL) strives to evolve the nationwide logistics and fulfillment landscape as part of GoTo—Indonesia’s largest technology group. We believe in moving fast, disrupting existing technology and creating a lasting impact for our customers. While doing that, we aim to learn as we evolve to deliver the best possible logistics experience for sellers and buyers everywhere. We have two major divisions within GTL - Fulfillment and Delivery.
        <br />
        <br />Fulfillment - As part of the fulfillment division, we strive towards storing your products with assured QC and customized services across all of our 10 warehouses spread across Indonesia, including Cawang, Cilincing, Logos, Pancoran, Pluit and Rungkut within Jabodetabek region while Makassar, Osowilangun (Surabaya), Bandung and Medan outside of Jabodetabek
        <br />
        <br />Delivery - As part of the delivery division, we work as a logistics aggregator and our aim is to provide affordable and reliable delivery services across Indonesia. We use our own fleet as well as leverage our partners' fleet to ensure the orders are delivered to end users at cheapest prices maintaining fastest delivery speeds in the logistics industry.
        <br />
        <br />We deliver orders including both B2C (fulfilled from our DTs/ hubs) and C2C (fulfilled directly by sellers) orders, covering inracity/ intercity/ inter-island operations. For all these orders, we provide end to end tracking from pick up until end customer delivery.
<br />
<br />Across both these order types, we operate at varying SLA speeds and hence prices, ranging from instant 2-hr deliveries, to same/ next day deliveries to long haul deliveries which might take up to 3-4 days (regular/ economy/ cargo services). Our services are priced in a way so as to ensure customers get the best services at the cheapest possible prices, without compromising on the quality of the services offered.

        </div>
        </div>
        <section className="flex flex-col max-w-6xl  mt-10 mx-auto  md:flex-row items-center justify-center gap-8 bg-white">
  {/* Left Side Image */}
  <div className="flex-shrink-0 w-full md:w-[700px]">
    <img
      src="https://gtl.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpan-indonesia-coverage.b4023544.jpg&w=1920&q=75"
      alt="Pan Indonesia coverage"
      className="rounded-lg shadow-lg"
    />
  </div>

  {/* Right Side Text */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold text-dgreen">
      Pan Indonesia Coverage
    </h2>
    <p className="text-gray-600 mt-2">
      10 warehouses spread across different parts of Indonesia
    </p>
  </div>
</section>
<section className="flex flex-col max-w-6xl mt-10 mx-auto md:flex-row-reverse items-center justify-center gap-8 bg-white">
  {/* Right Side Image */}
  <div className="flex-shrink-0 w-full md:w-[700px]">
    <img
      src="https://gtl.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuge-storage.90ba2f16.jpg&w=1920&q=75"
      alt="Pan Indonesia coverage"
      className="rounded-lg shadow-lg"
    />
  </div>

  {/* Left Side Text */}
  <div className="w-full md:w-1/2 font-poppins text-center md:text-left">
    <h2 className="text-2xl md:text-3xl text-right font-bold text-dgreen">
    Huge storage capacity
    </h2>
    <p className="text-gray-600 mt-2 text-right">
    Storage capacity ranging from 200K to more than 3 million items per warehouse
    </p>
  </div>
</section>


    </div>
  )
}

export default AboutUs
import React from 'react'
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
import i3 from "./i3.jpg"
import i4 from "./i4.jpg"
import i5 from "./i5.jpg"
import i6 from "./i6.jpg"
import EmailSection from '../Hero/EmailSection'

const AboutUs = () => {
  return (
    <div>
          <div className="bg-dgreen font-sans text-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="lg:text-7xl text-2xl font-poppins font-bold mb-2">About Us</h1>
        <p className="text-base mb-12">Commerce & Logistics Made Easy</p>
        </div>
        </div>
        <div>
        <div className='text-lg max-w-6xl p-4 mt-10 mx-auto '>
    Shaheen Express strives to evolve the nationwide logistics and fulfillment landscape as part of Shaheen Express - Bahrain's largest technology group. We believe in moving fast, disrupting existing technology and creating a lasting impact for our customers. While doing that, we aim to learn as we evolve to deliver the best possible logistics experience for sellers and buyers everywhere. We have two major divisions within Shaheen Express - Fulfillment and Delivery.
    <br />
    <br />Fulfillment - As part of the fulfillment division, we strive towards storing your products with assured QC and customized services across all of our 10 warehouses spread across Bahrain, including Manama, Riffa, Muharraq, Sitra, Zallaq, Hamad Town, Isa Town, and others within the capital region, while the southern and northern governorates (like Jidhafs, A'ali, and Madinat Hamad) outside of Manama.
    <br />
    <br />Delivery - As part of the delivery division, we work as a logistics aggregator and our aim is to provide affordable and reliable delivery services across Bahrain. We use our own fleet as well as leverage our partners' fleet to ensure the orders are delivered to end users at the cheapest prices, maintaining the fastest delivery speeds in the logistics industry.
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
      src={i1}
      alt="Pan Bahrain coverage"
      className="rounded-lg shadow-lg"
    />
  </div>

  {/* Right Side Text */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold text-dgreen">
      Pan Bahrain Coverage
    </h2>
    <p className="text-gray-600 mt-2">
      10 warehouses spread across different parts of Bahrain
    </p>
  </div>
</section>
<section className="flex flex-col max-w-6xl mt-10 mx-auto md:flex-row-reverse items-center justify-center gap-8 bg-white">
  {/* Right Side Image */}
  <div className="flex-shrink-0 w-full md:w-[700px]">
    <img
      src={i2}
      alt="Pan Bahrain coverage"
      className="rounded-lg shadow-lg"
    />
  </div>

  {/* Left Side Text */}
  <div className="w-full md:w-1/2 font-poppins text-center md:text-left">
    <h2 className="text-2xl md:text-3xl text-center lg:text-right font-bold text-dgreen">
    Huge storage capacity
    </h2>
    <p className="text-gray-600 mt-2 text-center lg:text-right">
    Storage capacity ranging from 200K to more than 3 million items per warehouse
    </p>
  </div>
</section>


<section className="flex flex-col max-w-6xl  mt-10 mx-auto  md:flex-row items-center justify-center gap-8 bg-white">
  {/* Left Side Image */}
  <div className="flex-shrink-0 w-full md:w-[700px]">
    <img
      src={i6}
      alt="Pan Bahrain coverage"
      className="rounded-lg shadow-lg"
    />
  </div>

  {/* Right Side Text */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold text-dgreen">
    Regular storage
    </h2>
    <p className="text-gray-600 mt-2">
    All items not requiring any special care can be stored here
    </p>
  </div>
</section>

<section className="flex flex-col max-w-6xl mt-10 mx-auto md:flex-row-reverse items-center justify-center gap-8 bg-white">
  {/* Right Side Image */}
  <div className="flex-shrink-0 w-full md:w-[700px]">
    <img
      src={i4}
      alt="Pan Bahrain coverage"
      className="rounded-lg shadow-lg"
    />
  </div>

  {/* Left Side Text */}
  <div className="w-full md:w-1/2 font-poppins text-center md:text-left">
    <h2 className="text-2xl md:text-3xl text-center lg:text-right font-bold text-dgreen">
    High value storage
    </h2>
    <p className="text-gray-600 mt-2 text-center lg:text-right">
    High value storage to store highly valuable items with 24x7 security
    </p>
  </div>
</section>


<section className="flex flex-col max-w-6xl  mt-10 mx-auto  md:flex-row items-center justify-center gap-8 bg-white">
  {/* Left Side Image */}
  <div className="flex-shrink-0 w-full md:w-[700px]">
    <img
      src={i3}
      alt="Pan Bahrain coverage"
      className="rounded-lg shadow-lg"
    />
  </div>

  {/* Right Side Text */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold text-dgreen">
    Cold storage
    </h2>
    <p className="text-gray-600 mt-2">
    Cold storage to low shelf value items like dairy, pharmaceutical, beauty products, etc.
    </p>
  </div>
</section>


<section className="flex flex-col max-w-6xl mt-10 mb-8 mx-auto md:flex-row-reverse items-center justify-center gap-8 bg-white">
  {/* Right Side Image */}
  <div className="flex-shrink-0 w-full md:w-[700px]">
    <img
      src={i5}
      alt="Pan Bahrain coverage"
      className="rounded-lg shadow-lg"
    />
  </div>

  {/* Left Side Text */}
  <div className="w-full md:w-1/2 font-poppins text-center  md:text-left">
    <h2 className="text-2xl md:text-3xl text-center lg:text-right font-bold text-dgreen">
    Pallet storage
    </h2>
    <p className="text-gray-600 font-sans mt-2 text-center lg:text-right">
    Pallet storage to stack bulky products in dedicated areas
    </p>
  </div>
</section>
<EmailSection />
    </div>
  )
}

export default AboutUs
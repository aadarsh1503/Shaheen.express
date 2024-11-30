import React from "react";

const ClientsSection = () => {
  return (
    <section id="clients" className="py-12 items-center">
        <h1 className="text-white  mb-4">Hii</h1>
      <h2 className="text-center text-sm text-dgreen font-bold tracking-wide uppercase">
        Clients
      </h2>
      <p className="text-center text-black text-2xl mb-10 font-semibold  my-4">
        We’re Happy to Grow Together
      </p>
      <div className="grid grid-cols-5 gap-4 justify-items-center  items-center max-w-5xl mx-auto">
        {/* Replace the src with your images */}
        <img
          src="https://gtl.id/clients/halodoc.png"
          alt="Client 1"
          className="w-[239.33px] h-[200px] object-contain"
        />
        <img
          src="https://gtl.id/clients/dt-logo.png"
          alt="Client 2"
          className="w-[239.33px] h-[200px] object-contain"
        />
        <img
          src="https://gtl.id/clients/blibli.png"
          alt="Client 3"
          className="w-[239.33px] h-[200px] object-contain"
        />
        <img
          src="https://gtl.id/clients/shipper.png"
          alt="Client 4"
          className="w-[239.33px] h-[200px] object-contain"
        />
        <img
          src="https://gtl.id/clients/burger-king.png"
          alt="Client 5"
          className="w-[239.33px] h-[200px] object-contain"
        />
        <img
          src="https://gtl.id/clients/unilever.png"
          alt="Client 6"
          className="w-[239.33px] h-[200px] object-contain"
        />
        <img
          src="https://gtl.id/clients/wings.png"
          alt="Client 7"
          className="w-[239.33px]  h-[200px] object-contain"
        />
        <img
          src="https://gtl.id/clients/logitech.png"
          alt="Client 8"
          className="w-[239.33px] h-[200px] object-contain"
        />
        <img
          src="https://gtl.id/clients/PnG.png"
          alt="Client 9"
          className="w-[239.33px] h-[200px] object-contain"
        />
        <img
          src="https://gtl.id/clients/miniso.png"
          alt="Client 10"
          className="w-[239.33px] h-[200px] object-contain"
        />
      </div>
    </section>
  );
};

export default ClientsSection;

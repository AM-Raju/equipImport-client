import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="container  mx-auto min-h-[600px] my-16 lg:min-h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-2 gap-2 lg:gap-2 xl:gap-6 h-full">
        <div className="bg-slate-700 w-full h-full md:row-span-2 flex items-center justify-center p-6">
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-7xl  text-white text-center leading-tight md:hidden">
            Why Choose Us
          </h2>
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-7xl text-white text-center leading-tight hidden md:block">
            Why <br /> Choose <br /> Us
          </h2>
        </div>

        <div className="border border-flame-red hover:shadow-md shadow-flame-red/30 w-full h-full flex flex-col items-center justify-center p-5 text-center">
          <div>
            <h3 className="font-semibold text-xl sm:text-2xl my-4">
              Reliable and Certified Products
            </h3>
            <p className="text-sm sm:text-base">
              We offer only high-quality, certified LPG equipment that meets
              safety and performance standards—ensuring long-term reliability
              and peace of mind for your operations.
            </p>
          </div>
        </div>

        <div className="border border-flame-red hover:shadow-md shadow-flame-red/30 w-full h-full flex flex-col items-center justify-center p-5 text-center">
          <h3 className="font-semibold text-xl sm:text-2xl my-4">
            Expert Support and Services
          </h3>
          <p className="text-sm sm:text-base">
            Our experienced team provides end-to-end support—from installation
            and maintenance to troubleshooting—ensuring safe and efficient LPG
            usage at all times.
          </p>
        </div>

        <div className="border border-flame-red hover:shadow-md shadow-flame-red/30 md:col-span-2 w-full h-full flex flex-col items-center justify-center p-5 text-center overflow-hidden">
          <h3 className="font-semibold text-xl sm:text-2xl my-4">
            Client Centric Approach
          </h3>
          <p className="text-sm sm:text-base ">
            Your satisfaction is our priority. We go beyond just selling
            products—we listen, understand your unique needs, and provide
            tailor-made solutions that truly fit your requirements. Our
            dedicated support team is always ready to assist you with any
            concerns or inquiries. We believe in building lasting relationships
            through transparency, integrity, and consistent service excellence.
            Whether you're a small business or a large industrial client, we
            treat every customer with equal importance and ensure you always
            feel valued and supported.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

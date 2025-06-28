"use client";

export default function AboutBanner() {
  return (
    <section className="relative w-full -z-50">
      <div className="container mx-auto px-4 ">
        {/* Image background */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src="https://i.ibb.co/Swhv6tjf/about-us.webp" // Replace with your actual image path
            alt="Background"
            className="w-full h-full object-cover "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Box */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-end px-2 lg:px-12">
            <div className="bg-black/30 p-4 lg:p-12 max-w-xl">
              <h2 className="text-3xl  md:text-6xl font-bold text-white  text-center lg:text-right gap-2">
                About Us
              </h2>
              <p className="mt-4 text-center lg:text-right text-gray-100">
                We offer the best solutions to elevate your online presence with
                top-notch design and development. elevate your online presence
                with top-notch design and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

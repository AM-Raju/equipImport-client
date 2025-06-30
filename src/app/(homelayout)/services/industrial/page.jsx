// components/ProductSection.tsx
"use client";

import { FaCheckCircle } from "react-icons/fa";

const IndustrialLPG = () => {
  return (
    <section className="py-12 min-h-[530px] ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 ">
          {/* Image */}
          <div className="w-full lg:w-2/3 bg-red-300 h-full">
            <img
              src="/images/product.jpg" // Update with your image path
              alt="Product Showcase"
              className="w-full h-96 rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Text Box */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Premium Product
            </h2>
            <p className="text-gray-600 mb-6">
              We provide industry-leading products built to deliver quality,
              reliability, and innovation for your business needs.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Services Include</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span>Custom Design & Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span>Performance Optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span>SEO & Analytics Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialLPG;

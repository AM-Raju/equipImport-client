// app/products/page.jsx (or pages/products.js if you're not using app directory)

import ProductCard from "@/components/ui/ProductCard";

const products = [
  { name: "Product 1", image: "/images/product1.jpg" },
  { name: "Product 2", image: "/images/product2.jpg" },
  { name: "Product 3", image: "/images/product3.jpg" },
  { name: "Product 4", image: "/images/product4.jpg" },
  { name: "Product 5", image: "/images/product5.jpg" },
  {
    name: "High Class Vaporizer High Class Vaporizer",
    image: "/images/product6.jpg",
  },
];

export default function ProductPage() {
  return (
    <div className="container mx-auto  ">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full   mb-24 -z-50">
        <img
          src="https://i.ibb.co/Swhv6tjf/about-us.webp"
          alt="Banner"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/40 z-50">
          <h1 className="absolute -bottom-4 lg:-bottom-10 text-flame-red text-5xl  sm:text-7xl lg:text-9xl font-bold pl-4 lg:ml-12">
            Our Products
          </h1>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} image={product.image} />
        ))}
      </div>
    </div>
  );
}

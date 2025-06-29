// components/ProductCard.jsx
"use client";
import { useState } from "react";

export default function ProductCard({ name, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group overflow-hidden  shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src="https://i.ibb.co/Swhv6tjf/about-us.webp"
        alt={name}
        className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105 bg-green-500"
      />
      <div className="absolute h-16 bottom-0 left-0 w-[70%] bg-black/40 text-white text-lg px-3 py-2 flex items-center font-medium ">
        {name}
      </div>

      <button
        className={`absolute  ${
          hovered ? "bottom-44" : "-bottom-16"
        }   bg-flame-red text-white px-4 py-4 w-full shadow-md transition-all duration-1000 text-center cursor-pointer font-medium `}
      >
        Details
      </button>
    </div>
  );
}

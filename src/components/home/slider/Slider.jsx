"use client";

import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/xqsffZ6j/3.webp",
    title: "Fresh Organic Vegetables",
  },
  {
    id: 2,
    image: "https://i.ibb.co/xqsffZ6j/3.webp",
    title: "Tasty Tropical Fruits",
  },
  {
    id: 3,
    image: "https://i.ibb.co/xqsffZ6j/3.webp",
    title: "Farm-to-Table Freshness",
  },
  {
    id: 4,
    image: "https://i.ibb.co/xqsffZ6j/3.webp",
    title: "Locally Grown Goodness",
  },
  {
    id: 5,
    image: "https://i.ibb.co/xqsffZ6j/3.webp",
    title: "Healthy Natural Choices",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => resetTimeout();
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden -z-50 ">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
            <h2 className="text-4xl md:text-6xl max-w-[80%] md:max-w-full font-extrabold text-white px-4 drop-shadow-md">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-white hover:bg-flame-red text-gray-800 hover:text-white shadow-lg p-3 rounded-full z-20 transition-colors duration-300 group "
      >
        <FaArrowLeft
          className="text-flame-red group-hover:text-white"
          size={20}
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white hover:bg-flame-red text-gray-800 hover:text-white shadow-lg p-3 rounded-full z-20 transition-colors duration-300 group"
      >
        <FaArrowRight
          className="text-flame-red group-hover:text-white"
          size={20}
        />
      </button>
 */}
      {/* Bullet Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              current === index
                ? "bg-flame-red border-flame-red scale-110"
                : "bg-white/50 border-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

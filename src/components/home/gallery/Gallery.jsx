// components/GallerySection.js
import { FaCameraRetro } from "react-icons/fa";
// data/galleryData.js
const galleryData = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 2,
    hasText: false,
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 1,
    hasText: false,
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 1,
    hasText: false,
  },
  {
    id: 4,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 2,
    hasText: false,
  },
  {
    id: 5,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 1,
    hasText: false,
  },
  {
    id: 6,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 1,
    hasText: false,
  },
  {
    id: 7,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 2,
    hasText: true,
  },
  {
    id: 8,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 2,
    hasText: false,
  },
  {
    id: 9,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 2,
    hasText: false,
  },
  {
    id: 10,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 1,
    hasText: false,
  },
  {
    id: 11,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 2,
    hasText: false,
  },
  {
    id: 12,
    imageUrl: "https://i.ibb.co/RdcvByn/Generator.webp",
    colSpan: 1,
    hasText: false,
  },
];

const Gallery = () => {
  return (
    <section className="">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className={`
              relative overflow-hidden shadow-md
              col-span-1
              sm:col-span-${Math.min(item.colSpan, 2)}
              md:col-span-${Math.min(item.colSpan, 3)}
              lg:col-span-${item.colSpan}
            `}
            >
              <img
                src={item.imageUrl}
                alt={`Gallery ${item.id}`}
                className="w-full h-48 sm:h-60 object-cover transition-transform duration-300 hover:scale-110"
              />
              {item.hasText && (
                <div className="absolute inset-0 flex items-center justify-center bg-flame-red bg-opacity-40">
                  <h3 className="text-white text-5xl font-semibold">Gallery</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

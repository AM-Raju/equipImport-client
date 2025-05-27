// components/GallerySection.js
import { FaCameraRetro } from "react-icons/fa";
// data/galleryData.js
const galleryData = [
  {
    id: 1,
    imageUrl: "/images/gallery1.jpg",
    colSpan: 2,
    hasText: true,
  },
  {
    id: 2,
    imageUrl: "/images/gallery2.jpg",
    colSpan: 1,
    hasText: false,
  },
  {
    id: 3,
    imageUrl: "/images/gallery3.jpg",
    colSpan: 1,
    hasText: false,
  },
  {
    id: 4,
    imageUrl: "/images/gallery4.jpg",
    colSpan: 2,
    hasText: false,
  },
  {
    id: 5,
    imageUrl: "/images/gallery5.jpg",
    colSpan: 1,
    hasText: false,
  },
];

const Gallery = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <FaCameraRetro className="text-pink-600 text-2xl" />
          <h2 className="text-3xl font-bold text-gray-800">Create Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg shadow-md col-span-${item.colSpan}`}
            >
              <img
                src={item.imageUrl}
                alt={`Gallery ${item.id}`}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
              />
              {item.hasText && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <h3 className="text-white text-2xl font-semibold">Gallery</h3>
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

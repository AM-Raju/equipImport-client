"use client";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaShoppingCart,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={60} />,
    title: "Web Development",
    desc: "We build high-performance, responsive websites that are customized to your business goals, ensuring speed, security, and scalability for long-term online success.",
    bg: "https://i.ibb.co/gbXY7FHj/Substation.webp",
  },
  {
    icon: <FaPaintBrush size={60} />,
    title: "UI/UX Design",
    desc: "We design visually appealing and intuitive user interfaces that enhance the user experience, increase engagement, and drive better results across all platforms.",
    bg: "https://i.ibb.co/gbXY7FHj/Substation.webp",
  },
  {
    icon: <FaMobileAlt size={60} />,
    title: "Mobile Apps",
    desc: "We develop fast, reliable, and user-friendly mobile applications for both Android and iOS, tailored to your specific requirements and business objectives.",
    bg: "https://i.ibb.co/gbXY7FHj/Substation.webp",
  },
  {
    icon: <FaSearch size={60} />,
    title: "SEO Optimization",
    desc: "Our SEO strategies help improve your website’s visibility in search engines, increase traffic, and drive more qualified leads to your business online.",
    bg: "https://i.ibb.co/gbXY7FHj/Substation.webp",
  },
  {
    icon: <FaShoppingCart size={60} />,
    title: "E-commerce Solutions",
    desc: "We provide end-to-end e-commerce development services that include secure payment integration, user-friendly navigation, and performance-optimized shopping experiences.",
    bg: "https://i.ibb.co/gbXY7FHj/Substation.webp",
  },
  {
    icon: <FaRocket size={60} />,
    title: "Startup Launch",
    desc: "From ideation to deployment, we offer complete technical support to startups, helping turn your vision into a scalable and impactful digital product.",
    bg: "https://i.ibb.co/gbXY7FHj/Substation.webp",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12">
          We offer a wide range of services to help you grow your business.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group  overflow-hidden bg-cover bg-center shadow-lg 
           
               
              `}
              style={{ backgroundImage: `url('${service.bg}')` }}
            >
              <div
                className={`relative z-10 
            ${
              index == 0
                ? "bg-gradient-to-tr from-green-500 to-transparent  "
                : ""
            }
            ${
              index == 1
                ? "bg-gradient-to-br from-yellow-500 to-transparent"
                : ""
            }
            ${
              index == 2 ? "bg-gradient-to-tr from-blue-500 to-transparent" : ""
            }
            ${
              index == 3
                ? "bg-gradient-to-br from-orange-500 to-transparent"
                : ""
            }
            ${
              index == 4 ? "bg-gradient-to-tr from-cyan-500 to-transparent" : ""
            }
            ${
              index == 5
                ? "bg-gradient-to-br from-red-500 to-transparent  "
                : ""
            } p-12 text-white min-h-[350px] flex flex-col justify-center group`}
              >
                <div className="mb-4 group-hover:scale-105 transition-all duration-500 text-white/80">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

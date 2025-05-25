"use client";

import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const headerData = {
  logoText: "MySite",
  menuItems: [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    {
      label: "Services",
      dropdown: true,
      items: [
        { label: "Service One", href: "#" },
        { label: "Service 2", href: "#" },
        { label: "Service 3", href: "#" },
      ],
    },
    { label: "Contact", href: "#" },
  ],
};

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const logoImage = ""; // Add your image path or leave empty for text logo

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {logoImage ? (
            <Image src={logoImage} alt="Logo" width={40} height={40} />
          ) : (
            <h1 className="text-xl font-bold text-gray-800">
              {headerData.logoText}
            </h1>
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center relative">
          {headerData.menuItems.map((item, idx) =>
            item.dropdown ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 relative group overflow-hidden">
                  <span className="px-3 py-2">{item.label}</span>
                  <FaChevronDown className="text-sm mt-0.5" />
                  <span className="absolute left-0 -bottom-5 group-hover:-bottom-0.5 w-full h-2 bg-red-500 rounded-t-full transition-all duration-300 "></span>
                </button>
                <div
                  className={`absolute top-10 left-0 w-64 bg-white mt-2 shadow-md rounded z-10 transition-opacity duration-200 ${
                    dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {item.items.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      href={subItem.href}
                      className="block px-5 py-3 group hover:bg-gray-100 relative overflow-hidden"
                    >
                      {subItem.label}
                      <span className="absolute -left-2 group-hover:left-0 top-0 w-2 h-full bg-red-500 rounded-r-full transition-all duration-300 "></span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className="relative group px-3 py-2 overflow-hidden"
              >
                {item.label}
                <span className="absolute left-0 -bottom-5 group-hover:-bottom-0.5 w-full h-2 bg-red-500 rounded-t-full transition-all duration-300 "></span>
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen py-4 px-4" : "max-h-0"
        }`}
      >
        {headerData.menuItems.map((item, idx) =>
          item.dropdown ? (
            <details key={idx} className="py-2">
              <summary className="cursor-pointer flex items-center justify-between">
                <span>{item.label}</span>
                <FaChevronDown className="ml-2 text-sm" />
              </summary>
              <div className="pl-4">
                {item.items.map((subItem, subIdx) => (
                  <Link key={subIdx} href={subItem.href} className="block py-1">
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link key={idx} href={item.href} className="block py-2">
              {item.label}
            </Link>
          )
        )}
      </div>
    </header>
  );
};

export default Header;

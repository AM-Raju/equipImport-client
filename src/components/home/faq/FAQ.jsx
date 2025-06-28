"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What safety measures should I follow while using LPG at home?",
    answer:
      "Always ensure the LPG cylinder is kept upright in a well-ventilated area. Check for leaks regularly using soapy water and never use a naked flame to test leaks. Turn off the regulator when not in use and get your connections inspected periodically by certified professionals.",
  },
  {
    question: "How can I detect a gas leak from my LPG cylinder?",
    answer:
      "If you smell gas, immediately turn off the regulator and open doors and windows for ventilation. Avoid switching on electrical appliances or lighting matches. A strong smell similar to rotten eggs usually indicates a leak. Contact emergency services or your gas supplier right away.",
  },
  {
    question: "What should I do if the flame on my LPG stove turns yellow?",
    answer:
      "A yellow flame can indicate incomplete combustion, which may release harmful carbon monoxide. This could be caused by a blocked burner or incorrect air-to-gas ratio. Clean your burners and ensure proper ventilation. If the issue persists, have it checked by a technician.",
  },
  {
    question: "Is it safe to store LPG cylinders indoors?",
    answer:
      "It’s not recommended to store LPG cylinders indoors, especially in basements or closed spaces. LPG is heavier than air and can accumulate, posing fire and explosion hazards. Always store the cylinder in a shaded, upright, and well-ventilated area.",
  },
  {
    question: "How often should I replace my LPG regulator and hose pipe?",
    answer:
      "It is advisable to replace the LPG regulator every 5 years and the rubber hose every 2 years, or sooner if wear and tear are noticed. Regular inspections and timely replacements ensure safety and efficiency in LPG usage.",
  },
  {
    question: "What services do you offer for commercial LPG installations?",
    answer:
      "We offer complete LPG installation services for restaurants, factories, and hotels. Our team handles system design, pipeline installation, cylinder banks, safety devices, and post-installation maintenance. All installations comply with local fire and safety regulations.",
  },
  {
    question: "Can I switch to your LPG service from another provider?",
    answer:
      "Yes, switching is simple. Our support team assists with documentation, safety checks, and connection transfer. We also offer attractive switching benefits and onboarding support for both residential and commercial clients.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          FAQ
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Frequently asked questions about our LPG services.
        </p>

        <div className="space-y-2 max-w-5xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white shadow-md overflow-hidden transition-all duration-500"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 bg-flame-red/10 text-blue-800 font-semibold text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-flame-red" />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              <div
                className={`px-6 text-gray-700 transition-all duration-300 ease-initial overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

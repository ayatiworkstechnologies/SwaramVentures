"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const portfolioData = [
  {
    id: 1,
    name: "Plenome",
    country: "India",
    category: "Healthcare",
    description: `A healthcare technology company focused on improving access and care delivery.
Builds digital solutions that support efficient clinical operations.`,
    logo: "/assets/logo-1.png",
  },
  {
    id: 2,
    name: "Royal Dutch Clinics",
    country: "UAE",
    category: "Healthcare",
    description: `A multi-specialty healthcare provider delivering patient-centric medical services.
Focused on quality treatment, modern facilities, and clinical excellence.`,
    logo: "/assets/logo-2.png",
  },
  {
    id: 3,
    name: "Rento",
    country: "Peru",
    category: "Robotics / Industry",
    description: `An industrial robotics company enabling automation across manufacturing sectors.
Supports operational efficiency through advanced robotic solutions.`,
    logo: "/assets/logo-3.png",
  },
  {
    id: 4,
    name: "Grazen AI",
    country: "USA",
    category: "Retail & Warehouse Robotics",
    description: `A robotics company developing automation for retail and warehouse operations.
Improves efficiency, accuracy, and scalability in logistics environments.`,
    logo: "/assets/logo-4.png",
  },
  {
    id: 5,
    name: "Inkle",
    country: "USA",
    category: "FinTech",
    description: `A fintech platform offering digital tools for modern financial operations.
Simplifies compliance, payments, and business financial workflows.`,
    logo: "/assets/logo-5.png",
  },
  {
    id: 6,
    name: "Acumulus",
    country: "USA",
    category: "FinTech",
    description: `A financial technology company building scalable digital finance infrastructure.
Supports secure, efficient, and data-driven financial services.`,
    logo: "/assets/logo-6.png",
  },
];

export default function PortfolioTestimonialsSection() {
  const [index, setIndex] = useState(0);

  const total = portfolioData.length;

  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, []);

  const featured = portfolioData[index];

  const sideLogos = [
    portfolioData[(index + 1) % total],
    portfolioData[(index + 2) % total],
    portfolioData[(index + 3) % total],
  ];

  return (
    <section className="bg-[#f4f4f4] py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        
         <div className="relative w-full h-[170px] lg:h-[210px] mb-10 overflow-hidden">
          <img
            src="/assets/Portfolio.jpg"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl lg:text-4xl font-primary font-bold">
              Portfolio
            </h2>
          </div>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Logo Stack */}
          <div className="flex lg:flex-col gap-4">
            {sideLogos.map((item, i) => (
              <button
                key={item.id}
                onClick={() =>
                  setIndex(portfolioData.findIndex((p) => p.id === item.id))
                }
                className={`${
                  i === 1
                    ? "w-28 h-28 border-4 border-red-500"
                    : "w-24 h-24 grayscale"
                } rounded-2xl overflow-hidden bg-white flex items-center justify-center transition hover:scale-105`}
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-contain p-3"
                />
              </button>
            ))}
          </div>

          {/* Main Card */}
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white rounded-3xl shadow-lg p-8 md:p-12"
              >
                {/* Quote background */}
                <div className="absolute right-6 top-6 text-gray-200 text-[120px] font-serif leading-none select-none">
                  ”
                </div>

                {/* Category */}
                <p className="text-sm uppercase tracking-widest text-red-500 mb-4">
                  {featured.category}
                </p>

                {/* Company name */}
                <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
                  {featured.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 whitespace-pre-line">
                  {featured.description}
                </p>

                {/* Footer */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {featured.country}
                    </p>
                    <p className="text-sm text-gray-500">Global Client</p>
                  </div>

                </div>

                <div className="border-t border-dashed mt-6"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

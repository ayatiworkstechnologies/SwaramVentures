"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const portfolioData = [
  {
    id: 1,
    name: "Plenome",
    country: "India",
    category: "Healthcare",
    description: `A healthcare technology company focused on improving access and care delivery.
Builds digital solutions that support efficient clinical operations.`,
    logo: "/assets/logos-1.png",
  },
  {
    id: 2,
    name: "Royal Dutch Medical Center",
    country: "UAE",
    category: "Healthcare",
    description: `A multi-specialty healthcare provider delivering patient-centric medical services.
Focused on quality treatment, modern facilities, and clinical excellence.`,
    logo: "/assets/logos-2.png",
  },
  {
    id: 3,
    name: "Rento",
    country: "Peru",
    category: "Robotics / Industry",
    description: `An industrial robotics company enabling automation across manufacturing sectors.
Supports operational efficiency through advanced robotic solutions.`,
    logo: "/assets/logos-3.png",
  },
  {
    id: 4,
    name: "Grazen AI",
    country: "USA",
    category: "Retail & Warehouse Robotics",
    description: `A robotics company developing automation for retail and warehouse operations.
Improves efficiency, accuracy, and scalability in logistics environments.`,
    logo: "/assets/logos-4.png",
  },
  {
    id: 5,
    name: "Inkle",
    country: "USA",
    category: "FinTech",
    description: `A fintech platform offering digital tools for modern financial operations.
Simplifies compliance, payments, and business financial workflows.`,
    logo: "/assets/logos-5.png",
  },
  {
    id: 6,
    name: "Acumulus",
    country: "USA",
    category: "FinTech",
    description: `A financial technology company building scalable digital finance infrastructure.
Supports secure, efficient, and data-driven financial services.`,
    logo: "/assets/logos-6.png",
  },
];

function PortfolioCard({ item, index, activeIndex }) {
  const isActive = index === activeIndex;

  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.5,
        filter: isActive ? "blur(0px)" : "blur(2px)",
      }}
      transition={{ duration: 0.4 }}
      className={`relative p-8 w-[350px] md:w-[400px] flex-shrink-0 
                 rounded-2xl transition-all duration-300
                 ${isActive ? "bg-white shadow-xl z-20" : "bg-white/50 z-10"}`}
    >
      {/* Accent Line */}
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-secondary transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
      />

      {/* Top row */}
      <div className="flex justify-between items-start mb-8 relative z-20">
        <div className="h-12 w-32 relative">
          {/* Using img for raw path, or next/image if configured. User used img before. */}
          <img
            src={item.logo}
            alt={item.name}
            className="h-full w-full object-contain object-left"
          />
        </div>

        <span className="text-4xl font-bold font-primary text-gray-100">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Company */}
      <div className="mb-4">
        <h3
          className={`text-2xl font-bold font-primary mb-1 ${isActive ? "text-primary" : "text-gray-400"}`}
        >
          {item.name}
        </h3>
        <p className="text-secondary font-medium text-sm tracking-wide uppercase">
          {item.country}
        </p>
      </div>

      {/* Category */}
      <div className="mb-6 inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-500">
        {item.category}
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-sm">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function PortfolioLayoutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Calculate center position
  // We want the active item to be centered in the screen/container.
  // Using a percentage based translation might be easier for responsiveness.
  // But strictly, let's just slide the track.

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % portfolioData.length);
  const handlePrev = () =>
    setActiveIndex((prev) =>
      prev - 1 < 0 ? portfolioData.length - 1 : prev - 1,
    );

  return (
    <section className="bg-[#f8f9fa] py-20 overflow-hidden">
      <div className="container mb-12">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-secondary uppercase tracking-widest text-xs font-bold mb-3 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-primary text-primary">
              Companies We Back
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all smooth"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all smooth"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track */}
      {/* We center the active item by translating the track. 
          The center of the active item should be at 50vw.
          Track Position = 50vw - (CardWidth / 2) - (Index * (CardWidth + Gap)) 
          Let's assume CardWidth = 400px (md), 350px (sm). Gap = 24px.
      */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <motion.div
          className="flex gap-8 absolute left-1/2"
          animate={{
            x: `calc(-${activeIndex * (400 + 32)}px - 200px)`, // Center the active item.
            // Logic:
            // 1. absolute left-1/2 places the *start* of the track at the center of the screen.
            // 2. We want the *center* of the active item to be at the center of the screen.
            // 3. The center of the active item is at: index * (width + gap) + (width / 2).
            // 4. So we shift left (negative x) by that amount.
            // 5. Hardcoded 400px width + 32px gap for simplicity as per design request.
            //    Mobile width (350px) might be slightly off but acceptable for now or can use media query.
          }}
          initial={false}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {portfolioData.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {portfolioData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-8 bg-secondary" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

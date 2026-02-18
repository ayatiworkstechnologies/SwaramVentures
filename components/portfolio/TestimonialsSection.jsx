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
    logo: "/assets/logos-1.png",
    link: "https://plenome.com/",
  },
  {
    id: 2,
    name: "Royal Dutch Clinics",
    country: "UAE",
    category: "Healthcare",
    description: `A multi-specialty healthcare provider delivering patient-centric medical services.
Focused on quality treatment, modern facilities, and clinical excellence.`,
    logo: "/assets/logos-2.png",
    link: "https://royaldutchclinic.ae/",
  },
  {
    id: 3,
    name: "Rento",
    country: "Peru",
    category: "Robotics / Industry",
    description: `An industrial robotics company enabling automation across manufacturing sectors.
Supports operational efficiency through advanced robotic solutions.`,
    logo: "/assets/logos-3.png",
    link: "https://rento.pe/",
  },
  {
    id: 4,
    name: "Grazen AI",
    country: "USA",
    category: "Retail & Warehouse Robotics",
    description: `A robotics company developing automation for retail and warehouse operations.
Improves efficiency, accuracy, and scalability in logistics environments.`,
    logo: "/assets/logos-4.png",
    link: "https://graze.ai/",
  },
  {
    id: 5,
    name: "Inkle",
    country: "USA",
    category: "FinTech",
    description: `A fintech platform offering digital tools for modern financial operations.
Simplifies compliance, payments, and business financial workflows.`,
    logo: "/assets/logos-5.png",
    link: "https://www.inkle.ai/",
  },
  {
    id: 6,
    name: "Acumulus",
    country: "USA",
    category: "FinTech",
    description: `A financial technology company building scalable digital finance infrastructure.
Supports secure, efficient, and data-driven financial services.`,
    logo: "/assets/logos-6.png",
    link: "https://acumulus.in/",
  },
  {
    id: 7,
    name: "MiTrans Innovation Systems",
    country: "USA",
    category: "Edutech",
    description: `An education technology platform enabling digital learning transformation through scalable systems, institutional partnerships, and structured implementation across academic environments.`,
    logo: "/assets/logos-10.png",
    link: "https://www.edutech.com/",
  },
  {
    id: 8,
    name: "Passelz",
    country: "USA",
    category: "Passelz",
    description: `A digital identity platform enabling users to manage multiple personas and control content visibility. Supports authentic self-representation across personal, professional, and social environments.`,
    logo: "/assets/logos-8.png",
    link: "https://www.passelz.com/",
  },
  {
    id: 9,
    name: "Swaram General Trade",
    country: "UAE",
    category: "SwaRam",
    description: `A diversified trading and infrastructure platform delivering import-export services, sourcing, logistics coordination, and integrated solutions across healthcare, energy, and construction sectors.`,
    logo: "/assets/logos-9.png",
  },
];

export default function PortfolioTestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = portfolioData.length;

  /* Auto-rotate */
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(t);
  }, [total]);

  const featured = portfolioData[index];

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  const stack = [
    { ...portfolioData[prevIndex], type: "prev" },
    { ...featured, type: "current" },
    { ...portfolioData[nextIndex], type: "next" },
  ];

  return (
    <section className="bg-[#f4f4f4] py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Logo Stack */}
          <div className="flex flex-col gap-6 items-center flex-shrink-0 min-w-[140px] h-[400px] justify-center">
            <AnimatePresence mode="popLayout">
              {stack.map((item) => {
                const isCurrent = item.type === "current";
                return (
                  <motion.button
                    layout
                    key={item.id}
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{
                      opacity: isCurrent ? 1 : 0.5,
                      x: 0,
                      scale: isCurrent ? 1 : 0.9,
                      filter: isCurrent ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    onClick={() =>
                      setIndex(portfolioData.findIndex((p) => p.id === item.id))
                    }
                    className={`relative flex items-center justify-center rounded-2xl bg-white ${
                      isCurrent ? "w-40 h-36 shadow-xl" : "w-24 h-24 shadow-sm"
                    }`}
                  >
                    <div className="relative w-full h-full p-5">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Main Card */}
          <div className="relative w-full flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 min-h-[400px] flex flex-col justify-center"
              >
                {/* BG Logo */}
                <div className="absolute right-8 top-8 opacity-10">
                  <div className="w-24 h-24 relative">
                    <Image
                      src={featured.logo}
                      alt="BG Logo"
                      fill
                      className="object-contain grayscale"
                    />
                  </div>
                </div>

                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">
                  {featured.category}
                </span>

                <h3 className="text-4xl md:text-5xl font-bold font-primary text-primary mb-6">
                  {featured.name}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line max-w-2xl mb-8">
                  {featured.description}
                </p>

                <div className="mt-auto">
                  <p className="font-bold text-primary">{featured.country}</p>
                  <p className="text-sm text-gray-400">Global Client</p>

                  {/* Link only if exists */}
                  {featured.link && (
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-secondary hover:text-primary/80 transition-colors font-semibold"
                    >
                      View Company →
                    </a>
                  )}

                  <div className="w-full border-t border-dashed border-gray-200 mt-6 pt-6" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  },
  {
    id: 2,
    name: "Royal Dutch Clinics",
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

export default function PortfolioTestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = portfolioData.length;

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const featured = portfolioData[index];

  // Calculate indices for the stack
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  // The stack items: [Previous, Current, Next]
  const stack = [
    { ...portfolioData[prevIndex], type: "prev" },
    { ...featured, type: "current" },
    { ...portfolioData[nextIndex], type: "next" },
  ];

  return (
    <section className="bg-[#f4f4f4] py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
          <div className="relative h-[250px] md:h-[300px] w-full">
            <img
              src="/assets/Portfolio.jpg"
              alt="Current Investments"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-white mb-4 font-primary"
              >
                Current Investments
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "5rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 bg-secondary mb-6"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white/90 text-lg md:text-xl leading-relaxed"
              >
                A curated portfolio of companies operating across high-impact,
                technology-enabled sectors.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Vertical Logo Stack */}
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
                    className={`
                      relative flex items-center justify-center
                      rounded-2xl bg-white
                      ${
                        isCurrent
                          ? "w-40 h-36 shadow-xl border border-transparent z-10"
                          : "w-24 h-24 shadow-sm border border-transparent z-0"
                      }
                    `}
                  >
                    <div
                      className={`relative w-full h-full p-4 ${isCurrent ? "p-6" : "p-4"}`}
                    >
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

          {/* Main Content Card - Updates based on 'index' */}
          <div className="relative w-full flex-grow h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 min-h-[400px] flex flex-col justify-center"
              >
                <div className="absolute right-8 top-8 opacity-10">
                  <div className="w-24 h-24 md:w-32 md:h-32 relative">
                    <Image
                      src={featured.logo}
                      alt="BG Logo"
                      fill
                      className="object-contain grayscale"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-secondary font-bold uppercase tracking-widest text-xs">
                    {featured.category}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold font-primary text-primary mb-6">
                  {featured.name}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line max-w-2xl relative z-10 mb-8">
                  {featured.description}
                </p>

                <div className="mt-auto">
                  <p className="font-bold text-primary">{featured.country}</p>
                  <p className="text-sm text-gray-400">Global Client</p>

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

"use client";

import { motion } from "framer-motion";
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

function PortfolioCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="relative p-6 lg:p-8 w-[300px] sm:w-[320px] flex-shrink-0 
                 group bg-transparent hover:bg-white 
                 transition-all duration-300"
    >
      {/* Card shadow (behind content) */}
      <div
        className="absolute inset-0 rounded-soft 
                   group-hover:shadow-soft 
                   transition-all duration-300 
                   pointer-events-none z-0"
      />

      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 w-[3px] h-full bg-secondary 
                   origin-top scale-y-0 
                   group-hover:scale-y-100 
                   transition-transform duration-300 z-10"
      />

      {/* Top row */}
      <div className="flex justify-between items-start mb-6 relative z-20">
        <img src={item.logo} alt={item.name} className="h-10 object-contain" />

        <span
          className="text-xl font-primary font-bold 
             text-gray-300 
             group-hover:text-secondary 
             transition-colors duration-300"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Company */}
      <div className="relative mb-3 inline-block z-20">
        <span
          className="text-blue-600 font-semibold 
                     group-hover:text-secondary 
                     transition-colors duration-300"
        >
          {item.name}
        </span>

        <span className="mx-2 text-gray-400">–</span>
        <span className="text-blue-600 font-medium">{item.country}</span>

        {/* Animated underline */}
        <div
          className="absolute left-0 -bottom-1 h-[2px] w-[60px]
                     bg-secondary 
                     scale-x-0 origin-left
                     group-hover:scale-x-100
                     transition-transform duration-300"
        />
      </div>

      {/* Category */}
      <h3 className="font-primary text-base text-primary mb-3 relative z-20">
        {item.category}
      </h3>

      {/* Description */}
      <p className="text-body-card relative z-20">{item.description}</p>
    </motion.div>
  );
}

export default function PortfolioLayoutSection() {
  return (
    <section className="bg-[#f1f1f1] py-16">
      <div className="container">
        {/* Banner */}
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

        {/* Cards Row */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {portfolioData.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

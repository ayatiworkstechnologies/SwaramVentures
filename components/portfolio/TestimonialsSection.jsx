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
    description: `Investor, Plenome is developing secure, scalable, and interoperable digital infrastructure for sensitive data applications. Its “Blockchain OrganEase” solution is already in trial with a state transplant authority, while its remote voting platform “BlockVote” has been successfully deployed at IIT Madras and is now being pitched for large-scale enterprise elections.

Plenome is also testing its AI-powered health-tech suite “Ashwin” for structured, multilingual data capture in dental clinics, with plans to expand into eye care, cosmetic, and fertility domains. With its DLT-powered backend and AI-driven front end, Plenome aims to unify data creation, management, and diagnostics while ensuring data privacy and user control.`,
    logo: "/assets/logos-1.png",
    link: "https://plenome.com/",
  },
  {
    id: 2,
    name: "Royal Dutch Medical Center",
    country: "UAE",
    category: "Healthcare",
    description: `A multi-specialty healthcare provider delivering patient-centric medical services. Focused on quality treatment, modern facilities, and clinical excellence.

Co-founder, providing strategic guidance and capital investment to support growth across the UAE and MENA regions.`,
    logo: "/assets/logos-2.png",
    link: "https://royaldutchclinic.ae/",
  },
  {
    id: 3,
    name: "Rento",
    country: "Peru",
    category: "Robotics / Industry",
    description: `Investor, RENTO is a P2P car-rental platform that turns idle cars into accessible, affordable, and sustainable mobility solutions.

Powered by an asset-light model, GenAI-driven sales, and over 2,700 happy business partners, Rento is transforming the future of shared mobility.`,
    logo: "/assets/logos-3.png",
    link: "https://rento.pe/",
  },
  {
    id: 4,
    name: "Grazen AI",
    country: "USA",
    category: "Retail & Warehouse Robotics",
    description: `Investor, Grazen is redefining autonomous automation in retail and warehousing. It is an adaptive, fully agentic system built to navigate the dynamic chaos of real-world environments and deliver value from day one.

Grazen’s autonomous platform leverages reinforcement learning to adapt dynamically, offering more versatile, affordable, and agentic robotics that power the next era of operational efficiency and growth.`,
    logo: "/assets/logos-4.png",
    link: "https://graze.ai/",
  },
  {
    id: 5,
    name: "Inkle",
    country: "USA",
    category: "FinTech",
    description: `Investor, INKLE helps early-stage startups maintain accounts, file taxes, and stay compliant through intuitive software.

INKLE simplifies complex financial processes, giving founders the clarity and control needed to make informed decisions and accelerate growth.`,
    logo: "/assets/logos-5.png",
    link: "https://www.inkle.ai/",
  },
  {
    id: 6,
    name: "Acumulus",
    country: "USA",
    category: "FinTech",
    description: `Investor, ACUMULUS is building a new movement in value-driven loyalty—reinventing the future of connected fintech and consumer services.

With seamless APIs and intelligent AI agents, it creates a new era of value for consumers, brands, and platforms.`,
    logo: "/assets/logos-7.png",
    link: "https://acumulus.net/",
  },
  {
    id: 7,
    name: "MiTrans Innovation Systems",
    country: "USA",
    category: "Edutech",
    description: `Investor, MiTrans provides online and hybrid educational services using advanced technologies to evaluate students’ emotional intelligence, self-esteem, and happiness quotient.

Its LIVE Positive Mind Mastery Workshop has empowered thousands of parents and students to achieve greater confidence, well-being, and improved academic performance.`,
    logo: "/assets/logos-10.png",
    link: "https://www.edutech.com/",
  },
  {
    id: 8,
    name: "Passelz",
    country: "USA",
    category: "Digital Identity",
    description: `A digital identity platform that enables users to manage multiple personas and control content visibility across contexts.

It supports authentic self-representation across personal, professional, and social environments.`,
    logo: "/assets/logos-8.png",
    link: "https://www.passelz.com/",
  },
  {
    id: 9,
    name: "Swaram General Trading",
    country: "UAE",
    category: "Trading & Infrastructure",
    description: `A diversified trading and infrastructure platform delivering import-export services, sourcing, logistics coordination, and integrated solutions across healthcare, energy, and construction sectors.`,
    logo: "/assets/logos-9.png",
  },
  {
    id: 10,
    name: "DripDropUSA",
    country: "USA",
    category: "Environmental Technology",
    description: `A clean technology platform focused on sustainable water and environmental solutions. Improves access, efficiency, and long-term resource resilience through innovation.`,
    logo: "/assets/logos-11.webp",
    link: "https://www.dripdropusa.com/",
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

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioSection() {
  const items = [
    {
      id: 1,
      name: "Plenome",
      country: "India",
      category: "Healthcare",
      description: `A healthcare technology company focused on improving access and care delivery.
Builds digital solutions that support efficient clinical operations.`,
      logo: "/assets/portfolio-1.png",
    },
    {
      id: 2,
      name: "Royal Dutch Clinics",
      country: "UAE",
      category: "Healthcare",
      description: `A multi-specialty healthcare provider delivering patient-centric medical services.
Focused on quality treatment, modern facilities, and clinical excellence.`,
      logo: "/assets/portfolio-2.png",
    },
    {
      id: 3,
      name: "Rento",
      country: "Peru",
      category: "Robotics / Industry",
      description: `An industrial robotics company enabling automation across manufacturing sectors.
Supports operational efficiency through advanced robotic solutions.`,
      logo: "/assets/portfolio-3.png",
    },
    {
      id: 4,
      name: "Grazen AI",
      country: "USA",
      category: "Retail & Warehouse Robotics",
      description: `A robotics company developing automation for retail and warehouse operations.
Improves efficiency, accuracy, and scalability in logistics environments.`,
      logo: "/assets/portfolio-4.png",
    },
    {
      id: 5,
      name: "Inkle",
      country: "USA",
      category: "FinTech",
      description: `A fintech platform offering digital tools for modern financial operations.
Simplifies compliance, payments, and business financial workflows.`,
      logo: "/assets/portfolio-5.png",
    },
    {
      id: 6,
      name: "Acumulus",
      country: "USA",
      category: "FinTech",
      description: `A financial technology company building scalable digital finance infrastructure.
Supports secure, efficient, and data-driven financial services.`,
      logo: "/assets/portfolio-2.png",
    },
  ];

  // Slider Logic
  const visible = 4; // Number of items visible at once on desktop
  const maxIndex = Math.max(0, items.length - visible);
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section className="section-y bg-white">
      <div className="container">
        {/* =================================================
           HEADER
        ================================================= */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          {/* LEFT */}
          <div>
            <p className="tag mb-3">Portfolio</p>

            <h2 className="section-title">What We Build</h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4 h-[2px] bg-secondary"
            />

            <p className="text-body max-w-xl">
              A diverse portfolio of companies operating across healthcare, AI,
              robotics, fintech, and global trade.
            </p>
          </div>

          {/* RIGHT: Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white smooth"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white smooth"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* =================================================
           SLIDER TRACK
        ================================================= */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${index * (100 / visible)}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="flex"
          >
            {items.map((item, i) => (
              <div
                key={item.id}
                className="
                  w-full
                  sm:w-1/2
                  lg:w-1/4
                  shrink-0
                  px-4
                "
              >
                <div className="group cursor-pointer">
                  {/* IMAGE (Logo) */}
                  <div className="relative w-full h-[190px] overflow-hidden mb-4 bg-gray-50 rounded-md flex items-center justify-center border border-gray-100">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="
                            object-coverd
                            transition
                            duration-700
                            group-hover:scale-105
                        "
                      />
                    </div>
                  </div>

                  {/* TITLE (Name) */}
                  <h3
                    className="
                    font-primary
                    text-primary
                    text-base
                    font-semibold
                    mb-1
                  "
                  >
                    {item.name}
                  </h3>

                  {/* DESCRIPTION (Category) */}
                  <p
                    className="
                    text-secondary
                    text-sm
                    font-medium
                    mb-2
                  "
                  >
                    {item.category}
                  </p>

                  {/* FULL DESC (Optional, kept mostly hidden or truncated) */}
                  <p className="text-body-card text-sm line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "Capital Philosophy",
    desc: "How We Deploy Capital: Swaram Ventures invests as a family fund with a multi-generational mindset.",
    cardTitle: "Family Fund Mindset",
    cardDesc:
      "Our capital is structured to support founders through growth, complexity, and market cycles, without pressure for premature outcomes.",
    image: "/assets/cap-3.png",
  },
  {
    title: "Selective Investment",
    desc: "Guided by conviction rather than volume.",
    cardTitle: "Long-Term Relevance",
    cardDesc:
      "Each investment reflects deep belief in the founder, the market, and the company’s long-term relevance.",
    image: "/assets/cap-4.png",
  },
];

export default function ServicesHeroSection() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = () => setIndex((i) => (i + 1) % total);

  /* auto slide */
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, []);

  const active = slides[index];

  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-orange-500 uppercase tracking-widest text-xs mb-3">
                Services
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {active.title}
              </h2>

              <div className="w-16 h-[2px] bg-gray-300 mb-6"></div>

              <p className="text-gray-500 max-w-md">{active.desc}</p>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT CARD */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="relative w-full h-[420px] md:h-[480px]">
                  <Image
                    src={active.image}
                    alt={active.cardTitle}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">
                    {active.cardTitle}
                  </h3>
                  <p className="text-white/90 text-sm max-w-sm">
                    {active.cardDesc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM PROGRESS BARS */}
        <div className="flex gap-6 mt-12 max-w-xl">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className="flex-1">
              <motion.div
                animate={{ width: index === i ? "100%" : "40%" }}
                transition={{ duration: 0.4 }}
                className={`h-[4px] ${
                  index === i ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

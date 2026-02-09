"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CoreValuesSection() {
  const values = [
    {
      icon: "/assets/core-1.jpg",
      title: "Vision-Driven Innovation",
      text: "We believe bold ideas create better futures. We seek founders and teams with the curiosity, courage, and clarity to transform industries.",
    },
    {
      icon: "/assets/core-2.jpg",
      title: "Long-Term Partnership",
      text: "We invest with commitment — not just capital. We build enduring relationships rooted in trust, transparency, and shared ambition.",
    },
    {
      icon: "/assets/core-3.jpg",
      title: "Impact First",
      text: "We prioritize solutions that improve how the world builds, moves, and cares — valuing meaningful societal and environmental outcomes alongside financial returns.",
    },
    {
      icon: "/assets/core-4.jpg",
      title: "Integrity & Respect",
      text: "Ethical conduct, humility, and respect for diverse perspectives guide how we work with founders, investors, and communities.",
    },
    {
      icon: "/assets/core-5.jpg",
      title: "Excellence in Execution",
      text: "We push for operational discipline — helping founders solve real problems, scale sustainably, and deliver results with excellence.",
    },
    {
      icon: "/assets/core-6.jpg",
      title: "Inclusive Growth",
      text: "We champion diversity in teams, ideas, and opportunities — knowing that inclusive innovation unlocks broader impact and resilience.",
    },
  ];

  const visible = 4;
  const maxIndex = values.length - visible;
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="section-y bg-white overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="section-title text-left">Core Values</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4 h-[2px] bg-secondary"
          />
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative">
          {/* ===== ARROWS (desktop only) ===== */}
          <div className="hidden sm:flex justify-end gap-3 mb-6">
            <button
              onClick={prev}
              disabled={index === 0}
              className="p-3 rounded-full border border-slate-300 hover:bg-secondary hover:text-secondary disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              disabled={index === maxIndex}
              className="p-3 rounded-full border border-slate-300 hover:bg-secondary hover:text-secondary disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* ===== MOBILE SCROLL ===== */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide sm:hidden items-stretch">
            {values.map((item, i) => (
              <div key={i} className="min-w-[85%] snap-start flex">
                <div className="bg-white border border-slate-200 shadow-sm flex flex-col w-full">
                  <div className="relative w-full h-36 shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 text-center flex flex-col flex-1">
                    <h3 className="font-primary text-primary font-semibold text-xl mb-2">
                      {item.title}
                    </h3>

                    <div className="mx-auto mb-4 h-[2px] bg-secondary w-16" />

                    <p className="text-body-card text-sm leading-relaxed flex-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== DESKTOP SLIDER ===== */}
          <motion.div
            animate={{ x: `-${index * 25}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="hidden sm:flex gap-6 items-stretch"
          >
            {values.map((item, i) => (
              <div key={i} className="w-[48%] md:w-[23%] shrink-0 flex">
                <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md smooth hover:-translate-y-1 flex flex-col w-full">
                  <div className="relative w-full h-36 shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 text-center flex flex-col flex-1">
                    <h3 className="font-primary text-primary font-semibold text-xl mb-2">
                      {item.title}
                    </h3>

                    <div className="mx-auto mb-4 h-[2px] bg-secondary w-16" />

                    <p className="text-body-card leading-relaxed flex-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ===== INDICATORS ===== */}
          <div className="hidden sm:flex mt-10 justify-center gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className="group">
                <motion.div
                  animate={{ width: index === i ? 40 : 18 }}
                  transition={{ duration: 0.25 }}
                  className={`h-[6px] cursor-pointer ${
                    index === i
                      ? "bg-secondary"
                      : "bg-primary group-hover:bg-secondary"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

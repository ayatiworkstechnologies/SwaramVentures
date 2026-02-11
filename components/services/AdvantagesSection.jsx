"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AdvantagesSection() {
  const advantages = [
    {
      tag: "STRATEGY",
      title: "Zero Pressure",
      text: "Structure capital solutions driven by long cycles. Built at the speed of reality.",
    },
    {
      tag: "ALIGNMENT",
      title: "Absolute Terms",
      text: "Liquidity events are defined by business maturity, not general partner timing.",
    },
    {
      tag: "STRUCTURE",
      title: "Durability",
      text: "Strategic backing focused on long-term resilience and compounding returns.",
    },
    {
      tag: "STRENGTH",
      title: "Deep Reserve",
      text: "Substantial compounding capital by a permanent capital base and global network.",
    },
  ];

  const [index, setIndex] = useState(0);
  const total = advantages.length;

  const next = () =>
    setIndex((i) => (i + 1 > total - 1 ? 0 : i + 1));
  const prev = () =>
    setIndex((i) => (i - 1 < 0 ? total - 1 : i - 1));

  /* auto slide */
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-soft section-y overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="section-title">Advantages.</h2>
            <div className="w-16 h-[3px] bg-secondary mt-3"></div>
          </div>

          {/* ARROWS */}
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

        {/* SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${index * 25}%` }}   // move one card
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
            className="flex gap-6"
          >
            {advantages.map((item, i) => (
              <div
                key={i}
                className="
                  min-w-full
                  md:min-w-[48%]
                  lg:min-w-[23%]
                  bg-white
                  border border-gray-200
                  rounded-xl
                  p-10
                  shadow-sm
                "
              >
                <p className="text-[11px] uppercase tracking-widest text-secondary mb-5">
                  {item.tag}
                </p>

                <h3 className="text-lg font-primary font-semibold text-primary mb-3">
                  {item.title}
                </h3>

                <p className="text-body-card text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* INDICATORS */}
        {/* <div className="flex gap-3 mt-10">
          {advantages.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className="flex-1">
              <motion.div
                animate={{ width: index === i ? "100%" : "40%" }}
                transition={{ duration: 0.3 }}
                className={`h-[3px] ${
                  index === i ? "bg-secondary" : "bg-gray-300"
                }`}
              />
            </button>
          ))}
        </div> */}
      </div>
    </section>
  );
}

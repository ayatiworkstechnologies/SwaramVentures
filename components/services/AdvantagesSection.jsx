"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function AdvantagesSection() {
  const advantages = [
    {
      id: "01",
      title: "Strategy as a Long-Term Advantage",
      text: "Our strategy is grounded in focus. We back businesses operating in essential, technology-driven sectors where long-term value creation matters more than rapid momentum. A clear strategy creates consistency across decisions, governance, and growth.",
    },
    {
      id: "02",
      title: "Investment Thesis",
      text: "We invest in companies solving meaningful problems in large, evolving markets. Our focus is on platforms that combine technology, execution discipline, and defensibility.",
    },
    {
      id: "03",
      title: "Stage & Check Size",
      text: "We partner with early and growth-stage companies where capital, guidance, and alignment can materially influence outcomes. Our check sizes are flexible and structured to support long-term plans.",
    },
    {
      id: "04",
      title: "Geographic Focus",
      text: "We invest globally, with particular emphasis on regions where innovation, talent, and market opportunity intersect.",
    },
    {
      id: "05",
      title: "Capital Approach",
      text: "Our capital is patient in structure and deliberate in deployment. We prioritize governance, alignment, and sustainability over speed.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 5 seconds if user hasn't interacted recently?
  // User asked for "contents as button give to move like", implying manual control mostly.
  // Let's keep it manual or auto-rotating.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % advantages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [advantages.length]);

  return (
    <section className="bg-white section-y">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: STATIC NAV (The 5 Buttons) */}
          <div className="lg:col-span-5 relative">
            <span className="text-secondary uppercase tracking-widest text-xs font-bold mb-6 block">
              Strategic Framework
            </span>
            <div className="space-y-2 relative">
              {/* Vertical Line for progress/timeline feel */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100 hidden md:block" />

              {advantages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left py-4 px-6 md:pl-8 rounded-lg transition-all duration-300 group flex items-center justify-between relative border-l-2 md:border-l-0 ${
                    activeIndex === index
                      ? "bg-secondary/5 border-secondary md:border-l-0"
                      : "hover:bg-gray-50 border-transparent"
                  }`}
                >
                  {/* Active Indicator Line (Mobile/Desktop dynamic) */}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-[-2px] top-0 bottom-0 w-[4px] bg-secondary hidden md:block rounded-r-sm"
                    />
                  )}

                  <span
                    className={`text-lg md:text-xl font-bold font-primary transition-colors ${
                      activeIndex === index
                        ? "text-primary"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {item.title}
                  </span>

                  {activeIndex === index && (
                    <ChevronRight className="text-secondary w-5 h-5 ml-4" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: SLIDING CONTENT */}
          <div className="lg:col-span-7 relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-soft/50 p-8 md:p-12 rounded-3xl border border-gray-100 w-full shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-gray-200/50 select-none">
                    {advantages[activeIndex].id}
                  </span>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-primary text-primary mb-6">
                  {advantages[activeIndex].title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed show-line-breaks">
                  {advantages[activeIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

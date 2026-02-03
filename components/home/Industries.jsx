"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    title: "Advanced Manufacturing",
    desc: "Precision, efficiency, and scalable smart production systems.",
    img: "/assets/industries-1.png",
    color: "from-blue-500/20",
  },
  {
    title: "Healthcare & Digital Health",
    desc: "Innovative digital solutions designed to improve healthcare delivery. Enhancing patient care through smart, connected technologies.",
    img: "/assets/industries-2.png",
    color: "from-emerald-500/20",
  },
  {
    title: "Artificial Intelligence",
    desc: "Intelligent systems designed to optimize processes and drive smarter decisions.",
    img: "/assets/industries-3.png",
    color: "from-purple-500/20",
  },
  {
    title: "Fintech Infrastructure",
    desc: "Secure digital banking and embedded financial ecosystems.",
    img: "/assets/industries-2.png",
    color: "from-amber-500/20",
  },
  {
    title: "Global Trade Logistics",
    desc: "Smart supply chain and intelligent logistics platforms.",
    img: "/assets/industries-1.png",
    color: "from-cyan-500/20",
  },
];

export default function IndustriesSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % items.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  // Updated styles for WIDER layout
  const getCardStyles = (idx) => {
    const diff = (idx - index + items.length) % items.length;

    // Active Center Card
    if (diff === 0) return { position: "center", x: 0, scale: 1, z: 20, opacity: 1 };

    // Right Card
    if (diff === 1 || diff === -(items.length - 1)) {
      return { position: "right", x: "100%", scale: 0.85, z: 10, opacity: 0.4 };
    }

    // Left Card
    if (diff === items.length - 1 || diff === -1) {
      return { position: "left", x: "-100%", scale: 0.85, z: 10, opacity: 0.4 };
    }

    return { position: "hidden", x: 0, scale: 0.5, z: 0, opacity: 0 };
  };

  return (
    <section
      className="relative py-20 md:py-28 bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Glow */}
      <div className={`absolute inset-0 transition-colors duration-1000 bg-gradient-to-b ${items[index].color} to-transparent opacity-20`} />

      {/* Container widened to 1600px for ultra-wide feel */}
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title mb-6 tracking-tight"
          >
            Industries
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1 bg-secondary mx-auto mb-8 rounded-full"
          />
        </div>

        {/* Wider 3D SLIDER Track */}
        <div className="relative h-[500px] md:h-[680px] flex items-center justify-center">

          <AnimatePresence mode="popLayout">
            {items.map((item, i) => {
              const styles = getCardStyles(i);
              // On mobile, only show the center card for simplicity, or handle stacking
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              // Note: handling window resizing properly would require a hook, but CSS hiding works for simple cases.

              if (styles.position === "hidden") return null;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    x: styles.x,
                    scale: styles.scale,
                    zIndex: styles.z,
                    opacity: styles.opacity,
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 25 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -40) next();
                    if (info.offset.x > 40) prev();
                  }}
                  // Increased max-width to 550px for a wider card look
                  className={`absolute w-full max-w-[340px] md:max-w-[450px] lg:max-w-[550px] bg-white rounded-[2.5rem] shadow-soft border border-slate-100 overflow-hidden 
                    ${styles.position === "center" ? "cursor-grab active:cursor-grabbing shadow-lg2" : "hidden md:block pointer-events-none"}
                  `}
                  style={{
                    // Use CSS variables or just standard styles to force center on mobile if needed, 
                    // but the "hidden md:block" logic below handles the side cards.
                  }}
                >
                  <div className="relative h-56 md:h-96">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>

                  <div className="p-6 md:p-12 text-center flex flex-col items-center">
                    <h3 className="text-xl md:text-3xl font-bold font-primary text-primary mb-4">{item.title}</h3>
                    <p className="text-body text-sm md:text-lg mb-6 md:mb-8 max-w-md">
                      {item.desc}
                    </p>
                    <button className="group btn btn-primary px-8 py-3 md:px-10 md:py-4 shadow-xl shadow-blue-100/50">
                      Learn More
                      <Play size={16} className="fill-white group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Desktop Controls - Pushed further to the edges */}
          <div className="hidden xl:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-10 z-50 pointer-events-none">
            <button
              onClick={prev}
              className="p-5 rounded-full bg-white shadow-2xl text-primary pointer-events-auto hover:bg-secondary hover:text-white transition-all transform hover:scale-110 active:scale-90"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={next}
              className="p-5 rounded-full bg-white shadow-2xl text-primary pointer-events-auto hover:bg-secondary hover:text-white transition-all transform hover:scale-110 active:scale-90"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </div>

        {/* Navigation Indicator */}
        <div className="flex justify-center items-center gap-4 mt-6 md:mt-16">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-500 rounded-full ${i === index ? "w-16 h-3 bg-secondary" : "w-3 h-3 bg-slate-200 hover:bg-slate-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
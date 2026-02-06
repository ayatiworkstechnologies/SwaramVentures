"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const bannerImages = [
  "/assets/slider-1.jpg",
  "/assets/slider-2.jpg",
  "/assets/slider-3.jpg",
];

export default function PortfolioBanner() {
  const [active, setActive] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white section-y">
      <div className="container">
        <div className="relative w-full overflow-hidden shadow-lg">
          {/* Image Slider */}
          <div className="relative w-full h-[160px] sm:h-[200px] lg:h-[320px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={bannerImages[active]}
                alt="Portfolio"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Left gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-[60%] to-transparent" />
          </div>

          {/* Text + indicators */}
          <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 text-white">
            <h2 className="font-primary text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
              Portfolio
            </h2>

            {/* Slide indicators */}
            <div className="mt-3 flex items-center gap-3">
              {bannerImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-[2px] transition-all duration-300
                    ${
                      i === active
                        ? "w-10 bg-secondary"
                        : "w-6 bg-white/40 hover:bg-white/70"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

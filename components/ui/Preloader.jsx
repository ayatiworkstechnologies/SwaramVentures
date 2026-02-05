"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Adjust timing as needed, currently set to 3 seconds to ensure user sees it
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Standard pulsing animation variant
  const pulseVariants = {
    initial: { opacity: 0.5, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
          >
            <svg
              viewBox="0 0 1200 1200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* BLUE LEFT "F" */}
              <path
                d="M160 940 L160 420 A260 260 0 0 1 420 160 L880 160 L880 300 L440 300 A140 140 0 0 0 300 440 L300 600 L880 600 L880 740 L300 740 L300 940 Z"
                fill="#144A8B"
              />

              {/* BLUE RIGHT "T" */}
              <g fill="#144A8B">
                <rect x="300" y="560" width="650" height="140" />
                <rect x="950" y="360" width="140" height="560" />
              </g>

              {/* GREEN "L" (Middle) */}
              <path
                d="M300 620 L780 620 A260 260 0 0 0 1040 360 L1040 260 L900 260 L900 360 A120 120 0 0 1 780 480 L300 480 Z"
                fill="#14A83B"
              />

              {/* ORANGE ARROW (Top Right) */}
              <polygon
                points="696.8 72.25 755.59 131.05 970.2 131.05 970.25 345.72 1029.06 404.52 1029.06 72.25 696.8 72.25"
                fill="#F15A29"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col items-center"
          >
            <span className="text-[#144A8B] font-bold text-2xl tracking-[0.3em] uppercase">
              Swaram
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

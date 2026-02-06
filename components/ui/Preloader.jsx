"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3.5 seconds to allow the full drawing animation to complete
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.2, // Stagger drawing of each part
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const drawVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
        opacity: {
          duration: 0.01,
        },
      },
    },
  };

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 0.8 },
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={containerVariants}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <svg
              viewBox="0 0 2048 1536"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* ================= BLUE SHAPE ================= */}
              <motion.g fill="#164A8C">
                {/* Left rounded C frame - Animated Path */}
                <motion.path
                  d="M120 600 A360 360 0 0 1 480 240 H1120 V360 H500 A240 240 0 0 0 260 600 V1120 H1120 V1240 H120 Z"
                  variants={drawVariants}
                  stroke="#164A8C"
                  strokeWidth="2"
                  fill="#164A8C"
                  initial={{ fillOpacity: 0, strokeOpacity: 1 }}
                  animate={{ fillOpacity: 1, strokeOpacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />

                {/* Middle bar - Animated Block */}
                <motion.rect
                  x="640"
                  y="720"
                  width="980"
                  height="150"
                  variants={blockVariants}
                />

                {/* Right vertical - Animated Block */}
                {/* 
                    ADJUSTMENT: Shortened Height to prevent overlap with Green L.
                    Green L top is at Y=860. Blue starts at Y=240.
                    Height = 860 - 240 = 620.
                */}
                <motion.rect
                  x="1500"
                  y="240"
                  width="170"
                  height="620"
                  variants={blockVariants}
                />
              </motion.g>

              {/* ================= ORANGE TOP CORNER ================= */}
              <motion.path
                fill="#F05A28"
                d="M1180 120 H1980 V560 L1830 420 V260 H1300 Z"
                variants={drawVariants}
                stroke="#F05A28"
                strokeWidth="2"
                initial={{ fillOpacity: 0, strokeOpacity: 1 }}
                animate={{ fillOpacity: 1, strokeOpacity: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />

              {/* ================= GREEN FULL CURVE (FIXED) ================= */}
              {/* "green vector only add the bottom" - It is now the sole bottom right element. */}
              <motion.path
                fill="#11B04A"
                d="M640 1280 H1220 A420 420 0 0 0 1640 860 V1040 A600 600 0 0 1 1040 1280 Z"
                variants={drawVariants}
                stroke="#11B04A"
                strokeWidth="2"
                initial={{ fillOpacity: 0, strokeOpacity: 1 }}
                animate={{ fillOpacity: 1, strokeOpacity: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-8 flex flex-col items-center"
          >
            <span className="text-[#164A8C] font-bold text-2xl tracking-[0.3em] uppercase">
              Swaram
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

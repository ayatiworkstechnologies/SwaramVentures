"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading or wait for resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds minimum load time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center pointer-events-none"
        >
          <div className="relative">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Image
                src="/logo.png"
                alt="Loading..."
                width={180}
                height={50}
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Pulse Ring */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 -m-8 bg-secondary/10 rounded-full blur-xl z-0"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

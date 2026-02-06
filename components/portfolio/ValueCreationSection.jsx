"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const valueData = [
  {
    title: "Capital",
    desc: "Strategic capital to accelerate growth and scale responsibly.",
    image: "/assets/how-1.jpg",
  },
  {
    title: "Operational Support",
    desc: "Hands-on guidance across technology, growth, and governance.",
    image: "/assets/how-2.jpg",
  },
  {
    title: "Global Access",
    desc: "Cross-border market access connecting MENA, India, and global markets.",
    image: "/assets/how-3.jpg",
  },
];

export default function ValueCreationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % valueData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f3f3f3]">
      <div className="grid lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="px-6 lg:px-16 py-14 lg:py-20">
          <p className="tag mb-3">Portfolio</p>
          <h2 className="section-title mb-6">How We Create Value</h2>
          <p className="text-body max-w-lg mb-10">
            Providing strategic capital to accelerate growth across healthcare,
            AI, robotics, fintech, and global trade platforms—supporting
            innovation, scale, and long-term value creation.
          </p>

          {/* VALUE STEPS */}
          <div>
            {valueData.map((item, i) => {
              const active = i === activeIndex;

              return (
                <motion.div
                  key={i}
                  className={`py-6 px-6 border-b border-gray-200 transition-all duration-500
                    ${
                      active
                        ? "bg-[#2d5596] text-white"
                        : "bg-transparent hover:bg-white"
                    }
                  `}
                >
                  <h3
                    className={`font-primary text-xl mb-2 ${
                      active ? "text-white" : "text-primary"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm ${
                      active ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative h-[300px] sm:h-[420px] lg:h-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={valueData[activeIndex].image}
              alt="Value"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

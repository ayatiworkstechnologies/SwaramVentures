"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const valueData = [
  {
    number: "01",
    title: "Capital",
    desc: "Strategic capital to accelerate growth and scale responsibly.",
    image: "/assets/how-1.jpg",
  },
  {
    number: "02",
    title: "Operational Support",
    desc: "Hands-on guidance across technology, growth, and governance.",
    image: "/assets/how-2.jpg",
  },
  {
    number: "03",
    title: "Global Access",
    desc: "Cross-border market access connecting MENA, India, and global markets.",
    image: "/assets/how-3.jpg",
  },
];

export default function ValueCreationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % valueData.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f6f7] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-secondary uppercase tracking-widest text-xs mb-3">
            Portfolio Strategy
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
            How We <br /> Create Value
          </h2>

          <p className="text-gray-600 max-w-md mb-10">
            Providing strategic capital to accelerate growth across healthcare,
            AI, robotics, fintech, and global trade platforms—supporting
            innovation, scale, and long-term value creation.
          </p>

          {/* VALUE LIST */}
          <div className="space-y-6">
            {valueData.map((item, i) => {
              const active = i === activeIndex;

              return (
                <motion.div
                  key={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  className="flex gap-5 items-start cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Number */}
                  <span
                    className={`text-2xl font-bold ${
                      active ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* Text */}
                  <div>
                    <h3
                      className={`font-semibold text-lg ${
                        active ? "text-secondary" : "text-primary"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-[380px] md:h-[460px]"
              >
                <Image
                  src={valueData[activeIndex].image}
                  alt="Value"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

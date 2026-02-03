"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AIBannerSlider() {
  const slides = [
    {
      text: "Intelligent systems designed to optimize processes, improve accuracy, and drive smarter decisions.",
      img: "/assets/slider-1.png",
    },
    {
      text: "Smart robotics enabling precision automation and scalable manufacturing solutions.",
      img: "/assets/slider-2.png",
    },
    {
      text: "Digital infrastructure powering innovation across healthcare, fintech and AI platforms.",
      img: "/assets/slider-3.png",
    },
  ];

  const [index, setIndex] = useState(0);

  /* ========= AUTO SLIDE ========= */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[360px] md:h-[450px] overflow-hidden">
      {/* ================= SLIDES ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].img}
            alt="AI banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ================= CONTENT ================= */}
      <div className="container-x relative z-10 h-full flex items-center">
        <motion.div
          key={"text" + index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-xl text-white px-4 md:px-0"
        >
          <p className="font-primary text-lg md:text-2xl leading-relaxed md:leading-relaxed font-light">
            {slides[index].text}
          </p>

          <button className="mt-6 md:mt-8 text-secondary text-base md:text-lg font-semibold flex items-center gap-2 group">
            Learn More
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 smooth"
            />
          </button>
        </motion.div>
      </div>

      {/* ================= BOTTOM PROGRESS LINE ================= */}
      <motion.div
        key={index}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
        className="absolute bottom-0 left-0 h-[4px] bg-secondary"
      />
    </section>
  );
}

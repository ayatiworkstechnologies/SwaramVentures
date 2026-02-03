"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  /* ================= SLIDER IMAGES ================= */
  const slides = [
    "/banners/hero-banner.jpg",
    "/banners/hero-banner.jpg",
    "/banners/hero-banner.jpg",
  ];

  const [index, setIndex] = useState(0);

  /* ================= AUTO PLAY ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  // Text Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
  };

  return (
    <section className="relative w-full h-[100dvh] md:h-[92vh] overflow-hidden bg-primary">

      {/* =================================================
          BACKGROUND IMAGE SLIDER
      ================================================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[index]}
            alt="hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>



      {/* =================================================
          CONTENT
      ================================================= */}
      <div className="container-x relative z-20 h-full flex flex-col justify-end pb-28 md:pb-24">

        <div className="max-w-4xl">

          {/* TEXT */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="
              text-white
              font-primary
              font-semibold
              text-3xl md:text-5xl lg:text-6xl
              leading-[1.2]
              tracking-tight
            "
          >
            {
              "Swaram Ventures backs bold founders in healthcare, AI, robotics, digital finance, and global trade logistics."
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    variants={item}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))
            }
          </motion.h1>



          {/* =================================================
              BOTTOM LINE INDICATOR
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 md:mt-16 mb-8 flex items-center gap-4"
          >

            <span className="text-white/80 font-primary text-sm tracking-widest">
              0{index + 1}
            </span>

            <div className="h-[1px] w-16 md:w-28 bg-white/60" />
            <div className="h-[1px] w-16 md:w-28 bg-white/60" />
          </motion.div>
        </div>
      </div>



      {/* =================================================
          SLIDER DOTS
      ================================================= */}
      <div className="absolute bottom-10 right-6 md:right-10 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-1.5 rounded-full smooth
              ${i === index ? "w-8 bg-white" : "w-4 bg-white/40"}
            `}
          />
        ))}
      </div>



      {/* =================================================
          FLOAT LINE DECORATION
      ================================================= */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-6 md:right-10 bottom-24 hidden md:block"
      >
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}

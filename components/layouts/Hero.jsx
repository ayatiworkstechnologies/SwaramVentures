"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  /* =================================================
     SLIDES WITH CONTENT
  ================================================= */
  const slides = [
    {
      image: "/banners/hero-banner.jpg",
      title:
        "Swaram Ventures backs bold founders in healthcare, AI, Smart Protection technology, robotics, digital fintech, mobility, sustainable clean water technology, edutech, global trade & logistics.",
    },
    {
      image: "/banners/hero-banner-1.jpg",
      title:
        "Building the future with AI, automation, and next-gen technologies that scale globally.",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  /* =================================================
     TEXT ANIMATION
  ================================================= */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-primary">
      {/* =================================================
         BACKGROUND SLIDER
      ================================================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt="banner"
            fill
            priority
            sizes="100vw"
            className={`object-cover ${
              slides[index].mobileImage ? "hidden md:block" : ""
            }`}
          />
          {slides[index].mobileImage && (
            <Image
              src={slides[index].mobileImage}
              alt="banner mobile"
              fill
              priority
              sizes="100vw"
              className="object-cover md:hidden"
            />
          )}

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/25" />
        </motion.div>
      </AnimatePresence>

      {/* =================================================
         CONTENT
      ================================================= */}
      <div
        className="
          container
          relative z-20
          flex items-end
          min-h-[100svh]
          pb-[clamp(80px,12vw,140px)]
        "
      >
        <div className="max-w-[900px]">
          {/* ================= TITLE ================= */}
          <motion.h1
            key={index}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.05, // speed between words
                  delayChildren: 0.3,
                },
              },
            }}
            className="
    font-primary
    font-semibold
    text-white
    leading-[1.1]
    tracking-tight
    text-4xl
  "
          >
            {slides[index].title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -30, // 👈 from left
                    filter: "blur(4px)",
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className="inline-block mr-[0.35em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* ================= COUNTER ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex items-center gap-4"
          >
            <span className="font-primary text-white/80 text-sm tracking-widest">
              0{index + 1}
            </span>

            <div className="h-[1px] w-20 bg-white/60" />
            <div className="h-[1px] w-20 bg-white/60" />
          </motion.div>
        </div>
      </div>

      {/* =================================================
         NAVIGATION ARROWS
      ================================================= */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/20 hover:bg-black/50 text-white smooth backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/20 hover:bg-black/50 text-white smooth backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* =================================================
         DOTS
      ================================================= */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              smooth rounded-full
              ${i === index ? "w-7 h-2 bg-white" : "w-3 h-2 bg-white/40"}
            `}
          />
        ))}
      </div>

      {/* =================================================
         FLOAT DECOR LINE
      ================================================= */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-10 bottom-28 hidden md:block"
      >
        {/* <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/60 to-transparent" /> */}
      </motion.div>
    </section>
  );
}

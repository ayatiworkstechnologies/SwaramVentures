"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function AIBannerSlider() {
  const slides = [
    {
      text: "Intelligent systems designed to optimize processes, improve accuracy, and drive smarter decisions.",
      img: "/assets/slider-1.jpg",
    },
    {
      text: "Smart robotics enabling precision automation and scalable manufacturing solutions.",
      img: "/assets/slider-2.jpg",
    },
    {
      text: "Digital infrastructure powering innovation across healthcare, fintech and AI platforms.",
      img: "/assets/slider-3.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[360px] md:h-[450px] overflow-hidden">
      {/* =================================================
         SLIDE IMAGE
      ================================================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].img}
            alt="AI banner"
            fill
            priority
            className="object-cover"
          />

          {/* left gradient overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" /> */}
        </motion.div>
      </AnimatePresence>

      {/* =================================================
         CONTENT
      ================================================= */}
      <div className="container relative z-10 h-full flex items-center">
        <motion.div
          key={"text" + index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-xl text-white"
        >
          {/* TEXT */}
          <p className="font-primary text-base md:text-xl leading-relaxed">
            {slides[index].text}
          </p>

          {/* =================================================
             CTA (PLAY ICON ADDED)
          ================================================= */}
          <button
            className="
            mt-6
            text-secondary
            font-semibold
            flex items-center gap-2
            group
          "
          >
            Learn More
            <Play
              size={16}
              className="fill-current group-hover:scale-110 smooth"
            />
          </button>

          {/* SLIDE NUMBER + LINES */}
          <div className="mt-8 flex items-center gap-4">
            <span className="font-primary text-white/80 text-xs tracking-widest">
              0{index + 1}
            </span>

            <div className="h-[1px] w-16 md:w-24 bg-white/50" />
            <div className="h-[1px] w-16 md:w-24 bg-white/50" />
          </div>
        </motion.div>
      </div>

      {/* =================================================
         NAVIGATION ARROWS
      ================================================= */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 flex flex-col gap-4 z-30">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/30 text-white smooth backdrop-blur-sm transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/30 text-white smooth backdrop-blur-sm transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

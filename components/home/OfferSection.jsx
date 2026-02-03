"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OfferSection() {
  const slides = [
    {
      tag: "What We Offer",
      title: "Capital",
      desc: "Providing strategic capital to accelerate growth across healthcare, AI, robotics, fintech, and global trade platforms—supporting innovation, scale, and long-term value creation.",
      img: "/assets/dummy.png",
    },
    {
      tag: "What We Offer",
      title: "Strategy",
      desc: "Hands-on operational expertise and strategic guidance to scale startups into market leaders.",
      img: "/assets/dummy.png",
    },
    {
      tag: "What We Offer",
      title: "Partnership",
      desc: "Long-term partnerships empowering founders with networks, mentorship, and resources.",
      img: "/assets/dummy.png",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <section className="section-y bg-white overflow-hidden">

      <div className="container-x">

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ================= IMAGE ================= */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative h-[300px] md:h-[420px] rounded-xl2 overflow-hidden shadow-lg2 order-1 lg:order-none"
            >
              <Image
                src={slides[index].img}
                alt={slides[index].title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>



          {/* ================= CONTENT ================= */}
          <div className="order-2 lg:order-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={"content" + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* dots */}
                <div className="flex gap-3 mb-6 font-primary text-xs">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`
                        w-6 h-6 rounded-full border text-center transition-colors duration-300
                        ${i === index
                          ? "bg-primary text-white border-primary"
                          : "border-gray-300 text-gray-400 hover:border-gray-400"}
                      `}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                {/* tag */}
                <p className="tag">
                  {slides[index].tag}
                </p>

                {/* title */}
                <h2 className="section-title text-3xl md:text-4xl">
                  {slides[index].title}
                </h2>

                {/* underline */}
                <div className="w-20 h-[3px] bg-secondary mt-3 mb-6" />

                {/* description */}
                <p className="text-body mb-8 text-base md:text-lg">
                  {slides[index].desc}
                </p>

                {/* button */}
                <button className="btn btn-primary group">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 smooth"
                  />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

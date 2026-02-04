"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function OfferSection() {
  const slides = [
    {
      tag: "What We Offer",
      title: "Capital",
      desc: "Providing strategic capital to accelerate growth across healthcare, AI, robotics, fintech, and global trade platforms—supporting innovation, scale, and long-term value creation.",
      img: "/assets/offer.png",
    },
    {
      tag: "What We Offer",
      title: "Strategy",
      desc: "Hands-on operational expertise and strategic guidance to scale startups into market leaders.",
      img: "/assets/offer.png",
    },
    {
      tag: "What We Offer",
      title: "Partnership",
      desc: "Long-term partnerships empowering founders with networks, mentorship, and resources.",
      img: "/assets/offer.png",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <section className="section-y bg-white overflow-hidden">
      <div className="container">
        {/* =================================================
           GRID LAYOUT
        ================================================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* =================================================
             IMAGE (LEFT)
          ================================================= */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="
                relative
                h-[300px] md:h-[420px]
                rounded-[22px]
                overflow-hidden
                shadow-[0_12px_35px_rgba(0,0,0,0.12)]
              "
            >
              <Image
                src={slides[index].img}
                alt={slides[index].title}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* =================================================
             CONTENT (RIGHT)
          ================================================= */}
          <div className="mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={"content" + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* =================================================
                   SMALL NUMBERS (1 2 3)
                ================================================= */}
                <div className="flex gap-3 mb-6 font-primary text-xs">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`
                        w-6 h-6 rounded-full text-center
                        smooth
                        ${
                          i === index
                            ? "bg-primary text-white"
                            : "text-gray-400 hover:text-primary border border-black/20"
                        }
                      `}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                {/* TAG */}
                <p className="tag mb-3">{slides[index].tag}</p>

                {/* TITLE */}
                <h2 className="font-primary font-bold text-3xl md:text-4xl text-primary">
                  {slides[index].title}
                </h2>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 120 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-4 h-[2px] bg-secondary"
                />
                {/* DESCRIPTION */}
                <p className="text-body text-base md:text-lg mb-8 max-w-lg">
                  {slides[index].desc}
                </p>

                {/* =================================================
                   BUTTON (PLAY ICON ADDED)
                ================================================= */}
                <button className="btn btn-primary group">
                  Learn More
                  <Play
                    size={16}
                    className="fill-current group-hover:scale-110 smooth"
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

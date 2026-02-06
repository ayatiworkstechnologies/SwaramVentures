"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    title: "Healthcare & Digital Health",
    desc: "Technology-driven solutions that enhance patient care, clinical efficiency, and health outcomes.",
    img: "/assets/industries-1.jpg",
  },
  {
    title: "Artificial Intelligence & Automation",
    desc: "Innovative digital solutions designed to improve healthcare delivery. Enhancing patient care through smart, connected technologies.",
    img: "/assets/industries-2.jpg",
  },
  {
    title: "Artificial Intelligence",
    desc: "Intelligent systems designed to optimize processes, improve accuracy, and drive smarter decisions.",
    img: "/assets/industries-3.jpg",
  },
  {
    title: "Robotics & Advanced Manufacturing",
    desc: "Innovative automation solutions enabling precision, efficiency, and scalable manufacturing.",
    img: "/assets/industries-4.jpg",
  },
  {
    title: "Digital Banking & Fintech Infrastructure",
    desc: "Secure, scalable platforms powering digital payments, embedded finance, and modern banking services.",
    img: "/assets/industries-5.jpg",
  },
  {
    title: "Global Trading, Supply Chain & Logistics",
    desc: "Connected digital platforms streamlining global trade, logistics, and supply chain operations.",
    img: "/assets/industries-6.png",
  },
];

export default function IndustriesSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative bg-white section-y overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container text-center">
        {/* ================= HEADER ================= */}
        <h2 className="section-title mb-6">
          Industries
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mb-4 h-[2px] bg-secondary"
          />
        </h2>

        <p className="text-body max-w-2xl mx-auto mb-8">
          We build technology-driven solutions across healthcare, AI, robotics,
          fintech, and global trade, enabling smarter operations, digital
          transformation, and scalable growth across industries.
        </p>

        {/* =================================================
           CENTER FOCUS SLIDER
        ================================================= */}
        <div className="relative h-[560px] md:h-[680px] flex items-center justify-center">
          {items.map((item, i) => {
            const diff = (i - index + items.length) % items.length;

            let x = 0;
            let scale = 0.7;
            let opacity = 0;
            let zIndex = 0;

            /* ===== POSITION LOGIC ===== */

            // CENTER (big)
            if (diff === 0) {
              x = 0;
              scale = 1;
              opacity = 1;
              zIndex = 20;
            }
            // RIGHT (small)
            else if (diff === 1) {
              x = "75%";
              scale = 0.85;
              opacity = 0.55;
              zIndex = 10;
            }
            // LEFT (small)
            else if (diff === items.length - 1) {
              x = "-75%";
              scale = 0.85;
              opacity = 0.55;
              zIndex = 10;
            }

            return (
              <motion.div
                key={i}
                animate={{ x, scale, opacity, zIndex }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                }}
                className="
                  absolute
                  w-[94%]
                  md:w-[68%]
                  lg:w-[52%]
                  xl:w-[48%]
                "
              >
                {/* =================================================
                   PREMIUM CARD
                ================================================= */}
                <div
                  className="
                    group
                    bg-white
                    rounded-xl
                    overflow-hidden
                    shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_18px_55px_rgba(0,0,0,0.15)]
                    smooth hover:-translate-y-2
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover smooth group-hover:scale-105"
                    />

                    {/* soft fade */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="px-8 py-10 text-center">
                    {/* Title */}
                    <h3 className="font-primary text-primary font-bold text-xl md:text-2xl">
                      {item.title}
                    </h3>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 120 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="mx-auto mb-4 mt-2 h-[2px] bg-secondary"
                    />
                    {/* Description */}
                    <p className="text-body-card mb-8 max-w-sm mx-auto">
                      {item.desc}
                    </p>

                    {/* Button */}
                    <button className="btn btn-primary px-7 py-3 rounded-full shadow-soft">
                      Learn More
                      <Play size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* ================= ARROWS ================= */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-4 hover:bg-secondary hover:text-secondary smooth z-30"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-4 hover:bg-secondary hover:text-secondary smooth z-30"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

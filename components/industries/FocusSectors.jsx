"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FocusSectors() {
  const sectors = [
    {
      title: "Neural Autonomy",
      desc: "Cognitive architectures that enhance industrial robotics and operational systems.",
      img: "/assets/core-1.jpg",
      tag: "Robotics",
    },
    {
      title: "Bio-Synthesis",
      desc: "Reprogramming the biological substrate of the industrial complex.",
      img: "/assets/core-2.jpg",
      tag: "Healthcare",
    },
    {
      title: "Kinetic Systems",
      desc: "Infrastructure for physical labor in the automated economy.",
      img: "/assets/core-3.jpg",
      tag: "Infrastructure",
    },
    {
      title: "AI Infrastructure",
      desc: "Scalable compute and intelligent automation platforms.",
      img: "/assets/core-4.jpg",
      tag: "Artificial Intelligence",
    },
  ];

  const visible = 3;
  const maxIndex = sectors.length - visible;
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
    else setIndex(0);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(maxIndex);
  };

  /* auto slide */
  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [index]);

  return (
    <section className="bg-soft section-y overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="section-title">Focus Sectors</h2>
            <p className="text-body mt-3 max-w-lg">
              Deploying capital into the rising points of planetary evolution.
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white smooth"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white smooth"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${index * (100 / visible)}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="flex"
          >
            {sectors.map((item, i) => (
              <div
                key={i}
                className="
                  w-full
                  md:w-1/2
                  lg:w-1/3
                  shrink-0
                  px-4
                "
              >
                <div className="group relative overflow-hidden rounded-xl shadow-md bg-white">
                  {/* IMAGE */}
                  <div className="relative h-[260px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[11px] uppercase tracking-widest text-secondary">
                      {item.tag}
                    </span>

                    <h3 className="text-xl font-primary font-semibold text-primary mt-2 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-body-card text-sm">
                      {item.desc}
                    </p>
                  </div>

                  {/* HOVER LINE */}
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-secondary group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* INDICATORS */}
        <div className="flex gap-4 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className="flex-1">
              <motion.div
                animate={{ width: index === i ? "100%" : "40%" }}
                transition={{ duration: 0.3 }}
                className={`h-[3px] ${
                  index === i ? "bg-secondary" : "bg-primary/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

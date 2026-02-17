"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FocusSectors() {
  const sectors = [
    {
      title: "Healthcare & Digital Health",
      desc: "Technology-enabled platforms transforming care delivery systems.",
      img: "/assets/ind-1.png",
      tag: "Healthcare",
    },
    {
      title: "Artificial Intelligence & Automation",
      desc: "Intelligent systems driving efficiency and enterprise scale.",
      img: "/assets/ind-2.png",
      tag: "AI",
    },
    {
      title: "Robotics & Advanced Manufacturing",
      desc: "Automation technologies modernizing industrial production ecosystems.",
      img: "/assets/ind-3.png",
      tag: "Robotics",
    },
    {
      title: "Digital Banking & Fintech Infrastructure",
      desc: "Secure financial infrastructure powering digital economies.",
      img: "/assets/ind-4.png",
      tag: "Fintech",
    },
  ];

  const visible = 3;
  const maxIndex = sectors.length - visible > 0 ? sectors.length - visible : 0;
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
  }, [index, maxIndex]);

  return (
    <section className="bg-soft py-16 overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="section-title text-primary">Focus Sectors</h2>
            <p className="text-body mt-3 max-w-lg">
              Deploying capital into the rising points of planetary evolution.
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white smooth"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white smooth"
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
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4">
                <div className="group relative overflow-hidden rounded-xl shadow-md h-[420px]">
                  {/* IMAGE */}
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* CONTENT OVERLAY */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/50 transition-all duration-300">
                    <span className="text-[11px] uppercase tracking-widest text-primary mb-1 block">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-primary text-secondary font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-black/90  text-sm">{item.desc}</p>
                  </div>
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
                  index === i ? "bg-secondary" : "bg-primary/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

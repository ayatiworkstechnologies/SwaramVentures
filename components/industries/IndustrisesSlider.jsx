"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function IndustrisesSlider() {
  const projects = [
    {
      title: "Nexus Dynamics",
      desc: "Precision humanoid robotics for next-gen manufacturing lines.",
      img: "/assets/core-1.jpg",
      category: "Robotics",
      tag: "Humanoid Robotics",
    },
    {
      title: "Ether Health",
      desc: "AI-driven diagnostic platform reducing error rates by 40%.",
      img: "/assets/core-2.jpg",
      category: "Healthcare",
      tag: "AI Diagnostics",
    },
    {
      title: "Nova Energy",
      desc: "Next-gen sustainable energy infrastructure systems.",
      img: "/assets/core-3.jpg",
      category: "Energy",
      tag: "Green Infrastructure",
    },
  ];

  const visible = 2; // show 2 cards
  const maxIndex = projects.length - visible;
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="bg-white section-y overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="section-title">Industries</h2>
            <div className="w-16 h-[3px] bg-secondary mt-3" />
          </div>

          {/* ARROWS */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white smooth disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white smooth disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${index * 50}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
            className="flex"
          >
            {projects.map((item, i) => (
              <div
                key={i}
                className="
                  w-full
                  md:w-1/2
                  shrink-0
                  px-4
                "
              >
                <div className="group relative overflow-hidden rounded-xl shadow-md">
                  {/* IMAGE */}
                  <div className="relative h-[260px] md:h-[300px]">
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
                      {item.category}
                    </span>

                    <h3 className="text-xl font-primary font-semibold text-primary mt-2 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-body-card text-sm mb-4">
                      {item.desc}
                    </p>

                    <div className="flex gap-4 text-xs text-secondary font-semibold">
                      <span>View Project</span>
                      <span>{item.tag}</span>
                    </div>
                  </div>

                  {/* HOVER LINE */}
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-secondary group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

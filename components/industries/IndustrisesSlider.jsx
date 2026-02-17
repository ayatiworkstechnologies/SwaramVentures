"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function IndustrisesSlider() {
  const projects = [
    {
      title: "Plenome",
      desc: "A healthcare platform supported through strategic capital and governance alignment, strengthening operational scale and cross-border growth initiatives.",
      img: "/assets/portfolio-2.png",
    },
    {
      title: "Royal Dutch Clinics (UAE)",
      desc: "An integrated healthcare network backed with long-horizon investment and structured expansion support across regional markets.",
      img: "/assets/portfolio-5.png",
    },
    {
      title: "Grazen AI (USA)",
      desc: "A robotics automation platform strengthened through active portfolio engagement, strategic oversight, and disciplined scaling frameworks.",
      img: "/assets/portfolio-3.png",
    },
    {
      title: "Inkle (USA)",
      desc: "A fintech infrastructure company supported with aligned capital, governance discipline, and international market access guidance.",
      img: "/assets/portfolio-4.png",
    },
    {
      title: "Acumulus (USA)",
      desc: "Fintech infrastructure enabling scalable, compliant financial products.",
      img: "/assets/portfolio-1.png",
    },
    {
      title: "Rento (Peru)",
      desc: "Robotics-led industrial solutions modernizing equipment access and utilization.",
      img: "/assets/portfolio-6.png",
    },
  ];

  const visible = 3; // show 3 cards
  const maxIndex = projects.length - visible;
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
              What We Build
            </span>
            <h2 className="section-title mb-4">Portfolio</h2>
            <div className="w-16 h-[3px] bg-secondary mb-6" />
            <p className="text-body text-lg">
              A focused portfolio of companies across healthcare, robotics,
              fintech, and AI, backed through disciplined capital, strategic
              guidance, and long-term alignment.
            </p>
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
            animate={{ x: `-${index * (100 / visible)}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
            className="flex"
          >
            {projects.map((item, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4">
                <div className="group relative overflow-hidden rounded-xl shadow-md h-[350px] md:h-[420px]">
                  {/* IMAGE */}
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/50 border-t border-white/20 transition-all duration-300">
                    <h3 className="text-xl font-primary font-semibold text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-black/90 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

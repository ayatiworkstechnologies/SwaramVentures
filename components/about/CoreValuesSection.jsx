"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoreValuesSection() {
  const values = [
    {
      icon: "/assets/core.png",
      title: "Innovation",
      text: "Bold ideas create better futures.",
    },
    {
      icon: "/assets/core.png",
      title: "Strategy",
      text: "Long-term clarity drives decisions.",
    },
    {
      icon: "/assets/core.png",
      title: "Partnership",
      text: "Deep collaboration with founders.",
    },
    {
      icon: "/assets/core.png",
      title: "Impact",
      text: "Scalable solutions worldwide.",
    },
    {
      icon: "/assets/core.png",
      title: "Integrity",
      text: "Transparency and governance first.",
    },
    {
      icon: "/assets/core.png",
      title: "Excellence",
      text: "Consistent operational quality.",
    },
  ];

  const visible = 4;
  const pages = Math.ceil(values.length / visible);
  const [index, setIndex] = useState(0);

  return (
    <section className="section-y bg-white overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="section-title text-left">Core Values</h2>
          <div className="w-16 h-[2px] bg-primary mt-3" />
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative">
          {/* TRACK */}
          <motion.div
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="flex"
          >
            {Array.from({ length: pages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  md:grid-cols-4
                  gap-6
                  shrink-0
                  w-full
                "
              >
                {values
                  .slice(pageIndex * visible, pageIndex * visible + visible)
                  .map((item, i) => (
                    <div
                      key={i}
                      className="
                        bg-white
                        border border-slate-100
                        shadow-sm
                        hover:shadow-md
                        smooth hover:-translate-y-1
                      "
                    >
                      {/* IMAGE */}
                      <div className="relative w-full h-28">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-5 text-center">
                        <h3 className="font-primary text-primary font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-body-card text-xs text-gray-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </motion.div>

          {/* ================= BOTTOM TWO LINES ================= */}
          <div className="mt-8 flex justify-center gap-3">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  h-[3px]
                  transition-all duration-300
                  ${
                    index === i
                      ? "w-16 bg-primary"
                      : "w-10 bg-slate-300 hover:bg-slate-400"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

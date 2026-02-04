"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoreValuesSection() {
  const values = [
    {
      icon: "/assets/core.png",
      title: "Vision-Driven Innovation",
      text: "We believe bold ideas create better futures. We seek founders and teams with the curiosity, courage, and clarity to transform industries.",
    },
    {
      icon: "/assets/core.png",
      title: "Vision-Driven Innovation",
      text: "We believe bold ideas create better futures. We seek founders and teams with the curiosity, courage, and clarity to transform industries.",
    },
    {
      icon: "/assets/core.png",
      title: "Vision-Driven Innovation",
      text: "We believe bold ideas create better futures. We seek founders and teams with the curiosity, courage, and clarity to transform industries.",
    },
    {
      icon: "/assets/core.png",
      title: "Vision-Driven Innovation",
      text: "We believe bold ideas create better futures. We seek founders and teams with the curiosity, courage, and clarity to transform industries.",
    },
    {
      icon: "/assets/core.png",
      title: "Vision-Driven Innovation",
      text: "We believe bold ideas create better futures. We seek founders and teams with the curiosity, courage, and clarity to transform industries.",
    },
  ];

  return (
    <section className="section-y bg-white">
      <div className="container">
        {/* ================= HEADER ================= */}
        <div className="mb-10">
          <h2 className="section-title text-left">Core Values</h2>

          {/* simple underline */}
          <div className="w-16 h-[2px] bg-primary mt-3" />
        </div>

        {/* ================= CARDS ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            flex gap-6 overflow-x-auto
            md:grid md:grid-cols-5
          "
        >
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="
                min-w-[230px] md:min-w-0
                bg-white
                shadow-sm
                p-6
                text-center
                border border-slate-100
              "
            >
              {/* ICON */}
              <div className="relative w-14 h-14 mx-auto mb-5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="font-primary text-primary font-bold text-base mb-3">
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="text-body-card text-xs leading-relaxed text-gray-500">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

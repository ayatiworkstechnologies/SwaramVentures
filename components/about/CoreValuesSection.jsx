"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoreValuesSection() {
  const values = [
    {
      icon: "/assets/core.png",
      title: "Healthcare",
      text: "Advanced healthcare systems, medical supply chains and patient-centric solutions.",
    },
    {
      icon: "/assets/core.png",
      title: "Infrastructure & Construction",
      text: "Large-scale construction, industrial projects and engineering development.",
    },
    {
      icon: "/assets/core.png",
      title: "Global Trading",
      text: "Raw material sourcing, commodities trading and international logistics.",
    },
    {
      icon: "/assets/core.png",
      title: "Logistics & Supply Chain Management",
      text: "Freight forwarding, warehousing and distribution networks worldwide.",
    },
    {
      icon: "/assets/core.png",
      title: "Preventive & Supportive Solutions",
      text: "Preventive healthcare, telemedicine and diagnostics integration.",
    },
    {
      icon: "/assets/core.png",
      title: "Energy Solutions",
      text: "Renewable energy, power infrastructure and engineering services.",
    },
  ];

  const visible = 4;
  const maxIndex = values.length - visible;
  const [index, setIndex] = useState(0);

  return (
    <section className="section-y bg-white overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="section-title text-left">Core Values</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className=" mb-4 h-[2px] bg-secondary"
          />
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative">
          {/* ================= SLIDER ================= */}
          <div className="relative">
            {/* ===== MOBILE SCROLL ===== */}
            {/* ===== MOBILE SCROLL ===== */}
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide sm:hidden items-stretch">
              {values.map((item, i) => (
                <div key={i} className="min-w-[85%] snap-start flex">
                  {/* CARD */}
                  <div
                    className="
          bg-white
          border border-slate-200
          shadow-sm
          flex flex-col
          w-full
          h-full
        "
                  >
                    {/* IMAGE */}
                    <div className="relative w-full h-36 shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 text-center flex flex-col flex-1">
                      <h3 className="font-primary text-primary font-semibold text-xl mb-2">
                        {item.title}
                      </h3>

                      <div className="mx-auto mb-4 h-[2px] bg-secondary w-16" />

                      {/* flex-1 makes all cards equal */}
                      <p className="text-body-card text-sm leading-relaxed flex-1">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== DESKTOP SLIDER (UNCHANGED) ===== */}
            <motion.div
              animate={{ x: `-${index * 25}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="hidden sm:flex gap-6 items-stretch"
            >
              {values.map((item, i) => (
                <div key={i} className="w-[48%] md:w-[23%] shrink-0 flex">
                  <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md smooth hover:-translate-y-1 flex flex-col w-full">
                    <div className="relative w-full h-36 shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-5 text-center flex flex-col flex-1">
                      <h3 className="font-primary text-primary font-semibold text-xl mb-2">
                        {item.title}
                      </h3>

                      <div className="mx-auto mb-4 h-[2px] bg-secondary w-16" />

                      <p className="text-body-card leading-relaxed flex-1">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* ===== DESKTOP INDICATORS ONLY ===== */}
            <div className="hidden sm:flex mt-10 justify-center gap-3">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} className="group">
                  <motion.div
                    animate={{ width: index === i ? 40 : 18 }}
                    transition={{ duration: 0.25 }}
                    className={`h-[6px] cursor-pointer ${
                      index === i
                        ? "bg-secondary"
                        : "bg-primary group-hover:bg-secondary"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

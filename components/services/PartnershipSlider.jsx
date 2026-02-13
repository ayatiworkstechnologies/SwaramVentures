"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PartnershipSlider() {
  const advantages = [
    {
      title: "Founder Partnership Model ",
      text: "At Swaram Ventures, partnership means involvement without interference. We work closely with founders while respecting operational independence. ",
      image: "/assets/pot-1.png",
      category: "Founder Partnership",
    },
    {
      title: "How We Support ",
      text: "Strategic guidance during key growth phases Thoughtful governance and decision support Access to networks, advisors, and opportunities ",
      image: "/assets/pot-2.png",
      category: "Support ",
    },
    {
      title: "Founder-Centric Model ",
      text: "We engage as long-term partners committed to shared outcomes, aligned incentives, and mutual trust. ",
      image: "/assets/pot-3.png",
      category: "Founder-Centric",
    },
    {
      title: "Partnership Beyond the Investment ",
      text: "Our role evolves as companies grow. We stay engaged during pivotal moments, offering perspective, access, and support while respecting founder autonomy.",
      image: "/assets/pot-4.png",
      category: "PARTNERSHIP",
    },
  ];

  const visible = 2; // show 2 cards
  const maxIndex = advantages.length - visible;
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
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-primary text-primary">
              Partnership
            </h2>
            <div className="w-20 h-1 bg-secondary mb-8"></div>
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
            {advantages.map((item, i) => (
              <div
                key={i}
                className="
                  w-full
                  md:w-1/2
                  shrink-0
                  px-4
                "
              >
                <div className="group relative overflow-hidden rounded-xl shadow-md h-full">
                  {/* IMAGE - Brightly shown */}
                  <div className="relative h-[400px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  {/* CONTENT with Blur Background */}
                  <div className="absolute bottom-4 left-4 right-4 p-6 bg-white/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                    <span className="text-[11px] uppercase tracking-widest text-secondary font-bold">
                      {item.category}
                    </span>

                    <h3 className="text-xl font-primary font-bold text-primary mt-2 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.text}
                    </p>
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

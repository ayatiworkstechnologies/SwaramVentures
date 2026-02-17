"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FocusSectors() {
  const sectors = [
    {
      tag: "Healthcare",
      title: "Healthcare & Digital Health",
      desc: "Technology-driven platforms improving care delivery, data systems, and clinical operations.",
      img: "/assets/industries-1.jpg",
    },
    {
      tag: "Manufacturing",
      title: "Robotics & Advanced Manufacturing",
      desc: "Automation, robotics, and scalable production technologies for modern industry.",
      img: "/assets/industries-3.jpg",
    },
    {
      tag: "Sustainability",
      title: "Sustainable Clean Water Technology",
      desc: "Innovations ensuring access to safe, efficient, and scalable water solutions.",
      img: "/assets/industries-3.jpg",
    },
    {
      tag: "Logistics",
      title: "Global Trade & Logistics Platforms",
      desc: "Data-driven platforms optimizing cross-border trade and supply chains.",
      img: "/assets/industries-5.jpg",
    },
    {
      tag: "Mobility",
      title: "Mobility",
      desc: "Smart mobility systems transforming transportation and movement.",
      img: "/assets/industries-5.jpg",
    },
    {
      tag: "Fintech",
      title: "Digital Banking & Fintech Infrastructure",
      desc: "Core fintech infrastructure powering payments, compliance, and digital banking.",
      img: "/assets/industries-4.jpg",
    },
    {
      tag: "AI",
      title: "Artificial Intelligence & Automation",
      desc: "AI-driven systems enabling smarter decisions and scalable automation.",
      img: "/assets/industries-2.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = sectors.length - visible;

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [maxIndex]);

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

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${index * (100 / visible)}%` }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
            className="flex"
          >
            {sectors.map((item, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4">
                <div className="group relative overflow-hidden rounded-2xl shadow-md h-[420px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs uppercase tracking-widest text-white/70 mb-2 block">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.desc}
                    </p>
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

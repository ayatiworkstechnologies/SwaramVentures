"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function OfferSection() {
  const slides = [
    {
      tag: "What We Offer",
      title: "Long-Term Capital",
      desc: "Flexible, long-horizon capital supporting resilient companies through growth cycles, complexity, and scale, aligned with founders building durable platforms for sustained market leadership. ",
      img: "/assets/service-1.jpg",
      link: "/services/capital",
    },
    {
      tag: "What We Offer",
      title: "Strategy",
      desc: "Disciplined investment framework guiding capital deployment, governance alignment, and sector focus, designed to strengthen strategic clarity and long-term value creation. ",
      img: "/assets/service-2.jpg",
      link: "/services/strategy",
    },
    {
      tag: "What We Offer",
      title: "Partnership",
      desc: "Active engagement with founders through key inflection points, offering governance insight, strategic perspective, and trusted collaboration across every stage of growth. ",
      img: "/assets/service-3.jpg",
      link: "/services/partnership",
    },
    {
      tag: "What We Offer",
      title: "Cross-Border Market ",
      desc: "Structured market access across MENA, India, and global regions, enabling disciplined expansion, strategic connectivity, and sustainable international growth pathways. ",
      img: "/assets/service-4.jpg",
      link: "/services/cross-border",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <section className="section-y bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] md:h-[420px] rounded-[22px] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
            >
              <Image
                src={slides[index].img}
                alt={slides[index].title}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* CONTENT */}
          <div className="mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={"content" + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* SLIDE NUMBERS */}
                <div className="flex gap-3 mb-6 font-primary text-xs">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`
                        w-6 h-6 rounded-full text-center
                        smooth
                        ${
                          i === index
                            ? "bg-primary text-white"
                            : "text-gray-400 hover:text-primary border border-black/20"
                        }
                      `}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                {/* TAG */}
                <p className="tag mb-3">{slides[index].tag}</p>

                {/* TITLE */}
                <h2 className="font-primary font-bold text-3xl md:text-4xl text-primary">
                  {slides[index].title}
                </h2>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 120 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-4 h-[2px] mt-2 bg-secondary"
                />

                {/* DESCRIPTION */}
                <p className="text-body text-base md:text-lg mb-8 max-w-lg">
                  {slides[index].desc}
                </p>

                {/* BUTTON WITH LINK */}
                <Link
                  href={slides[index].link}
                  className="btn btn-primary group inline-flex items-center gap-2"
                >
                  Learn More
                  <Play
                    size={16}
                    className="fill-current group-hover:scale-110 smooth"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

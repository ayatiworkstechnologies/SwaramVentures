"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Healthcare & Digital Health",
    desc: "We back healthcare platforms improving care delivery through technology. Our focus includes digital health, clinics, data, and systems.",
    img: "/assets/industries-1.jpg",
    link: "/industries",
  },
  {
    title: "Robotics & Advanced Manufacturing",
    desc: "We support robotics ventures modernizing production, precision, and throughout. Our investments target scalable manufacturing, automation, and hardware-led innovation.",
    img: "/assets/industries-3.jpg",
    link: "/industries",
  },
  {
    title: "Sustainable Clean Water Technology",
    desc: "",
    img: "/assets/industries-3.jpg",
    link: "/industries",
  },
  {
    title: "Global Trade & Logistics Platforms ",
    desc: "We back platforms optimizing trade, logistics, and supply chain. Our focus spans cross-border commerce, infrastructure, and data-driven coordination. ",
    img: "/assets/industries-5.jpg",
    link: "/industries",
  },
  {
    title: "Mobility",
    desc: " ",
    img: "/assets/industries-5.jpg",
    link: "https://rento.pe/",
  },
  {
    title: "Digital Banking & Fintech Infrastructure ",
    desc: "We invest in fintech infrastructure enabling compliant digital systems. These platforms power payments, embedded finance, and next-generation banking.",
    img: "/assets/industries-4.jpg",
    link: "/industries",
  },
  {
    title: "Artificial Intelligence & Automation",
    desc: "We invest in AI systems driving efficiency, automation, scale. These platforms enable smarter decisions across enterprise use globally.",
    img: "/assets/industries-2.jpg",
    link: "/industries",
  },
];

export default function IndustriesSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative bg-white section-y overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container text-center">
        <h2 className="section-title mb-6">
          Industries
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mb-4 h-[2px] bg-secondary"
          />
        </h2>

        <p className="text-body max-w-2xl mx-auto mb-8">
          We partner with technology-led businesses across core sectors,
          deploying aligned capital and strategic support to help founders build
          resilient, scalable platforms with long-term relevance and
          cross-border impact globally across markets. 
        </p>

        <div className="relative h-[500px] md:h-[640px] flex items-center justify-center">
          {items.map((item, i) => {
            const diff = (i - index + items.length) % items.length;

            let x = 0;
            let scale = 0.7;
            let opacity = 0;
            let zIndex = 0;

            if (diff === 0) {
              x = 0;
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (diff === 1) {
              x = "75%";
              scale = 0.85;
              opacity = 0.8;
              zIndex = 10;
            } else if (diff === items.length - 1) {
              x = "-75%";
              scale = 0.85;
              opacity = 0.8;
              zIndex = 10;
            }

            return (
              <motion.div
                key={i}
                animate={{ x, scale, opacity, zIndex }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                }}
                className="absolute w-[94%] md:w-[68%] lg:w-[52%] xl:w-[48%]"
              >
                {/* CARD */}
                <div
                  className="
                    group
                    bg-white
                    rounded-xl
                    overflow-hidden
                    shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_18px_55px_rgba(0,0,0,0.15)]
                    smooth hover:-translate-y-2
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="px-8 py-10 text-center">
                    <h3 className="font-primary text-primary font-bold text-xl md:text-2xl">
                      {item.title}
                    </h3>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 120 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="mx-auto mb-4 mt-2 h-[2px] bg-secondary"
                    />

                    <p className="text-body-card mb-8 max-w-sm mx-auto">
                      {item.desc}
                    </p>

                    <Link
                      href={item.link}
                      className="btn btn-primary px-7 py-3 rounded-full shadow-soft inline-flex items-center gap-2"
                    >
                      Learn More
                      <Play size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-4 hover:bg-secondary hover:text-secondary smooth z-30"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-4 hover:bg-secondary hover:text-secondary smooth z-30"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

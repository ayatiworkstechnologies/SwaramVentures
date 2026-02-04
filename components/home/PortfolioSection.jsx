"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  const items = [
    {
      title: "MedNexa Health",
      desc: "A digital health platform focused on improving patient care, diagnostics, and clinical workflows through technology.",
      img: "/assets/portfolio-1.png",
    },
    {
      title: "Auralis AI Systems",
      desc: "AI-driven solutions company enabling automation, data intelligence, and smarter operational decision-making.",
      img: "/assets/portfolio-2.png",
    },
    {
      title: "RoboForge Technologies",
      desc: "Advanced robotics and manufacturing solutions delivering precision, efficiency, and scalable automation.",
      img: "/assets/portfolio-3.png",
    },
    {
      title: "FinEdge Networks",
      desc: "A fintech infrastructure company powering digital banking, embedded finance, and secure payment systems.",
      img: "/assets/portfolio-4.png",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section className="section-y bg-white">
      <div className="container">
        {/* =================================================
           HEADER
        ================================================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          {/* LEFT */}
          <div>
            <p className="tag mb-3">Portfolio</p>

            <h2 className="section-title">What We Build</h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4 h-[2px] bg-secondary"
            />
          </div>

          {/* RIGHT */}
          <p className="text-body max-w-xl">
            A diverse portfolio of companies operating across healthcare, AI,
            robotics, fintech, and global trade—driving innovation, scale, and
            long-term value across industries.
          </p>
        </div>

        {/* =================================================
           CLEAN GRID (NO CARD STYLE)
        ================================================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid
            gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemVariant}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[190px] overflow-hidden mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                font-primary
                text-primary
                text-base
                font-semibold
                mb-2
              "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                text-body-card
                text-sm
                leading-relaxed
                opacity-80
              "
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

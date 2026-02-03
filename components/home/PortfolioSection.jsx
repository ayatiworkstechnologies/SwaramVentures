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
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="section-y bg-white">
      <div className="container-x">

        {/* ================= HEADER ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="tag">
              Portfolio
            </p>

            <h2 className="section-title">
              What We Build
            </h2>

            <div className="w-16 h-[2px] bg-primary mt-6" />
          </motion.div>

          {/* RIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="text-body max-w-xl"
          >
            A diverse portfolio of companies operating across healthcare, AI,
            robotics, fintech, and global trade—driving innovation, scale, and
            long-term value across industries.
          </motion.p>
        </div>



        {/* ================= CARDS ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemVariant}
              className="card group cursor-pointer hover:shadow-lg2 p-4 pb-6 transition-all duration-300 hover:-translate-y-2"
            >
              {/* IMAGE (same clean rectangular style) */}
              <div className="relative w-full h-[170px] overflow-hidden rounded-soft mb-5">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-primary text-primary text-lg font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-body-card text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

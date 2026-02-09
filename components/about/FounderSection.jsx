"use client";

import { motion } from "framer-motion";

export default function LeadershipSection() {
  const team = [
    {
      tag: "The Finance Leader",
      name: "K Swaminathan",
      role: "Founder & Chairman",
      desc: `Nearly 40 years of experience across India, Nigeria, Gabon, and Dubai.
Expertise in financial leadership, strategic planning, and risk management.
Successful management of multi-billion-dollar investments and large-scale infrastructure projects.
Implemented advanced financial systems, optimized supply chains, and ensured effective governance.`,
      accent: "bg-blue-600",
    },
    {
      tag: "The Power and Energy Leader",
      name: "K Ramasubramanian",
      role: "Founder & CEO",
      desc: `Over 34 years of experience in power, energy, and infrastructure sectors.
Worked with Voltas (TATA), Kirloskar, FKI PLC, AADI International, PRANSA International FZC & more.
Deep expertise in power solutions, EPC, energy systems, and industrial engineering.
Global experience across India, Middle East, and Africa in market expansion and major projects.`,
      accent: "bg-green-500",
    },
    {
      tag: "The Visionary Healthcare Leader",
      name: "Dr. Gopinath Sabnivise",
      role: "Managing Director",
      desc: `30+ years of experience in healthcare strategy, operations & digital transformation.
Leadership roles at Apollo Hospitals, Fortis, Aster DM, VPS, NMC & Canadian Specialist Hospital.
Recipient of UAE Golden Visa, CEO of the Year (2020–2024), Honorary Doctorate.
Expert in hospital transformation, digital health innovation, and patient-centric excellence.`,
      accent: "bg-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="section-title text-left">Founders</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4 h-[2px] bg-secondary"
          />
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition"
            >
              {/* Accent top bar */}
              {/* <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${item.accent}`}
              ></div> */}

              {/* Tag */}
              <p className="text-secondary text-[11px] font-semibold tracking-widest mb-3 uppercase">
                {item.tag}
              </p>

              {/* Name */}
              <h3 className="font-primary text-primary text-2xl font-bold mb-1">
                {item.name}
              </h3>

              {/* Role */}
              <p className="text-primary/70 text-base mb-5">
                {item.role}
              </p>

              <div className="w-10 h-[2px] bg-gray-200 mb-6"></div>

              {/* Description */}
              <p className="text-body-card text-sm leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

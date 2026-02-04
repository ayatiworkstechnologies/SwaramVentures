"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LeadershipSection() {
  const team = [
    {
      tag: "The Finance Leader",
      name: "K Swaminathan",
      role: "Founder & Chairman",
      img: "/assets/team-1.png",
      desc: `Nearly 40 years of experience across India, Nigeria, Gabon, and Dubai.
Expertise in financial leadership, strategic planning, and risk management.
Successful management of multi-billion-dollar investments and large-scale infrastructure projects.
Implemented advanced financial systems, optimized supply chains, and ensured effective governance.`,
    },
    {
      tag: "The Power and Energy Leader",
      name: "K Ramasubramanian",
      role: "Founder & CEO",
      img: "/assets/team-1.png",
      desc: `Over 34 years of experience in power, energy, and infrastructure sectors.
Worked with Voltas (TATA), Kirloskar, FKI PLC, AADI International, PRANSA International FZC & more.
Deep expertise in power solutions, EPC, energy systems, and industrial engineering.
Global experience across India, Middle East, and Africa in market expansion and major projects.`,
    },
    {
      tag: "The Visionary Healthcare Leader",
      name: "Dr. Gopinath Sabnivise",
      role: "Managing Director",
      img: "/assets/team-1.png",
      desc: `30+ years of experience in healthcare strategy, operations & digital transformation.
Leadership roles at Apollo Hospitals, Fortis, Aster DM, VPS, NMC & Canadian Specialist Hospital.
Recipient of UAE Golden Visa, CEO of the Year (2020-2024), Honorary Doctorate.
Expert in hospital transformation, digital health innovation, and patient-centric excellence.`,
    },
  ];

  return (
    <section className="section-y bg-white">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-7 smooth hover:-translate-y-2"
            >
              {/* ================= TOP ROW ================= */}
              <div className="flex items-center gap-6 mb-5">
                {/* BIGGER IMAGE */}
                <div className="relative w-28 h-32 md:w-32 md:h-36 lg:w-36 lg:h-40 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 smooth"
                  />
                </div>

                {/* NAME + ROLE */}
                <div>
                  <p className="text-secondary text-[11px] font-semibold tracking-widest mb-2">
                    {item.tag}
                  </p>

                  <h3 className="font-primary text-primary text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-primary/70 text-base">{item.role}</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-body-card text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

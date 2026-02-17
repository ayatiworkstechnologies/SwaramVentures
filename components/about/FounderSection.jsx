"use client";

import { motion } from "framer-motion";

export default function LeadershipSection() {
  const team = [
    {
      tag: "The Finance Leader",
      name: "K Swaminathan",
      role: "Founder & Chairman",
      desc: `• Nearly 40 years of experience across various regions (India, Nigeria, Gabon, and Dubai).
• Expertise in financial leadership, strategic planning, and risk management.
• Successful management of multi-billion-dollar investments and large-scale infrastructure projects.
• Known for implementing financial systems, optimizing supply chains, and ensuring effective governance.`,
      accent: "bg-blue-600",
    },
    {
      tag: "The Power and Energy Leader",
      name: "K Ramasubramanian",
      role: "Founder & CEO",
      desc: `• Over 34 years of experience in power, energy, and infrastructure sectors.
• Experience with Voltas Limited (TATA), Kirloskar Power Equipment, Al Hamad International Trading,  
FKI plc, Technical Solutions, AADI International Trading FZE, and PRANSA International FZC.
• Extensive experience in energy solutions, infrastructure development, and global market expansion, particularly in the MEA region.`,
      accent: "bg-green-500",
    },
    {
      tag: "The Visionary Healthcare Leader",
      name: "Dr. Gopinath Sabnivise",
      role: "Managing Director",
      desc: `• 30+ years in healthcare strategy, hospital operations & digital transformation  
• Leads Swaram Ventures across Middle East, Asia, and emerging markets  
• Expertise in launching & scaling primary to quaternary care facilities  
• Specialist in sustainable operations, brand leadership & business expansion.`,
      accent: "bg-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* HEADER */}
        <div className="mb-14">
          <h2 className="section-title text-left">Founders</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 h-[2px] bg-secondary"
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
              className="group relative rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-md p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300"
            >
              {/* Accent vertical bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${item.accent}`}
              />

              {/* Tag */}
              <p className="text-secondary text-[11px] font-semibold tracking-widest mb-3 uppercase">
                {item.tag}
              </p>

              {/* Name */}
              <h3 className="font-primary text-primary text-2xl font-bold mb-1">
                {item.name}
              </h3>

              {/* Role */}
              <p className="text-primary/70 text-base mb-6">{item.role}</p>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-secondary/40 mb-6"></div>

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

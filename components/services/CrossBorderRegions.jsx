"use client";

import { motion } from "framer-motion";

export default function CrossBorderRegions() {
  const regions = [
    {
      num: "01",
      title: "MENA",
      text: "We facilitate regional market entry across the Middle East and North Africa, offering access to institutional relationships, regulatory familiarity, and strategic partnerships. Our presence in the region enables structured expansion aligned with local business dynamics.",
    },
    {
      num: "02",
      title: "India",
      text: "India represents a deep ecosystem of technology talent, innovation infrastructure, and growth-stage opportunity. We support companies in leveraging India’s capabilities for product development, operational scaling, and market expansion.",
    },
    {
      num: "03",
      title: "Global Markets",
      text: "Beyond MENA and India, we enable selective global expansion through curated introductions, strategic partnerships, and disciplined market evaluation. Our focus remains on sustainable international growth aligned with long-term objectives.",
    },
  ];

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 pr-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-primary mb-6 leading-tight text-primary">
              Regional Access <br />
              & Strategic <br />
              Connectivity
            </h2>
            <div className="w-16 h-[3px] bg-secondary mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Our network and operating experience provide meaningful access
              across key global corridors where capital, talent, and opportunity
              intersect.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          {regions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="lg:col-span-1 flex flex-col h-full pl-6 md:pl-8 py-2 border-l border-gray-200 hover:border-secondary/30 transition-colors duration-300 group"
            >
              <span className="text-5xl font-bold text-gray-200 group-hover:text-secondary/20 transition-colors mb-6 block">
                {item.num}
              </span>

              <h3 className="text-xl font-bold font-primary mb-4 text-primary uppercase tracking-wide">
                {item.title}
              </h3>

              <div className="w-8 h-[2px] bg-secondary/30 group-hover:bg-secondary mb-6 transition-all duration-300"></div>

              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CrossBorderSection() {
  const regions = [
    {
      num: "01",
      title: "MENA",
      text: "We help companies expand across the Middle East with market insights, partnerships, and regulatory guidance.",
    },
    {
      num: "02",
      title: "India",
      text: "Access India’s fast-growing economy with operational support, local networks, and scaling strategies.",
    },
    {
      num: "03",
      title: "Global Markets",
      text: "Bridge opportunities between regions with cross-border partnerships and strategic introductions.",
    },
  ];

  return (
    <section className="bg-soft">
      {/* ================= SECTION 1 ================= */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[280px] md:h-[360px] rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src="/assets/cross-border.jpg"
              alt="Global expansion"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">
              A Structured Approach to Global Expansion
            </h2>

            <div className="w-20 h-[2px] bg-secondary mb-6" />

            <p className="text-body mb-4">
              We support companies entering new markets through strategic
              partnerships, operational guidance, and deep regional expertise.
            </p>

            <p className="text-body">
              Our approach is built on long-term value creation, helping
              founders scale responsibly across borders with the right
              connections and infrastructure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= SECTION 2 ================= */}
      <div className="container pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* LEFT INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-xl font-primary font-semibold text-primary mb-3">
              Regional Access & Strategic Connectivity
            </h3>
            <p className="text-body-card text-sm">
              Our network and strategic presence provide meaningful access to
              key global corridors and growth markets.
            </p>
          </motion.div>

          {/* REGION CARDS */}
          {regions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-primary/10 p-6"
            >
              <p className="text-secondary font-semibold mb-2">{item.num}</p>

              <h4 className="font-primary text-primary font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-body-card text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= SECTION 3 (DARK CTA) ================= */}
      <div className="bg-primary text-white py-14">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-primary font-semibold">
                Regional Access & Strategic Connectivity
              </h3>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white text-primary p-6 rounded-xl shadow-lg"
            >
              <h4 className="font-primary font-semibold mb-2">
                Global Reach, Long-Term Perspective
              </h4>

              <p className="text-sm text-body-card">
                Cross-border expansion is not a short-term trend. We partner
                with companies to build durable global footprints with strategic
                alignment and long-term vision.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

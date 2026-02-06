"use client";

import { motion } from "framer-motion";

export default function ServicePhilosophy() {
  return (
    <section className="bg-white section-y">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Title */}
          <h2 className="section-title font-bold mb-4">
            Our Service Philosophy
          </h2>

          {/* Underline */}
          <div className="w-10 h-[2px] bg-secondary mx-auto mb-6"></div>

          {/* Description */}
          <p className="text-body text-gray-500">
            We go beyond capital deployment. Swaram Ventures works as a hands-on
            partner, combining investment expertise with deep operational
            support to help companies scale with discipline, speed, and
            long-term value creation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

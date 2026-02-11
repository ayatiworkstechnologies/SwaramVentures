"use client";

import { motion } from "framer-motion";

export default function IndustriesQuote() {
  return (
    <section className="bg-soft section-y overflow-hidden">
      <div className="container text-center">
        {/* Top vertical line */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 60, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-[2px] bg-secondary mx-auto mb-6"
        />

        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.3em] uppercase text-secondary mb-6"
        >
          Investing Directive
        </motion.p>

        {/* Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-primary
            font-medium
            text-primary
            leading-tight
            max-w-4xl
            mx-auto
          "
        >
          “We believe the most significant breakthroughs happen at the
          intersection of{" "}
          <span className="font-semibold text-primary">
            deep engineering
          </span>{" "}
          and{" "}
          <span className="font-semibold text-secondary">
            unstoppable ambition.
          </span>
          ”
        </motion.h2>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <div className="w-16 h-[1px] bg-primary/30" />
          <p className="text-xs uppercase tracking-widest text-primary/60">
            The Swaram Mandate
          </p>
          <div className="w-16 h-[1px] bg-primary/30" />
        </motion.div>
      </div>
    </section>
  );
}

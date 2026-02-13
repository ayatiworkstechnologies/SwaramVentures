"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CrossBorderCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-primary text-white">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 bg-[url('/assets/pattern-dot.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-primary mb-6 leading-tight">
              Expansion with <br />
              <span className="text-secondary">Governance</span>
              <span className="text-white/80"> & Alignment</span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              Cross-border growth introduces operational, financial, and
              governance complexity. We remain actively involved during
              expansion phases to ensure capital structure, board oversight, and
              execution strategy remain aligned.  Our role is not to accelerate
              entry at any cost, but to ensure each step reinforces long-term
              resilience and strategic positioning. 
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-secondary/30 transition-colors"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary group-hover:h-full transition-all duration-500 ease-in-out"></div>

            <h3 className="text-2xl font-bold font-primary mb-4 text-white">
              Global Reach, Long-Term Perspective
            </h3>

            <p className="text-white/60 mb-8 leading-relaxed">
              Cross-border expansion is most effective when built on trust,
              preparation, and strategic alignment. We partner with founders to
              navigate international growth with discipline, clarity, and a
              multi-generational view of value creation. 
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-primary transition-all smooth"
            >
              Partner with Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

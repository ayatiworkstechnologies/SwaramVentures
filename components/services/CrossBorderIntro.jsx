"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CrossBorderIntro() {
  return (
    <section className="bg-soft">
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
              src="/assets/cross.png"
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
              Expansion into new markets requires more than capital. It demands
              regulatory awareness, trusted networks, cultural understanding,
              and disciplined execution.
            </p>{" "}
            <p className="text-body mb-4">
              Swaram Ventures supports portfolio companies in navigating
              cross-border complexity through structured market evaluation,
              relationship building, and long-term positioning. Our approach
              prioritizes sustainability over speed, ensuring expansion
              strengthens the company’s foundation rather than diluting focus. 
            </p>{" "}
            <p className="text-body mb-4">
              We help founders assess readiness, identify the right entry
              points, and execute growth with clarity and governance alignment. 
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

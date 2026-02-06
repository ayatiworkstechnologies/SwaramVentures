"use client";

import { motion } from "framer-motion";

export default function CompaniesSection() {
  return (
    <section className="bg-soft section-y">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="tag">Portfolio</p>

            <h2 className="section-title mb-4">Companies We Support</h2>

            <div className="w-20 h-[2px] bg-gray-400 mb-6"></div>

            <p className="text-body max-w-xl">
              Our investments span multiple sectors and geographies, partnering
              with founders to build strong, sustainable businesses. Each
              company addresses real-world challenges through innovation and
              technology.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[180px] sm:h-[220px] lg:h-[260px] overflow-hidden shadow-soft">
              <img
                src="/assets/companies.jpg"
                alt="Companies"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MetricsSection() {
  const stats = [
    { value: 2.4, suffix: "B", label: "Capital Deployed" },
    { value: 140, suffix: "+", label: "Portfolio Projects" },
    { value: 12, suffix: "", label: "Global Offices" },
    { value: 22, suffix: "", label: "Investment Experts" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const steps = 60;

    stats.forEach((stat, i) => {
      let step = 0;
      const increment = stat.value / steps;

      const interval = setInterval(() => {
        step++;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.min(stat.value, step * increment);
          return updated;
        });

        if (step >= steps) clearInterval(interval);
      }, duration / steps);
    });
  }, []);

  return (
    <section className="bg-soft py-14">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Number */}
              <div className="text-3xl md:text-4xl font-primary font-bold text-primary">
                {stat.value < 10
                  ? counts[i].toFixed(1)
                  : Math.floor(counts[i])}
                {stat.suffix}
              </div>

              {/* Divider line */}
              <div className="w-10 h-[2px] bg-secondary my-3" />

              {/* Label */}
              <p className="text-xs uppercase tracking-widest text-primary/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

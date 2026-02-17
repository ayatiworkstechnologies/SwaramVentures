"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* =================================================
   SCROLL TRIGGER COUNT UP (smooth + performant)
================================================= */
function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);

      const easeOut = 1 - Math.pow(1 - percent, 3);
      setCount(Math.floor(value * easeOut));

      if (percent < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutStatsSection() {
  const stats = [
    { value: 70, suffix: "+", label: "Years of combined experience" },
    // {
    //   value: 25,
    //   suffix: "+",
    //   label: "Winning award and best shipping company",
    // },
    { value: 10, suffix: "+", label: "Global clients served across the world" },
    // { value: 100, suffix: "%", label: "Commitment to quality and compliance" },
  ];

  return (
    <section className="section-y bg-white overflow-hidden">
      <div className="container">
        {/* =================================================
           TOP CONTENT
        ================================================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="tag mb-3">About Us</p>

            <h2 className="section-title text-primary leading-tight mb-2 max-w-xl">
              Shaping the Future of Impactful Industries
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className=" mb-4 h-[2px] bg-secondary"
            />

            <p className="text-body max-w-md">
              Partnering with visionary founders to build, move, and care for
              the world through innovation, investment, and sustainable growth.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-body max-w-xl"
          >
            Swaram brings deep expertise and strategic insight across multiple
            sectors. The firm specializes in infrastructure, construction,
            logistics, energy, and healthcare, delivering reliable and
            innovative solutions across the Middle East, Asia, and Africa.
          </motion.p>
        </div>

        {/* =================================================
           STATS GRID
        ================================================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-10
            text-center
          "
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{ y: -6 }}
              className="smooth"
            >
              {/* Number */}
              <h3 className="font-primary text-primary font-bold text-5xl md:text-6xl lg:text-7xl">
                <CountUp value={item.value} suffix={item.suffix} />
              </h3>

              {/* Label */}
              <p className="text-body-card text-sm mt-4 max-w-[180px] mx-auto leading-snug opacity-80">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

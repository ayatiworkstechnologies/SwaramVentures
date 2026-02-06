"use client";

import { motion } from "framer-motion";

const workSteps = [
  {
    title: "Partner-led approach",
    desc: "We engage as long-term partners, not passive investors.",
    image: "/assets/how-1.png",
  },
  {
    title: "Hands-on execution",
    desc: "Strategy is supported by actionable, grounded guidance.",
    image: "/assets/how-2.png",
  },
  {
    title: "Scalable mindset",
    desc: "Every decision is designed for future growth and resilience.",
    image: "/assets/how-3.png",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#f5f5f5] section-y">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="section-title mb-3">How We Work</h2>
          <div className="w-12 h-[2px] bg-secondary mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-6 shadow-soft smooth"
            >
              {/* Image */}
              <div className="mb-5 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-[180px] object-cover smooth hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="font-primary text-lg text-primary mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-body-card">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

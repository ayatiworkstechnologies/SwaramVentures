"use client";

import { motion } from "framer-motion";

const founders = [
  {
    name: "K Swaminathan",
    role: "Founder & Chairman",
    tagline: "The Strategic Leader",
    description:
      "Nearly 40 years of professional experience across India, Nigeria, Kenya, and Oman, with a strong background in financial leadership, strategic planning, and risk management.",
    accent: "bg-[#1E3A8A]",
    align: "left",
  },
  {
    name: "K Ramasubramanian",
    role: "Founder & CEO",
    tagline: "The Power and Energy Expert",
    description:
      "Over 34 years of experience in the power, energy, and infrastructure sectors, with an executive degree from Emeritus and MIT Sloan School of Management.",
    accent: "bg-[#22C55E]",
    align: "right",
  },
  {
    name: "Dr Gopinath Sabnivis",
    role: "Managing Director",
    tagline: "The Visionary Healthcare Leader",
    description:
      "Seasoned healthcare leader with over 30 years of experience in healthcare strategy, operations, and digital transformation.",
    accent: "bg-[#FF6B35]",
    align: "left",
  },
];

/* Animation variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      type: "spring",
      damping: 18,
    },
  },
};

const textStagger = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
    },
  }),
};

export default function FoundersSection() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-28"
        >
          {founders.map((founder, index) => {
            const isLeft = founder.align === "left";
            const lastName = founder.name.split(" ").pop();

            return (
              <div
                key={index}
                className="relative flex items-center min-h-[360px]"
              >
                {/* Scrolling background name */}
                <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none z-0">
                  <motion.div
                    initial={{ x: isLeft ? "0%" : "-50%" }}
                    animate={{ x: isLeft ? "-50%" : "0%" }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex whitespace-nowrap"
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="text-[10rem] font-black uppercase tracking-tight text-slate-900/[0.04] px-10"
                      >
                        {lastName}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Info Card */}
                <motion.div
                  variants={card}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`
                    relative z-20 w-full max-w-2xl
                    ${isLeft ? "lg:ml-16" : "lg:ml-auto lg:mr-16"}
                  `}
                >
                  <div className="relative bg-white/80 backdrop-blur-md shadow-[0_25px_60px_rgba(0,0,0,0.08)] rounded-2xl p-10 border border-slate-100">
                    {/* Accent bar animation */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 0.8 }}
                      className={`absolute left-0 top-0 w-1 rounded-l-2xl ${founder.accent}`}
                    ></motion.div>

                    {/* Content */}
                    <motion.span
                      variants={textStagger}
                      custom={1}
                      className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B35] mb-3 block"
                    >
                      {founder.tagline}
                    </motion.span>

                    <motion.h3
                      variants={textStagger}
                      custom={2}
                      className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-2 leading-tight"
                    >
                      {founder.name}
                    </motion.h3>

                    <motion.p
                      variants={textStagger}
                      custom={3}
                      className="text-slate-500 font-semibold text-sm mb-5"
                    >
                      {founder.role}
                    </motion.p>

                    <motion.div
                      initial={{ width: 0 }}
                      variants={textStagger}
                      custom={4}
                      whileInView={{ width: 120 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="mb-4 h-[2px] bg-secondary"
                    />

                    <motion.p
                      variants={textStagger}
                      custom={5}
                      className="text-slate-600 leading-relaxed text-sm md:text-base font-medium"
                    >
                      {founder.description}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

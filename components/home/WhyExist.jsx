"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyExist() {
  const icons = [
    "/assets/1.png",
    "/assets/2.png",
    "/assets/3.png",
    "/assets/4.png",
    "/assets/5.png",
    "/assets/6.png",
  ];

  /* Desktop positions */
  const positions = [
    { top: "15%", left: "20%" },
    { top: "6%", left: "30%" },
    { top: "10%", right: "30%" },

    { bottom: "-4%", left: "30%" },
    { bottom: "-4%", right: "30%" },
    { bottom: "16%", right: "18%" },
  ];

  return (
    <section className="relative bg-white overflow-hidden section-y">
      {/* =================================================
         RESPONSIVE CONCENTRIC RINGS (ONLY decoration)
      ================================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        {/* smaller rings on mobile, bigger on desktop */}
        {[260, 420, 680].map((size, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
            className="absolute rounded-full border border-slate-300"
            style={{
              width: size,
              height: size,
            }}
          />
        ))}
      </div>

      {/* =================================================
         CENTER CONTENT
      ================================================= */}
      <div className="relative z-20 container text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Why We Exist
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-4 h-[2px] bg-secondary"
        />

        <p className="text-body max-w-2xl">
          Swaram Ventures is a Dubai‑based investment firm partnering with early
          and growth‑stage companies transforming how the world builds, moves,
          and cares.
        </p>
      </div>

      {/* =================================================
         DESKTOP ONLY FLOATING ICONS
      ================================================= */}
      <div className="hidden md:block">
        {icons.map((src, i) => (
          <motion.div
            key={i}
            className="absolute z-10"
            style={positions[i]}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
              }}
              className="
                relative
                w-[100px] h-[100px]
                lg:w-[120px] lg:h-[120px]
                xl:w-[140px] xl:h-[140px]
              "
            >
              <Image
                src={src}
                alt="sector icon"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

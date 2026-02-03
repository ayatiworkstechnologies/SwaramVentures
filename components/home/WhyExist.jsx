"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyExist() {
  /* ================= 6 PRECISE ORBITS (Matching Image) ================= */
  const orbits = [
    { src: "/assets/1.png", top: "15%", left: "12%", size: "w-20 h-20 lg:w-30 lg:h-30" },
    { src: "/assets/2.png", top: "8%", left: "32%", size: "w-20 h-20 lg:w-30 lg:h-30" },
    { src: "/assets/3.png", top: "15%", right: "18%", size: "w-20 h-20 lg:w-30 lg:h-30" },
    { src: "/assets/4.png", bottom: "10%", left: "20%", size: "w-20 h-20 lg:w-30 lg:h-30" },
    { src: "/assets/5.png", bottom: "10%", right: "30%", size: "w-20 h-20 lg:w-30 lg:h-30" },
    { src: "/assets/6.png", bottom: "18%", right: "10%", size: "w-20 h-20 lg:w-30 lg:h-30" },
  ];

  return (
    <section className="relative bg-white overflow-hidden py-24 md:py-32">

      {/* ================= THIN CONCENTRIC RINGS ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 md:opacity-100">
        {/* Outer Ring */}
        <div className="w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] rounded-full border border-slate-100 absolute" />
        {/* Middle Ring */}
        <div className="w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full border border-slate-100 absolute" />
        {/* Inner Ring */}
        <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border border-slate-100 absolute" />
      </div>

      {/* ================= CENTER CONTENT ================= */}
      <div className="relative z-20 flex flex-col items-center justify-center container mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="section-title mb-4 tracking-tight">
            Why We Exist
          </h2>

          {/* Red/Orange Accent Line from Image */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-10 h-[2px] bg-secondary"
          />

          <p className="text-body text-base md:text-xl font-light">
            Swaram Ventures is a Dubai-based investment firm partnering with
            early and growth-stage companies transforming how the world builds,
            moves, and cares.
          </p>
        </motion.div>
      </div>

      {/* ================= FLOATING ROUND ICONS ================= */}
      {/* Hidden on mobile to avoid overcrowding */}
      <div className="hidden md:block">
        {orbits.map((item, i) => (
          <motion.div
            key={i}
            className="absolute z-10"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 + (i * 0.1)
            }}
          >
            {/* Subtle Floating Animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`${item.size} relative`}
            >
              {/* The Icon with the specific "Drop Shadow" from your image */}
              <div className="w-full h-full rounded-full overflow-hidden transition-transform duration-500 hover:scale-110 shadow-lg mb-1">
                <div className="relative w-full h-full bg-white p-1">
                  <Image
                    src={item.src}
                    alt="sector icon"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
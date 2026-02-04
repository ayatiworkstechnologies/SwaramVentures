"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VisionMissionSection() {
  const items = [
    {
      icon: "/assets/icons/vision.png", // 👈 your line image
      title: "Our Vision",
      text: "To be a global catalyst for transformative innovation — empowering visionary founders and scaling breakthroughs that redefine how the world builds infrastructure, moves people and goods, and elevates human well-being.",
    },
    {
      icon: "/assets/icons/mission.png", // 👈 your line image
      title: "Our Mission",
      text: "We invest in and partner with early growth-stage companies that are reshaping industries and improving lives. Through strategic capital and long-term collaboration, we support sustainable growth and meaningful impact.",
    },
  ];

  return (
    <section className="section-y bg-soft">
      <div className="container">
        {/* =================================================
           MAIN CARD
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            bg-white
            rounded-[32px]
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            overflow-hidden
          "
        >
          {/* GRID */}
          <div className="grid md:grid-cols-2">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="
                  relative
                  px-8 py-14 md:px-16 md:py-16
                  text-center md:text-left
                  smooth hover:-translate-y-2
                "
              >
                {/* Vertical divider */}
                {i === 0 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[65%] w-[1px] bg-slate-200" />
                )}

                {/* =================================================
                   ICON IMAGE (line style)
                ================================================= */}
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="relative w-14 h-14 md:w-18 md:h-18">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="font-primary text-primary text-3xl md:text-4xl font-bold mb-5">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-body leading-relaxed max-w-md mx-auto md:mx-0">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

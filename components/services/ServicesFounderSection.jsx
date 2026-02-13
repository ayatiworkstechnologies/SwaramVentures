"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesFounderSection() {
  const cards = [
    {
      title: "What This Means for Founders",
      image: "/assets/cap-1.png",
      points: [
        `Founder Alignment in Practice
Capital that stays aligned through scale Time to build without quarterly pressure Support designed around durability, not acceleration alone 
`,
      ],
    },
    {
      title: "Founder Alignment in Practice",
      image: "/assets/cap-2.png",
      points: [
        `Our capital is designed to remain aligned as companies scale, markets evolve, and priorities shift. We invest with the intent to support durable progress, not accelerate outcomes at the expense of long-term value. `,
      ],
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-orange-500 uppercase tracking-widest text-xs mb-3">
            Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Long-Term Capital. <br />
            Aligned Partnerships.
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            We deploy flexible, long-horizon capital into businesses built for
            endurance, not short-term exits.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-xl group"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[360px] md:h-[420px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-8 text-left">
                <h3 className="text-white text-lg font-semibold mb-4">
                  {card.title}
                </h3>

                <ul className="text-white/90 text-sm space-y-2">
                  {card.points.map((point, j) => (
                    <li key={j}>• {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

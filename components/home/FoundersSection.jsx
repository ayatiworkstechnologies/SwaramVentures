"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "K Swaminathan",
    role: "Founder & Chairman",
    tagline: "The Strategic Leader",
    description:
      "Nearly 40 years of professional experience across India, Nigeria, Kenya, and Oman, with a strong background in financial leadership, strategic planning, and risk management.",
    image: "/assets/ceo.png",
    color: "bg-[#1E3A8A]", // Navy Blue
    align: "left",
  },
  {
    name: "K Ramasubramanian",
    role: "Founder & CEO",
    tagline: "The Power and Energy Expert",
    description:
      "Over 34 years of experience in the power, energy, and infrastructure sectors, with an executive degree from Emeritus and MIT Sloan School of Management.",
    image: "/assets/cto.png",
    color: "bg-[#22C55E]", // Vibrant Green
    align: "right",
  },
  {
    name: "Dr Gopinath Sabnivis",
    role: "Managing Director",
    tagline: "The Visionary Healthcare Leader",
    description:
      "Seasoned healthcare leader with over 30 years of experience in healthcare strategy, operations, and digital transformation.",
    image: "/assets/manager.png",
    color: "bg-[#FF6B35]", // Vibrant Orange
    align: "left",
  },
];

export default function FoundersSection() {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section title */}
        {/* <div className="mb-24">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Founders</h2>
          <div className="w-12 h-[2px] bg-[#1E3A8A]"></div>
        </div> */}

        <div className="space-y">
          {founders.map((founder, index) => {
            const isLeft = founder.align === "left";
            const lastName = founder.name.split(" ").pop();

            return (
              <div
                key={index}
                className="relative flex items-center min-h-[500px]"
              >
                {/* 1. Scrolling Marquee Background Name */}
                <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none z-0">
                  <motion.div
                    initial={{ x: isLeft ? "0%" : "-50%" }}
                    animate={{ x: isLeft ? "-50%" : "0%" }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex whitespace-nowrap"
                  >
                    {/* Repeated text for seamless loop */}
                    {[1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="text-[12rem] font-black uppercase tracking-tighter text-slate-900/[0.04] px-10"
                      >
                        {lastName}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* 2. Stylized Large Portrait (Static/Parallax) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: isLeft ? 100 : -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`absolute hidden lg:block w-[400px] z-10 
                    ${isLeft ? "right-10" : "left-10"} top-1/2 -translate-y-1/2`}
                >
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={500}
                    height={600}
                    className="w-full h-auto object-contain grayscale brightness-110 opacity-60 lg:opacity-100"
                  />
                </motion.div>

                {/* 3. Floating Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, type: "spring", damping: 20 }}
                  viewport={{ once: true }}
                  className={`
                    relative z-20 w-full max-w-xl
                    ${isLeft ? "lg:ml-20" : "lg:ml-auto lg:mr-20"}
                  `}
                >
                  <div className="bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-2xl p-8 lg:p-10 border border-white/20">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Portrait Box */}
                      <div className="relative shrink-0">
                        <div
                          className={`${founder.color} w-32 h-32 rounded-2xl overflow-hidden shadow-lg transform -rotate-3 transition-transform hover:rotate-0 duration-500`}
                        >
                          <Image
                            src={founder.image}
                            alt={founder.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover object-top scale-110"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF6B35] mb-2 block">
                          {founder.tagline}
                        </span>
                        <h3 className="text-3xl font-bold text-[#1E3A8A] mb-1 leading-none">
                          {founder.name}
                        </h3>
                        <p className="text-slate-500 font-semibold text-sm mb-4">
                          {founder.role}
                        </p>
                        <div className="w-12 h-[2px] bg-slate-200 mb-6"></div>
                        <p className="text-slate-600 leading-relaxed text-sm font-medium">
                          {founder.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { LayoutDashboard, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    title: "Strategic Investment & Capital Support",
    desc: "We provide growth capital tailored to each company's stage and ambition, aligned with clear strategic milestones.",
    highlight: "Capital that fuels sustainable, scalable growth.",
    points: [
      "Early and growth-stage investments",
      "Long-term value creation focus",
      "Structured capital deployment",
    ],
    image: "/assets/industries-1.jpg",
    icon: <TrendingUp className="text-white w-5 h-5" />,
  },
  {
    title: "Market Entry & Expansion (MEA & Global)",
    desc: "We help businesses confidently enter and scale across the Middle East, Africa, and select global markets through local insight.",
    highlight: "Faster, lower-risk expansion into new markets.",
    points: [
      "Market feasibility and entry strategy",
      "Regulatory and compliance guidance",
      "Local partnerships and ecosystem access",
    ],
    image: "/assets/industries-2.jpg",
    icon: <LayoutDashboard className="text-white w-5 h-5" />,
  },
  {
    title: "Operational Excellence & Support",
    desc: "Our team of experts works alongside management to optimize operations and drive bottom-line performance.",
    highlight: "Efficiency that drives profitability.",
    points: [
      "Process optimization",
      "Technology integration",
      "Talent and leadership development",
    ],
    image: "/assets/industries-3.jpg",
    icon: <Zap className="text-white w-5 h-5" />,
  },
  {
    title: "Governance & Risk Management",
    desc: "We implement robust governance frameworks to protect value and ensure long-term stability for stakeholders.",
    highlight: "Security and stability at every level.",
    points: [
      "Board advisory",
      "Risk mitigation strategies",
      "ESG and sustainability focus",
    ],
    image: "/assets/industries-4.jpg",
    icon: <ShieldCheck className="text-white w-5 h-5" />,
  },
  {
    title: "Operational Excellence & Support",
    desc: "Our team of experts works alongside management to optimize operations and drive bottom-line performance.",
    highlight: "Efficiency that drives profitability.",
    points: [
      "Process optimization",
      "Technology integration",
      "Talent and leadership development",
    ],
    image: "/assets/industries-5.jpg",
    icon: <Zap className="text-white w-5 h-5" />,
  },
  {
    title: "Governance & Risk Management",
    desc: "We implement robust governance frameworks to protect value and ensure long-term stability for stakeholders.",
    highlight: "Security and stability at every level.",
    points: [
      "Board advisory",
      "Risk mitigation strategies",
      "ESG and sustainability focus",
    ],
    image: "/assets/industries-6.png",
    icon: <ShieldCheck className="text-white w-5 h-5" />,
  },
];

export default function StickyServices() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  // We track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // This ensures the index updates as you scroll past the header and through the cards
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // We skip the first 10% of scroll to account for the header moving away
      const adjustedProgress = Math.max(0, (latest - 0.1) / 0.9);
      const newIndex = Math.min(
        Math.floor(adjustedProgress * services.length),
        services.length - 1,
      );
      if (newIndex !== index) setIndex(newIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress, index]);

  const service = services[index];
  const isEven = index % 2 === 0;

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${(services.length + 1) * 100}vh` }} // Added extra height for header scroll
    >
      {/* 1. The Header: Scrolls normally away */}
      <div className="pt-20 pb-10 container mx-auto px-6 lg:px-12">
        <header>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FF6B35] font-bold tracking-widest uppercase text-xs mb-4"
          >
            Services
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] tracking-tight">
            Core Services
          </h2>
          <div className="w-16 h-[2px] bg-[#1E3A8A] mt-6 mb-8" />
          <p className="text-slate-500 font-medium max-w-2xl">
            We work directly for our clients and put client's interests first.
          </p>
        </header>
      </div>

      {/* 2. The Sticky Card Container: Locks in after header scrolls */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            className="relative min-h-[500px] flex items-center justify-center"
            style={{ perspective: "2500px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  rotateY: isEven ? 45 : -45,
                  x: isEven ? 100 : -100,
                  z: -100,
                }}
                animate={{ opacity: 1, rotateY: 0, x: 0, z: 0 }}
                exit={{
                  opacity: 0,
                  rotateY: isEven ? -45 : 45,
                  x: isEven ? -100 : 100,
                  z: -100,
                }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="grid lg:grid-cols-2 gap-16 items-center w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image Side */}
                <div className={`${!isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div
                  className={`${!isEven ? "lg:order-1" : "lg:order-2"} flex flex-col`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed max-w-lg">
                      {service.desc}
                    </p>

                    <h4 className="text-lg font-bold text-slate-900 mb-8 max-w-sm leading-tight">
                      {service.highlight}
                    </h4>

                    <div className="space-y-6">
                      {service.points.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-5"
                        >
                          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                            <div className="bg-[#FF6B35] rounded-full p-1.5">
                              {service.icon}
                            </div>
                          </span>
                          <span className="text-slate-700 font-semibold text-sm tracking-wide">
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Sidebar Nav */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6">
          {services.map((_, i) => (
            <div
              key={i}
              className={`w-[3px] transition-all duration-700 rounded-full ${index === i ? "h-12 bg-[#FF6B35]" : "h-6 bg-slate-200"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

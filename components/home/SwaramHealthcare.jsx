"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Activity, Globe, ShieldPlus } from "lucide-react";

export default function SwaramHealthcare() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section-y bg-[#F8FAFC] relative overflow-hidden">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase font-primary inline-block">
              Core Initiative
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-primary font-bold text-primary mb-6"
          >
            Swaram Healthcare
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-body leading-relaxed max-w-4xl mx-auto"
          >
            At Swaram, our healthcare strategy is focused on building and
            scaling specialised, high-performance healthcare initiatives across
            the GCC.
          </motion.p>
        </div>

        {/* BENTO GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Priority Areas (Spans 2 columns on xl) */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white p-8 md:p-10 rounded-[32px] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] smooth xl:col-span-2"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 smooth transition-transform duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center h-full">
              <div className="flex-1">
                <div className="w-16 h-16 bg-primary/10 rounded-[20px] flex items-center justify-center mb-8 text-primary group-hover:-translate-y-1 smooth">
                  <Heart size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-primary text-primary mb-4">
                  Priority Care Areas
                </h3>
                <p className="text-body text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  Our current priority areas include Dermatology and Aesthetics,
                  Dentistry, integrated Homecare services, and premium Women’s
                  Health centres designed to deliver specialised,
                  patient-centric care supported by advanced clinical
                  infrastructure and digital health systems.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Dermatology & Aesthetics",
                    "Dentistry",
                    "Integrated Homecare",
                    "Premium Women’s Health",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-body font-medium"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Onco-Spa Model */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-primary p-8 md:p-10 rounded-[32px] overflow-hidden shadow-[0_12px_35px_rgba(30,58,138,0.15)] hover:shadow-[0_20px_40px_rgba(30,58,138,0.25)] smooth flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#1e326b] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/3 translate-x-1/3 blur-2xl group-hover:bg-secondary/15 smooth transition-colors duration-700 pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-[20px] flex items-center justify-center mb-8 text-white group-hover:-translate-y-1 smooth backdrop-blur-md">
                <Activity size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-primary text-white mb-4">
                Onco-Spa Model
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                We are also developing an Onco-Spa model offering walking
                chemotherapy clinics — reimagining oncology delivery through
                comfortable, outpatient-focused environments that combine
                clinical excellence with patient dignity.
              </p>
            </div>
          </motion.div>

          {/* Global Collaboration */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white p-8 md:p-10 rounded-[32px] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] smooth flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-secondary/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl group-hover:bg-secondary/10 smooth transition-colors duration-700 pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-secondary/10 rounded-[20px] flex items-center justify-center mb-8 text-secondary group-hover:-translate-y-1 smooth">
                <Globe size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-primary text-primary mb-4">
                Global Collaboration
              </h3>
              <p className="text-body text-base md:text-lg leading-relaxed">
                In parallel, we are collaborating with renowned research group
                in the USA and joining hands with them to bring to the GCC and
                other Asian countries next-generation therapeutic platforms
                aimed at supporting regenerative medicine and high-end treatment
                pathways for chronic, complex, and life-threatening diseases.
              </p>
            </div>
          </motion.div>

          {/* Image Component / Strategy (Spans 2 columns on xl) */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-[#1A1A1A] p-0 rounded-[32px] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.15)] xl:col-span-2 min-h-[380px] flex items-center"
          >
            <Image
              src="/assets/industries-1.jpg"
              alt="Healthcare Infrastructure"
              fill
              className="object-cover opacity-40 group-hover:scale-105 smooth transition-transform duration-[1.5s]"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-transparent pointer-events-none" />

            <div className="relative z-10 p-8 md:p-12 max-w-2xl text-white">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-[20px] flex items-center justify-center mb-8 text-white group-hover:-translate-y-1 smooth">
                <ShieldPlus size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-primary mb-4">
                Growth & Governance
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                Our growth strategy is built on scalable centre-of-excellence
                models, strong clinical governance, technology-enabled
                operations, and disciplined regional expansion across the GCC.
                By combining sector expertise, structured investment, and
                operational precision, Swaram is creating premium healthcare
                ecosystems designed for long-term impact, measurable outcomes,
                and sustainable regional growth.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

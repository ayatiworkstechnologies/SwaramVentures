"use client";

import { motion } from "framer-motion";

const founders = [
  {
    name: "K Swaminathan",
    role: "Founder & Chairman",
    tagline: "The Strategic Leader",
    description: `• Nearly 40 years of experience across various regions (India, Nigeria, Gabon, and Dubai).
• Expertise in financial leadership, strategic planning, and risk management.
• Successful management of multi-billion-dollar investments and large-scale infrastructure projects.
• Known for implementing financial systems, optimizing supply chains, and ensuring effective governance`,
    accent: "bg-[#1E3A8A]",
    align: "left",
  },
  {
    name: "K Ramasubramanian",
    role: "Founder & CEO",
    tagline: "The Power and Energy Expert",
    description: `• Over 34 years of experience in power, energy, and infrastructure sectors.
• Experience with Voltas Limited (TATA), Kirloskar Power Equipment, Al Hamad International Trading,  
FKI plc, Technical Solutions, AADI International Trading FZE, and PRANSA International FZC.
• Extensive experience in energy solutions, infrastructure development, and global market expansion, particularly in the MEA region`,
    accent: "bg-[#22C55E]",
    align: "right",
  },
  {
    name: "Dr Gopinath Sabnivis",
    role: "Managing Director",
    tagline: "The Visionary Healthcare Leader",
    description: `• 30+ years in healthcare strategy, hospital operations & digital transformation  
• Leads Swaram Ventures across Middle East, Asia, and emerging markets  
• Expertise in launching & scaling primary to quaternary care facilities  
• Specialist in sustainable operations, brand leadership & business expansion`,
    accent: "bg-[#FF6B35]",
    align: "left",
    KeyLeadershipRoles: `• Aster DM Healthcare
• VPS Healthcare
• NMC Healthcare
• Apollo Hospitals
• Canadian Specialist Hospital
• Fortis Healthcare`,
    EducationAndRecognition: `• PG in Business Management – Loyola Institute of Business Administration (LIBA)
• Honorary Doctorate – Chicago University
• UAE Golden Visa – for contributions to national healthcare
• CEO of the Year 2024 – Middle East Asia Leadership Federation`,
    HumanitarianAndCSRImpact: `• Health Secretary – Lions Club International
• Collaborations with UNHCR & WHO
• Led medical aid during Syrian & Iraqi conflicts
• Cancer screenings & medical camps for underserved populations
• Relief efforts for Ethiopian children`,
  },
];

/* Animation variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, type: "spring", damping: 18 },
  },
};

function renderBullets(text) {
  if (!text) return null;
  return (
    <ul className="space-y-2 text-slate-600 text-sm md:text-base font-medium">
      {text
        .split("•")
        .filter(Boolean)
        .map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
            {item.trim()}
          </li>
        ))}
    </ul>
  );
}

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
                  className={`relative z-20 w-full max-w-2xl ${
                    isLeft ? "lg:ml-16" : "lg:ml-auto lg:mr-16"
                  }`}
                >
                  <div className="relative bg-white/90 backdrop-blur-md shadow-[0_25px_60px_rgba(0,0,0,0.08)] rounded-2xl p-10 border border-slate-100">
                    {/* Accent bar */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 0.8 }}
                      className={`absolute left-0 top-0 w-1 rounded-l-2xl ${founder.accent}`}
                    />

                    {/* Header */}
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-3 block">
                      {founder.tagline}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2 leading-tight">
                      {founder.name}
                    </h3>

                    <p className="text-slate-500 font-semibold text-sm mb-6">
                      {founder.role}
                    </p>

                    <div className="mb-6 h-[2px] w-28 bg-secondary" />

                    {/* Main description */}
                    {renderBullets(founder.description)}

                    {/* Extra Sections (only for third founder) */}
                    {founder.KeyLeadershipRoles && (
                      <div className="mt-6">
                        <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                          Key Leadership Roles
                        </h4>
                        {renderBullets(founder.KeyLeadershipRoles)}
                      </div>
                    )}

                    {founder.EducationAndRecognition && (
                      <div className="mt-6">
                        <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                          Education & Recognition
                        </h4>
                        {renderBullets(founder.EducationAndRecognition)}
                      </div>
                    )}

                    {founder.HumanitarianAndCSRImpact && (
                      <div className="mt-6">
                        <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                          Humanitarian & CSR Impact
                        </h4>
                        {renderBullets(founder.HumanitarianAndCSRImpact)}
                      </div>
                    )}
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { id: 1, logo: "/assets/logo-5.png", name: "Inkle" },
  { id: 2, logo: "/assets/logo-2.png", name: "Royal Dutch" },
  { id: 3, logo: "/assets/logo-4.png", name: "Grazen AI" },
  { id: 4, logo: "/assets/logo-3.png", name: "Rento" },
  { id: 5, logo: "/assets/logo-1.png", name: "Plenome" },
  { id: 6, logo: "/assets/logo-6.png", name: "Acumulus" },
];

export default function CompaniesSection() {
  return (
    <section className="bg-[#071a3a] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
              Portfolio
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Companies We Support
            </h2>

            <div className="w-20 h-[2px] bg-gray-400 mb-6"></div>

            <p className="text-gray-300 max-w-xl leading-relaxed">
              Our investments span multiple sectors and geographies, partnering
              with founders to build strong, sustainable businesses. Each
              company addresses real-world challenges through innovation and
              technology.
            </p>
          </motion.div>

          {/* RIGHT GRID USING YOUR CSS STRUCTURE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 grid-rows-3 gap-4"
          >
            {/* div1 */}
            <LogoCard company={companies[0]} />

            {/* div2 */}
            <LogoCard
              company={companies[1]}
              className="col-span-2"
            />

            {/* div3 */}
            <LogoCard
              company={companies[2]}
              className="col-span-2 row-start-2"
            />

            {/* div4 */}
            <LogoCard
              company={companies[3]}
              className="col-start-3 row-start-2"
            />

            {/* div5 */}
            <LogoCard
              company={companies[4]}
              className="row-start-3"
            />

            {/* div6 */}
            <LogoCard
              company={companies[5]}
              className="col-span-2 row-start-3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Logo Card */
function LogoCard({ company, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`
        bg-gray-100 rounded-2xl
        flex items-center justify-center
        shadow-md
        h-20 md:h-25
        ${className}
      `}
    >
      <Image
        src={company.logo}
        alt={company.name}
        width={160}
        height={100}
        className="object-contain max-h-[70%] w-auto"
      />
    </motion.div>
  );
}

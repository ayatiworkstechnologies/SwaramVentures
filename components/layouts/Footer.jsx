"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const links = [
    "Strategy",
    "Industries",
    "Services",
    "Portfolio",
    "About",
    "Contact",
  ];

  return (
    <footer className="w-full mt-24 bg-white">
      {/* ================= TOP LINKS ROW ================= */}
      {/* Using high padding and wide gap to match the spacious design in the image */}
      <div className="container-x py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
        >
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-primary text-[15px] font-medium tracking-wide transition-colors hover:text-secondary font-secondary"
            >
              {item}
            </a>
          ))}
        </motion.div>
      </div>

      {/* ================= BOTTOM BLUE BAR ================= */}
      {/* Using the specific deep blue color from your reference image */}
      <div className="bg-primary text-white py-6">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT: Legal */}
          <div className="text-[13px] font-light tracking-tight opacity-90 font-secondary">
            <a href="#" className="hover:underline transition-all">
              Privacy & Terms and conditions
            </a>
          </div>

          {/* CENTER: Copyright */}
          <div className="text-[13px] font-light tracking-tight opacity-90 font-secondary">
            Copyright @ 2026 Swaram
          </div>

          {/* RIGHT: Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Linkedin" className="hover:scale-110 transition-transform">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
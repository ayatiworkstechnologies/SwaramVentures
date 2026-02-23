"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const links = [
    // { name: "Strategy", href: "/strategy" },
    { name: "Industries", href: "/industries" },
    // { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full mt-24">
      {/* =================================================
         TOP LINKS (WHITE AREA)
      ================================================= */}
      <div className="bg-white border-t border-gray-100">
        <div className="container py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-x-12
              gap-y-6
              font-primary
              text-sm
              text-primary
            "
          >
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  smooth
                  opacity-80
                  hover:opacity-100
                  hover:text-secondary
                  hover:-translate-y-1
                "
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* =================================================
         BOTTOM BLUE BAR
      ================================================= */}
      <div className="bg-primary text-white">
        <div
          className="
            container
            py-6
            flex
            flex-col md:flex-row
            items-center
            justify-center
            gap-6
            text-sm
            font-secondary
          "
        >
          {/* LEFT */}
          {/* <div className="opacity-90 text-center md:text-left">
            <Link href="/privacy" className="hover:underline">
              Privacy & Terms and conditions
            </Link>
          </div> */}

          {/* CENTER */}
          <div className="opacity-90 text-center">
            Copyright © {new Date().getFullYear()} Swaram
          </div>

          {/* RIGHT */}
          {/* <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="smooth hover:scale-110"
            >
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="smooth hover:scale-110"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Linkedin"
              className="smooth hover:scale-110"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

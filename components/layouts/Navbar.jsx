"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Strategy", href: "/strategy" },
    { name: "Industries", href: "/industries" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "For Founders", href: "/founders" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  /* ================= Lock body scroll ================= */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="navbar z-50">
      <div className="container-x flex items-center justify-between h-20">

        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center h-10 shrink-0">
          <Image
            src="/logo.png"
            alt="Swaram Ventures"
            width={150}
            height={35}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>



        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden lg:flex items-center gap-8 font-primary text-sm">
          {links.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  smooth
                  ${active ? "font-bold text-primary" : "hover:text-secondary"}
                `}
              >
                {active && (
                  <span className="text-secondary mr-1 font-bold">/</span>
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>



        {/* ================= MOBILE TOGGLE (Hamburger → X) ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative w-7 h-7 flex flex-col justify-center items-center"
        >
          <span
            className={`
              absolute h-[2px] w-6 bg-black transition-all duration-300
              ${open ? "rotate-45" : "-translate-y-2"}
            `}
          />
          <span
            className={`
              absolute h-[2px] w-6 bg-black transition-all duration-300
              ${open ? "opacity-0" : ""}
            `}
          />
          <span
            className={`
              absolute h-[2px] w-6 bg-black transition-all duration-300
              ${open ? "-rotate-45" : "translate-y-2"}
            `}
          />
        </button>
      </div>



      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />



            {/* LEFT → RIGHT DRAWER */}
            <motion.div
              initial={{ x: "-100%" }}     // 👈 from LEFT
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="
                fixed
                top-0
                left-0
                h-screen
                w-[80%]
                max-w-sm
                bg-white
                shadow-lg2
                z-50
                px-8
                py-16
              "
            >
              <div className="flex flex-col gap-7 font-primary text-base">
                {links.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`
                        smooth
                        ${active ? "font-bold text-primary" : ""}
                      `}
                    >
                      {active && (
                        <span className="text-secondary mr-1">/</span>
                      )}
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

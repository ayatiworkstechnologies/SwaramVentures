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
    // { name: "Strategy", href: "/strategy" },
    // { name: "Industries", href: "/industries" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "For Founders", href: "/founders" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="navbar fixed top-0 w-full bg-white shadow-soft z-50">
      {/* ================= CONTAINER ================= */}
      <div className="container flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Swaram Ventures"
            width={150}
            height={36}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden lg:flex items-center gap-8 font-primary text-sm text-primary">
          {links.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative smooth flex items-center
                  ${
                    active
                      ? "nav-active font-bold text-primary"
                      : "text-primary/80 hover:text-primary"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative w-7 h-7 flex flex-col justify-center items-center"
        >
          <span
            className={`absolute h-[2px] w-6 bg-primary smooth ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-primary smooth ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-primary smooth ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
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
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="
                fixed top-0 left-0
                h-screen w-[80%] max-w-sm
                bg-white shadow-lg2
                z-50
                px-8 py-16
              "
            >
              <div className="flex flex-col gap-6 font-primary text-lg">
                {links.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`
                        smooth flex items-center
                        ${
                          active
                            ? "nav-active font-bold text-primary"
                            : "text-gray-600 hover:text-primary"
                        }
                      `}
                    >
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

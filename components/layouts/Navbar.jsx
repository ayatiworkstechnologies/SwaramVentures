"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    // { name: "Strategy", href: "/strategy" },
    { name: "Industries", href: "/industries" },

    {
      name: "Our Approach",
      dropdown: [
        { name: "Capital", href: "/services/capital" },
        { name: "Strategy", href: "/services/strategy" },
        { name: "Partnership", href: "/services/partnership" },
        { name: "Cross Border", href: "/services/cross-border" },
      ],
    },

    { name: "Portfolio", href: "/portfolio" },
    { name: "Founders", href: "/founders" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="navbar fixed top-0 w-full bg-white shadow-soft z-50">
      <div className="container flex items-center justify-between">
        {/* LOGO */}
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

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 font-primary text-sm text-primary">
          {links.map((item) => {
            // Helper to normalize path (remove trailing slash)
            const isActive = (path, target) => {
              const cleanPath = path.endsWith("/") ? path.slice(0, -1) : path;
              const cleanTarget = target.endsWith("/")
                ? target.slice(0, -1)
                : target;
              return cleanPath === cleanTarget;
            };

            if (item.dropdown) {
              const serviceActive = pathname.startsWith("/services");

              return (
                <div key={item.name} className="relative group">
                  <button
                    className={`flex items-center gap-1 smooth ${
                      serviceActive
                        ? "nav-active font-bold text-primary"
                        : "text-primary/80 hover:text-primary"
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </button>

                  {/* Dropdown */}
                  <div
                    className="
              absolute left-0 top-full mt-4
              bg-white shadow-lg rounded-xl
              py-3 w-48
              opacity-0 invisible
              group-hover:opacity-100
              group-hover:visible
              transition
            "
                  >
                    {item.dropdown.map((sub) => {
                      const subActive = isActive(pathname, sub.href);

                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-5 py-2 smooth ${
                            subActive
                              ? "bg-gray-100 text-secondary hover:bg-primary/40 font-semibold"
                              : "text-primary hover:text-secondary hover:bg-primary/60"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`smooth ${
                  active
                    ? "nav-active font-bold text-primary"
                    : "text-primary/80 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE TOGGLE */}
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

      {/* MOBILE DRAWER */}
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
              className="fixed top-0 left-0 h-screen w-[80%] max-w-sm bg-white shadow-lg z-50 px-8 py-16"
            >
              <div className="flex flex-col gap-6 font-primary text-lg">
                {links.map((item) => {
                  // Helper to normalize path (remove trailing slash)
                  const isActive = (path, target) => {
                    const cleanPath = path.endsWith("/")
                      ? path.slice(0, -1)
                      : path;
                    const cleanTarget = target.endsWith("/")
                      ? target.slice(0, -1)
                      : target;
                    return cleanPath === cleanTarget;
                  };

                  if (item.dropdown) {
                    return (
                      <div key={item.name}>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full text-gray-700"
                        >
                          {item.name}
                          <ChevronDown
                            size={18}
                            className={`transition ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-4 mt-3 flex flex-col gap-3 text-base"
                            >
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setOpen(false)}
                                  className={`block ${
                                    isActive(pathname, sub.href)
                                      ? "font-bold text-primary"
                                      : "text-gray-600 hover:text-primary"
                                  }`}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  const active = isActive(pathname, item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`${
                        active
                          ? "nav-active font-bold text-primary"
                          : "text-gray-600 hover:text-primary"
                      }`}
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

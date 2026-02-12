"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroSlider({ slides = [], breadcrumbs = [] }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    if (slides.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);

    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  // safety fallback
  if (!slides.length) return null;

  const slide = slides[index];

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-primary">
      {/* ================= BACKGROUND ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title || "hero"}
            fill
            priority
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/25" /> */}
        </motion.div>
      </AnimatePresence>

      {/* ================= CONTENT ================= */}
      <div className="container relative z-20 min-h-[100svh] flex flex-col justify-end pb-[clamp(90px,12vw,150px)]">
        <div className="max-w-[900px]">
          {/* ================= TITLE ================= */}
          {slide.title && (
            <motion.h1
              key={index}
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.04,
                    delayChildren: 0.25,
                  },
                },
              }}
              className="font-primary font-semibold text-white leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl"
            >
              {slide.title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
                    show: { opacity: 1, x: 0, filter: "blur(0px)" },
                  }}
                  className="inline-block mr-[0.35em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          )}

          {/* ================= SUBTITLE ================= */}
          {slide.subtitle && (
            <p className="text-white/80 mt-6 text-lg md:text-xl max-w-xl">
              {slide.subtitle}
            </p>
          )}

          {/* ================= BUTTONS ================= */}
          {(slide.primaryBtn || slide.secondaryBtn) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {slide.primaryBtn && (
                <Link
                  href={slide.primaryBtn.href}
                  className="btn btn-primary group inline-flex items-center gap-2"
                >
                  {slide.primaryBtn.label}
                  <Play
                    size={16}
                    className="fill-current group-hover:scale-110 smooth"
                  />
                </Link>
              )}

              {slide.secondaryBtn && (
                <Link
                  href={slide.secondaryBtn.href}
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-primary group inline-flex items-center gap-2"
                >
                  {slide.secondaryBtn.label}
                  <Play
                    size={16}
                    className="fill-current group-hover:scale-110 smooth"
                  />
                </Link>
              )}
            </div>
          )}

          {/* ================= COUNTER ================= */}
          {slides.length > 1 && (
            <div className="mt-10 flex items-center gap-4">
              <span className="text-white/80 text-sm font-primary tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="h-[1px] w-20 bg-white/60" />
              <div className="h-[1px] w-20 bg-white/60" />
            </div>
          )}

          {/* ================= BREADCRUMBS ================= */}
          {breadcrumbs.length > 0 && (
            <div className="mt-10 text-white/60 text-sm font-secondary flex gap-2 flex-wrap">
              {breadcrumbs.map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-secondary smooth"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                  {i !== breadcrumbs.length - 1 && <span>/</span>}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ================= DOTS ================= */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 right-8 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`smooth rounded-full ${
                i === index ? "w-7 h-2 bg-white" : "w-3 h-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

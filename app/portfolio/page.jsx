import Image from "next/image";
import Link from "next/link";
import CompaniesSection from "@/components/portfolio/CompaniesSection";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import PortfolioLayoutSection from "@/components/portfolio/PortfolioLayoutSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import ValueCreationSection from "@/components/portfolio/ValueCreationSection";

export const metadata = {
  title: "Portfolio - Swaram Ventures",
  description: "Explore the bold founders and companies we back.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="w-full bg-[#071a3a] relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-[400px] lg:h-[450px]">
          {/* Image Section (col-8 on lg, background on mobile) */}
          <div className="col-span-1 lg:col-span-8 relative h-full order-1">
            <Image
              src="/banners/po-banner.jpg"
              alt="Portfolio Banner"
              fill
              className="object-cover hidden lg:block"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <Image
              src="/banners/po-banner-mob.jpg"
              alt="Portfolio Banner Mobile"
              fill
              className="object-cover lg:hidden"
              priority
              sizes="100vw"
            />
            {/* Mobile Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40 lg:hidden pointer-events-none" />
          </div>

          {/* Text Section (col-4 on lg, overlapping on mobile) */}
          <div className="absolute lg:relative inset-0 lg:inset-auto lg:col-span-4 flex flex-col h-[400px] lg:h-[450px] justify-center p-6 sm:p-8 lg:p-8 xl:p-12 order-2 bg-transparent lg:bg-primary z-10">
            <h1 className="font-primary font-semibold text-white leading-[1.4] tracking-tight text-xl md:text-2xl lg:text-2xl xl:text-3xl mt-12 lg:mt-0">
              “We believe enduring value is created where disciplined capital
              meets visionary founders building meaningful, resilient
              enterprises”
            </h1>

            {/* Breadcrumbs */}
            <div className="mt-6 lg:mt-12 text-white/80 lg:text-white/60 text-sm font-secondary flex gap-2 flex-wrap">
              <span className="flex items-center gap-2">
                <Link
                  href="/"
                  className="hover:text-white lg:hover:text-secondary smooth"
                >
                  Home
                </Link>
                <span>/</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-white font-medium lg:font-normal">
                  Portfolio
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <CompaniesSection />
      <TestimonialsSection />
      {/* <PortfolioLayoutSection /> */}
      <ValueCreationSection />
      {/* <PortfolioBanner /> */}
    </>
  );
}

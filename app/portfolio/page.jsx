import HeroSlider from "@/components/layouts/HeroSlider";
import CompaniesSection from "@/components/portfolio/CompaniesSection";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import PortfolioLayoutSection from "@/components/portfolio/PortfolioLayoutSection";
import ValueCreationSection from "@/components/portfolio/ValueCreationSection";

export const metadata = {
  title: "Portfolio - Swaram Ventures",
  description: "Explore the bold founders and companies we back.",
};

export default function PortfolioPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        slides={[
          {
            image: "/banners/potfolio-banner.jpg",
            // title: "Our Investment Portfolio",
            // subtitle:
            //   "Explore the bold founders and companies we back. From early-stage disruptors to growth-stage market leaders.",
            // primaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
      <CompaniesSection />
      <PortfolioLayoutSection />
      <ValueCreationSection />
      <PortfolioBanner />
    </>
  );
}

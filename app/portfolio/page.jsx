import HeroSlider from "@/components/layouts/HeroSlider";

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
            image: "/banners/hero-banner.jpg",
            title: "Our Investment Portfolio",
            subtitle:
              "Explore the bold founders and companies we back. From early-stage disruptors to growth-stage market leaders.",
            primaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
      <section className="section-y bg-white">
        <div className="container">
          <h2 className="section-title mb-6">Investments</h2>
          <div className="w-20 h-1 bg-secondary mb-8" />
          <p className="text-body max-w-3xl">
            Our portfolio spans across diverse high-growth sectors, reflecting
            our commitment to backing innovation that matters.
          </p>
        </div>
      </section>
    </>
  );
}

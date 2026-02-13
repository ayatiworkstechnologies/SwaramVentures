import HeroSlider from "@/components/layouts/HeroSlider";

export const metadata = {
  title: "Strategy - Swaram Ventures",
  description:
    "Operational expertise and strategic guidance to scale startups.",
};

export default function StrategyPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Strategy" }]}
        slides={[
          {
            image: "/banners/hero-banner.jpg",
            mobileImage: "/banners/hero-banner.jpg",
            // title: "Strategic Growth & Operational Excellence",
            // subtitle:
            //   "We provide hands-on operational expertise and strategic guidance to scale startups into market leaders.",
            // primaryBtn: { label: "Our Portfolio", href: "/portfolio" },
            // secondaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
      <section className="section-y bg-white">
        <div className="container">
          <h2 className="section-title mb-6">Our Approach</h2>
          <div className="w-20 h-1 bg-secondary mb-8" />
          <p className="text-body max-w-3xl">
            Our approach is deeply collaborative, focusing on long-term value
            creation through sustainable growth strategies and operational
            efficiency.
          </p>
        </div>
      </section>
    </>
  );
}

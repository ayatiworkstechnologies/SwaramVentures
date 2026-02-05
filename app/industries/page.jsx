import HeroSlider from "@/components/layouts/HeroSlider";

export const metadata = {
  title: "Industries - Swaram Ventures",
  description:
    "High-impact sectors: Healthcare, AI, Robotics, Fintech, and Logistics.",
};

export default function IndustriesPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        slides={[
          {
            image: "/banners/hero-banner.jpg",
            title: "Transforming High-Impact Sectors",
            subtitle:
              "We focus on Healthcare, Artificial Intelligence, Robotics, Digital Finance, and Global Trade Logistics.",
            primaryBtn: { label: "View Services", href: "/services" },
            secondaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
      <section className="section-y bg-white">
        <div className="container">
          <h2 className="section-title mb-6">Sectors We Cover</h2>
          <div className="w-20 h-1 bg-secondary mb-8" />
          <p className="text-body max-w-3xl">
            Our investment thesis is driven by a deep understanding of these
            core industries, where technology can unlock massive value and
            efficiency.
          </p>
        </div>
      </section>
    </>
  );
}

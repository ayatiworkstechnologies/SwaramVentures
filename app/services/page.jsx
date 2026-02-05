import HeroSlider from "@/components/layouts/HeroSlider";

export const metadata = {
  title: "Services - Swaram Ventures",
  description:
    "Strategic consulting, network access, and operational support for portfolio companies.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        slides={[
          {
            image: "/banners/hero-banner.jpg",
            title: "Comprehensive Support for Scale",
            subtitle:
              "Beyond capital, we offer a full suite of services to support our portfolio companies, including strategic consulting, network access, and operational support.",
            primaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
      <section className="section-y bg-white">
        <div className="container">
          <h2 className="section-title mb-6">How We Help</h2>
          <div className="w-20 h-1 bg-secondary mb-8" />
          <p className="text-body max-w-3xl">
            We act as an extension of your team, providing the resources and
            expertise needed to navigate complex markets and accelerate growth.
          </p>
        </div>
      </section>
    </>
  );
}

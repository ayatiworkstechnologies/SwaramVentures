import HeroSlider from "@/components/layouts/HeroSlider";

export const metadata = {
  title: "For Founders - Swaram Ventures",
  description: "Partner with us to build the future.",
};

export default function FoundersPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "For Founders" }]}
        slides={[
          {
            image: "/banners/hero-banner.jpg",
            title: "Partnering with Visionary Founders",
            subtitle:
              "We are looking for visionary founders building the future. Learn more about our investment criteria and how we can work together.",
            primaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
      <section className="section-y bg-white">
        <div className="container">
          <h2 className="section-title mb-6">Why Partner With Us?</h2>
          <div className="w-20 h-1 bg-secondary mb-8" />
          <p className="text-body max-w-3xl">
            We bring more than just capital. We bring a network of industry
            experts, operational support, and a long-term partnership mindset.
          </p>
        </div>
      </section>
    </>
  );
}

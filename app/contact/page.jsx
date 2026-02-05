import HeroSlider from "@/components/layouts/HeroSlider";

export const metadata = {
  title: "Contact - Swaram Ventures",
  description: "Get in touch for investment inquiries and more.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        slides={[
          {
            image: "/banners/hero-banner.jpg",
            title: "Get in Touch",
            subtitle:
              "Reach out to our team for investment inquiries, media, or general questions.",
            primaryBtn: {
              label: "Email Us",
              href: "mailto:hello@swaramventures.com",
            },
          },
        ]}
      />
      <section className="section-y bg-white">
        <div className="container">
          <h2 className="section-title mb-6">Contact Information</h2>
          <div className="w-20 h-1 bg-secondary mb-8" />

          <div className="max-w-xl bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
            <p className="text-body font-primary text-lg">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@swaramventures.com"
                className="hover:text-secondary transition-colors"
              >
                hello@swaramventures.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

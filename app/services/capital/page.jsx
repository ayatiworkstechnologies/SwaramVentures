import HeroSlider from "@/components/layouts/HeroSlider";
import ServicesFounderSection from "@/components/services/ServicesFounderSection";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import CrossBorderSection from "@/components/services/CrossBorderSection";

export const metadata = {
  title: "Services - Swaram Ventures",
  description:
    "Strategic consulting, network access, and operational support for portfolio companies.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Capital" }]}
        slides={[
          {
            image: "/banners/capital-banner.png",
            mobileImage: "/banners/capital-banner-mob.png",
            // title: "Comprehensive Support for Scale",
            // subtitle:
            //   "Beyond capital, we offer a full suite of services to support our portfolio companies, including strategic consulting, network access, and operational support.",
            // primaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
      <ServicesHeroSection />
      <ServicesFounderSection />
      <CrossBorderSection />
    </>
  );
}

import HeroSlider from "@/components/layouts/HeroSlider";
import CareServicesSection from "@/components/services/CareServicesSection";
import HowWeWork from "@/components/services/HowWeWork";
import ServicePhilosophy from "@/components/services/ServicePhilosophy";

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
      <ServicePhilosophy />
      <CareServicesSection />
      <HowWeWork />
    </>
  );
}

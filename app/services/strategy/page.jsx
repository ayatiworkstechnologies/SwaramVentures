import HeroSlider from "@/components/layouts/HeroSlider";
import AdvantagesSection from "@/components/services/AdvantagesSection";

export const metadata = {
  title: "Services - Swaram Ventures",
  description:
    "Strategic consulting, network access, and operational support for portfolio companies.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Strategy" }]}
        slides={[
          {
            image: "/banners/service-banner.jpg",
            // title: "Comprehensive Support for Scale",
            // subtitle:
            //   "Beyond capital, we offer a full suite of services to support our portfolio companies, including strategic consulting, network access, and operational support.",
            // primaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
     <AdvantagesSection />
    </>
  );
}

import HeroSlider from "@/components/layouts/HeroSlider";
import PartnershipSlider from "@/components/services/PartnershipSlider";

export const metadata = {
  title: "Services - Swaram Ventures",
  description:
    "Strategic consulting, network access, and operational support for portfolio companies.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partnership" }]}
        slides={[
          {
            image: "/banners/partnership-banner.png",
            mobileImage: "/banners/partnership-banner-mob.png",
            // title: "Comprehensive Support for Scale",
            // subtitle:
            //   "Beyond capital, we offer a full suite of services to support our portfolio companies, including strategic consulting, network access, and operational support.",
            // primaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
      <PartnershipSlider />
    </>
  );
}

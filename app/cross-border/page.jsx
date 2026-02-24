import HeroSlider from "@/components/layouts/HeroSlider";
import CrossBorderCTA from "@/components/services/CrossBorderCTA";
import CrossBorderIntro from "@/components/services/CrossBorderIntro";
import CrossBorderRegions from "@/components/services/CrossBorderRegions";
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cross Border" }]}
        slides={[
          {
            image: "/banners/cross-banner.png",
            mobileImage: "/banners/cross-banner-mob.png",
            // title: "Comprehensive Support for Scale",
            // subtitle:
            //   "Beyond capital, we offer a full suite of services to support our portfolio companies, including strategic consulting, network access, and operational support.",
            // primaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
      {/* <CrossBorderSection /> */}
      <CrossBorderIntro />
      <CrossBorderRegions />
      <CrossBorderCTA />
    </>
  );
}

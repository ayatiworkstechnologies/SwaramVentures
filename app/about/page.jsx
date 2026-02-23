import AboutStatsSection from "@/components/about/AboutStatsSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import FounderSection from "@/components/about/FounderSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import FoundersSection from "@/components/home/FoundersSection";
import HeroSlider from "@/components/layouts/HeroSlider";

export const metadata = {
  title: "About - Swaram Ventures",
  description: "Backing bold founders",
};

export default function AboutPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        slides={[
          {
            image: "/banners/about-banner.jpg",
            mobileImage: "/banners/about-banner.jpg",
            // title: "Swaram Ventures backs bold founders in healthcare and AI.",
            // subtitle: "Investing early. Scaling globally.",
            // primaryBtn: { label: "Explore Portfolio", href: "/portfolio" },
            // secondaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />
      <FoundersSection />
      <AboutStatsSection />
      <VisionMissionSection />
      <CoreValuesSection />
      {/* <FounderSection /> */}
    </>
  );
}

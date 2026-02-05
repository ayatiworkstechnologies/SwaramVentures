import AboutStatsSection from "@/components/about/AboutStatsSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import FounderSection from "@/components/about/FounderSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
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
            image: "/banners/hero-banner.jpg",
            title: "Swaram Ventures backs bold founders in healthcare and AI.",
            subtitle: "Investing early. Scaling globally.",
            primaryBtn: { label: "Explore Portfolio", href: "/portfolio" },
            secondaryBtn: { label: "Contact Us", href: "/contact" },
          },
          {
            image: "/banners/hero-banner.jpg",
            title: "Capital, strategy and networks to accelerate growth.",
          },
        ]}
      />
      <AboutStatsSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <FounderSection />
    </>
  );
}

import FocusSectors from "@/components/industries/FocusSectors";
import IndustriesQuote from "@/components/industries/IndustriesQuote";
import IndustrisesSlider from "@/components/industries/IndustrisesSlider";
import MetricsSection from "@/components/industries/MetricsSection";
import HeroSlider from "@/components/layouts/HeroSlider";

export const metadata = {
  title: "Industries - Swaram Ventures",
  description:
    "High-impact sectors: Healthcare, AI, Robotics, Fintech, and Logistics.",
};

export default function IndustriesPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        slides={[
          {
            image: "/banners/industries-banner.png",
            mobileImage: "/banners/industries-banner-mob.png",
          },
        ]}
      />
      <IndustriesQuote />
      <FocusSectors />
      <MetricsSection />
      <IndustrisesSlider />
    </>
  );
}

import AISlider from "@/components/home/AISlider";
import IndustriesSlider from "@/components/home/Industries";
import OfferSection from "@/components/home/OfferSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyExist from "@/components/home/WhyExist";
import Hero from "@/components/layouts/Hero";

export const metadata = {
  title: "Home - Swaram Ventures",
  description:
    "Backing bold founders in healthcare, AI, robotics, digital finance, and global trade logistics.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyExist />
      <IndustriesSlider />
      <AISlider />
      <OfferSection />
      <PortfolioSection />
    </>
  );
}

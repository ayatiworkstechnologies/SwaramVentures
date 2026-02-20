import dynamic from "next/dynamic";
import Hero from "@/components/layouts/Hero";

const AISlider = dynamic(() => import("@/components/home/AISlider"));
const IndustriesSlider = dynamic(() => import("@/components/home/Industries"));
const OfferSection = dynamic(() => import("@/components/home/OfferSection"));
const PortfolioSection = dynamic(
  () => import("@/components/home/PortfolioSection"),
);
const WhyExist = dynamic(() => import("@/components/home/WhyExist"));
const SwaramHealthcare = dynamic(
  () => import("@/components/home/SwaramHealthcare"),
);

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
      <SwaramHealthcare />
      {/* <AISlider /> */}
      <OfferSection />
      <PortfolioSection />
    </>
  );
}

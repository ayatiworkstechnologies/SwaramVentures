import FoundersSection from "@/components/home/FoundersSection";
import HeroSlider from "@/components/layouts/HeroSlider";

export const metadata = {
  title: "For Founders - Swaram Ventures",
  description: "Partner with us to build the future.",
};

export default function FoundersPage() {
  return (
    <>
      <HeroSlider
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "For Founders" }]}
        slides={[
          {
            image: "/banners/hero-banner.jpg",
            title: "Partnering with Visionary Founders",
            subtitle:
              "We are looking for visionary founders building the future. Learn more about our investment criteria and how we can work together.",
            primaryBtn: { label: "Contact Us", href: "/contact" },
          },
        ]}
      />

      <FoundersSection />
    </>
  );
}

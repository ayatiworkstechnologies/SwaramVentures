import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Preloader from "@/components/ui/Preloader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "Swaram Ventures",
  description: "Backing bold founders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Preloader /> */}
        <ScrollProgress />
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}

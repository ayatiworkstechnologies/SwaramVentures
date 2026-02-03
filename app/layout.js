import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "Swaram Ventures",
  description: "Backing bold founders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>      <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}

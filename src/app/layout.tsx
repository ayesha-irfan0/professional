import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css"; // <-- fixed path
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Professional Fashion Site",
  description: "Next.js + TailwindCSS Fashion Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

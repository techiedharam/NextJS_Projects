import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Jitender Aluminium & Glass Work",
  description: "Premium Aluminium & Glass Solutions in Rohini, Delhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Floating Action Buttons for Mobile */}
        <div className="fixed bottom-4 right-4 md:hidden flex flex-col space-y-3 z-50">
          <a 
            href="tel:+919625772696" 
            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 shadow-lg"
            aria-label="Call us"
          >
            <FaPhoneAlt size={24} />
          </a>
          <a 
            href="https://wa.me/919625772696" 
            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 shadow-lg"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </body>
    </html>
  );
}

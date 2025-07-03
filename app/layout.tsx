import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IconBrandFacebookFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled } from "@tabler/icons-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedWear Solutions Inc.",
  description: "Quality medical uniforms at a competitive price. Free shipping worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="bg-blue-950 text-white py-16 px-6 sm:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* Brand */}
    <div className="flex flex-col gap-4">
     
      <p className="text-sm text-neutral-300">
        Premium medical uniforms designed for performance, comfort, and style. Trusted by professionals worldwide.
      </p>
      <div className="flex space-x-4 mt-2">
        <a href="#" className="hover:text-blue-300 transition">
          <IconBrandInstagramFilled className="h-5 w-5" />
        </a>
        <a href="#" className="hover:text-blue-300 transition">
          <IconBrandFacebookFilled className="h-5 w-5" />
        </a>
        <a href="#" className="hover:text-blue-300 transition">
          <IconBrandLinkedinFilled className="h-5 w-5" />
        </a>
      </div>
    </div>

    {/* Links */}
    <div className="flex flex-col gap-2">
      <h4 className="text-white font-semibold text-lg mb-2">Quick Links</h4>
      <a href="/#products" className="text-neutral-300 hover:text-white transition">Shop Now</a>
      <a href="/#about" className="text-neutral-300 hover:text-white transition">Our Story</a>
      <a href="/#reviews" className="text-neutral-300 hover:text-white transition">Customer Reviews</a>
      <a href="/#contact" className="text-neutral-300 hover:text-white transition">Contact</a>
    </div>

    {/* Support */}
    <div className="flex flex-col gap-2">
      <h4 className="text-white font-semibold text-lg mb-2">Support</h4>
      <a href="#" className="text-neutral-300 hover:text-white transition">FAQ</a>
      <a href="#" className="text-neutral-300 hover:text-white transition">Return Policy</a>
      <a href="#" className="text-neutral-300 hover:text-white transition">Shipping Info</a>
      <a href="#" className="text-neutral-300 hover:text-white transition">Size Guide</a>
    </div>

    {/* Newsletter */}
    <div className="flex flex-col gap-4">
      <h4 className="text-white font-semibold text-lg">Stay Connected</h4>
      <p className="text-neutral-300 text-sm">Get exclusive offers and product updates delivered to your inbox.</p>
      <form className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-xl text-blue-100 w-full sm:w-auto"
        />
        <button
          type="submit"
          className="bg-white text-blue-950 font-semibold px-4 py-2 rounded-xl hover:bg-blue-100 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div className="mt-10 border-t border-blue-800 pt-6 text-center text-slate-300 text-sm">
    © {new Date().getFullYear()} MedWear. All rights reserved.
  </div>
</footer>
      </body>
      
    </html>
  );
}

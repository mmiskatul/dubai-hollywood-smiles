import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { MobileBottomCTA } from "@/components/MobileBottomCTA";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dubaihollywoodsmiles.com"),
  title: {
    default: "Dubai Hollywood Smiles | Premium Dental Clinic Dubai",
    template: "%s | Dubai Hollywood Smiles",
  },
  description:
    "Dubai Hollywood Smiles (Previously Charly PolyClinic) — Ultra-clean, premium dental clinic in Dubai. Specialized in Porcelain Veneers, Smile Makeovers, Clear Aligners, Laser Teeth Whitening & Dental Implants.",
  keywords: [
    "Dental Clinic Dubai",
    "Dentist in Dubai",
    "Cosmetic Dentistry Dubai",
    "Smile Makeover Dubai",
    "Porcelain Veneers Dubai",
    "Teeth Whitening Dubai",
    "Clear Aligners Dubai",
    "Dental Implants Dubai",
    "Charly PolyClinic Dubai",
    "Dubai Hollywood Smiles",
  ],
  authors: [{ name: "Dubai Hollywood Smiles" }],
  creator: "Dubai Hollywood Smiles",
  publisher: "Dubai Hollywood Smiles",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://dubaihollywoodsmiles.com",
    siteName: "Dubai Hollywood Smiles",
    title: "Dubai Hollywood Smiles | Ultra-White Premium Dental Clinic Dubai",
    description:
      "Modern dentistry, personal care, and beautiful smiles in Dubai, UAE. Previously Charly PolyClinic.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dubai Hollywood Smiles Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Hollywood Smiles | Premium Dental Clinic Dubai",
    description:
      "Modern dentistry, personalized smile care & aesthetic cosmetic transformations in Dubai, UAE.",
    images: [
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dubai Hollywood Smiles",
    alternateName: "Charly PolyClinic",
    image:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
    telephone: "+971502139191",
    email: "care@dubaihollywoodsmiles.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2048,
      longitude: 55.2708,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$$",
    medicalSpecialty: [
      "CosmeticDentistry",
      "Orthodontics",
      "Periodontics",
      "RestorativeDentistry",
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#171A1C] antialiased flex flex-col justify-between selection:bg-[#EAF6F5] selection:text-[#0F6B68]">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <FloatingContact />
        <MobileBottomCTA />
      </body>
    </html>
  );
}

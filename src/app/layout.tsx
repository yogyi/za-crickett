import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CricketAssistant } from "@/components/assistant/CricketAssistant";
import { SplashScreen } from "@/components/layout/SplashScreen";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZA Cricket | Achieve Greatness",
    template: "%s | ZA Cricket",
  },
  description:
    "Singapore-based premium cricket equipment. Custom bats, pro gloves, pads, and wicket keeping gear crafted for every player.",
  keywords: [
    "cricket",
    "Singapore",
    "bats",
    "gloves",
    "pads",
    "ZA Cricket",
  ],
  icons: {
    icon: "/images/za-cricket-logo.png",
    apple: "/images/za-cricket-logo.png",
  },
  openGraph: {
    title: "ZA Cricket | Achieve Greatness",
    description:
      "Singapore-based premium cricket equipment. Custom bats, pro gloves, pads, and wicket keeping gear.",
    images: ["/images/za-cricket-logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 antialiased">
        <SplashScreen />
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <CricketAssistant />
      </body>
    </html>
  );
}

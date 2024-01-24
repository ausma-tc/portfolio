import localFont from "@next/font/local";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import { LenisScroller } from "@/src/components/ui/lenis-scroller";
import FlareCursor from "../src/utils/FlareCursor";
import FlareController from "./providers/flareController"; // Nouveau client component

import "./globals.css";

const amphora = localFont({
  src: [
    {
      path: "../public/fonts/Amphora-Regular.otf",
    },
  ],
  variable: "--font-amphora",
});

const switzer = localFont({
  src: [
    {
      path: "../public/fonts/Switzer-Variable.ttf",
    },
  ],
  variable: "--font-switzer",
});

export const metadata = {
  title: "Thomas Corbières - Portfolio",
  description: "Bienvenue sur le site de Thomas Corbières",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${switzer.variable} font-switzer h-full`}>
      <body className="h-full font-switzer">
        <div className="relative flex min-h-screen flex-col">
          <FlareController>
            <FlareCursor />
            <Header />
            {children}
            <Footer />
          </FlareController>
        </div>
        <LenisScroller />
      </body>
    </html>
  );
}

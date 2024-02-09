import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import Inner from "@/src/components/layout/Inner";
import { LenisScroller } from "@/src/components/ui/lenis-scroller";
import FlareCursor from "../src/utils/FlareCursor";
import FlareController from "./providers/flareController"; // Nouveau client component

import "./globals.scss";

export const metadata = {
  title: "Thomas Corbières - Portfolio",
  description: "Bienvenue sur le site de Thomas Corbières",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-switzer h-full">
      <body className="h-full font-switzer">
        <div className="relative flex min-h-screen flex-col">
          <FlareController>
            <FlareCursor />
            <Inner>
              {children}
              <Footer />
            </Inner>
          </FlareController>
        </div>
        <LenisScroller />
      </body>
    </html>
  );
}

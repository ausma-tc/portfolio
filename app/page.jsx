"use client";
import useMousePosition from "@/src/utils/useMousePosition";
import HeroSection from "@/src/components/ui/heroSection";
import Description from "@/src/components/ui/description";
import Projects from "@/src/components/ui/projects";
import Features from "@/src/components/ui/features";
import { motion } from "framer-motion";

export default function Home() {
  const { x, y } = useMousePosition();
  const size = 40;

  return (
    <>
      {/* <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      /> */}
      <main className="mainContent home flex-1 rounded-b-[80px] bg-primary">
        <HeroSection />
        <Description />
        <Projects />
        <Features />
      </main>
    </>
  );
}

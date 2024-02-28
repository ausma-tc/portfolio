import HeroSection from "@/src/components/ui/Home/heroSection";
import Description from "@/src/components/ui/Home/description";
import Projects from "@/src/components/ui/Home/projects";
import Features from "@/src/components/ui/Home/features";

export default function Home() {
  return (
    <>
      <main className="mainContent home flex-1 rounded-b-[80px] bg-primary">
        <HeroSection />
        <Description />
        <Projects />
        <Features />
      </main>
    </>
  );
}

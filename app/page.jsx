import HeroSection from "@/src/components/ui/heroSection";
import Description from "@/src/components/ui/description";
import Projects from "@/src/components/ui/projects";
import Features from "@/src/components/ui/features";

export default function Home() {
  return (
    <main className="mainContent home">
      <HeroSection />
      <Description />
      <Projects />
      <Features />
      <div className="rounded-bl-[80px] rounded-br-[80px] h-[55px]"></div>
    </main>
  )
}

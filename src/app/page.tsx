import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import EcosystemSection from "@/components/EcosystemSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemSolutionSection />
      <ArchitectureSection />
      <EcosystemSection />
      <FooterSection />
    </main>
  );
}

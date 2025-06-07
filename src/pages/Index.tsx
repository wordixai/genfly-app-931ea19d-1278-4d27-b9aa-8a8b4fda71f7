import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { GetStartedSection } from "@/components/GetStartedSection";
import { FeatureCards } from "@/components/FeatureCards";
import { TopAppsSection } from "@/components/TopAppsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="tabular-nums">
        <HeroSection />
        <div className="flex flex-col gap-8 md:gap-12 max-w-6xl mx-auto px-6 py-12">
          <StatsSection />
          <GetStartedSection />
          <FeatureCards />
          <TopAppsSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
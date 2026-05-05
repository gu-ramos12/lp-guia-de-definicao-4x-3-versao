import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { AboutCoachSection } from "../components/AboutCoachSection";
import { WhySection } from "../components/WhySection";
import { MethodSection } from "../components/MethodSection";
import { ProtocolSection } from "../components/ProtocolSection";
import { TransformationSection } from "../components/TransformationSection";
import { OfferSection } from "../components/OfferSection";
import { FAQSection } from "../components/FAQSection";
import { FinalCTASection } from "../components/FinalCTASection";
import { Footer } from "../components/Footer";
import { StickyCTAMobile } from "../components/StickyCTAMobile";
import { MetaPixel } from "../components/MetaPixel";
import { useScrollDepth } from "../hooks/useScrollDepth";

export default function LandingPage() {
  // Fires Scroll_50 custom event the first time user reaches 50% of page
  useScrollDepth();

  return (
    <div className="min-h-screen">
      <MetaPixel />
      <Header />
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <AboutCoachSection />
        <WhySection />
        <MethodSection />
        <ProtocolSection />
        <TransformationSection />
        <OfferSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyCTAMobile />
    </div>
  );
}

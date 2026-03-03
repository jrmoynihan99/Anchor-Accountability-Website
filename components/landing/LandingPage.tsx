"use client";
import { SiteNav } from "@/components/layout/SiteNav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { HeroSection } from "./sections/HeroSection";
import { ProblemSection } from "./sections/ProblemSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { SafetySection } from "./sections/SafetySection";
import { SetupSection } from "./sections/SetupSection";
import { FaqSection } from "./sections/FaqSection";
import { FounderSection } from "./sections/FounderSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";
import { Footer } from "./sections/Footer";
import { LandingContent } from "./types";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How It Works" },
  { id: "safety", label: "Safety" },
  { id: "setup", label: "Setup" },
  { id: "faq", label: "FAQ" },
  { id: "about", label: "The Founder" },
];

export function LandingPage({ content }: { content: LandingContent }) {
  const active = useActiveSection(SECTIONS.map((s) => s.id));

  return (
    <div className="bg-[#CBAD8D] font-sans">
      <SiteNav
        active={active}
        sections={SECTIONS}
        primaryCTA={{ label: "Set Up Your Community", href: "/community-request" }}
      />

      <HeroSection content={content.hero} />
      <ProblemSection content={content.problem} />

      <div id="how-it-works">
        <HowItWorksSection content={content.howItWorks} />
        <FeaturesSection content={content.features} />
      </div>

      <SafetySection content={content.safety} />
      <SetupSection content={content.setup} />

      <FaqSection content={content.faq} />
      <FounderSection />
      <FinalCtaSection content={content.finalCta} />
      <Footer />
    </div>
  );
}

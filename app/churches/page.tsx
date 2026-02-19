"use client";
import { SiteNav } from "@/components/layout/SiteNav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { HeroSection } from "./sections/HeroSection";
import { ProblemSection } from "./sections/ProblemSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { ChurchFeaturesSection } from "./sections/ChurchFeaturesSection";
import { SafetySection } from "./sections/SafetySection";
import { SetupSection } from "./sections/SetupSection";
import { FaqSection } from "./sections/FaqSection";
import { FounderSection } from "./sections/FounderSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";
import { ChurchesFooter } from "./sections/ChurchesFooter";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How It Works" },
  { id: "safety", label: "Safety" },
  { id: "setup", label: "Setup" },
  { id: "faq", label: "FAQ" },
  { id: "about", label: "The Founder" },
];

export default function ChurchesPage() {
  const active = useActiveSection(SECTIONS.map((s) => s.id));

  return (
    <div className="bg-[#CBAD8D] font-sans">
      <SiteNav
        active={active}
        sections={SECTIONS}
        primaryCTA={{ label: "Set Up Your Community", href: "/community-request" }}
      />

      <HeroSection />
      <ProblemSection />

      {/* id="how-it-works" spans both sub-sections so the nav highlights correctly */}
      <div id="how-it-works">
        <HowItWorksSection />
        <ChurchFeaturesSection />
      </div>

      <SafetySection />
      <SetupSection />

      {/* TODO: Add church testimonials here once available */}

      <FaqSection />
      <FounderSection />
      <FinalCtaSection />
      <ChurchesFooter />
    </div>
  );
}

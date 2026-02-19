"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { Heart, CheckCircle } from "lucide-react";

const CHURCH_FEATURES = [
  {
    id: "private-instance",
    title: "Your own private community",
    desc: "Anchor isn't a shared platform — your members only interact with each other. Joining requires a pin you control, so it stays exactly who you intend it to be. Your people get the trust of a closed community with the safety of real anonymity.",
    visualType: "phone-video" as const,
  },
  {
    id: "dashboard",
    title: "See how your community is engaging",
    desc: "Your admin dashboard gives you anonymized analytics — reach-outs sent, response rates, how many members are forming accountability partnerships. You see the impact without ever seeing individual data.",
    visualType: "browser" as const,
  },
  {
    id: "qr",
    title: "One link. One QR code. You're live.",
    desc: "You get a custom join link and QR code for your church. Put it in your bulletin, on screen during a service, or in a small group. Scanning it downloads the app and drops someone directly into your community — bypassing the pin for seamless onboarding on iOS and Android.",
    visualType: "slide" as const,
  },
  {
    id: "launch",
    title: "A launch playbook, ready to go",
    desc: "You get templated visuals for sharing — slides, graphics, and your QR code — plus a step-by-step guide for getting people on the app. That means getting leadership bought in, introducing it to your congregation, and making sure it actually lands.",
    visualType: "grid" as const,
  },
];

// Deterministic QR-like pattern (no Math.random — avoids hydration mismatch)
const QR_PATTERN = [
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1,
];

function BrowserMockup() {
  return (
    <div className="rounded-[2rem] overflow-hidden bg-white/5 shadow-2xl border-2 border-white/20 p-1 w-full">
      <div className="bg-[#1a1410] rounded-[1.75rem] overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-[#231d16] border-b border-white/10 px-3 py-2 flex items-center gap-2.5">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
          </div>
          <div className="flex-1 bg-white/8 rounded-md h-5 flex items-center px-2">
            <div className="h-1.5 w-28 bg-white/20 rounded-full" />
          </div>
        </div>
        {/* Dashboard content */}
        <div className="p-3 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-20 bg-white/30 rounded-full" />
            <div className="h-2.5 w-10 bg-white/15 rounded-full" />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {["Users", "Reach-Outs", "Response"].map((label) => (
              <div key={label} className="bg-white/10 rounded-lg p-2">
                <div className="h-4 w-7 bg-white/40 rounded mb-1" />
                <div className="h-1.5 w-9 bg-white/20 rounded-full" />
              </div>
            ))}
          </div>
          <div className="bg-white/5 rounded-lg p-2 flex items-end gap-1 h-24">
            {[40, 65, 45, 80, 55, 90, 70, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-white/30 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="space-y-1.5">
            {[80, 60, 70].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white/30 flex-shrink-0" />
                <div
                  className="h-1.5 bg-white/15 rounded-full"
                  style={{ width: `${w}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideMockup() {
  return (
    <div className="rounded-[2rem] overflow-hidden bg-white/5 shadow-2xl border-2 border-white/20 p-1 w-full">
      <div
        className="bg-[#1a1410] rounded-[1.75rem] overflow-hidden flex flex-col items-center justify-center gap-3 p-6"
        style={{ aspectRatio: "16 / 9" }}
      >
        <div className="h-2 w-24 bg-white/20 rounded-full" />
        <div className="h-1.5 w-16 bg-white/12 rounded-full" />
        <div className="bg-white rounded-xl p-3 shadow-lg">
          <div
            className="grid gap-0.5"
            style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
          >
            {QR_PATTERN.map((cell, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-[2px]"
                style={{ backgroundColor: cell ? "#3A2F25" : "transparent" }}
              />
            ))}
          </div>
          <p className="text-[#3A2F25]/50 text-[6px] text-center mt-1.5 font-medium">
            yourchurch.anchoraccountability.com
          </p>
        </div>
        <div className="h-1.5 w-20 bg-white/15 rounded-full" />
      </div>
    </div>
  );
}

const LAUNCH_SLIDES = [
  "Intro slide",
  "The problem",
  "What is Anchor?",
  "How to join",
];

function LaunchGridMockup() {
  return (
    <div className="rounded-[2rem] overflow-hidden bg-white/5 shadow-2xl border-2 border-white/20 p-3 w-full">
      <div className="grid grid-cols-2 gap-2 w-full">
        {LAUNCH_SLIDES.map((label) => (
          <div key={label} className="flex flex-col">
            <div
              className="bg-[#1a1410] rounded-t-lg border border-white/10 border-b-0 flex items-center justify-center"
              style={{ aspectRatio: "16 / 9" }}
            >
              {/* Empty — user will add imagery here */}
              <div className="space-y-1.5 w-full px-3">
                <div className="h-1.5 bg-white/15 rounded-full w-3/4 mx-auto" />
                <div className="h-1 bg-white/8 rounded-full w-1/2 mx-auto" />
              </div>
            </div>
            <div className="bg-[#231d16] rounded-b-lg border border-white/10 border-t-0 px-2 py-1">
              <p className="text-white/30 text-[9px] font-medium">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureVisual({
  feature,
}: {
  feature: (typeof CHURCH_FEATURES)[number];
}) {
  if (feature.visualType === "phone-video") {
    return (
      <div className="w-[220px] mx-auto">
        <PhoneMockup
          video="/assets/videos/anchor-sos.mp4"
          poster="/assets/videos/anchor-sos.jpg"
          alt="Private community join flow"
        />
      </div>
    );
  }
  if (feature.visualType === "browser") return <BrowserMockup />;
  if (feature.visualType === "slide") return <SlideMockup />;
  return <LaunchGridMockup />;
}

export function ChurchFeaturesSection() {
  const [activeFeature, setActiveFeature] = React.useState(0);
  const featureRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    function onScroll() {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      featureRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });
      setActiveFeature(closestIndex);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-white/10 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <MotionReveal direction="up">
          <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-white">
            What your church gets
          </h2>
        </MotionReveal>
        <MotionReveal direction="up" delay={50}>
          <p className="mb-16 text-center text-lg text-white/70 max-w-2xl mx-auto">
            Everything your community needs. Nothing you have to manage.
          </p>
        </MotionReveal>

        <div className="relative flex gap-16 items-start">
          {/* Sticky visual — desktop only */}
          {/* Outer div stretches to full content height so sticky doesn't bottom out early */}
          <div
            className="hidden lg:block flex-shrink-0 w-[500px]"
            style={{ alignSelf: "stretch" }}
          >
            <div
              className="sticky flex flex-col items-center justify-center gap-6"
              style={{
                top: "5rem",
                height: "calc(100vh - 5rem)",
                paddingBottom: "8vh",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  className="w-full"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25 }}
                >
                  <FeatureVisual feature={CHURCH_FEATURES[activeFeature]} />
                </motion.div>
              </AnimatePresence>
              {/* Progress indicator */}
              <div className="flex gap-2">
                {CHURCH_FEATURES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeFeature ? "w-6 bg-white" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable feature descriptions */}
          <div className="flex-1">
            {CHURCH_FEATURES.map((feature, i) => (
              <div
                key={feature.id}
                ref={(el) => {
                  featureRefs.current[i] = el;
                }}
                className="min-h-[75vh] flex flex-col justify-center py-12"
              >
                {/* Mobile visual */}
                <div className="lg:hidden w-full max-w-xs mx-auto mb-8">
                  <FeatureVisual feature={feature} />
                </div>

                <motion.div
                  animate={{ opacity: activeFeature === i ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white/40 text-sm font-semibold mb-3">
                    0{i + 1}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callouts */}
        <MotionReveal direction="up">
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/15 pt-12">
            {[
              {
                icon: Heart,
                label: "Completely free",
                desc: "No credit card. No limits. No subscription.",
              },
              {
                icon: CheckCircle,
                label: "No ongoing management",
                desc: "Set it up once. Anchor handles moderation, crisis detection, and keeps things safe automatically.",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">{item.label}</p>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

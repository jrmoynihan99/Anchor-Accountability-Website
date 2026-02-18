"use client";
import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { HeadshotProgress } from "@/components/ui/HeadshotProgress";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { SiteNav } from "@/components/layout/SiteNav";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  Heart,
  MessageCircle,
  Users,
  ArrowRight,
  Shield,
  Lock,
  CheckCircle,
  X,
  AlertTriangle,
  Phone,
} from "lucide-react";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How It Works" },
  { id: "safety", label: "Safety" },
  { id: "setup", label: "Setup" },
  { id: "faq", label: "FAQ" },
  { id: "about", label: "The Founder" },
];

const CHURCH_FEATURES = [
  {
    id: "reach-out",
    title: "Anonymous reach-outs",
    desc: "When someone is struggling, they can send an anonymous reach-out to your whole community with one tap. No name. No identity. Everyone in your church sees it — no one knows who sent it.",
    visualType: "video" as const,
    video: "/assets/videos/anchor-sos.mp4",
    poster: "/assets/videos/anchor-sos.jpg",
  },
  {
    id: "community",
    title: "Real support from real people",
    desc: "Others in your church respond with scripture, prayer, and encouragement. Everyone stays anonymous. The person who reached out knows their community showed up for them — without anyone knowing who they are.",
    visualType: "video" as const,
    video: "/assets/videos/anchor-community.mp4",
    poster: "/assets/videos/anchor-community.jpg",
  },
  {
    id: "dashboard",
    title: "See how your community is engaging",
    desc: "Your admin dashboard gives you anonymized analytics — reach-outs sent, response rates, how many members are forming accountability partnerships. You can see the impact without ever seeing individual data.",
    visualType: "dashboard" as const,
  },
  {
    id: "qr",
    title: "One link. One QR code. You're live.",
    desc: "You get a custom join link and QR code for your church. Put it in your bulletin, on screen during a service, or in a small group. Scanning it downloads the app and drops someone directly into your community.",
    visualType: "qr" as const,
  },
];

// Matches PhoneMockup's outer shell so all visuals are the same shape
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-[2.5rem] overflow-hidden bg-white/5 shadow-2xl border-2 border-white/20 p-1 w-full"
      style={{ aspectRatio: "9 / 19.5" }}
    >
      <div className="w-full h-full rounded-[2.25rem] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function DashboardPhonePlaceholder() {
  return (
    <PhoneFrame>
      <div className="w-full h-full bg-[#1a1410] flex flex-col p-3 gap-2.5">
        <div className="flex items-center justify-between py-1">
          <div className="h-2.5 w-20 bg-white/30 rounded-full" />
          <div className="h-2.5 w-10 bg-white/15 rounded-full" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {["Users", "Reach-Outs", "Response"].map((label) => (
            <div key={label} className="bg-white/10 rounded-xl p-2">
              <div className="h-4 w-7 bg-white/40 rounded mb-1" />
              <div className="h-1.5 w-9 bg-white/20 rounded-full" />
            </div>
          ))}
        </div>
        <div className="flex-1 bg-white/5 rounded-xl p-2 flex items-end gap-1 min-h-0">
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
        <div className="h-1.5 w-16 bg-white/10 rounded-full mx-auto" />
        <p className="text-white/20 text-[9px] text-center">
          [Admin dashboard — placeholder]
        </p>
      </div>
    </PhoneFrame>
  );
}

// Deterministic QR-like pattern (no Math.random — avoids hydration mismatch)
const QR_PATTERN = [
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1,
];

function QRPhonePlaceholder() {
  return (
    <PhoneFrame>
      <div className="w-full h-full bg-[#1a1410] flex flex-col items-center justify-center gap-3 p-5">
        <div className="h-2 w-20 bg-white/20 rounded-full" />
        <div className="h-1.5 w-28 bg-white/15 rounded-full" />
        <div className="bg-white rounded-2xl p-4 shadow-lg mt-2">
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
          >
            {QR_PATTERN.map((cell, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-[3px]"
                style={{
                  backgroundColor: cell ? "#3A2F25" : "transparent",
                }}
              />
            ))}
          </div>
          <p className="text-[#3A2F25]/50 text-[8px] text-center mt-2 font-medium">
            yourchurch.anchoraccountability.com
          </p>
        </div>
        <div className="h-1.5 w-24 bg-white/10 rounded-full mt-1" />
        <p className="text-white/20 text-[9px] text-center">
          [Join link & QR code — placeholder]
        </p>
      </div>
    </PhoneFrame>
  );
}

function FeatureVisual({
  feature,
}: {
  feature: (typeof CHURCH_FEATURES)[number];
}) {
  if (feature.visualType === "video") {
    return (
      <PhoneMockup
        video={feature.video!}
        poster={feature.poster!}
        alt={feature.title}
      />
    );
  }
  if (feature.visualType === "dashboard") {
    return <DashboardPhonePlaceholder />;
  }
  return <QRPhonePlaceholder />;
}

function ModerationMockUI() {
  return (
    <div className="bg-[#1a1410]/80 border border-white/15 rounded-2xl p-5 space-y-3">
      <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">
        Every message is reviewed
      </p>
      {/* Approved */}
      <div className="bg-white/10 rounded-xl p-4 border border-white/10">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 flex-1">
            <div className="h-2 bg-white/30 rounded-full w-full" />
            <div className="h-2 bg-white/20 rounded-full w-4/5" />
            <div className="h-2 bg-white/15 rounded-full w-3/5" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center">
            <CheckCircle className="w-3.5 h-3.5 text-green-400" />
          </div>
        </div>
        <p className="mt-3 text-green-400/70 text-xs font-medium">
          Approved — sent to community
        </p>
      </div>
      {/* Rejected */}
      <div className="bg-white/5 rounded-xl p-4 border border-white/10 opacity-70">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 flex-1">
            <div className="h-2 bg-white/20 rounded-full w-full" />
            <div className="h-2 bg-white/15 rounded-full w-3/5" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-400/40 flex items-center justify-center">
            <X className="w-3.5 h-3.5 text-red-400" />
          </div>
        </div>
        <p className="mt-3 text-red-400/70 text-xs font-medium">
          Not sent — moderation blocked this message
        </p>
      </div>
      <p className="text-white/20 text-xs text-center pt-1">
        [Placeholder — moderation UI]
      </p>
    </div>
  );
}

function CrisisMockUI() {
  return (
    <div className="bg-[#1a1410]/80 border border-white/15 rounded-2xl p-5 space-y-3">
      <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">
        Crisis detected
      </p>
      <div className="bg-white/10 rounded-xl p-4 border border-white/10">
        <div className="space-y-1.5">
          <div className="h-2 bg-white/25 rounded-full w-full" />
          <div className="h-2 bg-white/20 rounded-full w-4/5" />
        </div>
      </div>
      <div className="bg-amber-500/15 border border-amber-400/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-300 text-sm font-semibold mb-1">
              Are you safe?
            </p>
            <p className="text-amber-200/70 text-xs leading-relaxed">
              If you&apos;re thinking about hurting yourself, please reach out:
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-amber-300" />
              <span className="text-amber-300 text-xs font-semibold">
                988 — Suicide & Crisis Lifeline
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white/20 text-xs text-center pt-1">
        [Placeholder — crisis banner UI]
      </p>
    </div>
  );
}

function SetupDashboardPlaceholder() {
  return (
    <div className="bg-[#1a1410]/80 border border-white/15 rounded-2xl overflow-hidden shadow-xl">
      <div className="bg-white/5 border-b border-white/10 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/25" />
          <div className="h-2 w-24 bg-white/20 rounded-full" />
        </div>
        <div className="h-2 w-14 bg-white/10 rounded-full" />
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {["Members", "Reach-Outs", "Partnerships"].map((label) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
            >
              <p className="text-white/40 text-[10px] mb-1">{label}</p>
              <p className="text-white/20 text-lg font-bold">—</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="h-2 w-20 bg-white/20 rounded-full mb-3" />
          <div className="flex items-end gap-1.5 h-20">
            {[35, 55, 40, 70, 50, 85, 65, 75, 60, 80].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-white/20 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-24 bg-white/20 rounded-full mb-2" />
          {[85, 65, 50].map((w, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/5 rounded-lg p-2.5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/25 flex-shrink-0" />
              <div
                className="h-1.5 bg-white/15 rounded-full flex-1"
                style={{ maxWidth: `${w}%` }}
              />
              <div className="h-1.5 w-6 bg-white/10 rounded-full flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-3 text-center">
        <span className="text-white/25 text-xs">
          [Admin dashboard — placeholder]
        </span>
      </div>
    </div>
  );
}

export default function ChurchesPage() {
  const active = useActiveSection(SECTIONS.map((s) => s.id));
  const heroCTARef = React.useRef<HTMLDivElement>(null);
  const [showStickyButton, setShowStickyButton] = React.useState(false);
  const [activeFeature, setActiveFeature] = React.useState(0);
  const featureRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [headshotTriggered, setHeadshotTriggered] = React.useState(false);
  const aboutRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = heroCTARef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyButton(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Headshot scroll trigger — fires ring animation when about section enters view
  React.useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeadshotTriggered(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Sticky scroll observer — activates whichever feature is most in view
  React.useEffect(() => {
    const observers = featureRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveFeature(i);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="bg-[#CBAD8D] font-sans">
      <SiteNav
        active={active}
        sections={SECTIONS}
        primaryCTA={{ label: "Set Up Your Community", href: "/community-request" }}
      />

      {/* Hero */}
      <section
        id="overview"
        className="flex min-h-screen flex-col items-center justify-center px-6 text-center pt-24 pb-12 overflow-hidden"
      >
        <div className="mx-auto max-w-3xl">
          <MotionReveal direction="up" delay={0}>
            <div className="flex justify-center mb-6">
              <HeadshotProgress
                image="anchor"
                size={100}
                gap={6}
                border={2}
                trigger={true}
              />
            </div>
          </MotionReveal>

          <MotionReveal direction="up" delay={50}>
            <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-4">
              For Churches & Ministries
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={100}>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Your men are struggling with lust in silence.
            </h1>
          </MotionReveal>

          <MotionReveal direction="up" delay={150}>
            <p className="mt-6 text-2xl md:text-3xl text-white/90">
              Anchor gives them a way to reach out — anonymously.
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={200}>
            <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Anchor is a free anonymous app that gives the people in your
              church a safe, private space to reach out in moments of temptation
              and struggle — with zero shame, zero judgment, and zero effort to
              set up.
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={250}>
            <div
              ref={heroCTARef}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/community-request"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#3A2F25] shadow-lg transition hover:bg-white/90 hover:scale-105"
              >
                Set Up Your Community — Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://admin.anchoraccountability.com"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Admin Login
              </a>
            </div>
          </MotionReveal>

          <MotionReveal direction="up" delay={300}>
            <p className="mt-4 text-sm text-white/50">
              No credit card. No commitment. No limits on community size.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white/10 px-6 py-20">
        <MotionParallax range={20}>
          <div className="mx-auto max-w-3xl text-center">
            <MotionReveal direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The struggle is real. The silence is louder.
              </h2>
            </MotionReveal>
            <MotionReveal direction="up" delay={100}>
              <p className="text-lg text-white/75 leading-relaxed mb-6">
                Porn is one of the most pervasive struggles among men in the
                church — and one of the least talked about. The shame around it
                is so heavy that most men will never raise their hand in a small
                group, and they&apos;ll never bring it to a pastor. So they
                carry it alone.
              </p>
            </MotionReveal>
            <MotionReveal direction="up" delay={150}>
              <p className="text-lg text-white/75 leading-relaxed">
                Most churches have resources for men who are already seeking
                help. But there&apos;s nothing that meets men at the moment of
                temptation — when the barrier to asking for help feels
                impossible. That&apos;s the gap Anchor fills.
              </p>
            </MotionReveal>
          </div>
        </MotionParallax>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20">
        <MotionParallax range={25}>
          <div className="mx-auto max-w-4xl">
            <MotionReveal direction="up">
              <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-white">
                What Anchor actually is
              </h2>
            </MotionReveal>
            <MotionReveal direction="up" delay={50}>
              <p className="mb-16 text-center text-lg text-white/70 max-w-2xl mx-auto">
                An anonymous community inside your church where people can reach
                out the moment they&apos;re struggling.
              </p>
            </MotionReveal>

            <div className="space-y-20">
              <MotionReveal direction="up">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                  <div className="flex-shrink-0 w-[200px] md:w-[240px]">
                    <PhoneMockup
                      video="/assets/videos/anchor-sos.mp4"
                      poster="/assets/videos/anchor-sos.jpg"
                      alt="Anonymous reach-out"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white mb-4 mx-auto lg:mx-0">
                      1
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <Heart className="w-7 h-7 text-white" />
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">
                        They reach out. Anonymously.
                      </h3>
                    </div>
                    <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                      When someone is struggling — in temptation, after a fall,
                      or just carrying the weight — they can send an anonymous
                      reach-out to your community with one tap. No name. No
                      identity. Just an honest cry for help.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal direction="up" delay={50}>
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                  <div className="flex-shrink-0 w-[200px] md:w-[240px]">
                    <PhoneMockup
                      video="/assets/videos/anchor-encouragement.mp4"
                      poster="/assets/videos/anchor-encouragement.jpg"
                      alt="Community encouragement"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white mb-4 mx-auto lg:mx-0">
                      2
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <MessageCircle className="w-7 h-7 text-white" />
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">
                        The community responds.
                      </h3>
                    </div>
                    <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                      Others in your church respond with scripture, prayer, and
                      encouragement. Everyone stays anonymous. The person who
                      reached out knows their community showed up — without
                      anyone knowing who they are.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal direction="up" delay={50}>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                  <div className="flex-shrink-0 w-[200px] md:w-[240px]">
                    <PhoneMockup
                      video="/assets/videos/anchor-messages.mp4"
                      poster="/assets/videos/anchor-messages.jpg"
                      alt="Private accountability messages"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white mb-4 mx-auto lg:mx-0">
                      3
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <Users className="w-7 h-7 text-white" />
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">
                        Deeper connection, when they&apos;re ready.
                      </h3>
                    </div>
                    <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                      If someone wants to go deeper, they can initiate a private
                      chat with someone who encouraged them. From there,
                      accountability partnerships form — daily check-ins,
                      ongoing support. At their own pace, on their own terms.
                    </p>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </MotionParallax>
      </section>

      {/* What Your Church Gets — Sticky Scroll */}
      <section className="bg-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
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
            {/* Sticky phone — desktop only */}
            <div className="hidden lg:flex flex-col items-center sticky top-28 flex-shrink-0 w-[220px]">
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
              <div className="flex gap-2 mt-6">
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
                  {/* Mobile visual — shown above text on small screens */}
                  <div className="lg:hidden w-[180px] mx-auto mb-8">
                    <FeatureVisual feature={feature} />
                  </div>

                  <motion.div
                    animate={{ opacity: activeFeature === i ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-lg"
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

          {/* Bonus callouts below the scroll */}
          <MotionReveal direction="up">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/15 pt-12">
              {[
                {
                  icon: Lock,
                  label: "Private & scoped",
                  desc: "Your people only interact with each other.",
                },
                {
                  icon: CheckCircle,
                  label: "Marketing materials",
                  desc: "Slides, branded visuals, and your QR code — ready to use.",
                },
                {
                  icon: Heart,
                  label: "Completely free",
                  desc: "No credit card. No limits. No subscription.",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium text-sm">
                      {item.label}
                    </p>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Safety & Moderation */}
      <section id="safety" className="px-6 py-20">
        <MotionParallax range={20}>
          <div className="mx-auto max-w-4xl">
            <MotionReveal direction="up">
              <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-white">
                Built with safety in mind
              </h2>
            </MotionReveal>
            <MotionReveal direction="up" delay={50}>
              <p className="mb-16 text-center text-lg text-white/70 max-w-2xl mx-auto">
                Real, vulnerable conversations — in an environment that&apos;s
                safe for everyone in your church.
              </p>
            </MotionReveal>

            <div className="space-y-16">
              {/* Moderation */}
              <MotionReveal direction="up">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                  <div className="flex-shrink-0 w-full max-w-sm">
                    <ModerationMockUI />
                  </div>
                  <div className="flex-1">
                    <Shield className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      AI moderation on every message
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Every reach-out, response, and post is reviewed before
                      anyone else sees it. It allows genuine vulnerability —
                      honest struggles, temptation, confession — while blocking
                      trolling, hate, and harmful content. It understands the
                      difference.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Crisis */}
              <MotionReveal direction="up">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                  <div className="flex-shrink-0 w-full max-w-sm">
                    <CrisisMockUI />
                  </div>
                  <div className="flex-1">
                    <AlertTriangle className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      Crisis detection
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      If a message suggests someone may be in danger, Anchor
                      detects it and immediately shows them a banner with the
                      national suicide prevention hotline. The message can still
                      go through if it&apos;s a genuine plea for help — the
                      moderation is designed to tell the difference.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Block/report + tuning */}
              <div className="grid md:grid-cols-2 gap-6">
                <MotionReveal direction="up">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Block & report, always available
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Every user can block and report on any interaction, at any
                      time. Reports come directly to me personally, and I handle
                      them — including disabling accounts when needed.
                    </p>
                  </div>
                </MotionReveal>
                <MotionReveal direction="up" delay={80}>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Moderation can be tuned
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      If it ever feels too strict or too loose for your specific
                      community, just reach out. I&apos;ll adjust the settings
                      for you — no technical work on your end.
                    </p>
                  </div>
                </MotionReveal>
              </div>
            </div>
          </div>
        </MotionParallax>
      </section>

      {/* Setup */}
      <section id="setup" className="bg-white/10 px-6 py-20">
        <MotionParallax range={20}>
          <div className="mx-auto max-w-4xl">
            <MotionReveal direction="up">
              <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-white">
                Getting set up takes minutes
              </h2>
            </MotionReveal>
            <MotionReveal direction="up" delay={50}>
              <p className="mb-16 text-center text-lg text-white/70 max-w-2xl mx-auto">
                Nothing technical to figure out. Once you&apos;re set up, your
                only job is to share the link.
              </p>
            </MotionReveal>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Steps */}
              <div className="flex-1 space-y-5">
                {[
                  {
                    num: 1,
                    title: "Request your community",
                    desc: "Fill out the short form to tell me about your church or ministry. I'll reach out to connect — usually by email, and often a quick call.",
                  },
                  {
                    num: 2,
                    title: "We connect",
                    desc: "I'll walk you through everything and answer any questions. A real conversation with the founder — not a sales process.",
                  },
                  {
                    num: 3,
                    title: "You're live",
                    desc: "You'll receive your admin login, join link, and QR code. Share it in your bulletin, on a slide during service, or in a small group. That's it.",
                  },
                ].map((step, i) => (
                  <MotionReveal key={step.num} direction="up" delay={i * 80}>
                    <div className="flex gap-5 items-start bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-lg font-bold text-white">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </MotionReveal>
                ))}

                <MotionReveal direction="up" delay={300}>
                  <div className="pt-2">
                    <Link
                      href="/community-request"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#3A2F25] shadow-lg transition hover:bg-white/90 hover:scale-105"
                    >
                      Request Your Community
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </MotionReveal>
              </div>

              {/* Dashboard placeholder */}
              <MotionReveal direction="left">
                <div className="lg:sticky lg:top-28 flex-shrink-0 w-full lg:w-[320px]">
                  <SetupDashboardPlaceholder />
                </div>
              </MotionReveal>
            </div>
          </div>
        </MotionParallax>
      </section>

      {/* TODO: Add church testimonials here once available */}

      {/* FAQ */}
      <section id="faq" className="px-6 py-20">
        <MotionParallax range={25}>
          <div className="mx-auto max-w-3xl">
            <MotionReveal direction="up">
              <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-white">
                Questions pastors ask
              </h2>
            </MotionReveal>

            <div className="space-y-6">
              {[
                {
                  q: "Can I or anyone else see who's struggling?",
                  a: "No. The anonymity is absolute. Users are identified only by a randomly assigned ID — no names, no emails, no way to tie behavior to a real person. Not even for me.",
                },
                {
                  q: "What if someone posts something inappropriate or harmful?",
                  a: "It won't make it through to others. AI moderation reviews every message before anyone sees it. If something slips through and gets reported, I handle it personally — including disabling accounts when needed.",
                },
                {
                  q: "What if someone seems to be in genuine crisis?",
                  a: "Anchor detects crisis language and automatically shows the person a banner with the national suicide prevention hotline. The message can still be sent if it's a genuine plea for help — the moderation is designed to recognize the difference.",
                },
                {
                  q: "Is it really free?",
                  a: "Yes. No credit card, no subscription, no limits on how many people join. Anchor is free for churches.",
                },
                {
                  q: "How long does it take to get set up?",
                  a: "After you submit the request form, we'll connect to talk through it. Once you say yes, you can be live within a day or two.",
                },
                {
                  q: "Does it work on iPhone and Android?",
                  a: "Yes — Anchor is available on both iOS and Android. Your custom join link handles both platforms automatically.",
                },
              ].map((faq, i) => (
                <MotionReveal key={i} direction="up" delay={i * 60}>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {faq.q}
                    </h3>
                    <p className="text-white/70">{faq.a}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </MotionParallax>
      </section>

      {/* The Founder */}
      <section id="about" className="bg-white/10 px-6 py-20">
        <MotionParallax range={20}>
          <div ref={aboutRef} className="mx-auto max-w-4xl">
            <MotionReveal direction="up">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
                  {/* Left: photo + name */}
                  <div className="flex flex-col items-center text-center flex-shrink-0">
                    <HeadshotProgress
                      size={200}
                      gap={8}
                      border={3}
                      trigger={headshotTriggered}
                    />
                    <p className="text-white font-bold text-xl mt-6 mb-1">
                      Hey! I'm Jason Moynihan
                    </p>
                    <p className="text-white/50 text-sm">Founder, Anchor</p>
                  </div>

                  {/* Right: text */}
                  <div className="flex-1 flex flex-col justify-center space-y-5 text-center lg:text-left">
                    <p className="text-lg text-white/80 leading-relaxed">
                      I found faith in 2024, and God has been freeing me from
                      pornography — a battle I fought alone in silence for years
                      before I knew Him.
                    </p>
                    <p className="text-lg text-white/80 leading-relaxed">
                      I built Anchor because it&apos;s something I wish I had.
                      Just a place to reach out anonymously in a moment of
                      temptation, without the shame of someone knowing who I
                      was.
                    </p>
                    <p className="text-lg text-white/80 leading-relaxed">
                      There&apos;s so many Christians out there struggling in
                      silence, and I hope Anchor can help make a dent in this
                      struggle that is so common to man.
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </MotionParallax>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center">
        <MotionParallax range={20}>
          <MotionReveal direction="up">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
              Ready to give your people a place to be honest?
            </h2>
          </MotionReveal>
          <MotionReveal direction="up" delay={100}>
            <p className="mb-8 text-lg text-white/80 max-w-xl mx-auto">
              Setting up your community is free, takes minutes, and requires
              zero technical effort on your end.
            </p>
          </MotionReveal>
          <MotionReveal direction="up" delay={150}>
            <Link
              href="/community-request"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#3A2F25] shadow-lg transition hover:bg-white/90 hover:scale-105"
            >
              Request Your Community — Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>
          <MotionReveal direction="up" delay={200}>
            <p className="mt-6 text-sm text-white/50">
              No credit card. No commitment. No limits on community size.
            </p>
          </MotionReveal>
        </MotionParallax>
      </section>

      {/* Footer */}
      <footer className="bg-white/10 border-t border-white/20 px-6 py-8">
        <MotionReveal direction="up">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center text-sm text-white/60">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="hover:text-white/90 transition">
                Home
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-white/90 transition"
              >
                Privacy Policy
              </Link>
              <Link href="/support" className="hover:text-white/90 transition">
                Support
              </Link>
            </div>
            <p>Contact: jrmoynihan99@gmail.com</p>
            <p className="text-white/40">
              © 2026 Anchor Accountability. All rights reserved.
            </p>
          </div>
        </MotionReveal>
      </footer>

      {/* Sticky mobile CTA */}
      <AnimatePresence>
        {showStickyButton && (
          <motion.div
            className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/community-request"
              className="flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#3A2F25] shadow-2xl whitespace-nowrap"
            >
              Set Up Your Community — Free
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

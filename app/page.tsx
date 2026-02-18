"use client";
import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HeadshotProgress } from "@/components/ui/HeadshotProgress";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { PhoneStack } from "@/components/ui/PhoneStack";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { SiteNav } from "@/components/layout/SiteNav";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  Heart,
  MessageCircle,
  Users,
  BookOpen,
  Flame,
  HandHeart,
} from "lucide-react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "how-it-works", label: "How It Works" },
  { id: "communities", label: "Communities" },
  { id: "faq", label: "FAQ" },
];

const FEATURES = [
  {
    icon: BookOpen,
    title: "Daily Verse",
    description:
      "Start each day with scripture to strengthen your resolve and remind you of God's promises.",
    video: "/assets/videos/anchor-verse.mp4",
    poster: "/assets/videos/anchor-verse.jpg",
  },
  {
    icon: Flame,
    title: "Streak Tracking",
    description:
      "Track your progress and celebrate milestones. Every day of freedom counts.",
    video: "/assets/videos/anchor-streak.mp4",
    poster: "/assets/videos/anchor-streak.jpg",
  },
  {
    icon: HandHeart,
    title: "Prayer Requests",
    description:
      "Share prayer needs anonymously and receive support from your community.",
    video: "/assets/videos/anchor-prayer.mp4",
    poster: "/assets/videos/anchor-prayer.jpg",
  },
  {
    icon: Users,
    title: "Community Feed",
    description:
      "See encouragements and victories from others in your community. You're not alone.",
    video: "/assets/videos/anchor-community.mp4",
    poster: "/assets/videos/anchor-community.jpg",
  },
];

export default function Home() {
  const active = useActiveSection(SECTIONS.map((s) => s.id));
  const heroCTARef = React.useRef<HTMLDivElement>(null);
  const [showStickyDownload, setShowStickyDownload] = React.useState(false);

  React.useEffect(() => {
    const el = heroCTARef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyDownload(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#CBAD8D] font-sans">
      <SiteNav active={active} sections={SECTIONS} />

      {/* Hero Section */}
      <section
        id="hero"
        className="flex min-h-screen flex-col items-center justify-center px-6 text-center pt-24 pb-12 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12 w-full max-w-7xl mx-auto">
          {/* Text content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <MotionReveal direction="up" delay={0}>
              <HeadshotProgress
                image="anchor"
                size={120}
                gap={6}
                border={2}
                trigger={true}
              />
            </MotionReveal>

            <MotionReveal direction="up" delay={100}>
              <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white">
                Anchor
              </h1>
            </MotionReveal>
            <MotionReveal direction="up" delay={150}>
              <p className="mt-2 text-2xl md:text-3xl text-white/90">
                Fight Lust Together
              </p>
            </MotionReveal>
            <MotionReveal direction="up" delay={200}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
                An anonymous Christian accountability app that helps you
                overcome porn and lust. Connect with others in your church or
                community who understand the struggle.
              </p>
            </MotionReveal>

            <MotionReveal direction="up" delay={250}>
              <div
                ref={heroCTARef}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[#3A2F25] shadow-lg transition hover:bg-white/90 hover:scale-105"
                >
                  Download Now
                </Link>
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={300}>
              <p className="mt-4 text-sm text-white/60">Free • iOS & Android</p>
            </MotionReveal>
          </div>

          {/* Phone mockup - Single on mobile */}
          <motion.div
            className="lg:hidden flex-shrink-0 w-[240px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: 0.35,
            }}
          >
            <PhoneMockup
              video="/assets/videos/anchor-sos.mp4"
              poster="/assets/videos/anchor-sos.jpg"
              alt="Anchor app SOS feature"
            />
          </motion.div>

          {/* Phone mockups - 3-stack on desktop */}
          <PhoneStack />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white/10 px-6 py-20">
        <MotionParallax range={30}>
          <div className="mx-auto max-w-4xl">
            <MotionReveal direction="up">
              <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-white">
                How It Works
              </h2>
            </MotionReveal>
            <MotionReveal direction="up" delay={50}>
              <p className="mb-16 text-center text-lg text-white/70 max-w-2xl mx-auto">
                Three simple steps to find freedom and build lasting
                accountability.
              </p>
            </MotionReveal>

            <div className="space-y-20">
              {[
                {
                  num: 1,
                  title: "Reach Out Anonymously",
                  desc: "When you're struggling, send an SOS to your community. Share your struggle without revealing your identity—no shame, no judgment. Others will see you need support and can respond with encouragement.",
                  video: "/assets/videos/anchor-sos.mp4",
                  poster: "/assets/videos/anchor-sos.jpg",
                  icon: Heart,
                },
                {
                  num: 2,
                  title: "Get Encouragement",
                  desc: "Receive scripture, prayers, and messages of support from others who understand the battle. Real people in your community lifting you up when you need it most.",
                  video: "/assets/videos/anchor-encouragement.mp4",
                  poster: "/assets/videos/anchor-encouragement.jpg",
                  icon: MessageCircle,
                },
                {
                  num: 3,
                  title: "Build Accountability",
                  desc: "When you're ready, form private accountability partnerships with people you trust. Move from anonymous support to deeper, ongoing accountability relationships.",
                  video: "/assets/videos/anchor-messages.mp4",
                  poster: "/assets/videos/anchor-messages.jpg",
                  icon: Users,
                },
              ].map((step, i) => (
                <MotionReveal key={step.num} direction="up" delay={i * 100}>
                  <div
                    className={`flex flex-col ${
                      i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center gap-8 lg:gap-16`}
                  >
                    {/* Phone mockup */}
                    <div className="flex-shrink-0 w-[200px] md:w-[240px]">
                      <PhoneMockup
                        video={step.video}
                        poster={step.poster}
                        alt={step.title}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white mb-4 mx-auto lg:mx-0">
                        {step.num}
                      </div>
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <step.icon className="w-8 h-8 text-white" />
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </MotionParallax>
      </section>

      {/* Features Section 
      <section id="features" className="px-6 py-20">
        <MotionParallax range={25}>
          <div className="mx-auto max-w-7xl">
            <MotionReveal direction="up">
              <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-white">
                Everything You Need
              </h2>
            </MotionReveal>
            <MotionReveal direction="up" delay={50}>
              <p className="mb-16 text-center text-lg text-white/70 max-w-2xl mx-auto">
                Tools designed to help you grow stronger every day.
              </p>
            </MotionReveal>

            <div className="grid gap-8 md:grid-cols-2">
              {FEATURES.map((feature, i) => (
                <MotionReveal key={feature.title} direction="up" delay={i * 80}>
                  <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/5 rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex-shrink-0 w-[250px]">
                      <PhoneMockup
                        video={feature.video}
                        poster={feature.poster}
                        alt={feature.title}
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                        <feature.icon className="w-6 h-6 text-white" />
                        <h3 className="text-xl font-semibold text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </MotionParallax>
      </section>*/}

      {/* For Churches & Communities Section */}
      <section id="communities" className="px-6 py-16">
        <MotionReveal direction="up">
          <div className="mx-auto max-w-2xl text-center bg-white/5 rounded-3xl p-10 border border-white/10">
            <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
              For Churches & Ministries
            </p>
            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-white">
              Are you a pastor or ministry leader?
            </h2>
            <p className="mb-6 text-white/70 leading-relaxed">
              Anchor can be set up as a private community for your church —
              free, zero effort, fully anonymous. We have a dedicated page with
              everything you need to know.
            </p>
            <Link
              href="/churches"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[#3A2F25] shadow-lg transition hover:bg-white/90 hover:scale-105"
            >
              Learn More for Churches →
            </Link>
          </div>
        </MotionReveal>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white/10 px-6 py-20">
        <MotionParallax range={30}>
          <div className="mx-auto max-w-3xl">
            <MotionReveal direction="up">
              <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-white">
                Common Questions
              </h2>
            </MotionReveal>

            <div className="space-y-6">
              {[
                {
                  q: "Is it really anonymous?",
                  a: "Yes. When you reach out for help, no one knows who you are. You choose when and with whom to reveal your identity.",
                },
                {
                  q: "How much does it cost?",
                  a: "Anchor is completely free. No subscriptions, no hidden fees.",
                },
                {
                  q: "What platforms is it available on?",
                  a: "Anchor is available on both iOS (App Store) and Android (Google Play).",
                },
                {
                  q: "How does the community scoping work?",
                  a: "Each church or organization has its own private community. You only connect with people in your specific community, creating a trusted environment.",
                },
              ].map((faq, i) => (
                <MotionReveal key={i} direction="up" delay={i * 80}>
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

      {/* Final CTA */}
      <section className="px-6 py-20 text-center">
        <MotionParallax range={20}>
          <MotionReveal direction="up">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Journey?
            </h2>
          </MotionReveal>
          <MotionReveal direction="up" delay={100}>
            <p className="mb-8 text-lg text-white/80">
              Join hundreds of Christians fighting lust together.
            </p>
          </MotionReveal>
          <MotionReveal direction="up" delay={150}>
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[#3A2F25] shadow-lg transition hover:bg-white/90 hover:scale-105"
            >
              Download Anchor Now
            </Link>
          </MotionReveal>
        </MotionParallax>
      </section>

      {/* Footer */}
      <footer className="bg-white/10 border-t border-white/20 px-6 py-8">
        <MotionReveal direction="up">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center text-sm text-white/60">
            <div className="flex flex-wrap justify-center gap-4">
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

      {/* Sticky mobile download button */}
      <AnimatePresence>
        {showStickyDownload && (
          <motion.div
            className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/join"
              className="flex items-center justify-center rounded-full bg-white px-12 py-4 text-base font-semibold text-[#3A2F25] shadow-2xl whitespace-nowrap"
            >
              Download Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

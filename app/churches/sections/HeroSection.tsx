"use client";
import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HeadshotProgress } from "@/components/ui/HeadshotProgress";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const heroCTARef = React.useRef<HTMLDivElement>(null);
  const [showStickyButton, setShowStickyButton] = React.useState(false);

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

  return (
    <>
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
              Your people are struggling with lust in silence.
            </h1>
          </MotionReveal>

          {/*<MotionReveal direction="up" delay={150}>
            <p className="mt-6 text-2xl md:text-3xl text-white/90">
              Anchor gives them a way to reach out — anonymously.
            </p>
          </MotionReveal>*/}

          <MotionReveal direction="up" delay={200}>
            <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Anchor is a free app that gives the people in your church a safe,
              private space to reach out anonymously in moments of temptation
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
              100% Free. No commitment, no limits on community size. size.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Sticky mobile CTA — appears once hero CTA scrolls out of view */}
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
    </>
  );
}

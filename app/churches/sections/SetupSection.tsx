"use client";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { ArrowRight, MessageCircle, Rocket, KeyRound } from "lucide-react";

// Step activates at these delays (ms) after section becomes visible
const STEP_DELAYS = [0, 480, 960];

const STEPS = [
  {
    num: 1,
    icon: MessageCircle,
    title: "Reach out and say hi",
    desc: "Tell me a bit about your church — what you're hoping to offer your congregation, and any questions you have. I'll get back to you personally, usually within a day or two.",
  },
  {
    num: 2,
    icon: Rocket,
    title: "Your community goes live",
    desc: "Once you're ready, I'll add your church to the app. Your private community is created instantly — joinable only to your members during account creation, and pin-protected so it stays exactly who you intend it to be.",
  },
  {
    num: 3,
    icon: KeyRound,
    title: "You get everything you need to launch",
    desc: "Your admin login comes with your QR code for seamless pinless onboarding, your pin code, ready-to-use graphics and slides for sharing, and a short step-by-step playbook to help you introduce it to your congregation.",
  },
];

export function SetupSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [activeSteps, setActiveSteps] = React.useState([false, false, false]);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;
    const timers = STEP_DELAYS.map((delay, i) =>
      setTimeout(
        () =>
          setActiveSteps((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          }),
        delay,
      ),
    );
    return () => timers.forEach(clearTimeout);
  }, [isVisible]);

  return (
    <section id="setup" className="bg-white/10 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <MotionReveal direction="up">
          <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-white">
            Getting started is simple
          </h2>
        </MotionReveal>
        <MotionReveal direction="up" delay={50}>
          <p className="mb-16 text-center text-lg text-white/70 max-w-2xl mx-auto">
            No technical setup. No ongoing management. Just reach out and
            we&apos;ll handle the rest.
          </p>
        </MotionReveal>

        <div ref={sectionRef}>
          {/* Desktop: horizontal 3-up with animated connector line */}
          <div className="hidden lg:block">
            {/* Node row + connector: two separate segments so line never crosses through a node */}
            <div className="flex items-center w-full mb-6">
              {STEPS.map((step, i) => (
                <React.Fragment key={step.num}>
                  <motion.div
                    className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg font-bold"
                    animate={{
                      backgroundColor: activeSteps[i]
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(26,20,16,1)",
                      borderColor: activeSteps[i]
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(255,255,255,0.12)",
                      color: activeSteps[i]
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.2)",
                      boxShadow: activeSteps[i]
                        ? "0 0 18px rgba(255,255,255,0.12)"
                        : "none",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {step.num}
                  </motion.div>

                  {/* Line segment between nodes — skip after last node */}
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 relative h-0.5 bg-white/10 rounded-full overflow-hidden mx-2">
                      <motion.div
                        className="absolute inset-y-0 left-0 w-full bg-white/45 origin-left rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isVisible ? 1 : 0 }}
                        transition={{
                          duration: 0.55,
                          delay: i * 0.55,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-5">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col"
                  animate={{ opacity: activeSteps[i] ? 1 : 0.2 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <step.icon className="w-5 h-5 text-white/50 mb-4 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="lg:hidden space-y-4">
            {STEPS.map((step, i) => (
              <MotionReveal key={step.num} direction="up" delay={i * 80}>
                <div className="flex gap-5 items-start bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-lg font-bold text-white">
                    {step.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <step.icon className="w-4 h-4 text-white/50 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>

        <MotionReveal direction="up" delay={300}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/community-request"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#3A2F25] shadow-lg transition hover:bg-white/90 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

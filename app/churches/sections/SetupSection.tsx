"use client";
import Link from "next/link";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { ArrowRight } from "lucide-react";

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
              className="bg-white/5 rounded-xl p-3 border border-white/10"
            >
              <div className="h-5 w-8 bg-white/30 rounded mb-1.5" />
              <div className="h-1.5 w-12 bg-white/15 rounded-full" />
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3">
          <div className="h-2 w-20 bg-white/20 rounded-full" />
          <div className="flex items-end gap-1 h-16">
            {[30, 55, 40, 70, 50, 80, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-white/20 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {[90, 70, 80].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-white/20 flex-shrink-0" />
              <div
                className="h-1.5 bg-white/10 rounded-full"
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

export function SetupSection() {
  return (
    <section id="setup" className="bg-white/10 px-6 py-20">
      <MotionParallax range={20}>
        <div className="mx-auto max-w-5xl">
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
  );
}

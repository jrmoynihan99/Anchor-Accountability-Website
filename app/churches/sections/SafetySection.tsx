"use client";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  X,
  Phone,
  Flag,
  SlidersHorizontal,
} from "lucide-react";

function ModerationMockUI() {
  return (
    <div className="bg-[#3a2c1e] border border-white/15 rounded-2xl p-5 space-y-3 shadow-xl">
      <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">
        Every message is reviewed
      </p>
      {/* Approved */}
      <div className="bg-white/8 rounded-xl p-4 border border-white/10">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 flex-1">
            <div className="h-2 bg-white/20 rounded-full w-full" />
            <div className="h-2 bg-white/12 rounded-full w-4/5" />
            <div className="h-2 bg-white/12 rounded-full w-3/5" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
            <CheckCircle className="w-3.5 h-3.5 text-green-400" />
          </div>
        </div>
        <p className="mt-3 text-green-400 text-xs font-medium">
          Approved — sent to community
        </p>
      </div>
      {/* Rejected */}
      <div className="bg-white/8 rounded-xl p-4 border border-white/10 opacity-60">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 flex-1">
            <div className="h-2 bg-white/20 rounded-full w-full" />
            <div className="h-2 bg-white/12 rounded-full w-3/5" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center">
            <X className="w-3.5 h-3.5 text-red-400" />
          </div>
        </div>
        <p className="mt-3 text-red-400 text-xs font-medium">
          Not sent — moderation blocked this message
        </p>
      </div>
    </div>
  );
}

function CrisisMockUI() {
  return (
    <div className="bg-[#3a2c1e] border border-white/15 rounded-2xl p-5 space-y-3 shadow-xl">
      <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">
        Crisis detected
      </p>
      <div className="bg-white/8 rounded-xl p-4 border border-white/10">
        <div className="space-y-1.5">
          <div className="h-2 bg-white/20 rounded-full w-full" />
          <div className="h-2 bg-white/12 rounded-full w-4/5" />
        </div>
      </div>
      <div className="bg-amber-500/15 border border-amber-500/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-300 text-sm font-semibold mb-1">
              Are you safe?
            </p>
            <p className="text-amber-300/70 text-xs leading-relaxed">
              If you&apos;re thinking about hurting yourself, please reach out:
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="text-amber-300 text-xs font-semibold">
                988 — Suicide & Crisis Lifeline
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SafetySection() {
  return (
    <section id="safety" className="px-6 py-20">
      <MotionParallax range={20}>
        <div className="mx-auto max-w-5xl">
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
                    AI Moderation
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
                  <div className="flex items-center gap-3 mb-2">
                    <Flag className="w-5 h-5 text-white flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-white">
                      Block & report, always available
                    </h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Every user can block and report on any interaction, at any
                    time. Reports come directly to the Anchor team actively
                    monitoring for app abuse.
                  </p>
                </div>
              </MotionReveal>
              <MotionReveal direction="up" delay={80}>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <SlidersHorizontal className="w-5 h-5 text-white flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-white">
                      Moderation can be tuned
                    </h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Moderation can be adjusted to allow or disallow for specific
                    things, creating the perfect balance of vulnerability and
                    safety for your community.
                  </p>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </MotionParallax>
    </section>
  );
}

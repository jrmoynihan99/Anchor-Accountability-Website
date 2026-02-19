"use client";
import Link from "next/link";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="px-6 py-20 text-center">
      <MotionParallax range={20}>
        <MotionReveal direction="up">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
            Ready to give your people a place to be honest?
          </h2>
        </MotionReveal>
        <MotionReveal direction="up" delay={100}>
          <p className="mb-8 text-lg text-white/80 max-w-xl mx-auto">
            Setting up your community is free, takes minutes, and requires zero
            technical effort on your end.
          </p>
        </MotionReveal>
        <MotionReveal direction="up" delay={150}>
          <Link
            href="/community-request"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#3A2F25] shadow-lg transition hover:bg-white/90 hover:scale-105"
          >
            Request Your Community
            <ArrowRight className="w-4 h-4" />
          </Link>
        </MotionReveal>
        <MotionReveal direction="up" delay={200}>
          <p className="mt-6 text-sm text-white/80">
            Anchor is currently 100% FREE for churches
          </p>
        </MotionReveal>
      </MotionParallax>
    </section>
  );
}

"use client";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { LandingContent } from "../types";

export function FaqSection({ content }: { content: LandingContent["faq"] }) {
  return (
    <section id="faq" className="px-6 py-20">
      <MotionParallax range={25}>
        <div className="mx-auto max-w-3xl">
          <MotionReveal direction="up">
            <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-white">
              {content.heading}
            </h2>
          </MotionReveal>

          <div className="space-y-6">
            {content.items.map((faq, i) => (
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
  );
}

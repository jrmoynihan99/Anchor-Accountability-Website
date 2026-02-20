"use client";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";

const FAQS = [
  {
    q: "Can I or anyone else see who's struggling?",
    a: "No. The anonymity is absolute. Users are identified only by a randomly assigned ID — no names, no emails, no way to tie behavior to a real person except through willing vulnerability among users.",
  },
  {
    q: "What if someone posts something inappropriate or harmful?",
    a: "It won't make it through to others. AI moderation reviews every message before anyone sees it. If something slips through, users can easily block that user with one click, along with report the content.",
  },
  {
    q: "What if someone seems to be in genuine crisis?",
    a: "Anchor detects crisis language and automatically shows the person a banner with the national suicide prevention hotline. The message can still be sent if it's a genuine plea for help — the moderation is designed to recognize the difference.",
  },
  {
    q: "Is it really free?",
    a: "Yes. No credit card, no subscription, no limits on how many people join. Anchor is 100% free for churches.",
  },
  {
    q: "How long does it take to get set up?",
    a: "Once you're ready to launch, your private community on Anchor can be live in minutes! All that's left to do is share the word!",
  },
  {
    q: "Where is it available?",
    a: "Anchor is available on both iOS and Android. Your custom join link & QR code handles both platforms automatically.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="px-6 py-20">
      <MotionParallax range={25}>
        <div className="mx-auto max-w-3xl">
          <MotionReveal direction="up">
            <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-white">
              Questions pastors ask
            </h2>
          </MotionReveal>

          <div className="space-y-6">
            {FAQS.map((faq, i) => (
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

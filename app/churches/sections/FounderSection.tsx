"use client";
import * as React from "react";
import { HeadshotProgress } from "@/components/ui/HeadshotProgress";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";

export function FounderSection() {
  const [headshotTriggered, setHeadshotTriggered] = React.useState(false);
  const aboutRef = React.useRef<HTMLDivElement>(null);

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

  return (
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
                    Hey! I&apos;m Jason Moynihan
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
                    temptation, without the shame of someone knowing who I was.
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
  );
}

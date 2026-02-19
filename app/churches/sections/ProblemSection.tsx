"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";

const CYCLE_MS = 4500;

const STATS = [
  {
    prefix: "",
    value: 75,
    suffix: "%",
    headline: "of Christian men admit to consuming pornography on some level",
  },
  {
    prefix: "",
    value: 84,
    suffix: "%",
    headline: "of porn users say no one is helping them avoid pornography",
  },
  {
    prefix: "Only ",
    value: 9,
    suffix: "%",
    headline: "of churches have a dedicated porn addiction ministry",
  },
];

function CountUpNumber({ target }: { target: number }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 1400;
    const startTime = performance.now();

    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    }

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [target]);

  return <>{count}</>;
}

export function ProblemSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [cycleKey, setCycleKey] = React.useState(0);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STATS.length);
      setCycleKey((prev) => prev + 1);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, [isVisible]);

  const stat = STATS[activeIndex];

  return (
    <section className="bg-white/10 px-6 py-20">
      <MotionParallax range={20}>
        <div ref={sectionRef} className="mx-auto max-w-5xl">
          {/* Heading — full width */}
          <MotionReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              The struggle is real. The silence is louder.
            </h2>
          </MotionReveal>

          {/* Two fixed columns — grid prevents layout shift when stat content changes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-center">
            {/* Left: cycling stat */}
            <MotionReveal direction="up" delay={100}>
              <div>
                {/* Fixed-height container prevents layout shift between stats */}
                <div className="relative min-h-[200px] md:min-h-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="absolute inset-0 flex flex-col justify-start"
                    >
                      <p className="text-[5.5rem] md:text-[7rem] font-bold text-amber-100 leading-none tracking-tight">
                        {stat.prefix}
                        {isVisible ? (
                          <CountUpNumber
                            key={activeIndex}
                            target={stat.value}
                          />
                        ) : (
                          0
                        )}
                        {stat.suffix}
                      </p>
                      <p className="mt-4 text-xl text-white/70 leading-snug">
                        {stat.headline}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-3 mt-2">
                  {STATS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveIndex(i);
                        setCycleKey((prev) => prev + 1);
                      }}
                      aria-label={`Stat ${i + 1}`}
                      className="relative cursor-pointer h-1.5 rounded-full overflow-hidden transition-all duration-300"
                      style={{ width: i === activeIndex ? 32 : 8 }}
                    >
                      <div className="absolute inset-0 bg-white/25 rounded-full" />
                      {i === activeIndex && isVisible && (
                        <motion.div
                          key={cycleKey}
                          className="absolute inset-y-0 left-0 bg-amber-100 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: CYCLE_MS / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-white/30 text-xs">
                  Source: Beyond the Porn Phenomenon, Barna 2024
                </p>
              </div>
            </MotionReveal>

            {/* Right: paragraph — vertically centered by grid items-center */}
            <MotionReveal direction="up" delay={150}>
              <p className="text-lg text-white/75 leading-relaxed">
                Porn is one of the most pervasive struggles among men in the
                church — and one of the least talked about. The shame around it
                is so heavy that most men will never raise their hand in a small
                group, and they&apos;ll never bring it to a pastor. So they
                carry it alone.
              </p>
            </MotionReveal>
          </div>

          {/* Introducing Anchor — full width, centered, below both columns */}
          <MotionReveal direction="up" delay={200}>
            <div className="border-t border-white/15 mt-12 pt-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
                Introducing
              </p>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/icon.png"
                  alt="Anchor"
                  width={56}
                  height={56}
                  className="rounded-[14px] shadow-lg"
                />
                <p className="text-4xl md:text-5xl font-bold text-white">
                  Anchor.
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </MotionParallax>
    </section>
  );
}

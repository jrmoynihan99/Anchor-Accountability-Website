"use client";
import Image from "next/image";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { MotionParallax } from "@/components/animations/MotionParallax";
import { MotionReveal } from "@/components/animations/MotionReveal";
import {
  Heart,
  MessageCircle,
  Users,
  Flame,
  BookOpen,
  HandHeart,
} from "lucide-react";

const BONUS_FEATURES = [
  {
    icon: Flame,
    title: "Streak Tracking",
    desc: "Members track their days of freedom and celebrate milestones together.",
    video: "/assets/videos/anchor-streak.mp4",
    poster: "/assets/videos/anchor-streak.jpg",
  },
  {
    icon: BookOpen,
    title: "Daily Devotional",
    desc: "A new verse every morning to strengthen their resolve and start the day grounded.",
    video: "/assets/videos/anchor-prayer.mp4",
    poster: "/assets/videos/anchor-prayer.jpg",
  },
  {
    icon: HandHeart,
    title: "Community Posts",
    desc: "Members create community posts including questions, testimonies, and support.",
    video: "/assets/videos/anchor-community.mp4",
    poster: "/assets/videos/anchor-community.jpg",
  },
];

export function HowItWorksSection() {
  return (
    <section className="px-6 py-20">
      <MotionParallax range={25}>
        <div className="mx-auto max-w-5xl">
          <MotionReveal direction="up">
            <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-white">
              What is Anchor?
            </h2>
          </MotionReveal>
          <MotionReveal direction="up" delay={50}>
            <p className="mb-16 text-center text-lg text-white/70 max-w-2xl mx-auto">
              An anonymous community inside your church where people can reach
              out the moment they&apos;re struggling.
            </p>
          </MotionReveal>

          <div className="space-y-20">
            <MotionReveal direction="up">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="flex-shrink-0 w-[200px] md:w-[240px]">
                  <PhoneMockup
                    video="/assets/videos/anchor-sos.mp4"
                    poster="/assets/videos/anchor-sos.jpg"
                    alt="Anonymous reach-out"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white mb-4 mx-auto lg:mx-0">
                    1
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <Heart className="w-7 h-7 text-white" />
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                      They reach out. Anonymously.
                    </h3>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed">
                    When someone is struggling — in temptation, after a fall, or
                    just carrying the weight — they can send an anonymous
                    reach-out to your community with one tap. No name. No
                    identity. Just an honest cry for help.
                  </p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={50}>
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
                <div className="flex-shrink-0 w-[200px] md:w-[240px]">
                  <PhoneMockup
                    video="/assets/videos/anchor-encouragement.mp4"
                    poster="/assets/videos/anchor-encouragement.jpg"
                    alt="Community encouragement"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white mb-4 mx-auto lg:mx-0">
                    2
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <MessageCircle className="w-7 h-7 text-white" />
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                      The community responds.
                    </h3>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Others in your church respond with scripture, prayer, and
                    encouragement. The original user is pulled out of isolation
                    by their peers, everyone stays anonymous.
                  </p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal direction="up" delay={100}>
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="flex-shrink-0 w-[200px] md:w-[240px]">
                  <PhoneMockup
                    video="/assets/videos/anchor-messages.mp4"
                    poster="/assets/videos/anchor-messages.jpg"
                    alt="Community accountability"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white mb-4 mx-auto lg:mx-0">
                    3
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <Users className="w-7 h-7 text-white" />
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                      Deeper accountability forms.
                    </h3>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Users can opt to continue the conversation with those who
                    encouraged them, and also invite users to be their
                    accountability partners. All without ever losing the
                    anonymity that made it safe to start.
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Bonus features — horizontal scroll */}
          <MotionReveal direction="up" delay={150}>
            <div className="mt-20 border-t border-white/15 pt-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-8 text-center">
                Also included
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {BONUS_FEATURES.map((feature, i) => (
                  <div
                    key={feature.title}
                    className={`flex flex-col items-center ${
                      i === BONUS_FEATURES.length - 1
                        ? "col-span-2 md:col-span-1"
                        : ""
                    }`}
                  >
                    {/* Phone-shaped image frame */}
                    <div
                      className="w-[150px] overflow-hidden rounded-[2.25rem] border-2 border-white/20 shadow-xl"
                      style={{ aspectRatio: "9 / 19.5" }}
                    >
                      <Image
                        src={feature.poster}
                        alt={feature.title}
                        width={200}
                        height={433}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 w-[250px] text-center">
                      <div className="flex items-center justify-center gap-2 mb-1.5">
                        <feature.icon className="w-4 h-4 text-white/60 flex-shrink-0" />
                        <p className="text-white font-semibold text-s">
                          {feature.title}
                        </p>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </MotionParallax>
    </section>
  );
}

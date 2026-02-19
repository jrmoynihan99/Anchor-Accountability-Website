"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { CheckCircle } from "lucide-react";

export default function CommunityRequest() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/community-request", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSent(true);
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#CBAD8D] min-h-screen font-sans">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-2xl">
          {!sent ? (
            <>
              <MotionReveal direction="up">
                <h1 className="text-4xl font-bold text-white text-center mb-6">
                  Reach Out to Learn More!
                </h1>
              </MotionReveal>

              <MotionReveal direction="up" delay={100}>
                <p className="text-white/80 text-center mb-12">
                  Curious to learn more, or ready to set up your own private
                  instance of Anchor? Shoot me an email and I'll reply as soon
                  as possible! Grateful to have you here.
                </p>
              </MotionReveal>

              <MotionReveal direction="up" delay={150}>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white/10 p-8 rounded-3xl border border-white/20"
                >
                  <input
                    name="name"
                    placeholder="Your Name / Organization Name"
                    required
                    className="w-full rounded-xl bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-xl bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell me about your church or organization..."
                    required
                    rows={5}
                    className="w-full rounded-xl bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="cursor-pointer w-full rounded-full bg-white px-6 py-4 font-semibold text-[#3A2F25] transition hover:bg-white/90 hover:scale-102 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Request"}
                  </button>
                </form>
              </MotionReveal>
            </>
          ) : (
            <MotionReveal direction="up">
              <div className="text-center flex flex-col items-center">
                <CheckCircle className="w-20 h-20 text-white mb-6" />

                <h2 className="text-3xl font-bold text-white mb-4">
                  Request Sent
                </h2>

                <p className="text-white/80 mb-8 max-w-md">
                  Thanks for reaching out. I'll be in touch as soon as possible!
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="cursor-pointer rounded-full border border-white/70 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Go Back
                </button>
              </div>
            </MotionReveal>
          )}
          <button
            onClick={() => router.back()}
            className="mt-8 cursor-pointer inline-flex items-center justify-center rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/30 transition"
          >
            &larr; Back
          </button>
        </div>
      </section>
    </div>
  );
}

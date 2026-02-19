"use client";
import Link from "next/link";
import { MotionReveal } from "@/components/animations/MotionReveal";

export function ChurchesFooter() {
  return (
    <footer className="bg-white/10 border-t border-white/20 px-6 py-8">
      <MotionReveal direction="up">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center text-sm text-white/60">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="hover:text-white/90 transition">
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white/90 transition"
            >
              Privacy Policy
            </Link>
            <Link href="/support" className="hover:text-white/90 transition">
              Support
            </Link>
          </div>
          <p>Contact: jrmoynihan99@gmail.com</p>
          <p className="text-white/40">
            © 2026 Anchor Accountability. All rights reserved.
          </p>
        </div>
      </MotionReveal>
    </footer>
  );
}

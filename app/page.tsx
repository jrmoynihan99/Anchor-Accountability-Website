import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#CBAD8D] font-sans">
      <main className="flex flex-col items-center justify-center gap-8 px-8 text-center">
        <Image
          src="/icon.png"
          alt="Anchor logo"
          width={120}
          height={120}
          priority
          className="rounded-3xl shadow-lg"
        />

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Anchor</h1>
          <p className="text-xl text-white/90">Fight Lust Together</p>
          <p className="mt-4 max-w-md text-lg text-white/70">
            An anonymous accountability app that helps you fight temptation.
          </p>

          {/* Action buttons */}
          <div className="mt-4 flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
            {/* Primary */}
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#3A2F25] shadow-lg transition hover:bg-white/90"
            >
              Download
            </Link>

            {/* Secondary */}
            <a
              href="https://admin.anchoraccountability.com"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white/10"
            >
              Go to Admin
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/60">
          <Link href="/privacy-policy" className="hover:text-white/90">
            Privacy Policy
          </Link>
          <Link href="/support" className="hover:text-white/90">
            Support
          </Link>
        </div>
        <p className="mt-4 text-sm text-white/50">
          Contact: jrmoynihan99@gmail.com
        </p>
      </main>
    </div>
  );
}

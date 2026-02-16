import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { DownloadQRCodes } from "./DownloadQRCodes";
import { RedirectOnMount } from "./RedirectOnMount";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/anchor-fight-lust-together/id6752869901";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.jrmoynihan99.anchor";

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";

  const org = typeof params.org === "string" ? params.org : "";

  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent);

  // ✅ Android auto-redirect (preserves referrer param)
  let androidRedirectUrl = "";
  if (isAndroid) {
    androidRedirectUrl = org
      ? `${PLAY_STORE_URL}&referrer=org=${encodeURIComponent(org)}`
      : PLAY_STORE_URL;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#CBAD8D] p-4">
      {/* ✅ Only Android auto-redirects */}
      {androidRedirectUrl && <RedirectOnMount url={androidRedirectUrl} />}

      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Image
            src="/icon.png"
            alt="Anchor logo"
            width={80}
            height={80}
            priority
            className="rounded-2xl shadow-md"
          />
          <h1 className="text-3xl font-bold text-gray-900">Download Anchor</h1>

          {!isIOS && !isAndroid && (
            <p className="text-gray-600">
              Scan a QR code with your phone to download.
            </p>
          )}
        </div>

        {/* ✅ iOS: DO NOT AUTO REDIRECT */}
        {isIOS ? (
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition w-full"
          >
            Download on the App Store
          </a>
        ) : isAndroid ? (
          <a
            href={androidRedirectUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#CBAD8D] text-white px-6 py-3 text-sm font-semibold hover:bg-[#B89D7D] transition w-full"
          >
            Get it on Google Play
          </a>
        ) : (
          <DownloadQRCodes
            appStoreUrl={APP_STORE_URL}
            playStoreUrl={PLAY_STORE_URL}
          />
        )}
      </div>

      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/30 transition"
      >
        &larr; Back to home
      </Link>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { DownloadQRCodes, OrgQRCode } from "./DownloadQRCodes";
import { RedirectOnMount } from "./RedirectOnMount";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/anchor-fight-lust-together/id6752869901";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.jrmoynihan99.anchor";

const APP_CLIP_BASE_URL =
  "https://appclip.apple.com/id?p=com.jrmoynihan99.anchor.Clip";

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";

  const org = typeof params.org === "string" ? params.org : "";
  const displayName = typeof params.name === "string"
    ? params.name.replace(/_/g, " ")
    : "";

  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent);

  const hasOrgParams = !!org;

  // Build App Clip link with org params forwarded
  const appClipUrl = hasOrgParams
    ? `${APP_CLIP_BASE_URL}&org=${encodeURIComponent(org)}${displayName ? `&name=${encodeURIComponent(params.name as string)}` : ""}`
    : "";

  // Build the org-specific join URL (for QR code on desktop)
  const orgJoinUrl = hasOrgParams
    ? `https://anchoraccountability.com/join?org=${encodeURIComponent(org)}${params.name ? `&name=${encodeURIComponent(params.name as string)}` : ""}`
    : "";

  // Auto-redirect mobile users to their app store.
  // To DISABLE auto-redirect for no-param visits, remove the two `else if` blocks below.
  let redirectUrl = "";
  if (isAndroid && hasOrgParams) {
    redirectUrl = `${PLAY_STORE_URL}&referrer=org=${encodeURIComponent(org)}`;
  } else if (isAndroid && !hasOrgParams) {
    // Auto-redirect Android visitors (no org params) to Play Store
    redirectUrl = PLAY_STORE_URL;
  } else if (isIOS && !hasOrgParams) {
    // Auto-redirect iOS visitors (no org params) to App Store
    redirectUrl = APP_STORE_URL;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#CBAD8D] p-4">
      {redirectUrl && <RedirectOnMount url={redirectUrl} />}

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

          {isIOS && hasOrgParams ? (
            <>
              <h1 className="text-3xl font-bold text-gray-900">
                {displayName
                  ? `Join ${displayName}`
                  : "Join Your Organization"}
              </h1>
              <a
                href={appClipUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition w-full"
              >
                Get Started
              </a>
            </>
          ) : !isIOS && !isAndroid && hasOrgParams ? (
            <>
              <h1 className="text-3xl font-bold text-gray-900">
                {displayName
                  ? `Join ${displayName}`
                  : "Join Your Organization"}
              </h1>
              <p className="text-gray-600">
                Scan with your phone to get started.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-900">
                Download Anchor
              </h1>

              {!isIOS && !isAndroid && (
                <p className="text-gray-600">
                  Scan a QR code with your phone to download.
                </p>
              )}
            </>
          )}
        </div>

        {/* Non-org iOS flow, Android, and Desktop */}
        {isIOS && hasOrgParams ? null : isIOS ? (
          <>
            <a
              href={APP_STORE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition w-full"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Get on the App Store
            </a>
            <p className="text-gray-500 text-xs mt-2">
              Joining through a church or organization? Use your
              organization&apos;s unique link to get automatically set up on
              download. You can also join manually with your organization&apos;s
              pin during account creation.
            </p>
          </>
        ) : isAndroid ? (
          <>
            <a
              href={PLAY_STORE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#CBAD8D] text-white px-6 py-3 text-sm font-semibold hover:bg-[#B89D7D] transition w-full"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.523 2.34l1.228-2.204a.508.508 0 1 0-.89-.496l-1.26 2.266a7.71 7.71 0 0 0-3.1-.635 7.71 7.71 0 0 0-3.1.635L9.14-.36a.508.508 0 0 0-.89.496L9.477 2.34A7.369 7.369 0 0 0 5.5 8.576h12a7.369 7.369 0 0 0-3.977-6.236zM9.5 5.576a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm5 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM5.5 9.576v8a1.5 1.5 0 0 0 1.5 1.5h1v2.5a1.5 1.5 0 1 0 3 0v-2.5h2v2.5a1.5 1.5 0 1 0 3 0v-2.5h1a1.5 1.5 0 0 0 1.5-1.5v-8h-13zM3.5 9.576a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 1 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5zm17 0a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 1 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5z" />
              </svg>
              Get on Google Play
            </a>
            <p className="text-gray-500 text-xs mt-2">
              Joining through a church or organization? Use your
              organization&apos;s unique link to get automatically set up on
              download. You can also join manually with your organization&apos;s
              pin during account creation.
            </p>
          </>
        ) : hasOrgParams ? (
          <OrgQRCode url={orgJoinUrl} />
        ) : (
          <>
            <DownloadQRCodes
              appStoreUrl={APP_STORE_URL}
              playStoreUrl={PLAY_STORE_URL}
            />
            <p className="text-gray-500 text-xs mt-4">
              Joining through a church or organization? Use your
              organization&apos;s unique link to get automatically set up on
              download. You can also join manually with your organization&apos;s
              pin during account creation.
            </p>
          </>
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

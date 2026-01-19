import Image from "next/image";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  // ✅ unwrap async searchParams
  const params = await searchParams;

  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";

  const org = typeof params.org === "string" ? params.org : "public";

  const isAndroid = /Android/i.test(userAgent);

  if (isAndroid) {
    const playStoreUrl = `https://play.google.com/store/apps/details?id=com.jrmoynihan99.anchor&referrer=org=${encodeURIComponent(
      org,
    )}`;
    redirect(playStoreUrl);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#CBAD8D] p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="flex flex-col items-center gap-4 mb-6">
          <Image
            src="/icon.png"
            alt="Anchor logo"
            width={80}
            height={80}
            priority
            className="rounded-2xl shadow-md"
          />

          <h1 className="text-3xl font-bold text-gray-900">
            Anchor | Quit Porn Together
          </h1>
        </div>

        <p className="text-gray-700 mb-6 font-medium">
          {org !== "public" ? (
            <>
              Joining <span className="text-[#CBAD8D] font-bold">{org}</span>
            </>
          ) : (
            "Join the Anchor community"
          )}
        </p>

        <div className="space-y-3">
          <a
            href="https://apps.apple.com/app/anchor-quit-porn-together/id6752869901"
            className="block w-full bg-black text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Download on App Store
          </a>

          <a
            href={`https://play.google.com/store/apps/details?id=com.jrmoynihan99.anchor&referrer=org=${encodeURIComponent(
              org,
            )}`}
            className="block w-full bg-[#CBAD8D] text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-[#B89D7D] transition"
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </div>
  );
}

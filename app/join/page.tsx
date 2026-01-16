import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";

  const org =
    typeof searchParams.org === "string" ? searchParams.org : "public";

  const isAndroid = /Android/i.test(userAgent);

  if (isAndroid) {
    const playStoreUrl = `https://play.google.com/store/apps/details?id=com.jrmoynihan99.anchor&referrer=org=${encodeURIComponent(
      org
    )}`;
    redirect(playStoreUrl);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Join Anchor</h1>

        <p className="text-gray-600 mb-6">
          {org !== "public" ? `Joining ${org}` : "Join the Anchor community"}
        </p>

        <div className="space-y-4">
          <a
            href="https://apps.apple.com/app/idYOUR_APP_ID"
            className="block w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Download on App Store
          </a>

          <a
            href={`https://play.google.com/store/apps/details?id=com.jrmoynihan99.anchor&referrer=org=${encodeURIComponent(
              org
            )}`}
            className="block w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Get it on Google Play
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Scan the QR code with your phone to get started
        </p>
      </div>
    </div>
  );
}

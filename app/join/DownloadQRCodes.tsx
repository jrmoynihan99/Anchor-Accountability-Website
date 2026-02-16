"use client";

import { QRCodeSVG } from "qrcode.react";

function AppleIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M17.523 2.34l1.228-2.204a.508.508 0 1 0-.89-.496l-1.26 2.266a7.71 7.71 0 0 0-3.1-.635 7.71 7.71 0 0 0-3.1.635L9.14-.36a.508.508 0 0 0-.89.496L9.477 2.34A7.369 7.369 0 0 0 5.5 8.576h12a7.369 7.369 0 0 0-3.977-6.236zM9.5 5.576a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm5 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM5.5 9.576v8a1.5 1.5 0 0 0 1.5 1.5h1v2.5a1.5 1.5 0 1 0 3 0v-2.5h2v2.5a1.5 1.5 0 1 0 3 0v-2.5h1a1.5 1.5 0 0 0 1.5-1.5v-8h-13zM3.5 9.576a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 1 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5zm17 0a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 1 0 3 0v-5a1.5 1.5 0 0 0-1.5-1.5z" />
    </svg>
  );
}

export function DownloadQRCodes({
  appStoreUrl,
  playStoreUrl,
}: {
  appStoreUrl: string;
  playStoreUrl: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-xl bg-white p-3 shadow-sm border border-gray-100">
          <QRCodeSVG value={appStoreUrl} size={160} />
        </div>
        <a
          href={appStoreUrl}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition w-full"
        >
          <AppleIcon />
          App Store
        </a>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="rounded-xl bg-white p-3 shadow-sm border border-gray-100">
          <QRCodeSVG value={playStoreUrl} size={160} />
        </div>
        <a
          href={playStoreUrl}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#CBAD8D] text-white px-6 py-3 text-sm font-semibold hover:bg-[#B89D7D] transition w-full"
        >
          <AndroidIcon />
          Google Play
        </a>
      </div>
    </div>
  );
}

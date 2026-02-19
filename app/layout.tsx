import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#CBAD8D",
};

export const metadata: Metadata = {
  title: "Anchor Accountability",
  description: "Break free from porn with anonymous accountability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Disable browser scroll restoration so back/forward nav always loads at top */}
        <script
          dangerouslySetInnerHTML={{
            __html: "history.scrollRestoration = 'manual'",
          }}
        />
        {children}
      </body>
    </html>
  );
}

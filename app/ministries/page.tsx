"use client";
import { LandingPage } from "@/components/landing/LandingPage";
import { ministriesContent } from "@/components/landing/content/ministries";

export default function MinistriesPage() {
  return <LandingPage content={ministriesContent} />;
}

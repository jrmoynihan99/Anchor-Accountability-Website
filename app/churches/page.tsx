"use client";
import { LandingPage } from "@/components/landing/LandingPage";
import { churchesContent } from "@/components/landing/content/churches";

export default function ChurchesPage() {
  return <LandingPage content={churchesContent} />;
}

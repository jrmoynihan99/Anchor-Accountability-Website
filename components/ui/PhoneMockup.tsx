"use client";
import { useEffect, useRef } from "react";

interface PhoneMockupProps {
  video: string;
  poster: string;
  alt?: string;
  className?: string;
}

export function PhoneMockup({ video, poster, alt, className = "" }: PhoneMockupProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    const vid = videoRef.current;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(vid);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`relative rounded-[2.5rem] overflow-hidden bg-white/5 shadow-2xl border-2 border-white/20 p-1 ${className}`}
      style={{ aspectRatio: "9 / 19.5" }}
    >
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-[2.25rem]"
        aria-label={alt}
      />
    </div>
  );
}

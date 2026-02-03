"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PHONES = [
  {
    image: "/assets/videos/anchor-streak.jpg",
    alt: "Anchor SOS feature",
    x: -200,
    y: 20,
  },
  {
    image: "/assets/videos/anchor-home.jpg",
    alt: "Anchor encouragement",
    x: 0,
    y: 0,
  },
  {
    image: "/assets/videos/anchor-messages.jpg",
    alt: "Anchor community",
    x: 200,
    y: 35,
  },
];

export function PhoneStack() {
  return (
    <motion.div
      className="hidden lg:block relative flex-shrink-0"
      style={{ width: "620px", height: "520px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {PHONES.map((phone, index) => (
        <div
          key={index}
          className="absolute rounded-[2.5rem] overflow-hidden bg-white/5 shadow-2xl border-2 border-white/20 p-1"
          style={{
            width: "230px",
            aspectRatio: "9/19.5",
            left: "50%",
            top: "50%",
            marginLeft: "-115px",
            marginTop: "-249px",
            transform: `translateX(${phone.x}px) translateY(${phone.y}px)`,
            zIndex: index === 1 ? 10 : 1, // Center phone on top
          }}
        >
          <Image
            src={phone.image}
            alt={phone.alt}
            fill
            className="object-cover rounded-[2.25rem]"
            sizes="230px"
          />
        </div>
      ))}
    </motion.div>
  );
}

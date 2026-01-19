import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#CBAD8D] font-sans">
      <main className="flex flex-col items-center justify-center gap-8 px-8 text-center">
        <Image
          src="/icon.png"
          alt="Anchor logo"
          width={120}
          height={120}
          priority
          className="rounded-3xl shadow-lg"
        />
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Anchor</h1>
          <p className="text-xl text-white/90">Quit Porn Together</p>
          <p className="mt-4 text-lg text-white/70">
            Site under construction...
          </p>
        </div>
      </main>
    </div>
  );
}

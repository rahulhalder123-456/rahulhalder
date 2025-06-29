
'use client';

import dynamic from 'next/dynamic';

const HackerSphere = dynamic(() => import('@/components/HackerSphere'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 opacity-30" />,
});

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[100dvh] h-full overflow-hidden">
      <HackerSphere />
      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-text-gradient bg-300% ">
            Rahul Halder
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Hacker, Full-Stack Developer & AI Enthusiast.
            <br />
            Crafting secure, scalable, and intelligent web solutions.
          </p>
        </div>
        <div className="mt-8 flex justify-center items-center gap-2 animate-pulse">
            <span className="font-code text-accent">[</span>
            <span className="font-code text-sm text-foreground">
                SCROLL TO EXPLORE
            </span>
            <span className="font-code text-accent">]</span>
        </div>
      </div>
    </section>
  );
}

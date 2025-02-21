"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { SparklesCore } from "./ui/sparkles";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={2}
          className="size-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="z-10 mb-10 flex items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-default hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            ✨ The Ultimate Programming Font
          </AnimatedShinyText>
        </div>
      </div>

      <h1 className="z-10 mb-6 bg-gradient-to-r from-white to-gray-800 bg-clip-text text-center text-9xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-gray-400">
        Block Mono
      </h1>
      <p className="z-10 mb-12 max-w-2xl text-center text-xl leading-relaxed text-neutral-600/90 dark:text-neutral-300/95">
        Tall, elegant, and exceptionally readable, Block Mono is the programming
        font designed to make every keystroke a masterpiece. Your code will
        never look better.
      </p>
      <div className="z-10 flex items-center gap-4">
        <Button
          asChild
          variant="outline"
          className="text-white hover:text-white"
        >
          <Link href="#try-font">Try Font Now</Link>
        </Button>
        <Button asChild variant="default">
          <Link href="https://github.com/tyrailleverett/blockmonofont">
            Download Now
          </Link>
        </Button>
      </div>
    </section>
  );
}

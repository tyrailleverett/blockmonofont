import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LampContainer } from "./ui/lamp";

export function CTASection() {
  return (
    <section className="w-full py-24">
      <LampContainer>
        <div />
      </LampContainer>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to elevate your coding experience?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
            Join developers worldwide who trust Block Mono for their coding
            needs. Download now and experience the difference!
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white px-8 text-black hover:bg-zinc-200"
              asChild
            >
              <Link href="https://github.com/tyrailleverett/block-mono/releases/latest">
                Download Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

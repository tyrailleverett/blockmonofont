import {
  BoxIcon,
  CodeIcon,
  HeartIcon,
  LayersIcon,
  Settings2Icon,
  TerminalIcon,
  TextCursorInput,
  TypeOutline
} from "lucide-react";

export function Features() {
  return (
    <section className="w-full bg-black py-24 text-white" id="features">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Designed for Modern Development
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            A programming font that combines beauty with functionality, making
            your code more readable and your workspace more efficient.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Built for developers */}
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="mb-4">
              <TerminalIcon className="size-8" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Built for developers</h3>
            <p className="text-zinc-400">
              Crafted specifically for code editors, terminals, and development
              environments.
            </p>
          </div>

          {/* Font Ligatures */}
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="mb-4">
              <CodeIcon className="size-8" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Font Ligatures</h3>
            <p className="text-zinc-400">
              Beautiful ligatures for coding symbols, making your code more
              readable and elegant.
            </p>
          </div>

          {/* Variable Weights */}
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="mb-4">
              <LayersIcon className="size-8" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Variable weights</h3>
            <p className="text-zinc-400">
              Multiple font weights ranging from Thin to Bold for perfect
              readability in any context.
            </p>
          </div>

          {/* Enhanced Height */}
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="mb-4">
              <TypeOutline className="size-8" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Enhanced Height</h3>
            <p className="text-zinc-400">
              Meticulously crafted vertical proportions that maximize legibility
              while making efficient use of your display space.
            </p>
          </div>

          {/* Nerd Font Support */}
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="mb-4">
              <BoxIcon className="size-8" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Nerd Font Support</h3>
            <p className="text-zinc-400">
              Complete with developer icons and symbols from the Nerd Fonts
              collection.
            </p>
          </div>

          {/* Screen Optimized */}
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="mb-4">
              <Settings2Icon className="size-8" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Screen Optimized</h3>
            <p className="text-zinc-400">
              Pixel-perfect rendering on all screen sizes and resolutions.
            </p>
          </div>

          {/* Multi-language */}
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="mb-4">
              <TextCursorInput className="size-8" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Multi-language</h3>
            <p className="text-zinc-400">
              Support for multiple programming languages and character sets.
            </p>
          </div>

          {/* Community Loved */}
          <div className="rounded-xl border border-zinc-800 p-6">
            <div className="mb-4">
              <HeartIcon className="size-8" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Community Loved</h3>
            <p className="text-zinc-400">
              Backed by a growing community of developers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

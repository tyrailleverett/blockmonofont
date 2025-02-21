"use client";

import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from "react-compare-slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const fonts = [
  {
    name: "Cascadia Code",
    image: "https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/cascadia.png"
  },
  {
    name: "Fira Code",
    image: "https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/fira.png"
  },
  {
    name: "Geist Mono",
    image: "https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/geist.png"
  },
  {
    name: "Inconsolata",
    image: "https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/inconsolata.png"
  },
  {
    name: "Input Mono",
    image: "https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/input.png"
  },
  {
    name: "Iosevka",
    image: "https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/iosevka.png"
  },
  {
    name: "JetBrains Mono",
    image: "https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/jetbrains.png"
  },
  {
    name: "Monaspace Argon",
    image: "https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/monaspace.png"
  },
  {
    name: "Victor Mono",
    image: "https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/victor.png"
  }
];

export function CompareSection() {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            See the Difference
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
            Compare Block Mono with other popular programming fonts. Notice the
            improved readability and cleaner character shapes.
          </p>

          <div className="inline-block">
            <Select
              value={selectedFont.name}
              onValueChange={(value) => {
                const font = fonts.find((f) => f.name === value);
                if (font) setSelectedFont(font);
              }}
            >
              <SelectTrigger className="w-[280px] border-zinc-800 bg-zinc-900 text-white">
                <SelectValue placeholder="Select a font to compare" />
              </SelectTrigger>
              <SelectContent className="border-zinc-800 bg-zinc-900">
                {fonts.map((font) => (
                  <SelectItem
                    key={font.name}
                    value={font.name}
                    className="text-white hover:bg-zinc-800 focus:bg-zinc-800 focus:text-white"
                  >
                    {font.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative w-full">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src={selectedFont.image}
                  alt={`${selectedFont.name} font example`}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://pub-03f93965ccdc4f768095ee584cbd8287.r2.dev/block.png"
                  alt="Block Mono font example"
                />
              }
              className="rounded-lg"
              position={75}
              style={{
                height: "100%"
              }}
            />
          </div>
          <div className="mt-4 flex justify-between text-sm text-zinc-400">
            <span>{selectedFont.name}</span>
            <span>Block Mono</span>
          </div>
          <p className="mt-2 text-center text-sm text-zinc-400">
            All screenshots are with 16px with the regular font weight
          </p>
        </div>
      </div>
    </section>
  );
}

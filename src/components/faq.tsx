"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-24 text-white" id="faq">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto max-w-3xl">
          {faqItems.map((item, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="border-b border-zinc-800 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-medium">{item.question}</span>
                <ChevronDown
                  className={`size-5 text-zinc-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-zinc-400">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { LANGUAGE_OPTIONS } from "@/constants/editor-options";

export function TryFont() {
  const [language, setLanguage] = useState("typescript");
  const [code, setCode] = useState<string>(
    LANGUAGE_OPTIONS.typescript.defaultCode
  );

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    setCode(
      LANGUAGE_OPTIONS[value as keyof typeof LANGUAGE_OPTIONS].defaultCode
    );
  };

  return (
    <section className="w-full py-24" id="try-font">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Try Block Mono Now</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Experience the clarity and beauty of Block Mono in your code. Edit
            the code below to see how it feels.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center justify-end gap-4">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px] border-zinc-700 bg-zinc-800">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(LANGUAGE_OPTIONS).map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-800">
            <Editor
              height="400px"
              language={language}
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
              options={{
                fontFamily: "Block Mono",
                fontSize: 16,
                lineHeight: 1.6,
                fontLigatures: true,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                padding: { top: 20 },
                renderLineHighlight: "none"
              }}
            />
          </div>

          <p className="mt-4 text-center text-sm text-zinc-400">
            Previewed in 16px with the regular font weight.
          </p>
        </div>
      </div>
    </section>
  );
}

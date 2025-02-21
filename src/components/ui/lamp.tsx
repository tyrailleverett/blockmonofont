"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export function LampContainer({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-64 flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative isolate z-0 flex  w-full flex-1 items-center justify-center ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 0.8, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`
          }}
          className="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-zinc-200 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 0.8, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`
          }}
          className="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-zinc-200 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-black opacity-5 blur-xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-black opacity-40 blur-2xl"
         />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-28 bg-zinc-300 opacity-50"
         />

        <div className="absolute inset-auto z-40 h-0.5 w-full -translate-y-[12.5rem] bg-black" />
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}

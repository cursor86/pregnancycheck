"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import { assetPath } from "@/lib/basePath";
import Visualizer3D from "./Visualizer3D";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blush/50 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-sage/50 blur-3xl" />

      <Image
        src={assetPath("/images/decor/marigold.png")}
        alt=""
        width={56}
        height={56}
        aria-hidden
        className="animate-float-slow pointer-events-none absolute left-[6%] top-[14%] hidden opacity-80 drop-shadow-md sm:block"
      />
      <Image
        src={assetPath("/images/decor/daisy.png")}
        alt=""
        width={40}
        height={40}
        aria-hidden
        className="animate-float pointer-events-none absolute right-[8%] top-[8%] hidden opacity-80 drop-shadow-md md:block"
      />
      <Image
        src={assetPath("/images/decor/strawberry.png")}
        alt=""
        width={46}
        height={46}
        aria-hidden
        className="animate-float-slow pointer-events-none absolute left-[10%] bottom-[10%] hidden opacity-85 drop-shadow-md lg:block"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate/80">
            <ShieldCheck size={16} className="text-sage-deep" />
            Zero tracking &middot; No account required
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-balance text-4xl font-medium leading-[1.1] text-slate sm:text-5xl lg:text-6xl">
            Your entire pregnancy journey.{" "}
            <span className="italic text-accent-deep">Simplified</span>, tracked, and kept
            private.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-slate/70">
            Clinically-informed due date, ovulation, and symptom calculators alongside
            live kick counters and contraction timers — one calm dashboard, nothing sent
            to a server, nothing sold to advertisers.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#hub"
              className="rounded-full bg-accent-deep px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent-deep/30 transition hover:-translate-y-0.5 hover:bg-accent hover:shadow-xl"
            >
              Launch Interactive Dashboard
            </a>
            <a
              href="#visualizer"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-slate transition hover:-translate-y-0.5"
            >
              <Sparkles size={18} className="text-accent-deep" />
              Explore 3D Visualizer
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate/60">
            <span>100% open source</span>
            <span>Clinical-grade formulas</span>
            <span>No ads, no ad-tracking</span>
          </div>
        </motion.div>

        <motion.div
          id="visualizer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <Visualizer3D label="Week-by-week baby bump model" variant="bump" />
        </motion.div>
      </div>
    </section>
  );
}

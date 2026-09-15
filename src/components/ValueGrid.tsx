"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/basePath";
import { EyeOff, GitFork, LayoutGrid, Microscope } from "lucide-react";

const VALUES = [
  {
    icon: GitFork,
    title: "100% Open Source & Private",
    description: "Every calculation runs in your browser. No accounts, no servers, no data collection.",
  },
  {
    icon: Microscope,
    title: "Clinical-Grade Algorithms",
    description: "Built on Naegele's rule and IOM weight-gain guidelines used by healthcare providers.",
  },
  {
    icon: LayoutGrid,
    title: "All-In-One Dashboard",
    description: "Due dates, ovulation, symptoms, growth, kicks, and contractions — replaces five separate apps.",
  },
  {
    icon: EyeOff,
    title: "Zero Ad Tracking",
    description: "No third-party trackers, no ad networks, no selling your most sensitive data.",
  },
];

export default function ValueGrid() {
  return (
    <section id="why-us" className="relative overflow-hidden px-6 py-20">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[36rem] w-[36rem] -translate-y-1/2 opacity-[0.14] lg:block"
        aria-hidden
      >
        <Image
          src={assetPath("/images/babycare-collage.png")}
          alt=""
          fill
          sizes="576px"
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-slate sm:text-4xl">
            Why replace five apps with one?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-deep text-white">
                <v.icon size={20} />
              </div>
              <h3 className="font-semibold text-slate">{v.title}</h3>
              <p className="mt-1.5 text-sm text-slate/60">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

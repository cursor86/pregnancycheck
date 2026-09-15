"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/basePath";

/**
 * Placeholder frame for an interactive 3D asset (e.g. a Spline scene or a
 * Three.js canvas). Currently hosts a static illustration — swap the
 * <Image> for a real <Spline scene="..." /> or <Canvas> element when a 3D
 * asset pipeline is wired up; the outer glass frame, floating animation,
 * and sizing are ready to host either.
 */
export default function Visualizer3D({
  label = "Interactive 3D preview",
}: {
  label?: string;
  variant?: "bump" | "fruit";
}) {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blush via-cream to-sage opacity-80 blur-2xl" />
      <motion.div
        className="glass-strong relative h-full w-full rounded-[2.5rem] shadow-xl shadow-accent-deep/10 flex flex-col items-center justify-center overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: [0, 8, 0, -8, 0], rotateX: [0, -4, 0, 4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="animate-float relative h-[88%] w-[88%]"
          whileHover={{ scale: 1.04 }}
        >
          <Image
            src={assetPath("/images/hero-illustration-v2.jpg")}
            alt="Watercolor illustration of a pregnant woman surrounded by flowers and hearts"
            fill
            sizes="(max-width: 768px) 320px, 400px"
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>

        <div className="absolute bottom-6 flex items-center gap-2 rounded-full bg-panel/70 px-4 py-1.5 text-xs font-medium text-ink/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-deep animate-pulse" />
          {label}
        </div>

        <div className="absolute top-8 left-8 h-3 w-3 rounded-full bg-sage-deep/60 animate-float-slow" />
        <div className="absolute top-16 right-10 h-2 w-2 rounded-full bg-blush-deep/70 animate-float" />
        <div className="absolute bottom-20 right-16 h-4 w-4 rounded-full bg-accent/40 animate-float-slow" />
      </motion.div>
    </div>
  );
}

"use client";

import { Heart } from "lucide-react";

const LINKS = [
  { href: "#hub", label: "Tools" },
  { href: "#why-us", label: "Why Us" },
  { href: "#newsletter", label: "Newsletter" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 px-6 pt-5">
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-lg shadow-accent-deep/5">
        <a href="#top" className="flex items-center gap-2 font-semibold text-slate">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-deep text-white">
            <Heart size={16} fill="currentColor" />
          </span>
          <span className="font-[family-name:var(--font-heading)]">Am I Pregnant</span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate/70 sm:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-accent-deep">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#hub"
          className="rounded-full bg-accent-deep px-4 py-2 text-sm font-semibold text-white shadow-md shadow-accent-deep/30 transition hover:-translate-y-0.5 hover:bg-accent"
        >
          Launch Dashboard
        </a>
      </nav>
    </header>
  );
}

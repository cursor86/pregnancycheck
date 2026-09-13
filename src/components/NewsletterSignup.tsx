"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  return (
    <section className="px-6 py-20">
      <div className="glass-strong mx-auto max-w-3xl rounded-[2.5rem] p-10 text-center shadow-xl shadow-accent-deep/10 sm:p-14">
        <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-deep text-white">
          <Mail size={22} />
        </div>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-slate sm:text-3xl">
          Get Weekly 3D Development Reports
        </h2>
        <p className="mx-auto mt-3 max-w-md text-slate/60">
          A friendly weekly note on your baby&apos;s development, milestones, and new
          calculator features. No spam, unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-sage/70 px-5 py-3 font-medium text-slate">
            <CheckCircle2 size={18} className="text-sage-deep" />
            You&apos;re on the list — check your inbox soon!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
            noValidate
          >
            <div className="flex-1 text-left">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="you@example.com"
                aria-invalid={!!error}
                className={`w-full rounded-full border bg-white/80 px-5 py-3 text-slate outline-none ring-accent-deep/40 transition focus:ring-2 ${
                  error ? "border-accent-deep" : "border-white/60"
                }`}
              />
              {error && <p className="mt-1.5 ml-2 text-xs text-accent-deep">{error}</p>}
            </div>
            <button
              type="submit"
              className="rounded-full bg-accent-deep px-6 py-3 font-semibold text-white shadow-lg shadow-accent-deep/30 transition hover:-translate-y-0.5 hover:bg-accent"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

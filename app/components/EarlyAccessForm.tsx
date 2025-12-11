"use client";

import { FormEvent, useState } from "react";

export function EarlyAccessForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setSuccess(
        "Thanks for your interest! We’ve received your details and will get back to you."
      );
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (err: any) {
      console.error(err);
      setError(
        err?.message ||
          "Something went wrong while submitting. Please try again or email contact@qybercore.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 grid gap-4 md:grid-cols-2 md:gap-6"
    >
      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-200">
          Name <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-200">
          Work Email <span className="text-rose-400">*</span>
        </label>
        <input
          type="email"
          required
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-slate-200">
          Company / Org
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
          placeholder="Where do you run AI workloads?"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2 md:row-span-2">
        <label className="block text-xs font-medium text-slate-200">
          What are you looking to secure?
        </label>
        <textarea
          className="h-[90px] w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500"
          placeholder="Briefly describe your AI stack, use cases, or compliance needs."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className="flex flex-col gap-2 md:items-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-300"
        >
          {isSubmitting ? "Submitting…" : "Request Early Access"}
        </button>
        <p className="text-[0.65rem] text-slate-400">
          We&apos;ll only use your details to contact you about QyberCore
          early access.
        </p>
      </div>

      {success && (
        <p className="md:col-span-2 text-xs text-emerald-400">{success}</p>
      )}
      {error && (
        <p className="md:col-span-2 text-xs text-rose-400">{error}</p>
      )}
    </form>
  );
}


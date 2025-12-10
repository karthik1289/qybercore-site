"use client";

import { FormEvent } from "react";

export function EarlyAccessForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // For now, just log or later call an API / webhook
    console.log("Early access form submitted");
    alert("Thanks! We'll get back to you soon."); // optional
  }

  return (
    <form
      className="mt-6 grid gap-4 md:grid-cols-[2fr,2fr,auto]"
      onSubmit={onSubmit}
    >
      <input
        type="email"
        required
        placeholder="Work email"
        className="h-11 rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
      />

      <input
        type="text"
        placeholder="Company"
        className="h-11 rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
      />

      <button
        type="submit"
        className="h-11 rounded-lg bg-cyan-500 px-5 text-sm font-medium text-slate-950 hover:bg-cyan-400"
      >
        Request Access
      </button>
    </form>
  );
}


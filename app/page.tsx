"use client";

import React, { useState, FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  useCase: string;
};

export default function Home() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    useCase: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", company: "", useCase: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong. Email contact@qybercore.com.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-indigo-500/10" />

      {/* NAVBAR */}
      <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950 font-bold text-lg shadow-lg shadow-emerald-500/40">
              Q
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-200">QYBERCORE</div>
              <div className="text-xs text-slate-400">Quantum-Safe AI Gateway</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs md:flex">
            <a href="#why" className="text-slate-300 hover:text-emerald-400">Why QyberCore</a>
            <a href="#platform" className="text-slate-300 hover:text-emerald-400">Platform</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-emerald-400">How it works</a>
            <a href="#use-cases" className="text-slate-300 hover:text-emerald-400">Use cases</a>
            <a
              href="#early-access"
              className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/20"
            >
              Get early access
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-6 md:pt-14">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-200">
              Quantum-Safe LLM Traffic Gateway
            </div>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-slate-50 md:text-5xl">
              Secure, govern & route{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                all your AI traffic
              </span>{" "}
              with lattice-based PQC.
            </h1>

            <p className="mt-4 text-sm text-slate-300 md:text-base">
              QyberCore acts as a{" "}
              <span className="font-semibold text-emerald-300">quantum-safe, zero-trust AI gateway</span>.
              Every request is wrapped in Kyber512 + AES-256-GCM, passed through policy enforcement,
              and routed across OpenAI, Bedrock, Anthropic, or local LLMs.
            </p>

            {/* Demo vs Real SDK explanation */}
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-300">
              <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Demo vs Real SDK
              </div>
              <p>
                The browser demo shows human-readable responses + sample encrypted envelopes.
                Real integrations use Kyber512 + AES-256-GCM end-to-end — raw prompts never leave
                your infra unencrypted.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#early-access"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300"
              >
                Request early access ↗
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-200 hover:border-emerald-400/70 hover:text-emerald-200"
              >
                View architecture
              </a>
            </div>
          </div>

          {/* RIGHT SIDE ARCH DIAGRAM */}
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-xl shadow-black/40">

              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  QyberCore Data Plane
                </span>
                <span className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-emerald-200">
                  PQC Enabled
                </span>
              </div>

              {/* --- FIXED CONTAINER (NO CUTTING) --- */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950 p-4">

                {/* --- FIXED VIEWBOX DIAGRAM --- */}
                <svg
                  viewBox="0 0 620 300"
                  className="h-72 w-[620px]"
                  aria-label="QyberCore Architecture"
                >
                  <defs>
                    <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0 0 L6 3 L0 6 Z" fill="#22c55e" />
                    </marker>
                    <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0 0 L6 3 L0 6 Z" fill="#38bdf8" />
                    </marker>

                    <linearGradient id="glowGreen" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>

                    <linearGradient id="glowBlue" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>

                  {/* CLIENT APPS */}
                  <rect x="20" y="120" width="120" height="60" rx="12" fill="#020617" stroke="#1e293b" />
                  <text x="80" y="145" textAnchor="middle" fill="#e5e7eb" fontSize="12">Client Apps</text>
                  <text x="80" y="160" textAnchor="middle" fill="#9ca3af" fontSize="10">Web / Backend / Agents</text>

                  {/* CLIENT → QYBERCORE ARROW */}
                  <path
                    d="M140 150 L200 150"
                    stroke="#22c55e"
                    strokeWidth="1.8"
                    markerEnd="url(#arrowGreen)"
                  />
                  <text x="170" y="137" textAnchor="middle" fontSize="9" fill="#22c55e">
                    Kyber512 + AES-256-GCM
                  </text>

                  {/* QYBERCORE GATEWAY */}
                  <rect
                    x="200"
                    y="70"
                    width="150"
                    height="160"
                    rx="16"
                    fill="#020617"
                    stroke="url(#glowGreen)"
                    strokeWidth="1.5"
                  />
                  <text x="275" y="95" textAnchor="middle" fontSize="12" fill="#e5e7eb">
                    QyberCore Gateway
                  </text>
                  <text x="275" y="110" textAnchor="middle" fontSize="10" fill="#a5b4fc">
                    Quantum-Safe AI Router
                  </text>

                  {/* PQC TERMINATION */}
                  <rect
                    x="220"
                    y="125"
                    width="110"
                    height="36"
                    rx="8"
                    fill="#020617"
                    stroke="#22c55e"
                    strokeWidth="1"
                  />
                  <text x="275" y="146" textAnchor="middle" fontSize="10" fill="#6ee7b7">
                    PQC Termination
                  </text>

                  {/* POLICY ENGINE */}
                  <rect
                    x="220"
                    y="170"
                    width="110"
                    height="36"
                    rx="8"
                    fill="#020617"
                    stroke="#38bdf8"
                    strokeWidth="1"
                  />
                  <text x="275" y="191" textAnchor="middle" fontSize="10" fill="#e0f2fe">
                    Policy & Routing
                  </text>
                  <text x="275" y="203" textAnchor="middle" fontSize="8" fill="#93c5fd">
                    DLP · RBAC · Provider Logic
                  </text>

                  {/* ARROWS TO PROVIDERS */}
                  <path
                    d="M350 145 C400 120 430 120 460 135"
                    stroke="#38bdf8"
                    strokeWidth="1.8"
                    fill="none"
                    markerEnd="url(#arrowBlue)"
                  />
                  <path
                    d="M350 185 C400 210 430 210 460 195"
                    stroke="#38bdf8"
                    strokeWidth="1.8"
                    fill="none"
                    markerEnd="url(#arrowBlue)"
                  />

                  {/* PROVIDER: OPENAI */}
                  <rect
                    x="430"
                    y="120"
                    width="140"
                    height="45"
                    rx="10"
                    fill="#020617"
                    stroke="url(#glowBlue)"
                    strokeWidth="1.2"
                  />
                  <text x="500" y="145" textAnchor="middle" fill="#e5e7eb" fontSize="11">
                    OpenAI / Azure
                  </text>
                  <text x="500" y="158" textAnchor="middle" fill="#94a3b8" fontSize="9">
                    GPT-4.x / o-series
                  </text>

                  {/* PROVIDER: BEDROCK */}
                  <rect
                    x="430"
                    y="185"
                    width="140"
                    height="45"
                    rx="10"
                    fill="#020617"
                    stroke="url(#glowBlue)"
                    strokeWidth="1.2"
                  />
                  <text x="500" y="210" textAnchor="middle" fill="#e5e7eb" fontSize="11">
                    Bedrock / Others
                  </text>
                  <text x="500" y="223" textAnchor="middle" fill="#94a3b8" fontSize="9">
                    Claude · LLaMA · Local
                  </text>
                </svg>
              </div>

              <p className="mt-3 text-[11px] text-slate-400">
                QyberCore terminates PQC, enforces policies, routes traffic, and re-encrypts responses.
              </p>
            </div>
          </div>
        </section>

        {/* --- Remaining sections unchanged below this --- */}

        {/* WHY QYBERCORE */}
        <section id="why" className="mt-16 md:mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Why QyberCore
          </h2>

          <p className="mt-2 text-lg font-medium text-slate-50 md:text-xl">
            Enterprises are rolling out AI faster than their security teams can govern it.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-xs font-semibold text-emerald-300">
                01 · Shadow AI everywhere
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Teams call OpenAI/Claude directly from apps & notebooks. Security has no visibility.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-xs font-semibold text-emerald-300">
                02 · Sensitive data inside prompts
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Source code, PHI, finance data — all travel over classical TLS, vulnerable to
                future quantum attacks.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-xs font-semibold text-emerald-300">
                03 · No unified governance
              </div>
              <p className="mt-2 text-sm text-slate-300">
                No single point to apply policies, audit usage, or route models intelligently.
              </p>
            </div>
          </div>
        </section>

        {/* PLATFORM SECTION */}
        <section id="platform" className="mt-16 md:mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Platform
          </h2>

          <p className="mt-2 text-lg font-medium text-slate-50 md:text-xl">
            From PQC transport to full AI governance.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <h3 className="text-sm font-semibold text-emerald-300">
                Quantum-Safe Transport Layer
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                All app→gateway traffic encrypted using Kyber512 + AES-256-GCM.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <h3 className="text-sm font-semibold text-emerald-300">
                Zero-Trust AI Gateway
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                RBAC, model restrictions, quotas, redaction, and safe routing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <h3 className="text-sm font-semibold text-emerald-300">
                Multi-LLM Traffic Director
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Smart routing across OpenAI, Bedrock, Claude, or local LLMs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <h3 className="text-sm font-semibold text-emerald-300">
                Compliance, DLP & Observability
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Usage logs, anomaly detection, PII redaction, SIEM export.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="mt-16 md:mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            How it works
          </h2>

          <p className="mt-2 text-lg font-medium text-slate-50 md:text-xl">
            Lightweight SDK → Quantum-Safe Gateway → Multi-LLM routing.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-300">
              <div className="text-xs font-semibold text-emerald-300">Step 1 · Integrate SDK</div>
              <p className="mt-2">
                App fetches Kyber512 public key from <code>/v1/server-key</code> and encrypts prompts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-300">
              <div className="text-xs font-semibold text-emerald-300">Step 2 · Gateway enforces policies</div>
              <p className="mt-2">Redaction, routing, RBAC, usage checks.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-300">
              <div className="text-xs font-semibold text-emerald-300">Step 3 · Response re-encrypted</div>
              <p className="mt-2">AES-256-GCM returns encrypted responses back to the SDK.</p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section id="use-cases" className="mt-16 md:mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Early use cases
          </h2>

          <p className="mt-2 text-lg font-medium text-slate-50 md:text-xl">
            For security, platform, and regulated orgs.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-xs font-semibold text-emerald-300">Security Teams</div>
              <p className="mt-2 text-sm text-slate-300">
                Centralize all LLM access. Enforce policies. Stop data leakage.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-xs font-semibold text-emerald-300">Healthcare / FinServ</div>
              <p className="mt-2 text-sm text-slate-300">
                Prevent PHI/PII from leaving in plain text.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-xs font-semibold text-emerald-300">Internal Copilots</div>
              <p className="mt-2 text-sm text-slate-300">
                Secure copilots connected to internal knowledge + data.
              </p>
            </div>
          </div>
        </section>

        {/* EARLY ACCESS FORM */}
        <section id="early-access" className="mt-16 md:mt-20">
          <div className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Early access
              </h2>

              <p className="mt-2 text-lg font-medium text-slate-50 md:text-xl">
                We’re onboarding design partners.
              </p>

              <p className="mt-3 text-sm text-slate-300">
                Looking for security, infra, platform & AI engineering teams building internal copilots,
                customer-facing AI, or deploying LLMs in regulated environments.
              </p>

              <p className="mt-3 text-xs text-slate-400">
                Or email directly:{" "}
                <a href="mailto:contact@qybercore.com" className="text-emerald-300 font-medium">
                  contact@qybercore.com
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-xl shadow-black/40">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="block text-xs text-slate-300">Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-emerald-400 focus:ring-emerald-400/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300">Work Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-emerald-400 focus:ring-emerald-400/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300">Company / Org</label>
                  <input
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-emerald-400 focus:ring-emerald-400/50"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300">How will you use QyberCore?</label>
                  <textarea
                    rows={3}
                    value={form.useCase}
                    onChange={(e) => handleChange("useCase", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-emerald-400 focus:ring-emerald-400/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting…" : "Request early access"}
                </button>

                {status === "success" && (
                  <p className="text-[11px] text-emerald-300">
                    Got it — we’ll reach out from contact@qybercore.com.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-[11px] text-red-400">{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-slate-800 pt-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} QyberCore. All rights reserved.</div>
            <div className="flex flex-wrap items-center gap-4">
              <span>Quantum-Safe AI Gateway</span>
              <span className="hidden md:inline">•</span>
              <span>Built for security, platform & AI teams.</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}


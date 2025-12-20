"use client";

import React, { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  useCase: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Icon({
  name,
  className,
}: {
  name:
    | "shield"
    | "lock"
    | "route"
    | "graph"
    | "key"
    | "spark"
    | "check"
    | "arrow"
    | "bolt";
  className?: string;
}) {
  const common = cn("inline-block", className);
  switch (name) {
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 12.2l1.9 1.9 3.7-3.9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "lock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7.5 10V8.2A4.5 4.5 0 0 1 12 3.7a4.5 4.5 0 0 1 4.5 4.5V10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.5 10h11a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M12 14.2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "route":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 6h6a3 3 0 0 1 3 3v6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18 18h-6a3 3 0 0 1-3-3V9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM20.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "graph":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M7.5 15.5l3.2-3.2 2.2 2.2 4.4-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "key":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M14.5 10.5a4.5 4.5 0 1 0-3.8 4.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M11 14.7l1.7 1.7 1.5-1.5 1.4 1.4 1.5-1.5 1 1V14l-3-3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2l1.2 4.1L17 7l-3.8 1L12 12l-1.2-4-3.8-1 3.8-.9L12 2z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M19 12l.8 2.7L22 15l-2.2.6L19 18l-.8-2.4L16 15l2.2-.3L19 12z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M13 2L4 14h7l-1 8 10-14h-7l0-6z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow":
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-medium text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      {children}
    </span>
  );
}

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500">
        {kicker}
      </div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white",
        "shadow-[0_1px_0_rgba(15,23,42,0.05),0_18px_45px_rgba(15,23,42,0.07)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function LogoMark({ src = "/logo.svg" }: { src?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="QyberCore logo" className="h-full w-full object-contain p-1.5" />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-[0.18em] uppercase">QyberCore</div>
        <div className="text-xs text-slate-500">Post-Quantum AI Data Plane</div>
      </div>
    </div>
  );
}

function PatentPill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-semibold text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
      Patent pending (USPTO)
    </span>
  );
}

/**
 * Responsive diagram: no horizontal scrolling.
 * - Uses viewBox so it scales.
 * - width: 100%, height auto.
 * - keeps the diagram inside the card.
 */
function GatewayDiagram() {
  return (
    <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 860 280"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="QyberCore gateway data-plane diagram"
      >
        <defs>
          <marker id="arrowNavy" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#0f172a" />
          </marker>
          <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#2563eb" />
          </marker>
        </defs>

        {/* client */}
        <rect x="22" y="104" width="180" height="74" rx="16" fill="#fff" stroke="#e2e8f0" />
        <text x="112" y="132" textAnchor="middle" fontSize="12" fill="#0f172a" fontWeight="800">
          Client Apps
        </text>
        <text x="112" y="152" textAnchor="middle" fontSize="10" fill="#64748b">
          SDK / Agents
        </text>

        {/* handshake arrow */}
        <path d="M202 141 L302 141" stroke="#0f172a" strokeWidth="2.2" markerEnd="url(#arrowNavy)" />
        <text x="252" y="120" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="700">
          PQC key establishment
        </text>
        <text x="252" y="134" textAnchor="middle" fontSize="9" fill="#64748b">
          shared secret → session keys
        </text>

        {/* gateway */}
        <rect x="302" y="54" width="320" height="172" rx="20" fill="#fff" stroke="#cbd5e1" />
        <text x="462" y="82" textAnchor="middle" fontSize="12" fill="#0f172a" fontWeight="900">
          QyberCore Gateway
        </text>
        <text x="462" y="100" textAnchor="middle" fontSize="10" fill="#64748b">
          Governed boundary • Policy • Routing • Audit (roadmap)
        </text>

        <rect x="332" y="118" width="260" height="42" rx="12" fill="#f8fafc" stroke="#dbeafe" />
        <text x="462" y="145" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="800">
          Governed processing boundary
        </text>

        <rect x="332" y="168" width="260" height="42" rx="12" fill="#f8fafc" stroke="#dcfce7" />
        <text x="462" y="195" textAnchor="middle" fontSize="10" fill="#047857" fontWeight="800">
          Encrypt response (AEAD)
        </text>

        {/* providers on right */}
        <rect x="708" y="88" width="120" height="52" rx="14" fill="#fff" stroke="#e2e8f0" />
        <text x="768" y="119" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="800">
          OpenAI
        </text>

        <rect x="708" y="152" width="120" height="52" rx="14" fill="#fff" stroke="#e2e8f0" />
        <text x="768" y="183" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="800">
          Other providers
        </text>

        {/* routing arrows */}
        <path
          d="M622 132 C660 108 680 104 708 108"
          stroke="#2563eb"
          strokeWidth="2.2"
          fill="none"
          markerEnd="url(#arrowBlue)"
        />
        <path
          d="M622 148 C660 180 680 184 708 180"
          stroke="#2563eb"
          strokeWidth="2.2"
          fill="none"
          markerEnd="url(#arrowBlue)"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);

  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", useCase: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

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
      setErrorMessage("Something went wrong. Please email contact@qybercore.com");
    }
  };

  // Demo note:
  // - Website is on Vercel
  // - FastAPI demo currently runs locally on :8000
  // Set NEXT_PUBLIC_DEMO_URL when gateway is deployed publicly (e.g., https://demo.qybercore.com)
  const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL || "/demo";
  const DEMO_AVAILABLE = false; // flip when FastAPI gateway demo is deployed

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_540px_at_50%_-10%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(900px_520px_at_20%_12%,rgba(59,130,246,0.10),transparent_55%),radial-gradient(900px_520px_at_85%_10%,rgba(99,102,241,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),rgba(255,255,255,1))]" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3">
            <LogoMark src="/logo.svg" />
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#problem">
              Problem
            </a>
            <a className="hover:text-slate-900" href="#solution">
              Solution
            </a>
            <a className="hover:text-slate-900" href="#how">
              How it works
            </a>
            <a className="hover:text-slate-900" href="#roadmap">
              Roadmap
            </a>
            <a className="hover:text-slate-900" href="#demo">
              Demo
            </a>
            <a className="hover:text-slate-900" href="#early-access">
              Early access
            </a>
            <a
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              href="#early-access"
            >
              Request access
            </a>
          </nav>

          <a
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 md:hidden"
            href="#early-access"
          >
            Request
          </a>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-6 md:pt-14">
        {/* HERO */}
        <section className="grid items-start gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Pill>
                <Icon name="shield" className="h-4 w-4 text-emerald-600" />
                Post-Quantum Transport
              </Pill>
              <Pill>
                <Icon name="lock" className="h-4 w-4 text-blue-600" />
                Tenant-Scoped Encryption
              </Pill>
              <Pill>
                <Icon name="route" className="h-4 w-4 text-indigo-600" />
                Policy + Routing Boundary
              </Pill>
              <PatentPill />
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Stop secrets from leaking and keep AI traffic{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                quantum-safe
              </span>
              .
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              QyberCore is a post-quantum secure <span className="font-semibold text-slate-900">data plane</span> for AI inference.
              It helps keep prompts and responses confidential by establishing per-session secrets using{" "}
              <span className="font-semibold text-slate-900">lattice-based key establishment</span> and returning
              responses in <span className="font-semibold text-slate-900">authenticated encrypted envelopes</span>.
              Plaintext is intended to exist only inside a governed gateway boundary where routing and policy controls apply.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#early-access"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Request early access <Icon name="arrow" className="h-4 w-4" />
              </a>

              <a
                href={DEMO_AVAILABLE ? DEMO_URL : "#demo"}
                onClick={(e) => {
                  if (!DEMO_AVAILABLE) e.preventDefault();
                }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm",
                  DEMO_AVAILABLE ? "hover:bg-slate-50" : "opacity-60 cursor-not-allowed"
                )}
              >
                View interactive demo
              </a>
            </div>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Demo vs Production
                </div>
                <span className="text-xs font-semibold text-slate-600">
                  Patent pending (USPTO)
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The demo UI displays plaintext for readability. In production SDK integrations, prompts and responses are
                encrypted <span className="font-semibold text-slate-900">before leaving the client</span> and decrypted
                only inside a governed boundary.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  <Icon name="key" className="h-4 w-4 text-slate-700" />
                  Lattice-based KEM → shared secret
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  <Icon name="lock" className="h-4 w-4 text-slate-700" />
                  AEAD envelopes (e.g., AES-GCM)
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  <Icon name="graph" className="h-4 w-4 text-slate-700" />
                  Control plane (policy/audit) — roadmap
                </span>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Certain techniques may be covered by one or more pending patent applications.
              </p>
            </div>
          </div>

          {/* RIGHT HERO CARD */}
          <Card className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Security boundary
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  Encrypt on client → governed processing → re-encrypt response
                </div>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                PQC enabled
              </span>
            </div>

            {/* Responsive diagram: no horizontal scroll */}
            <GatewayDiagram />

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Icon name="bolt" className="h-4 w-4 text-emerald-700" />
                  Threat model
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Attackers can record AI traffic today and attempt decryption later. The data plane is designed to
                  reduce long-term exposure.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Icon name="graph" className="h-4 w-4 text-blue-700" />
                  Control plane (roadmap)
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Tenant lifecycle, policy packs, routing rules, and audit/telemetry exports build compounding value over
                  time.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="mt-20">
          <SectionTitle
            kicker="Problem"
            title="AI traffic is a long-term confidentiality risk"
            subtitle="Attackers do not need to decrypt today — they can record today and decrypt later. Standard TLS alone does not address long-horizon quantum risk."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="lock" className="h-5 w-5 text-blue-700" />
                TLS termination exposure
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Prompts can become plaintext inside internal networks, proxies, and observability tooling after TLS
                terminates.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="bolt" className="h-5 w-5 text-emerald-700" />
                Harvest-now, decrypt-later
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Recorded traffic may be stored for future decryption as cryptographic capabilities evolve.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="graph" className="h-5 w-5 text-slate-900" />
                Weak tenant binding
              </div>
              <p className="mt-2 text-sm text-slate-600">
                API keys identify tenants, but do not cryptographically bind encryption context to tenant and request identity.
              </p>
            </Card>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="solution" className="mt-20">
          <SectionTitle
            kicker="Solution"
            title="A post-quantum secure AI data plane"
            subtitle="QyberCore sits between your apps and model providers to enforce encryption, policy, routing, and auditability — without requiring a full redesign."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-emerald-50 p-2 text-emerald-700">
                  <Icon name="key" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Post-quantum key establishment</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Establish per-session shared secrets via lattice-based cryptography and derive short-lived symmetric
                    session keys for fast, authenticated encryption.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                      Session-scoped keys reduce blast radius
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                      Encrypted request + encrypted response envelopes
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-blue-50 p-2 text-blue-700">
                  <Icon name="lock" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Governed processing boundary</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Decrypt only inside a controlled gateway boundary where policy and routing decisions apply, then
                    re-encrypt responses back to the client.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                      Centralized policy/routing boundary
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                      Built for audit + telemetry (roadmap)
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-indigo-50 p-2 text-indigo-700">
                  <Icon name="route" className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">Provider-agnostic routing plane</div>
                  <p className="mt-2 text-sm text-slate-600">
                    One integration surface for apps. Route across providers with consistent governance. Start with one
                    provider; expand as routing and policy controls mature.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* HOW */}
        <section id="how" className="mt-20">
          <SectionTitle
            kicker="How it works"
            title="Secure by default, simple to adopt"
            subtitle="High-level system behavior suitable for public sharing; implementation details intentionally omitted."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold">End-to-end flow</div>
              <ol className="mt-3 space-y-3 text-sm text-slate-600">
                {[
                  {
                    t: "Post-quantum key establishment",
                    d: "Client establishes a shared secret using lattice-based cryptography.",
                  },
                  {
                    t: "Tenant-scoped session encryption",
                    d: "Session keys are derived per tenant/request context to limit blast radius.",
                  },
                  {
                    t: "Governed processing boundary",
                    d: "Gateway decrypts only inside a controlled boundary and applies policy and routing.",
                  },
                  {
                    t: "Encrypted response return",
                    d: "Responses are re-encrypted and returned to the client as ciphertext.",
                  },
                ].map((x, idx) => (
                  <li className="flex gap-3" key={x.t}>
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{x.t}</div>
                      <div>{x.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold">Security & Cryptography</div>
              <p className="mt-2 text-sm text-slate-600">
                For architects and reviewers, we publish a high-level cryptographic description and threat model overview.
              </p>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Read more</div>
                <div className="mt-2">
                  <a
                    href="/security-cryptography"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                  >
                    Security & Cryptography <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-3 text-xs text-slate-500">
                  Patent pending (USPTO). Certain implementation techniques may be covered by pending applications.
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="mt-20">
          <SectionTitle
            kicker="Platform roadmap"
            title="Shipping now, and what’s coming next"
            subtitle="QyberCore is built incrementally: a secure data plane today, with an evolving control plane."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold">Available today</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Post-quantum key establishment (lattice-based)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Encrypted request/response envelopes (AEAD; e.g., AES-GCM)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Gateway boundary for policy and routing decisions (MVP)
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold">Upcoming (control plane)</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="arrow" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Tenant lifecycle management and key rotation
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="arrow" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Policy packs (quotas, approvals, routing constraints)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="arrow" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Audit logs and telemetry export paths
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* DEMO */}
        <section id="demo" className="mt-20">
          <SectionTitle
            kicker="Demo"
            title="Interactive demo"
            subtitle="The website is deployed on Vercel, while the gateway demo runs as a separate service. We’ll enable the public demo after gateway deployment."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold">What the demo shows</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Human-readable gateway flow (for clarity)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Example encrypted request/response envelopes
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Visibility into “what an attacker records on the wire”
                </li>
              </ul>

              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
                <span className="font-semibold">Demo mode notice:</span> Demo displays plaintext for readability. Production
                SDK mode encrypts prompts and responses before leaving the client.
              </div>

              <div className="mt-5">
                <a
                  href={DEMO_URL}
                  onClick={(e) => {
                    if (!DEMO_AVAILABLE) e.preventDefault();
                  }}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm",
                    DEMO_AVAILABLE
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "bg-slate-200 text-slate-500 cursor-not-allowed"
                  )}
                >
                  {DEMO_AVAILABLE ? (
                    <>
                      Launch demo console <Icon name="arrow" className="h-4 w-4" />
                    </>
                  ) : (
                    <>Demo coming soon</>
                  )}
                </a>

                <div className="mt-2 text-xs text-slate-500">
                  When the gateway is deployed, set <span className="font-mono">NEXT_PUBLIC_DEMO_URL</span> to the public endpoint.
                  (Local dev demo runs on <span className="font-mono">http://localhost:8000</span>.)
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold">Production integrations (roadmap)</div>
              <p className="mt-2 text-sm text-slate-600">
                SDKs (Python and Node.js) will provide a drop-in client that automatically handles:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Post-quantum handshake + envelope encryption
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Tenant identifiers + request IDs for audit trails (control plane)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Routing headers + policy enforcement hooks
                </li>
              </ul>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Note</div>
                <div className="mt-1 text-slate-600">
                  The website and gateway are deployed independently. Public demo availability depends on gateway deployment.
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* EARLY ACCESS */}
        <section id="early-access" className="mt-20">
          <SectionTitle
            kicker="Early access"
            title="Work with us as a design partner"
            subtitle="If you’re deploying copilots or agents in production, we’ll help you route traffic through a post-quantum secure, policy-enforced gateway."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
            <Card className="p-6">
              <div className="text-sm font-semibold">What you get</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Early SDK access + integration support
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Input into policy, routing, and audit roadmap
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Deployment options and early pricing discussions
                </li>
              </ul>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                Prefer email?{" "}
                <a
                  className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4"
                  href="mailto:contact@qybercore.com"
                >
                  contact@qybercore.com
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Name</label>
                    <input
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Work email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">Company / Org</label>
                  <input
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">Use case</label>
                  <textarea
                    rows={4}
                    value={form.useCase}
                    onChange={(e) => handleChange("useCase", e.target.value)}
                    placeholder="e.g., keep LLM prompts/outputs confidential, reduce leakage risk, enforce policy and routing…"
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm",
                    status === "submitting"
                      ? "bg-slate-200 text-slate-500"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  )}
                >
                  {status === "submitting" ? "Submitting…" : "Request early access"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-emerald-700">
                    Received. We’ll reply from <span className="font-semibold">contact@qybercore.com</span>.
                  </p>
                )}
                {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}

                <p className="text-xs text-slate-500">We use your details only to contact you about QyberCore.</p>
              </form>
            </Card>
          </div>
        </section>

        <footer className="mt-20 border-t border-slate-200 pt-8 text-sm text-slate-500">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              © {year} QyberCore. All rights reserved. <span className="ml-2">Patent pending (USPTO).</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-slate-700" href="/security-cryptography">
                Security & Cryptography
              </a>
              <a className="hover:text-slate-700" href="#demo">
                Demo
              </a>
              <a className="hover:text-slate-700" href="mailto:contact@qybercore.com">
                contact@qybercore.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
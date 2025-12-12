"use client";

import React, { useMemo, useState, FormEvent } from "react";

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
    | "arrow";
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
      <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500">{kicker}</div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{subtitle}</p>
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

/**
 * ✅ Logo support
 * Put your file here:
 *   public/logo.svg  (or logo.png)
 * Then set LOGO_SRC accordingly (e.g. "/logo.svg")
 */
const LOGO_SRC = ""; // set to "/logo.svg" once you add it to /public

function BrandMark() {
  const [imgOk, setImgOk] = useState(true);

  // If you haven't added a logo file yet, show Q badge without attempting fetch.
  if (!LOGO_SRC) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
        <span className="text-sm font-semibold">Q</span>
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-slate-900 text-white shadow-sm">
      {imgOk ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={LOGO_SRC}
          alt="QyberCore logo"
          className="h-full w-full object-contain p-1.5"
          onError={() => setImgOk(false)}
        />
      ) : (
        <span className="text-sm font-semibold">Q</span>
      )}
    </div>
  );
}

export default function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);

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
      setErrorMessage("Something went wrong. Please email contact@qybercore.com");
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_540px_at_50%_-10%,rgba(59,130,246,0.10),transparent_55%),radial-gradient(900px_520px_at_15%_15%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(900px_520px_at_85%_10%,rgba(99,102,241,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),rgba(255,255,255,1))]" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3">
            <BrandMark />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-[0.18em] uppercase">QyberCore</div>
              <div className="text-xs text-slate-500">Enterprise AI Control Plane • PQC by design</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#platform">
              Platform
            </a>
            <a className="hover:text-slate-900" href="#control-plane">
              Control plane
            </a>
            <a className="hover:text-slate-900" href="#architecture">
              Architecture
            </a>
            <a className="hover:text-slate-900" href="#demo">
              Demo
            </a>
            <a className="hover:text-slate-900" href="#competition">
              Competition
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
                PQC Transport
              </Pill>
              <Pill>
                <Icon name="lock" className="h-4 w-4 text-blue-600" />
                Policy Enforcement
              </Pill>
              <Pill>
                <Icon name="graph" className="h-4 w-4 text-slate-900" />
                Verifiable Audit
              </Pill>
              <Pill>
                <Icon name="route" className="h-4 w-4 text-indigo-600" />
                Provider Routing
              </Pill>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              The{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                enterprise AI control plane
              </span>{" "}
              with quantum-safe security built in.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              QyberCore sits between your apps and model providers. We don’t just encrypt traffic — we enforce{" "}
              <span className="font-semibold text-slate-900">policy, routing, and provable audit trails</span> across
              every LLM call.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                View demo <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href="#control-plane"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Why we’re defensible
              </a>
            </div>

            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-5">
              <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                What makes this valuable
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                PQC is the wedge. The product is the control plane: a policy engine + routing plane + tamper-evident
                audit — designed for regulated enterprises running copilots and agents.
              </p>
            </div>
          </div>

          {/* RIGHT HERO CARD (kept same diagram) */}
          <Card className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Security Data Plane
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  SDK → PQC session → policy/routing → provider → encrypted response
                </div>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                PQC enabled
              </span>
            </div>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <svg viewBox="0 0 760 260" className="h-64 w-[760px]" role="img" aria-label="QyberCore data plane diagram">
                <defs>
                  <marker id="arrowNavy" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <path d="M0 0 L8 4 L0 8 Z" fill="#0f172a" />
                  </marker>
                  <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <path d="M0 0 L8 4 L0 8 Z" fill="#2563eb" />
                  </marker>
                </defs>

                <rect x="20" y="95" width="160" height="70" rx="16" fill="#ffffff" stroke="#e2e8f0" />
                <text x="100" y="123" textAnchor="middle" fontSize="12" fill="#0f172a" fontWeight="700">
                  Client Apps
                </text>
                <text x="100" y="142" textAnchor="middle" fontSize="10" fill="#64748b">
                  SDK / Agents
                </text>

                <path d="M180 130 L260 130" stroke="#0f172a" strokeWidth="2.2" markerEnd="url(#arrowNavy)" />
                <text x="220" y="112" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="600">
                  PQC Handshake
                </text>
                <text x="220" y="126" textAnchor="middle" fontSize="9" fill="#64748b">
                  Kyber → session key
                </text>

                <rect x="260" y="55" width="250" height="150" rx="20" fill="#ffffff" stroke="#cbd5e1" />
                <text x="385" y="82" textAnchor="middle" fontSize="12" fill="#0f172a" fontWeight="800">
                  QyberCore Gateway
                </text>
                <text x="385" y="100" textAnchor="middle" fontSize="10" fill="#64748b">
                  Terminate PQC • Enforce Policy • Route
                </text>

                <rect x="295" y="118" width="180" height="38" rx="12" fill="#f8fafc" stroke="#dbeafe" />
                <text x="385" y="142" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="700">
                  Policy + Routing Engine
                </text>

                <rect x="295" y="162" width="180" height="38" rx="12" fill="#f8fafc" stroke="#dcfce7" />
                <text x="385" y="186" textAnchor="middle" fontSize="10" fill="#047857" fontWeight="700">
                  Encrypt Response (AES-GCM)
                </text>

                <path
                  d="M510 120 C580 90 620 90 670 106"
                  stroke="#2563eb"
                  strokeWidth="2.2"
                  fill="none"
                  markerEnd="url(#arrowBlue)"
                />
                <path
                  d="M510 140 C580 172 620 172 670 156"
                  stroke="#2563eb"
                  strokeWidth="2.2"
                  fill="none"
                  markerEnd="url(#arrowBlue)"
                />

                <rect x="670" y="88" width="70" height="46" rx="14" fill="#ffffff" stroke="#e2e8f0" />
                <text x="705" y="116" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="700">
                  OpenAI
                </text>

                <rect x="670" y="142" width="70" height="46" rx="14" fill="#ffffff" stroke="#e2e8f0" />
                <text x="705" y="170" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="700">
                  Others
                </text>
              </svg>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Icon name="shield" className="h-4 w-4 text-emerald-700" />
                  PQC wedge
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Secure “harvest now, decrypt later” risk with PQC-derived session keys.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Icon name="graph" className="h-4 w-4 text-slate-900" />
                  Real value
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Control + audit + routing at scale (policy DSL + verifiable logs).
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* PLATFORM (kept, but reworded slightly) */}
        <section id="platform" className="mt-20">
          <SectionTitle
            kicker="Platform"
            title="We secure traffic — but we sell control"
            subtitle="PQC is necessary. Enterprises pay for enforceable governance, routing, and auditability across every model and agent."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-emerald-50 p-2 text-emerald-700">
                  <Icon name="key" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Quantum-safe transport</div>
                  <p className="mt-2 text-sm text-slate-600">
                    PQC session establishment + encrypted envelopes for long-term confidentiality of AI traffic.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-blue-50 p-2 text-blue-700">
                  <Icon name="lock" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Policy enforcement</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Model access control, content policies, and approvals — consistent across providers (roadmap).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-indigo-50 p-2 text-indigo-700">
                  <Icon name="route" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Routing plane</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Multi-provider routing, fallback, cost/perf policy routing (roadmap).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-slate-100 p-2 text-slate-900">
                  <Icon name="graph" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Audit & observability</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Request metadata, dashboards, exports to SIEM/warehouses — with cryptographic integrity (roadmap).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CONTROL PLANE / DEFENSIBILITY (NEW) */}
        <section id="control-plane" className="mt-20">
          <SectionTitle
            kicker="Defensibility"
            title="What we provide beyond PQC (the real moat)"
            subtitle="Crypto primitives are not the product. The product is an enterprise control plane that makes AI traffic governable, auditable, and provable."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="lock" className="h-5 w-5 text-blue-700" />
                Policy DSL
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Declare AI policies like “PII → redact + block”, “EU users → EU-only models”, “high-risk → review”.
                This becomes sticky platform infrastructure.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="graph" className="h-5 w-5 text-slate-900" />
                Verifiable audit logs
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Tamper-evident audit trails: prove what policy ran, when, and on which model — without storing raw prompts.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="route" className="h-5 w-5 text-indigo-700" />
                AI supply-chain lineage
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Track agent → tool → model → response lineage. This is “SLSA for AI systems” and is hard to replicate.
              </p>
            </Card>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold">Why enterprises buy</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  One enforcement point across every app and provider
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Auditable controls without prompt retention by default
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Future-ready security posture (PQC) + compliance story
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold">What we will ship next</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Tenant isolation + key rotation (control plane)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Policy packs (PII, finance, healthcare, export controls)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Dashboards + SIEM export + anomaly detection
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className="mt-20">
          <SectionTitle
            kicker="Architecture"
            title="Two planes: data plane now, control plane next"
            subtitle="The MVP proves the encrypted data plane. The defensible product is the control plane: policies, keys, tenants, routing, audit, and analytics."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold">Data plane (MVP)</div>
              <p className="mt-2 text-sm text-slate-600">
                Encrypted envelopes → decrypt inside gateway → policy/routing → provider → encrypted response.
              </p>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Icon name="shield" className="h-4 w-4 text-emerald-700" />
                  Live today
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                    Kyber session establishment
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                    AES-256-GCM request/response envelopes
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                    Provider call + encrypted return
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold">Control plane (roadmap)</div>
              <p className="mt-2 text-sm text-slate-600">
                Tenant keys, policy packs, audit sinks, routing rules, dashboards.
              </p>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Icon name="spark" className="h-4 w-4 text-blue-700" />
                  Enterprise-grade differentiators
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                    Policy DSL + approvals
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                    Verifiable audit log (tamper-evident)
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                    Traffic analytics + anomaly detection
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* DEMO */}
        <section id="demo" className="mt-20">
          <SectionTitle
            kicker="Demo"
            title="Try the encrypted request flow"
            subtitle="The demo console is for transparency. Production SDK integrations keep plaintext off the wire while preserving the same envelope format."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold">What you can test</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  PQC session + encrypted envelope (base64)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Gateway decrypt → policy/routing → provider call
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Encrypted response envelope
                </li>
              </ul>

              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
                UI shows plaintext for readability. Production SDK mode keeps plaintext off the wire.
              </div>

              <div className="mt-5">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Launch demo console <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold">SDK (coming)</div>
              <p className="mt-2 text-sm text-slate-600">
                Drop-in clients for Python and Node.js that automatically handle session establishment and envelopes.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  SDK sends ciphertext only (no plaintext over wire)
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Telemetry + request IDs for audit trails
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Policy headers and routing hints
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* COMPETITION (NEW) */}
        <section id="competition" className="mt-20">
          <SectionTitle
            kicker="Competition"
            title="Where we are different"
            subtitle="Most products do one piece: crypto OR AI gateway OR observability. QyberCore combines PQC transport with an enterprise control plane and verifiable audit."
          />

          <Card className="mt-8 p-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[780px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <th className="py-3 pr-4">Category</th>
                    <th className="py-3 pr-4">What they do</th>
                    <th className="py-3 pr-4">Gap we target</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100">
                    <td className="py-4 pr-4 font-semibold">PQC vendors / crypto services</td>
                    <td className="py-4 pr-4">Encryption modernization, key mgmt, consulting</td>
                    <td className="py-4 pr-4">Not LLM-native: no AI policy DSL, routing, or AI audit trails</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 pr-4 font-semibold">Edge security (WAF/CDN)</td>
                    <td className="py-4 pr-4">Network security, TLS, WAF controls</td>
                    <td className="py-4 pr-4">Not model-aware; can’t enforce prompt/agent governance</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 pr-4 font-semibold">AI gateways / observability</td>
                    <td className="py-4 pr-4">Logs, routing, cost tracking</td>
                    <td className="py-4 pr-4">Weak security posture; few provide PQC + verifiable audits</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold">Cloud-native model platforms</td>
                    <td className="py-4 pr-4">Provider-specific controls</td>
                    <td className="py-4 pr-4">Not neutral; hard to unify across providers and agent toolchains</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* EARLY ACCESS */}
        <section id="early-access" className="mt-20">
          <SectionTitle
            kicker="Early access"
            title="Work with us as a design partner"
            subtitle="If you’re deploying copilots or agents in production, we’ll help route that traffic through a quantum-safe, policy-enforced gateway."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
            <Card className="p-6">
              <div className="text-sm font-semibold">What you get</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Private SDK access + integration support
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Influence roadmap: policies, routing, audit & dashboards
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Early pricing and deployment options
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
                    placeholder="e.g., secure copilots for analysts, enforce DLP, route across providers, audit traffic…"
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
            <div>© {year} QyberCore. All rights reserved.</div>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-slate-700" href="/demo">
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


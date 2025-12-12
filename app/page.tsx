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
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
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
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
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
          <path
            d="M12 14.2v3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "route":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
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
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 19V5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5 19h14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
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
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
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
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
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
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
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
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 12h12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
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

function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
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
 * ✅ Logo support:
 * - Put your actual logo file at: /public/logo.svg OR /public/logo.png
 * - This component renders it and falls back to the Q badge if missing.
 *
 * If you already have a different path, change LOGO_SRC below.
 */
const LOGO_SRC = "/logo.svg"; // or "/logo.png"

function BrandMark() {
  const [imgOk, setImgOk] = useState(true);

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

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
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
      {/* Background (clean) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_540px_at_50%_-10%,rgba(59,130,246,0.10),transparent_55%),radial-gradient(900px_520px_at_15%_15%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(900px_520px_at_85%_10%,rgba(99,102,241,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),rgba(255,255,255,1))]" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3">
            {/* ✅ Logo is here */}
            <BrandMark />

            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-[0.18em] uppercase">
                QyberCore
              </div>
              <div className="text-xs text-slate-500">Quantum-Safe AI Gateway</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#platform">
              Platform
            </a>
            <a className="hover:text-slate-900" href="#architecture">
              Architecture
            </a>
            <a className="hover:text-slate-900" href="#demo">
              Demo
            </a>
            <a className="hover:text-slate-900" href="#pricing">
              Value
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

      <div
        id="top"
        className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-6 md:pt-14"
      >
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
                Policy + Governance
              </Pill>
              <Pill>
                <Icon name="route" className="h-4 w-4 text-indigo-600" />
                Multi-Provider Routing
              </Pill>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              The enterprise gateway for{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                quantum-safe LLM traffic
              </span>
              .
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              QyberCore sits between your apps and model providers to enforce{" "}
              <span className="font-semibold text-slate-900">
                encryption, governance, routing, and auditability
              </span>{" "}
              — without redesigning your stack.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                View demo <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                See architecture
              </a>
            </div>

            {/* concise credibility block */}
            <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-5">
              <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Demo vs Production SDK
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The web demo shows plaintext for readability, but it still generates
                and transmits the same encrypted envelopes used by the SDK. In
                production, your app sends only PQC-secured ciphertext to QyberCore
                — raw prompts are not sent over the wire.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  <Icon name="key" className="h-4 w-4 text-slate-700" />
                  Kyber KEM → session key
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  <Icon name="lock" className="h-4 w-4 text-slate-700" />
                  AES-256-GCM envelopes
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  <Icon name="graph" className="h-4 w-4 text-slate-700" />
                  Audit-ready metadata (roadmap)
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT HERO CARD */}
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
              <svg
                viewBox="0 0 760 260"
                className="h-64 w-[760px]"
                role="img"
                aria-label="QyberCore data plane diagram"
              >
                <defs>
                  <marker
                    id="arrowNavy"
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >
                    <path d="M0 0 L8 4 L0 8 Z" fill="#0f172a" />
                  </marker>
                  <marker
                    id="arrowBlue"
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >
                    <path d="M0 0 L8 4 L0 8 Z" fill="#2563eb" />
                  </marker>
                </defs>

                {/* client */}
                <rect
                  x="20"
                  y="95"
                  width="160"
                  height="70"
                  rx="16"
                  fill="#ffffff"
                  stroke="#e2e8f0"
                />
                <text
                  x="100"
                  y="123"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#0f172a"
                  fontWeight="700"
                >
                  Client Apps
                </text>
                <text
                  x="100"
                  y="142"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#64748b"
                >
                  SDK / Agents
                </text>

                {/* arrow to gateway */}
                <path
                  d="M180 130 L260 130"
                  stroke="#0f172a"
                  strokeWidth="2.2"
                  markerEnd="url(#arrowNavy)"
                />
                <text
                  x="220"
                  y="112"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#0f172a"
                  fontWeight="600"
                >
                  PQC Handshake
                </text>
                <text
                  x="220"
                  y="126"
                  textAnchor="middle"
                  fontSize="9"
                  fill="#64748b"
                >
                  Kyber → session key
                </text>

                {/* gateway */}
                <rect
                  x="260"
                  y="55"
                  width="250"
                  height="150"
                  rx="20"
                  fill="#ffffff"
                  stroke="#cbd5e1"
                />
                <text
                  x="385"
                  y="82"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#0f172a"
                  fontWeight="800"
                >
                  QyberCore Gateway
                </text>
                <text
                  x="385"
                  y="100"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#64748b"
                >
                  Terminate PQC • Enforce Policy • Route
                </text>

                <rect
                  x="295"
                  y="118"
                  width="180"
                  height="38"
                  rx="12"
                  fill="#f8fafc"
                  stroke="#dbeafe"
                />
                <text
                  x="385"
                  y="142"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#1d4ed8"
                  fontWeight="700"
                >
                  Policy + Routing Engine
                </text>

                <rect
                  x="295"
                  y="162"
                  width="180"
                  height="38"
                  rx="12"
                  fill="#f8fafc"
                  stroke="#dcfce7"
                />
                <text
                  x="385"
                  y="186"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#047857"
                  fontWeight="700"
                >
                  Encrypt Response (AES-GCM)
                </text>

                {/* arrows to providers */}
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

                {/* providers */}
                <rect
                  x="670"
                  y="88"
                  width="70"
                  height="46"
                  rx="14"
                  fill="#ffffff"
                  stroke="#e2e8f0"
                />
                <text
                  x="705"
                  y="116"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#0f172a"
                  fontWeight="700"
                >
                  OpenAI
                </text>

                <rect
                  x="670"
                  y="142"
                  width="70"
                  height="46"
                  rx="14"
                  fill="#ffffff"
                  stroke="#e2e8f0"
                />
                <text
                  x="705"
                  y="170"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#0f172a"
                  fontWeight="700"
                >
                  Others
                </text>
              </svg>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Icon name="shield" className="h-4 w-4 text-emerald-700" />
                  Threat model
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Protect against “harvest now, decrypt later” by securing transport
                  with PQC-derived session keys.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Icon name="graph" className="h-4 w-4 text-blue-700" />
                  Enterprise value
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Governance + routing + observability is the wedge — not “just
                  encryption”.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* PLATFORM */}
        <section id="platform" className="mt-20">
          <SectionTitle
            kicker="Platform"
            title="Built like real enterprise infrastructure"
            subtitle="Enterprises don’t pay for a demo. They pay for control, visibility, and enforceable policy — across every LLM call."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-emerald-50 p-2 text-emerald-700">
                  <Icon name="key" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">PQC transport layer</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Establish per-session keys via a Kyber-based handshake and
                    encrypt payloads with AES-256-GCM. Keeps traffic safe even if
                    captured today and attacked later.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                      Session-scoped keys (reduces blast radius)
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                      Encrypted envelopes (request + response)
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
                  <div className="text-sm font-semibold">Policy & governance</div>
                  <p className="mt-2 text-sm text-slate-600">
                    A single point to enforce who can call which model, with what
                    limits and controls. Works across providers instead of
                    per-provider configuration drift.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                      RBAC / API keys (roadmap)
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                      DLP / redaction hooks (roadmap)
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-indigo-50 p-2 text-indigo-700">
                  <Icon name="route" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Provider routing plane</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Route across providers (OpenAI today; Bedrock/others next) with
                    sensible defaults and future failover / cost-based routing.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-indigo-700" />
                      Single integration surface for apps
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-indigo-700" />
                      Consistent controls across providers
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-slate-100 p-2 text-slate-900">
                  <Icon name="graph" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Observability & audit</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Enterprises buy dashboards. We’ll ship request metadata, usage
                    analytics, and export paths into SIEM/data warehouses (roadmap).
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-slate-900" />
                      Metadata logs (no prompt content by default)
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 text-slate-900" />
                      Token/cost metrics and anomaly detection (roadmap)
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className="mt-20">
          <SectionTitle
            kicker="Architecture"
            title="Two planes: data plane now, control plane next"
            subtitle="The current MVP proves the PQC-secured data plane. The product value compounds when the control plane manages tenants, keys, policies, and analytics."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold">Data plane (MVP)</div>
              <p className="mt-2 text-sm text-slate-600">
                Encrypted request envelopes → decrypt inside gateway → policy/routing → provider → encrypted response.
              </p>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Icon name="shield" className="h-4 w-4 text-emerald-700" />
                  What’s real today
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                    Kyber-based handshake → session key
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
                Tenant keys, policy packs, audit sinks, routing rules, and dashboards.
              </p>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Icon name="spark" className="h-4 w-4 text-blue-700" />
                  What makes this “enterprise”
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                    Tenant isolation + key rotation
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                    DLP/redaction policies + approvals
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                    Traffic dashboards + SIEM export
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
            subtitle="The demo console is a transparency layer. Production SDK integrations keep plaintext off the wire while preserving the same cryptographic envelope format."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold">What you can test</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
                  Encrypted prompt envelope (base64)
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
                Drop-in clients for Python and Node.js that automatically handle:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Session establishment + envelope encryption
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Provider routing headers + policies
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 text-blue-700" />
                  Telemetry + request IDs for audit trails
                </li>
              </ul>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Demo status</div>
                <div className="mt-1 text-slate-600">
                  Public demo: available • SDK distribution: by early access
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* VALUE / PRICING */}
        <section id="pricing" className="mt-20">
          <SectionTitle
            kicker="Value"
            title="Why this is not “just a demo”"
            subtitle="The high-value product is the enterprise control plane: governance, auditability, policy packs, and traffic analytics — plus PQC transport as the differentiator."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="lock" className="h-5 w-5 text-blue-700" />
                Governance
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Central policies for model access, redaction, and approval flows.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="graph" className="h-5 w-5 text-slate-900" />
                Observability
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Usage dashboards, anomaly detection, and SIEM/warehouse exports.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="shield" className="h-5 w-5 text-emerald-700" />
                PQC differentiation
              </div>
              <p className="mt-2 text-sm text-slate-600">
                A clear answer to quantum risk and “harvest-now, decrypt-later”.
              </p>
            </Card>
          </div>
        </section>

        {/* EARLY ACCESS */}
        <section id="early-access" className="mt-20">
          <SectionTitle
            kicker="Early access"
            title="Work with us as a design partner"
            subtitle="If you’re deploying copilots or agents in production, we’ll help you route that traffic through a quantum-safe, policy-enforced gateway."
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
                  Influence roadmap: policies, routing, observability
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
                    <label className="text-xs font-semibold text-slate-700">
                      Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Work email
                    </label>
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
                  <label className="text-xs font-semibold text-slate-700">
                    Company / Org
                  </label>
                  <input
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Use case
                  </label>
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
                    Received. We’ll reply from{" "}
                    <span className="font-semibold">contact@qybercore.com</span>.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">{errorMessage}</p>
                )}

                <p className="text-xs text-slate-500">
                  We use your details only to contact you about QyberCore.
                </p>
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
              <a
                className="hover:text-slate-700"
                href="mailto:contact@qybercore.com"
              >
                contact@qybercore.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}


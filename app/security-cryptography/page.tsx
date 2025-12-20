"use client";

import React from "react";

/* ---------- utilities ---------- */

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* ---------- icon system (MATCHES app/page.tsx) ---------- */

function Icon({
  name,
  className,
}: {
  name:
    | "shield"
    | "lock"
    | "graph"
    | "key"
    | "check"
    | "arrow"
    | "bolt";
  className?: string;
}) {
  const common = cn("inline-block", className);

  switch (name) {
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "lock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M7.5 10V8.2A4.5 4.5 0 0 1 12 3.7a4.5 4.5 0 0 1 4.5 4.5V10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <rect
            x="6.5"
            y="10"
            width="11"
            height="9"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "graph":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M5 19V5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 19h14" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M7.5 15.5l3.2-3.2 2.2 2.2 4.4-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "key":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M14.5 10.5a4.5 4.5 0 1 0-3.8 4.4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M11 14.7l6 6"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M13 2L4 14h7l-1 8 10-14h-7V2z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      );
    case "arrow":
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h12"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
  }
}

/* ---------- layout helpers ---------- */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}

/* ---------- page ---------- */

export default function SecurityCryptographyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      {/* header */}
      <header className="mb-12">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Security & Cryptography
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          How QyberCore protects AI secrets — now and in the quantum future
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
          This page describes QyberCore’s cryptographic approach and threat
          model at a high level. Certain techniques may be covered by
          pending patent applications.
        </p>
      </header>

      {/* threat model */}
      <section className="mb-10">
        <Card>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Icon name="bolt" className="h-5 w-5 text-emerald-700" />
            Threat model
          </div>
          <p className="mt-3 text-sm text-slate-600">
            QyberCore is designed for environments where attackers can
            record AI traffic today and attempt decryption later.
            Traditional TLS protects data in transit, but does not
            address long-term confidentiality risk.
          </p>
        </Card>
      </section>

      {/* crypto building blocks */}
      <section className="mb-10 grid gap-6 md:grid-cols-2">
        <Card>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Icon name="key" className="h-5 w-5 text-blue-700" />
            Post-quantum key establishment
          </div>
          <p className="mt-3 text-sm text-slate-600">
            QyberCore uses lattice-based key encapsulation mechanisms to
            establish shared secrets resistant to known quantum attacks.
            These secrets are used only to derive short-lived session keys.
          </p>
        </Card>

        <Card>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Icon name="lock" className="h-5 w-5 text-indigo-700" />
            Authenticated encryption
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Requests and responses are protected using modern authenticated
            encryption (e.g., AES-GCM), ensuring confidentiality and integrity
            within a bounded session context.
          </p>
        </Card>
      </section>

      {/* boundary */}
      <section className="mb-10">
        <Card>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Icon name="shield" className="h-5 w-5 text-emerald-700" />
            Governed decryption boundary
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Encrypted payloads are decrypted only inside a controlled gateway
            boundary where policy enforcement, routing, and auditing occur.
            Responses are re-encrypted before returning to the client.
          </p>
        </Card>
      </section>

      {/* scope */}
      <section className="mb-10 grid gap-6 md:grid-cols-2">
        <Card>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Icon name="check" className="h-5 w-5 text-emerald-700" />
            In scope
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Prompt and response confidentiality</li>
            <li>• Tenant-scoped session isolation</li>
            <li>• Long-term cryptographic resilience</li>
          </ul>
        </Card>

        <Card>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Icon name="graph" className="h-5 w-5 text-blue-700" />
            Out of scope (by design)
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Model correctness or alignment</li>
            <li>• Provider internal security guarantees</li>
            <li>• Client-side misuse of plaintext</li>
          </ul>
        </Card>
      </section>

      {/* legal */}
      <footer className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} QyberCore. Certain techniques described
        herein may be covered by pending U.S. patent applications.
      </footer>
    </main>
  );
}
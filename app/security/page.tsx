import React from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
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
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h1>
      {subtitle ? <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{subtitle}</p> : null}
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

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-800">
      {children}
    </pre>
  );
}

export default function SecurityPage() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_540px_at_50%_-10%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(900px_520px_at_20%_12%,rgba(59,130,246,0.10),transparent_55%),radial-gradient(900px_520px_at_85%_10%,rgba(99,102,241,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),rgba(255,255,255,1))]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="/" className="text-sm font-semibold tracking-[0.18em] uppercase">
            QyberCore
          </a>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="/">
              Home
            </a>
            <a className="hover:text-slate-900" href="/#demo">
              Demo
            </a>
            <a className="hover:text-slate-900" href="/#early-access">
              Early access
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-6 md:pt-14">
        <SectionTitle
          kicker="Security & Cryptography"
          title="How QyberCore protects AI inference traffic"
          subtitle="This page describes the intended cryptographic design at a high level. Security is a process—production deployments may differ based on environment, threat model, and review outcomes."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold">Threat model</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">Passive recording:</span> adversaries may record network
                traffic today for future decryption (“harvest-now, decrypt-later”).
              </li>
              <li>
                <span className="font-semibold text-slate-900">Boundary awareness:</span> TLS may terminate at proxies,
                gateways, or provider infrastructure, increasing plaintext exposure inside networks.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Tenant isolation:</span> application-level API keys alone
                do not provide cryptographic separation between tenants or sessions.
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold">Design goal</div>
            <p className="mt-2 text-sm text-slate-600">
              QyberCore is configured to establish a post-quantum shared secret with the client, derive a fast symmetric
              session key, and exchange encrypted envelopes such that prompts and responses are not transmitted in
              plaintext over the client↔gateway link.
            </p>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Scope</div>
              <div className="mt-1 text-slate-600">
                PQC protection applies to <span className="font-semibold">client ↔ QyberCore</span>. Provider-side
                transport and downstream controls depend on provider interfaces and deployment configuration.
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <Card className="p-6 md:col-span-2">
            <div className="text-sm font-semibold">Cryptographic flow (high level)</div>
            <p className="mt-2 text-sm text-slate-600">
              One representative embodiment uses a lattice-based KEM (Kyber) for key establishment and AEAD (AES-GCM) for
              payload protection.
            </p>

            <div className="mt-4 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">1) Key establishment</div>
              <CodeBlock>
{`Client fetches server KEM public key → encapsulates to produce (kem_ciphertext, shared_secret_client)
Server decapsulates kem_ciphertext → shared_secret_server (matches client)
Both derive session_key = HKDF(shared_secret, info = tenant-bound context)`}</CodeBlock>

              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">2) Encrypted envelope</div>
              <CodeBlock>
{`Client encrypts payload with AEAD (e.g., AES-256-GCM):
  nonce, ciphertext = AEAD_Encrypt(session_key, { request_id, prompt, ... })

Client sends:
  kem_ciphertext, nonce, ciphertext, and tenant identifiers (headers)

Gateway decrypts only inside governed boundary:
  plaintext = AEAD_Decrypt(session_key, nonce, ciphertext)
  apply routing/policy → call provider → encrypt response back to client`}</CodeBlock>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold">Algorithm choices</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">KEM:</span> Kyber (variant selected per deployment)
              </li>
              <li>
                <span className="font-semibold text-slate-900">KDF:</span> HKDF-SHA-256 with tenant-bound context
              </li>
              <li>
                <span className="font-semibold text-slate-900">AEAD:</span> AES-256-GCM envelopes
              </li>
              <li className="text-xs text-slate-500">
                Final selections may evolve based on interoperability, security review, and deployment constraints.
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold">Control plane security (roadmap)</div>
            <p className="mt-2 text-sm text-slate-600">
              The control plane governs how encryption boundaries are used and monitored. Planned capabilities include:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Tenant lifecycle management and key rotation policies</li>
              <li>Routing rules, quotas, approvals, and policy packs</li>
              <li>Audit trails, telemetry, and export sinks to security tooling</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold">Responsible disclosure</div>
            <p className="mt-2 text-sm text-slate-600">
              If you find a security issue, please email{" "}
              <a className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4" href="mailto:contact@qybercore.com">
                contact@qybercore.com
              </a>{" "}
              with details and reproduction steps.
            </p>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
              <span className="font-semibold text-slate-900">Note:</span> This page is informational and does not
              constitute a guarantee of security or compliance.
            </div>
          </Card>
        </div>

        <footer className="mt-16 border-t border-slate-200 pt-8 text-sm text-slate-500">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {year} QyberCore. All rights reserved.</div>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-slate-700" href="/">
                Home
              </a>
              <a className="hover:text-slate-700" href="/#early-access">
                Early access
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

import React from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
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

export default function SecurityCryptographyPage() {
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
            <a className="hover:text-slate-900" href="#faq">
              FAQ
            </a>
            <a className="hover:text-slate-900" href="mailto:contact@qybercore.com">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-6 md:pt-14">
        <SectionTitle
          kicker="Security"
          title="Security & Cryptography"
          subtitle="This page provides a high-level overview intended for architects and reviewers. Certain implementation details are intentionally omitted."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">Threat model (high-level)</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Network adversaries may record inference traffic (requests/responses/metadata).</li>
              <li>• Long-horizon confidentiality risk exists if recorded traffic becomes decryptable later.</li>
              <li>• QyberCore is designed to reduce exposure by encrypting prompts/responses at the application layer.</li>
            </ul>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
              Note: Threat models vary by deployment. This overview is not a guarantee of security; it describes intended
              behavior in certain embodiments.
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">Cryptographic building blocks</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Post-quantum key establishment (e.g., lattice-based KEM) to derive a shared secret.</li>
              <li>• Key derivation (e.g., HKDF) to produce session-scoped symmetric keys.</li>
              <li>• Authenticated encryption (e.g., AES-GCM) for request/response envelopes.</li>
            </ul>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
              Algorithm choices may evolve as standards, libraries, and platform constraints change.
            </div>
          </Card>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">Boundary and governance</div>
            <p className="mt-2 text-sm text-slate-600">
              In certain embodiments, QyberCore decrypts only within a governed gateway boundary where policies and routing
              decisions are applied, then re-encrypts responses back to the client.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Policy evaluation at a single control point</li>
              <li>• Routing rules across providers</li>
              <li>• Audit/telemetry hooks (roadmap)</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">What we do not claim</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• We do not claim “quantum-proof” or “unbreakable” security.</li>
              <li>• We do not claim prevention of all data leakage or insider risks.</li>
              <li>• Security depends on deployment configuration, key handling, and operational controls.</li>
            </ul>
          </Card>
        </div>

        <section id="faq" className="mt-14">
          <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500">FAQ</div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold text-slate-900">Is this production-ready?</div>
              <p className="mt-2 text-sm text-slate-600">
                The data plane is being developed incrementally. Production readiness depends on your requirements and
                the maturity of the deployment, key management, monitoring, and control plane features.
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold text-slate-900">Do you publish exact implementation details?</div>
              <p className="mt-2 text-sm text-slate-600">
                We share high-level descriptions publicly. Certain techniques and flows may be covered by pending patent
                applications or are intentionally withheld for security and differentiation reasons.
              </p>
            </Card>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
  Certain architectural and cryptographic coordination techniques described on this page
  are covered by one or more pending patent applications filed with the U.S. Patent and
  Trademark Office.
</div>
          </div>
        </section>

        <footer className="mt-20 border-t border-slate-200 pt-8 text-sm text-slate-500">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} QyberCore. All rights reserved.</div>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-slate-700" href="/">
                Home
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

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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-semibold text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      {children}
    </span>
  );
}

function Icon({
  name,
  className,
}: {
  name: "shield" | "lock" | "key" | "graph" | "arrow" | "check";
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

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-slate-600">{children}</p>;
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-600">
      <Icon name="check" className="mt-0.5 h-4 w-4 text-emerald-700" />
      <span>{children}</span>
    </li>
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

      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="/" className="text-sm font-semibold text-slate-900 hover:text-slate-700">
            ← Back to QyberCore
          </a>
          <div className="flex items-center gap-2">
            <Pill>
              <Icon name="shield" className="h-4 w-4 text-emerald-700" />
              Security overview
            </Pill>
            <Pill>Patent pending (USPTO)</Pill>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-6 md:pt-14">
        <div className="max-w-3xl">
          <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-500">Security & Cryptography</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            How QyberCore protects AI prompts and responses
          </h1>
          <P>
            This page is intentionally high-level. It is designed to help security reviewers understand the threat model,
            the cryptographic approach, and the intended security boundary—without publishing implementation details.
          </P>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>
              <Icon name="key" className="h-4 w-4 text-indigo-700" />
              Post-quantum key establishment
            </Pill>
            <Pill>
              <Icon name="lock" className="h-4 w-4 text-blue-700" />
              Authenticated encryption (AEAD)
            </Pill>
            <Pill>
              <Icon name="graph" className="h-4 w-4 text-slate-700" />
              Control plane (roadmap)
            </Pill>
          </div>
        </div>

        <Card className="mt-8 p-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-2xl bg-emerald-50 p-2 text-emerald-700">
              <Icon name="shield" className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-900">What QyberCore is designed to prevent</div>
              <P>
                A common failure mode in AI systems is that secrets (prompts, tool outputs, PII, model responses, or inference
                metadata) become plaintext within internal networks, proxies, logs, or third-party tooling once TLS terminates.
                QyberCore is designed to reduce that exposure and provide quantum-resilient transport for AI traffic.
              </P>
              <ul className="mt-4 space-y-2">
                <Li>Recorded AI traffic being stored for future decryption (long-term confidentiality risk).</Li>
                <Li>Plaintext prompts/responses accidentally flowing into internal proxies and logging/telemetry systems.</Li>
                <Li>Weak tenant isolation where encryption context is not bound to tenant and request identity.</Li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Important: no system can guarantee “no leaks.” This describes the intended protections and boundaries.
              </p>
            </div>
          </div>
        </Card>

        <H2>Threat model (high level)</H2>
        <P>
          We assume adversaries may be able to observe or record network traffic between applications and gateways today,
          and that cryptographic capabilities will evolve over time. We also assume realistic enterprise conditions: TLS
          terminates, internal proxies exist, and some telemetry is unavoidable.
        </P>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Icon name="bolt" className="h-5 w-5 text-emerald-700" />
              In scope
            </div>
            <ul className="mt-3 space-y-2">
              <Li>Network-level recording (“harvest now, decrypt later” risk).</Li>
              <Li>Reducing plaintext exposure outside a governed boundary.</Li>
              <Li>Tenant-scoped key derivation to reduce blast radius.</Li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Icon name="lock" className="h-5 w-5 text-blue-700" />
              Out of scope (examples)
            </div>
            <P>
              Compromised client devices, malicious browser extensions, full gateway host compromise, or a compromised model
              provider are separate classes of risk. QyberCore reduces transport/handling exposure but does not replace endpoint
              hardening and provider governance.
            </P>
          </Card>
        </div>

        <H2>Cryptographic approach (conceptual)</H2>
        <P>
          QyberCore uses a post-quantum key establishment step to derive a shared secret, then uses that secret to derive
          short-lived session keys. Requests and responses are carried in authenticated encrypted envelopes (AEAD), intended
          to provide confidentiality and integrity for on-the-wire payloads.
        </P>

        <Card className="mt-6 p-6">
          <div className="text-sm font-semibold text-slate-900">Conceptual flow</div>
          <ol className="mt-3 space-y-3 text-sm text-slate-600">
            <li className="flex gap-3">
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                1
              </div>
              <div>
                <div className="font-semibold text-slate-900">Key establishment</div>
                <div>Client and gateway establish a per-session shared secret (post-quantum capable).</div>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                2
              </div>
              <div>
                <div className="font-semibold text-slate-900">Tenant-scoped derivation</div>
                <div>Session keys are derived with tenant / request context to limit blast radius.</div>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                3
              </div>
              <div>
                <div className="font-semibold text-slate-900">Governed processing boundary</div>
                <div>Gateway decrypts inside a controlled boundary where policy/routing decisions apply.</div>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                4
              </div>
              <div>
                <div className="font-semibold text-slate-900">Encrypted response</div>
                <div>Response is re-encrypted and returned to the client as ciphertext.</div>
              </div>
            </li>
          </ol>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            <div className="font-semibold text-slate-900">Note on specifics</div>
            <div className="mt-1">
              We describe the design at a high level. Specific algorithm choices, parameterization, and implementation
              hardening are subject to change and may be covered by pending patent applications.
            </div>
          </div>
        </Card>

        <H2>Control plane (roadmap)</H2>
        <P>
          QyberCore’s long-term value is a control plane that governs AI traffic across tenants and providers: policy packs,
          routing rules, audit logs, and usage visibility. These features are planned and will evolve with customer feedback.
        </P>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">Planned capabilities</div>
            <ul className="mt-3 space-y-2">
              <Li>Tenant onboarding + key lifecycle (rotation, revocation).</Li>
              <Li>Policy enforcement (quotas, approvals, routing constraints).</Li>
              <Li>Audit logging + telemetry exports (SIEM/warehouse integrations).</Li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">How reviewers engage</div>
            <P>
              If you’re evaluating QyberCore, we can share additional details under NDA and walk through a reference
              integration, expected deployment models, and operational controls.
            </P>
            <div className="mt-4">
             <a
  href="/#early-access"
  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
>
  Request a security review <Icon name="arrow" className="h-4 w-4" />
</a>
<p className="mt-2 text-xs text-slate-500">
  Prefer email?{" "}
  <a className="underline underline-offset-4" href="mailto:contact@qybercore.com">
    contact@qybercore.com
  </a>
</p>
            </div>
          </Card>
        </div>

        <footer className="mt-16 border-t border-slate-200 pt-8 text-sm text-slate-500">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} QyberCore. Patent pending (USPTO).</div>
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
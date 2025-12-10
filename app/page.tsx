import Image from "next/image";
import { EarlyAccessForm } from "./components/EarlyAccessForm";

export const metadata = {
  title: "QyberCore – Quantum-Safe Security for AI Pipelines",
  description:
    "QyberCore protects prompts, embeddings and AI pipelines using NIST-approved post-quantum cryptography.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/qybercore-logo.svg"
              alt="QyberCore logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-semibold tracking-tight">
              QyberCore
            </span>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#solution" className="hover:text-cyan-300">
              Solution
            </a>
            <a href="#how" className="hover:text-cyan-300">
              How it works
            </a>
            <a href="#features" className="hover:text-cyan-300">
              Features
            </a>
            <a href="#architecture" className="hover:text-cyan-300">
              Architecture
            </a>
            <a href="#early" className="hover:text-cyan-300">
              Early access
            </a>
          </nav>

          <a
            href="#early"
            className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400"
          >
            Join Early Access
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:pt-16">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-xs text-cyan-200 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Quantum-safe security for the AI era
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Quantum-Safe Security
              <br />
              <span className="text-cyan-400">for AI Pipelines</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              QyberCore is a drop-in firewall and SDK that protects prompts,
              embeddings, and LLM traffic from future quantum attacks using
              NIST-approved post-quantum cryptography.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#early"
                className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-cyan-400"
              >
                Join Early Access
              </a>

              <a
                href="#how"
                className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
              >
                View Architecture
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400">
              <span>Post-Quantum Cryptography</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>LLM-Native Protection</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>Developer-First Integration</span>
            </div>
          </div>

          {/* RIGHT SIDE DISPLAY */}
          <div className="relative">
            <div className="absolute inset-0 -translate-x-10 translate-y-6 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-xl shadow-cyan-500/10">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 mb-3">
                Traffic Overview
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Prompts secured</span>
                  <span className="text-cyan-300 font-medium">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Quantum-safe sessions</span>
                  <span className="text-cyan-300 font-medium">24,318</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Avg. latency added</span>
                  <span className="text-emerald-300 font-medium">&lt; 8ms</span>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="mb-3 text-[0.65rem] font-mono text-slate-400">
                  python · qybercore SDK
                </p>

                <pre className="overflow-x-auto text-[0.7rem] leading-relaxed text-slate-100">
{`from qybercore import Client

client = Client(
    provider="openai",
    api_key="OPENAI_API_KEY",
    qybercore_key="QYBERCORE_KEY",
)

resp = client.chat_completion(
    model="gpt-4.1",
    messages=[{"role": "user", "content": user_query}],
)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION / PROBLEM */}
        <section id="solution" className="mt-20 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Your AI Stack Is Not Ready for Quantum
          </h2>

          <p className="max-w-2xl text-sm text-slate-300">
            Sensitive data flows through LLMs every day: PII, contracts,
            financials, source code. RSA and ECC will be breakable by quantum
            computers. Attackers can capture encrypted traffic today and decrypt
            it later.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Harvest Now, Decrypt Later
              </p>
              <p className="mt-2">
                Encrypted AI traffic can be recorded today and broken once
                quantum machines are practical. Your prompts and responses are
                long-lived data.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Exposed Vector Databases
              </p>
              <p className="mt-2">
                Embeddings stored in vector DBs can be re-identified back to
                original content if compromised.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Compliance Pressure
              </p>
              <p className="mt-2">
                Governments and regulators are pushing for post-quantum
                migration. AI workloads are becoming a critical blind spot.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS – FLOW CARDS */}
        <section id="how" className="mt-20 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
              How QyberCore Fits Into Your Stack
            </h2>
            <p className="max-w-2xl text-sm text-slate-300 mt-2">
              QyberCore adds a quantum-safe layer between your applications and
              the AI providers you already use. Visually, it sits between your
              apps, your LLM SDKs and the external providers.
            </p>
          </div>

          {/* Flow "diagram" */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:justify-between">
              {/* Step 1 */}
              <div className="flex-1 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
                  1 · Client Apps
                </p>
                <p className="text-sm text-slate-100 font-semibold">
                  APIs, Gateways, Agent Runtimes
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  Your existing backend services, API gateways, and AI
                  orchestrators send traffic exactly as they do today.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex w-10 items-center justify-center text-cyan-300 text-2xl">
                →
              </div>

              {/* Step 2 */}
              <div className="flex-1 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
                  2 · QyberCore SDK
                </p>
                <p className="text-sm text-slate-100 font-semibold">
                  Drop-in client libraries
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  A thin Python/Node/Java wrapper that routes calls through
                  QyberCore without changing your business logic.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex w-10 items-center justify-center text-cyan-300 text-2xl">
                →
              </div>

              {/* Step 3 */}
              <div className="flex-1 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
                  3 · QyberCore PQ Proxy
                </p>
                <p className="text-sm text-slate-100 font-semibold">
                  PQC, policies &amp; routing
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  Kyber/Dilithium-based key exchange, AES-GCM payload
                  protection, policy enforcement and multi-provider routing.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex w-10 items-center justify-center text-cyan-300 text-2xl">
                →
              </div>

              {/* Step 4 */}
              <div className="flex-1 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
                  4 · LLMs &amp; Vector DBs
                </p>
                <p className="text-sm text-slate-100 font-semibold">
                  OpenAI, Bedrock, Anthropic, Pinecone…
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  Your existing AI providers and vector databases receive
                  traffic that is already quantum-safe.
                </p>
              </div>
            </div>

            {/* Mobile arrows */}
            <div className="mt-4 flex items-center justify-center gap-4 text-cyan-300 text-lg md:hidden">
              <span>1</span>→<span>2</span>→<span>3</span>→<span>4</span>
            </div>
          </div>

          {/* Text bullets */}
          <ol className="space-y-3 text-sm text-slate-300 max-w-2xl">
            <li>
              <span className="font-semibold text-cyan-300">
                1. Integrate the SDK
              </span>{" "}
              – Replace your raw OpenAI/Bedrock client with QyberCore&apos;s
              SDK in a few lines.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">
                2. QyberCore Proxy Applies PQC
              </span>{" "}
              – Kyber-based key exchange and hybrid AES-GCM encryption are
              applied before any request leaves your network.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">
                3. Your LLM / RAG Stack Stays the Same
              </span>{" "}
              – Same models, same vector DBs, but upgraded security posture and
              auditability.
            </li>
          </ol>
        </section>

        {/* ⭐ FEATURES – THIS IS THE SECTION YOU SAID WAS MISSING */}
        <section id="features" className="mt-20 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Built for the Quantum Era of AI
          </h2>

          <p className="max-w-2xl text-sm text-slate-300">
            QyberCore focuses on LLM-native security rather than generic TLS
            offload. These are the core capabilities we are building with
            design partners.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Post-Quantum Cryptography",
                desc: "Kyber and Dilithium-based primitives aligned with emerging NIST standards.",
              },
              {
                title: "Drop-In Proxy for LLM Traffic",
                desc: "Secure prompts and responses without rewriting your AI stack.",
              },
              {
                title: "Embedding & Vector DB Protection",
                desc: "Encrypt embeddings before storage in Pinecone, Qdrant or Elasticsearch.",
              },
              {
                title: "Secure LLMOps Logs",
                desc: "Protect chat histories, traces and metrics with strong cryptography.",
              },
              {
                title: "Developer-Friendly SDKs",
                desc: "Integrate via Python, Node or Java with minimal code changes.",
              },
              {
                title: "Cloud & On-Prem Deployment",
                desc: "Run QyberCore as a managed service or inside your own VPC perimeter.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <p className="text-sm font-semibold text-slate-50">
                  {item.title}
                </p>
                <p className="mt-2 text-xs text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE – COMPLEX GRID */}
        <section id="architecture" className="mt-20 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            QyberCore Architecture
          </h2>

          <p className="max-w-2xl text-sm text-slate-300">
            QyberCore is composed of a developer SDK layer, a high-performance
            PQC proxy and a set of connectors for LLM providers, vector
            databases and secure logging. It can run as a managed service or
            entirely inside your VPC.
          </p>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 mt-4">
            {/* SDK Layer */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                SDK Layer
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                QyberCore SDKs
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>· Python, Node, Java</li>
                <li>· Drop-in OpenAI/Bedrock clients</li>
                <li>· Retries, timeouts, metrics hooks</li>
              </ul>
            </div>

            {/* PQC Engine */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                PQC Engine
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Kyber &amp; Dilithium
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>· Kyber KEM for key exchange</li>
                <li>· Dilithium for signatures</li>
                <li>· Hybrid AES-GCM payloads</li>
              </ul>
            </div>

            {/* Policy & Routing */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Policy &amp; Routing
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Control plane
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>· Tenant isolation &amp; quotas</li>
                <li>· Model selection &amp; fallback</li>
                <li>· Geo-routing and canary flows</li>
              </ul>
            </div>

            {/* Connectors */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Connectors
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                LLM &amp; Vector adapters
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>· OpenAI, Bedrock, Anthropic</li>
                <li>· Internal / self-hosted LLMs</li>
                <li>· Pinecone, Qdrant, Elasticsearch</li>
              </ul>
            </div>

            {/* Secure Logs */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Secure Observability
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Logs &amp; traces
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>· Encrypted prompts &amp; responses</li>
                <li>· Structured LLM traces</li>
                <li>· SIEM / SOC integration ready</li>
              </ul>
            </div>

            {/* Key Management */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Key Management
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                KMS / HSM integration
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>· Cloud KMS (AWS/GCP/Azure)</li>
                <li>· On-prem HSM support</li>
                <li>· Key rotation &amp; lifecycle</li>
              </ul>
            </div>

            {/* Deployment */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Deployment
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Cloud &amp; On-Prem
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>· Managed cloud service</li>
                <li>· Helm charts for Kubernetes</li>
                <li>· Sidecar / gateway mode</li>
              </ul>
            </div>

            {/* Governance */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Governance
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Audit &amp; compliance
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                <li>· Tamper-evident logs</li>
                <li>· Data residency controls</li>
                <li>· Policy audit trails</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EARLY ACCESS */}
        <section
          id="early"
          className="mt-20 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900/80 p-6"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Join the QyberCore Early Access
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            We’re onboarding a limited set of design partners. If you're running
            AI in production and care about long-term security, let’s talk.
          </p>

          <EarlyAccessForm />
        </section>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-slate-800 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} QyberCore. All rights reserved.
        </footer>
      </main>
    </div>
  );
}


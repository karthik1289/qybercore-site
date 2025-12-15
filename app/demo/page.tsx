export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Demo</h1>
        <p className="mt-3 text-slate-600">
          The interactive demo console runs on the QyberCore FastAPI service (local development: <strong>:8000</strong>).
          It is not hosted inside Vercel at the moment.
        </p>
        <p className="mt-6 text-slate-600">
          Want access to a hosted demo? Email <a className="font-semibold underline" href="mailto:contact@qybercore.com">contact@qybercore.com</a>.
        </p>
      </div>
    </main>
  );
}

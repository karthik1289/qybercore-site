export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">QyberCore Demo</h1>
            <p className="mt-2 text-sm text-slate-400">
              Data Plane + Control Plane walkthrough
            </p>
          </div>

          <a
            href="/"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          >
            Back to site
          </a>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black">
          <video
            src="/qybercore_demo.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full"
          />
        </div>

        <div className="mt-4 text-xs text-slate-400">
          Tip: watch in full-screen for best clarity.
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QyberCore — Post-Quantum AI Data Plane",
  description:
    "Post-quantum secure data plane for AI inference with a programmable control plane for policy, routing, and audit.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
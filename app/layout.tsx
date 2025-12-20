
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QyberCore — Post-Quantum AI Data Plane",
  description:
    "QyberCore helps prevent AI secrets from leaking by enforcing a post-quantum secure data plane and a governed boundary for policy and routing.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
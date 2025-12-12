import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QyberCore — Quantum-Safe AI Gateway",
  description:
    "QyberCore secures and governs AI traffic using post-quantum cryptography.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}


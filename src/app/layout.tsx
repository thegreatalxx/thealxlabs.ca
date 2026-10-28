import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description = "Software lab building AI tools, developer utilities, and open-source experiments.";

export const metadata: Metadata = {
  title: "thealxlabs — Toronto software lab",
  description,
  metadataBase: new URL("https://thealxlabs.ca"),
  openGraph: {
    title: "thealxlabs — Toronto software lab",
    description,
    url: "https://thealxlabs.ca",
    siteName: "thealxlabs",
    images: [{ url: "/logo.png" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thealxlabs — Toronto software lab",
    description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased">{children}</body>
    </html>
  );
}

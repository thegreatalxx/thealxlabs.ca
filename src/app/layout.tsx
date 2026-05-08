import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { AnimationWrapper } from "../components/AnimationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thealxlabs — Toronto software lab",
  description: "AI tools, developer utilities, and open-source experiments.",
  metadataBase: new URL("https://thealxlabs.ca"),
  openGraph: {
    title: "thealxlabs — Toronto software lab",
    description: "AI tools, developer utilities, and open-source experiments.",
    url: "https://thealxlabs.ca",
    siteName: "thealxlabs",
    images: [
      {
        url: "https://thealxlabs.ca/logo.png",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thealxlabs — Toronto software lab",
    description: "AI tools, developer utilities, and open-source experiments.",
    images: ["https://thealxlabs.ca/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="bg-black text-white antialiased">
        <AnimationWrapper>
          {children}
        </AnimationWrapper>
      </body>
    </html>
  );
}

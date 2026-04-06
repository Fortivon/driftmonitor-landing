import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://driftmonitor.app"),
  title: "DriftMonitor – Detect breaking changes in external APIs",
  description:
    "Monitor API responses, detect JSON schema drift, and catch breaking changes before they reach production.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/logo-mark-32.png", type: "image/png", sizes: "32x32" },
      { url: "/brand/logo-mark-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/brand/logo-mark-192.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DriftMonitor – Detect breaking changes in external APIs",
    description:
      "Monitor API responses, detect JSON schema drift, and catch breaking changes before they reach production.",
    url: "https://driftmonitor.app",
    siteName: "DriftMonitor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DriftMonitor – Detect breaking changes in external APIs",
    description:
      "Monitor API responses, detect JSON schema drift, and catch breaking changes before they reach production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

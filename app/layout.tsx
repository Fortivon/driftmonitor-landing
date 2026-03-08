import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://driftmonitor.app"),
  title: "DriftMonitor – Detect breaking changes in external APIs",
  description:
    "Monitor API responses, detect JSON schema drift, and catch breaking changes before they reach production.",
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

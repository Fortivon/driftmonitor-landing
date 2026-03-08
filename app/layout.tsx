import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://driftmonitor.app"),
  title: "DriftMonitor – Detect breaking changes in external APIs",
  description:
    "Monitor API responses, detect JSON schema drift, and catch breaking changes before they reach production.",
  openGraph: {
    title: "DriftMonitor – Detect breaking changes in external APIs",
    description:
      "Monitor API responses, detect JSON schema drift, and catch breaking changes before they reach production.",
  },
  twitter: {
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

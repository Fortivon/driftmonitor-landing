import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DriftMonitor Landing Page",
  description: "Detect breaking changes in external APIs before they break production.",
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

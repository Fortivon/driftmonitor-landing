"use client";

import { FormEvent, useState } from "react";

const problemPoints = [
  "Fields disappear",
  "Types change",
  "New required fields appear",
  "Integrations break in production",
];

const flowSteps = [
  "Register an endpoint",
  "DriftMonitor builds a schema baseline",
  "Future responses are compared",
  "Breaking changes trigger alerts",
];

const credibilityItems = [
  "Multi-tenant architecture",
  "Manual monitor execution",
  "JSON schema snapshots",
  "Drift detection",
  "Snapshot history",
  "Drift analytics",
  "Alert pipeline",
  "Stripe billing in test mode",
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [apis, setApis] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setShowSuccessMessage(false);
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim(), apis: apis.trim() }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setShowSuccessMessage(true);
      setEmail("");
      setApis("");
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-20">
        <section className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Detect breaking changes in external APIs before they break production.
          </h1>
          <p className="max-w-3xl text-base text-slate-600 sm:text-lg">
            DriftMonitor continuously monitors API endpoints and alerts you when JSON schema changes.
          </p>
          <button className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
            Request Alpha Access
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">External APIs change silently</h2>
          <ul className="grid gap-3 text-slate-700 sm:grid-cols-2">
            {problemPoints.map((point) => (
              <li
                key={point}
                className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm sm:text-base"
              >
                • {point}
              </li>
            ))}
          </ul>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Most integrations with external APIs look stable in staging, but subtle schema changes often surface only after
            deployment, where they cause unexpected production failures.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">How it works</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {flowSteps.map((step, index) => (
              <div key={step} className="rounded-md border border-slate-200 bg-white p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Step {index + 1}</p>
                <p className="text-sm font-medium text-slate-800 sm:text-base">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">Example schema drift</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Baseline schema</p>
              <div className="rounded-md border border-slate-200 bg-white p-4 font-mono text-sm leading-6 text-slate-800">
                <p>user.id: string</p>
                <p>user.name: string</p>
                <p>user.email: string</p>
              </div>
            </div>
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-rose-500">New response</p>
              <div className="rounded-md border border-rose-200 bg-white p-4 font-mono text-sm leading-6 text-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 text-rose-700">
                  <p className="font-semibold">user.id: number</p>
                  <span className="rounded-full border border-rose-300 bg-rose-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-rose-700">
                    breaking change
                  </span>
                </div>
                <p>user.name: string</p>
                <p>user.email: string</p>
              </div>
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            DriftMonitor compares response schemas over time and alerts you when fields are removed or types change.
          </p>
        </section>

        <section className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Already working</p>
          <h2 className="max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl">
            Built for real API monitoring workflows
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            DriftMonitor is already running in the cloud and supports the core workflow needed to detect schema drift in
            external APIs.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {credibilityItems.map((item) => (
              <li
                key={item}
                className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-slate-200 bg-slate-50 px-6 py-10 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Private Alpha</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl">
            Looking for developers who integrate external APIs
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            DriftMonitor is currently in private alpha. I&apos;m looking for a small group of developers to test it with
            real API integrations and share feedback.
          </p>
          <p className="mt-3 text-xs text-slate-500 sm:text-sm">Current access is API-only via Swagger.</p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-5 text-left">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="apis" className="text-sm font-medium text-slate-700">
                Which APIs do you integrate with?
              </label>
              <input
                id="apis"
                type="text"
                placeholder="Stripe, Shopify, Slack, OpenAI..."
                value={apis}
                onChange={(event) => setApis(event.target.value)}
                required
                className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Request Alpha Access"}
            </button>

            {showSuccessMessage ? (
              <p className="text-sm text-emerald-700">Thanks! We&apos;ll contact you soon.</p>
            ) : null}

            {errorMessage ? <p className="text-sm text-rose-700">{errorMessage}</p> : null}
          </form>
        </section>
      </div>
    </main>
  );
}

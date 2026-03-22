"use client";

import { FormEvent, useState } from "react";

const problemPoints = [
  "A provider changes a response shape without notice",
  "Your integration passes tests, then fails in production",
  "Customers notice missing data before your team does",
  "You only find the change after debugging a live incident",
];

const flowSteps = [
  "Choose an external API endpoint to monitor",
  "DriftMonitor stores a JSON schema snapshot from the response",
  "Later responses are compared against the baseline",
  "Breaking drift is surfaced before it turns into an incident",
];

const credibilityItems = [
  "Monitor endpoints on demand",
  "Store JSON schema snapshots over time",
  "Detect removed fields and type changes",
  "Review snapshot history for each monitor",
  "Track drift patterns across checks",
  "Send drift events into an alert pipeline",
  "Built on a multi-tenant cloud architecture",
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
    <main className="relative min-h-screen overflow-hidden bg-[#070b1b] px-6 py-16 text-[#e8ecff] sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,107,222,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(126,168,242,0.16),transparent_30%)]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-20">
        <section className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm font-medium text-[#9eb0db]">
            For teams shipping integrations on top of Stripe, Shopify, Slack, OpenAI, and other third-party APIs
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Catch silent API changes before they become customer-facing incidents.
          </h1>
          <p className="max-w-3xl text-base text-[#b9c6ea] sm:text-lg">
            DriftMonitor helps developers detect schema drift and breaking response changes in external APIs before an
            integration fails in production.
          </p>
          <a
            href="#private-alpha"
            className="rounded-md bg-gradient-to-r from-[#a86bde] to-[#7ea8f2] px-6 py-3 text-sm font-semibold text-[#081026] transition hover:opacity-90"
          >
            Get API Alpha Access
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">External APIs rarely break loudly</h2>
          <ul className="grid gap-3 text-[#c7d2f2] sm:grid-cols-2">
            {problemPoints.map((point) => (
              <li
                key={point}
                className="rounded-md border border-[#24335f] bg-[#0f1630]/80 px-4 py-3 text-sm sm:text-base"
              >
                • {point}
              </li>
            ))}
          </ul>
          <p className="max-w-3xl text-sm leading-relaxed text-[#b9c6ea] sm:text-base">
            Most third-party API changes do not announce themselves with a clean outage. A field disappears, a type
            changes, or a nested object shifts shape, and the first real signal is often a broken workflow, bad data, or
            a support ticket from a customer.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">How it works</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {flowSteps.map((step, index) => (
              <div key={step} className="rounded-md border border-[#24335f] bg-[#0f1630]/80 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#9eb0db]">Step {index + 1}</p>
                <p className="text-sm font-medium text-[#dce5ff] sm:text-base">{step}</p>
              </div>
            ))}
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-[#b9c6ea] sm:text-base">
            The goal is simple: make response drift visible early enough that your team can fix the integration before
            users discover the problem for you.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">Example schema drift</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-[#24335f] bg-[#0f1630]/80 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#9eb0db]">Baseline schema</p>
              <div className="rounded-md border border-[#24335f] bg-[#0a1228] p-4 font-mono text-sm leading-6 text-[#dce5ff]">
                <p>user.id: string</p>
                <p>user.name: string</p>
                <p>user.email: string</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#8954cd] bg-[#2a1f4d]/55 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#c8a5f0]">New response</p>
              <div className="rounded-md border border-[#8954cd] bg-[#0a1228] p-4 font-mono text-sm leading-6 text-[#dce5ff]">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[#e2b1ff]">
                  <p className="font-semibold">user.id: number</p>
                  <span className="rounded-full border border-[#a86bde] bg-[#3a2a64] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#dfb8ff]">
                    breaking change
                  </span>
                </div>
                <p>user.name: string</p>
                <p>user.email: string</p>
              </div>
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-[#b9c6ea] sm:text-base">
            If your code expects <span className="font-mono">user.id</span> to be a string and the provider starts
            returning a number, the API may still respond with <span className="font-mono">200 OK</span> while your
            integration breaks downstream. DriftMonitor is built to catch that kind of change before it reaches
            customers.
          </p>
        </section>

        <section className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9eb0db]">Already working</p>
          <h2 className="max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl">
            Built for teams that need early warning, not more guesswork
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#b9c6ea] sm:text-base">
            DriftMonitor already supports the core monitoring workflow needed to spot response drift before it turns into
            user-visible failures.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {credibilityItems.map((item) => (
              <li
                key={item}
                className="rounded-md border border-[#24335f] bg-[#0f1630]/80 px-4 py-3 text-sm font-medium text-[#c7d2f2]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 rounded-lg border border-[#24335f] bg-[#0f1630]/85 px-6 py-8 sm:px-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Is DriftMonitor for you?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-[#7ea8f2] bg-[#152447] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#97bcff]">Best fit for private alpha</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#dce5ff] sm:text-base">
                <li>• You are a backend, integrations, or platform engineer, or a technical founder.</li>
                <li>• You depend on third-party APIs or internal APIs that can change silently.</li>
                <li>• You want to catch schema/response drift before customers or support do.</li>
                <li>• You want a lightweight early warning signal for integration breakage.</li>
              </ul>
            </div>
            <div className="rounded-md border border-[#a86bde] bg-[#261a45] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d7b0ff]">Not ideal yet</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#dce5ff] sm:text-base">
                <li>• Teams looking for generic uptime monitoring.</li>
                <li>• Non-technical users without API ownership.</li>
                <li>• Teams expecting a fully polished dashboard workflow today.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold sm:text-3xl">How to test in 5 minutes</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-[#24335f] bg-[#0a1228] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9eb0db]">Who this is for</p>
              <p className="mt-2 text-sm leading-relaxed text-[#c7d2f2] sm:text-base">
                Backend, integrations, and platform engineers who depend on third-party APIs and have been burned by
                silent response changes.
              </p>
            </div>
            <div className="rounded-md border border-[#24335f] bg-[#0a1228] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9eb0db]">Best first test</p>
              <p className="mt-2 text-sm leading-relaxed text-[#c7d2f2] sm:text-base">
                Pick one endpoint your team already relies on and run a few checks to confirm whether drift signals are
                useful for your real incident risk.
              </p>
            </div>
          </div>
          <div className="rounded-md border border-[#24335f] bg-[#0a1228] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9eb0db]">How to test in 5 minutes</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-[#c7d2f2] sm:text-base">
              <li>Request private alpha access using the form below.</li>
              <li>
                Open the API docs in Swagger at{" "}
                <a
                  href="https://api.driftmonitor.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#b8ccff] underline decoration-[#4c679f] underline-offset-2"
                >
                  api.driftmonitor.app
                </a>
                .
              </li>
              <li>Create a monitor for one real endpoint your team already relies on (production or staging).</li>
              <li>Run baseline and follow-up checks, then review detected schema differences.</li>
            </ol>
          </div>
          <div className="rounded-md border border-[#24335f] bg-[#0a1228] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9eb0db]">What feedback I want</p>
            <p className="mt-2 text-sm leading-relaxed text-[#c7d2f2] sm:text-base">
              Share one true positive and one noisy alert. Include the endpoint, what changed, and whether the drift
              signal would have helped you act earlier in production.
            </p>
          </div>
          <p className="text-sm text-[#b9c6ea]">
            Current onboarding is private alpha and API-first via Swagger, focused on validating useful drift signals
            before wider rollout.
          </p>
        </section>

        <section
          id="private-alpha"
          className="rounded-lg border border-[#3a4f7f] bg-[#101933]/90 px-6 py-10 text-center sm:px-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9eb0db]">Private Alpha</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl">
            Get earlier visibility into the APIs your product depends on
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#b9c6ea] sm:text-base">
            DriftMonitor is in private alpha for developers and small teams with real third-party API dependencies. Join
            if you want to help shape the product and catch integration risk earlier in your stack.
          </p>
          <p className="mt-3 text-xs text-[#9eb0db] sm:text-sm">
            Current alpha access is API-only via Swagger, with a small group of design partners.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-5 text-left">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-[#c7d2f2]">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="rounded-md border border-[#3a4f7f] bg-[#070d1f] px-4 py-2.5 text-sm text-[#e8ecff] outline-none transition placeholder:text-[#7f93bf] focus:border-[#7ea8f2] focus:ring-2 focus:ring-[#7ea8f2]/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="apis" className="text-sm font-medium text-[#c7d2f2]">
                Which APIs do you integrate with?
              </label>
              <input
                id="apis"
                type="text"
                placeholder="Stripe, Shopify, Slack, OpenAI..."
                value={apis}
                onChange={(event) => setApis(event.target.value)}
                required
                className="rounded-md border border-[#3a4f7f] bg-[#070d1f] px-4 py-2.5 text-sm text-[#e8ecff] outline-none transition placeholder:text-[#7f93bf] focus:border-[#7ea8f2] focus:ring-2 focus:ring-[#7ea8f2]/40"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-gradient-to-r from-[#a86bde] to-[#7ea8f2] px-6 py-3 text-sm font-semibold text-[#081026] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Request Private Alpha Access"}
            </button>

            {showSuccessMessage ? (
              <p className="text-sm text-[#93f0c7]">Thanks! We&apos;ll contact you soon.</p>
            ) : null}

            {errorMessage ? <p className="text-sm text-[#ff9db9]">{errorMessage}</p> : null}
          </form>
        </section>
      </div>
    </main>
  );
}

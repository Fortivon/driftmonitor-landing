import Image from "next/image";
import type { ReactNode } from "react";

const docsUrl = "https://api.driftmonitor.app/docs";
const apiUrl = "https://api.driftmonitor.app";

const navigationItems = [
  { label: "Why DriftMonitor", href: "#why" },
  { label: "How it works", href: "#how-it-works" },
  { label: "API Docs", href: docsUrl, external: true },
];

const signalCards = [
  {
    title: "The endpoint can stay healthy",
    description:
      "A provider can keep returning 200 OK while changing a field, type, or nested response your integration depends on.",
  },
  {
    title: "The failure appears downstream",
    description:
      "The first visible symptom may be a broken workflow, corrupted data, or a customer report instead of an uptime alert.",
  },
  {
    title: "Contract drift needs a different signal",
    description:
      "DriftMonitor compares real API responses against a known baseline so structural changes become visible earlier.",
  },
];

const workflowSteps = [
  {
    title: "Create a monitor",
    description:
      "Point DriftMonitor at an external endpoint your service depends on and define the monitoring cadence.",
  },
  {
    title: "Capture the baseline",
    description:
      "A healthy response becomes the reference contract used for future comparisons.",
  },
  {
    title: "Detect and alert on drift",
    description:
      "Later responses are compared with the baseline and meaningful changes are classified, recorded, and routed to alert channels.",
  },
];

const capabilities = [
  "Response-structure snapshots and baseline comparison",
  "Breaking and warning-level drift classification",
  "Independent production and staging baselines",
  "Execution history for audited comparisons",
  "Webhook, Slack, Discord, and email alert paths",
  "Signed webhooks, retries, deduplication, and dead-letter visibility",
];

const bestFitItems = [
  "Backend and platform teams relying on third-party APIs",
  "SaaS products with payment, messaging, AI, logistics, or partner integrations",
  "Teams where a silent payload change can break downstream behavior before an outage is visible",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.22),transparent_24%),linear-gradient(180deg,#cbd5e1_0%,#e2e8f0_12%,#f8fafc_34%,#e2e8f0_100%)] px-6 py-5 text-slate-900 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:gap-7">
        <header className="sticky top-3 z-20 rounded-xl border border-slate-800/80 bg-[linear-gradient(180deg,rgba(2,6,23,0.94),rgba(15,23,42,0.94))] px-3 py-2 text-slate-200 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.82)] backdrop-blur sm:px-4">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <a href="#product" className="inline-flex items-center">
              <BrandLockup priority />
            </a>

            <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
              <nav aria-label="Primary" className="flex flex-wrap items-center gap-1 text-sm font-medium">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="rounded-md px-3 py-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href={docsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Explore the API
              </a>
            </div>
          </div>
        </header>

        <section
          id="product"
          className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[linear-gradient(180deg,rgba(2,6,23,0.97),rgba(15,23,42,0.97))] p-6 text-slate-100 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.85)] sm:p-7 lg:p-9"
        >
          <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
                  API-first contract drift monitoring
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-[3.2rem]">
                  Detect API drift before it breaks your integrations.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  DriftMonitor continuously compares API responses against a known baseline and surfaces structural
                  changes that ordinary uptime checks can miss.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                >
                  Open API docs
                </a>
                <a
                  href={apiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                >
                  Check API status
                </a>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-slate-400">
                DriftMonitor is currently API-first. The focus is narrow: detect meaningful contract changes, preserve
                the evidence, and alert engineering teams before downstream failures become incidents.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Baseline comparison",
                  "Breaking change detection",
                  "Auditable history",
                  "Alert delivery",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <DriftExample />
          </div>
        </section>

        <section
          id="why"
          className="grid gap-6 rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.4)] sm:p-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
        >
          <div className="space-y-4">
            <SectionEyebrow>Why this exists</SectionEyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-slate-950">
              200 OK can still hide a broken contract.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Traditional availability monitoring tells you whether an endpoint responds. DriftMonitor focuses on a
              different question: is the response still shaped the way your integration expects?
            </p>
          </div>

          <div className="grid gap-3">
            {signalCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50/90 px-5 py-4 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="space-y-6 rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.42)] sm:p-8"
        >
          <div className="space-y-3">
            <SectionEyebrow>How it works</SectionEyebrow>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950">
              Baseline, compare, alert.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              The product stays deliberately close to the contract. No dashboard is required to understand the core
              workflow.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Step {index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-900 bg-slate-950 px-6 py-8 text-slate-100 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.9)] sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="space-y-4">
              <SectionEyebrow className="text-slate-400">Current API capabilities</SectionEyebrow>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white">
                Focused on the monitoring signal, not the surface around it.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                DriftMonitor is an alpha product, but the backend already covers the core lifecycle needed to evaluate
                contract drift on a real API dependency.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 text-sm leading-6 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-6 shadow-[0_18px_50px_-44px_rgba(5,150,105,0.35)] sm:p-8">
            <SectionEyebrow className="text-emerald-700">Who it is for</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950">
              Teams that own integration reliability.
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              {bestFitItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_50px_-44px_rgba(15,23,42,0.3)] sm:p-8">
            <SectionEyebrow>What it is not</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950">
              Not another generic uptime dashboard.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              DriftMonitor is not trying to replace availability monitoring, logs, or full observability platforms. It
              covers the gap between “the endpoint responded” and “the contract is still safe for my code.”
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-800 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] px-6 py-10 text-slate-100 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.88)] sm:px-8 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="space-y-4">
              <SectionEyebrow className="text-slate-400">Try the API</SectionEyebrow>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white">
                Start with one endpoint your service already depends on.
              </h2>
              <p className="max-w-3xl text-base leading-7 text-slate-300">
                Use the Swagger documentation to inspect the current API, authentication flow, monitor lifecycle, and
                available operations.
              </p>
            </div>

            <a
              href={docsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Open API docs
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function DriftExample() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-700 bg-slate-950 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Contract comparison</p>
          <p className="mt-1 text-sm font-medium text-slate-200">payments-api / latest check</p>
        </div>
        <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300">
          BREAKING
        </span>
      </div>

      <div className="grid gap-px bg-slate-800 md:grid-cols-2">
        <CodePanel
          label="Baseline"
          code={`HTTP 200 OK\n\n{\n  "id": 123,\n  "status": "paid",\n  "amount": 49.90\n}`}
        />
        <CodePanel
          label="Current response"
          code={`HTTP 200 OK\n\n{\n  "id": 123,\n  "status": "paid",\n  "amount": "49.90"\n}`}
        />
      </div>

      <div className="space-y-3 border-t border-slate-800 bg-slate-900/70 px-5 py-5">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-mono text-red-300">amount</span>
          <span className="text-slate-500">changed type</span>
          <span className="rounded bg-slate-800 px-2 py-1 font-mono text-xs text-slate-300">number</span>
          <span className="text-slate-500">to</span>
          <span className="rounded bg-red-500/10 px-2 py-1 font-mono text-xs text-red-300">string</span>
        </div>
        <p className="text-sm leading-6 text-slate-400">
          The endpoint is still up. The contract is not the same.
        </p>
      </div>
    </div>
  );
}

function CodePanel({ label, code }: { label: string; code: string }) {
  return (
    <div className="bg-slate-950 p-5">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[0.82rem] leading-6 text-slate-300">{code}</pre>
    </div>
  );
}

type BrandLockupProps = {
  priority?: boolean;
};

function BrandLockup({ priority = false }: BrandLockupProps) {
  return (
    <span className="inline-flex items-center gap-2 text-slate-50">
      <span className="relative flex h-8 w-[1.95rem] shrink-0 items-center justify-center">
        <span className="absolute inset-x-0.5 bottom-1 top-1 rounded-full bg-sky-300/12 blur-md" />
        <Image
          alt=""
          aria-hidden="true"
          className="relative h-auto w-full drop-shadow-[0_10px_18px_rgba(14,165,233,0.22)]"
          height={114}
          priority={priority}
          src="/brand/logo-mark.png"
          width={124}
        />
      </span>
      <span className="flex items-center text-[1.01rem] font-semibold tracking-[-0.04em] text-white sm:text-[1.06rem]">
        <span>Drift</span>
        <span className="text-slate-300">Monitor</span>
      </span>
    </span>
  );
}

function SectionEyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${className ?? "text-slate-500"}`}>{children}</p>
  );
}

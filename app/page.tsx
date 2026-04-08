import Image from "next/image";
import type { ReactNode } from "react";
import { ExpandableScreenshot } from "@/components/expandable-screenshot";

const appUrl = "https://app.driftmonitor.app";
const docsUrl = "https://api.driftmonitor.app/docs";

const navigationItems = [
  { label: "Product", href: "#product" },
  { label: "API Docs", href: docsUrl, external: true },
];

const signalCards = [
  {
    title: "200 OK does not mean the contract is safe",
    description:
      "Third-party APIs often keep returning success while a field disappears, a type changes, or a nested object shifts shape underneath your integration.",
  },
  {
    title: "Schema drift usually shows up late",
    description:
      "The first visible signal is often missing data, a broken workflow, or a support ticket after the provider change is already live.",
  },
  {
    title: "Generic uptime checks miss this class of failure",
    description:
      "DriftMonitor is built for response and schema drift, not just whether an endpoint responds at all.",
  },
];

const workflowSteps = [
  {
    title: "Open the app",
    description:
      "Use the live sign-in flow to enter DriftMonitor and reach the current operator workspace.",
  },
  {
    title: "Create a monitor and save a baseline",
    description:
      "Point DriftMonitor at a real endpoint your team already depends on and capture the response shape you expect.",
  },
  {
    title: "Review drift and alert signals",
    description:
      "When responses change, inspect the drift summary, execution history, and alert evidence before customers feel it.",
  },
];

const productViews = [
  {
    eyebrow: "Monitors workspace",
    title: "See monitor health, cadence, drift state, and alert posture in one place",
    description:
      "The list stays operational: what changed recently, which monitor needs review, and where to drill in next.",
    src: "/product-shots/app-monitors-active-overview.png",
    alt: "DriftMonitor monitors list showing monitor health, drift signal, alert signal, and cadence.",
    width: 1440,
    height: 900,
    priority: false,
  },
  {
    eyebrow: "Drift review",
    title: "Review the exact breaking change before the provider update turns into customer impact",
    description:
      "The drift workspace makes the change concrete with severity, affected area, and readable field-level evidence.",
    src: "/product-shots/app-drift-breaking-change.png",
    alt: "DriftMonitor drift workspace showing a breaking field removal and a warning field addition.",
    width: 1440,
    height: 900,
    priority: false,
  },
  {
    eyebrow: "Alerts view",
    title: "Keep delivery evidence and readable alert context attached to the monitor",
    description:
      "Alert review stays grounded in the same drift context your team needs to decide whether to investigate or route the issue.",
    src: "/product-shots/app-alerts-retrying-delivery.png",
    alt: "DriftMonitor alerts view showing alert delivery status and recent evidence.",
    width: 1440,
    height: 900,
    priority: false,
  },
];

const capabilityItems = [
  "Create and review monitors in the web product",
  "Compare the latest response against a saved baseline",
  "Surface breaking changes and warning-level drift separately",
  "Inspect execution history for each monitored endpoint",
  "Review alert delivery evidence alongside the drift context",
  "Enter the live app through the current sign-in flow",
];

const bestFitItems = [
  "Backend, integrations, and platform teams responsible for third-party API reliability",
  "Teams depending on Stripe, Shopify, Slack, OpenAI, partner APIs, webhooks, or similar external contracts",
  "Technical teams that want earlier warning when response shape changes silently",
];

const notForItems = [
  "Teams looking for generic uptime monitoring",
  "Non-technical stakeholders without ownership of the integration surface",
  "Organizations expecting a broad enterprise workflow beyond the current alpha scope",
];

const testSteps = [
  "Open the app and sign in to the current DriftMonitor workspace flow.",
  "Choose one endpoint your team already relies on.",
  "Create a monitor, save a baseline, and run follow-up checks.",
  "Use the docs when you need API details, then review drift and alert evidence in the product.",
];

const productProofTags = [
  "Baseline comparison",
  "Readable drift summary",
  "Execution history",
  "Alert evidence",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.24),transparent_24%),linear-gradient(180deg,#cbd5e1_0%,#e2e8f0_10%,#f8fafc_30%,#e2e8f0_100%)] px-6 py-5 text-slate-900 sm:px-8 lg:px-12">
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
                    className="rounded-md px-3 py-1.5 text-slate-300 transition hover:bg-white/7 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Open app
              </a>
            </div>
          </div>
        </header>

        <section
          id="product"
          className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(15,23,42,0.96))] p-6 text-slate-100 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.85)] sm:p-7 lg:p-9"
        >
          <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
                  API drift monitoring for teams shipping on top of external APIs
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-[3.2rem]">
                  Catch silent API changes before they become incidents.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Monitor response drift, compare against a baseline, and surface breaking changes before customers feel
                  them. DriftMonitor is built for teams depending on third-party APIs, not generic uptime checks.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                >
                  Open app
                </a>
                <a
                  href={docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                >
                  API docs
                </a>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-slate-400">
                Sign in to an existing workspace or create an account from the live product entry flow. API docs remain
                close by when you need contract details or setup context.
              </p>

              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/60 px-4 py-4 text-sm leading-6 text-slate-300">
                <p className="font-medium text-slate-100">Alpha note</p>
                <p className="mt-2">
                  DriftMonitor is still in an early product stage, with private onboarding and an evolving dashboard,
                  but the current web app, login flow, and operator workflow are already live.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {productProofTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <ScreenshotFrame
              alt="DriftMonitor monitor detail showing drift summary, baseline comparison, and execution context."
              eyebrow="Live product proof"
              priority
              src="/product-shots/app-monitor-detail-drift-summary-v02.png"
              title="Real monitor detail with drift summary"
            />
          </div>
        </section>

        <section className="grid gap-6 rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.4)] sm:p-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="space-y-4">
            <SectionEyebrow>Why this matters</SectionEyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-slate-950">
              External APIs rarely fail with a clean outage.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              More often, everything still returns <span className="font-mono text-[0.95em] text-slate-900">200 OK</span>
              {" "}
              while a field disappears, a type changes, or a nested object drifts out of the shape your code expects.
              That is where DriftMonitor is meant to help.
            </p>
          </div>

          <div className="grid gap-3">
            {signalCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/90 px-5 py-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <SectionEyebrow>Product in action</SectionEyebrow>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950">
              Real product proof, centered on drift visibility instead of abstract promise.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              DriftMonitor keeps baseline comparison, readable drift review, and follow-up evidence close to the monitor
              that owns the risk.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ProductProofCard {...productViews[0]} className="lg:col-span-2" />
            <ProductProofCard {...productViews[1]} />
            <ProductProofCard {...productViews[2]} />
          </div>
        </section>

        <section className="space-y-6 rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.42)] sm:p-8">
          <div className="space-y-3">
            <SectionEyebrow>How it works</SectionEyebrow>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950">
              A simple workflow for catching response drift earlier.
            </h2>
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="space-y-4">
              <SectionEyebrow className="text-slate-400">What teams can already do</SectionEyebrow>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white">
                Enough product depth to test DriftMonitor on a real dependency now.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                The current alpha is focused, but it is already grounded in a real operator workflow instead of a
                concept-only page.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilityItems.map((item) => (
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

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-6 shadow-[0_18px_50px_-44px_rgba(5,150,105,0.35)] sm:p-8">
            <SectionEyebrow className="text-emerald-700">Who it is for</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950">
              Best fit for backend, integrations, and platform teams.
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

          <div className="rounded-[2rem] border border-amber-200 bg-amber-50/70 p-6 shadow-[0_18px_50px_-44px_rgba(217,119,6,0.3)] sm:p-8">
            <SectionEyebrow className="text-amber-700">Scope boundary</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950">
              Honest fit matters more than broad positioning.
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              {notForItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.42)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-4">
              <SectionEyebrow>How to test in 5 minutes</SectionEyebrow>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-slate-950">
                Start with one endpoint your team already trusts and depends on.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                The fastest way to evaluate DriftMonitor is to point it at a real dependency, save a baseline, and see
                whether the signal would help your team act earlier.
              </p>
            </div>

            <div className="space-y-4">
              <ol className="space-y-3">
                {testSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-sm leading-6 text-slate-700 sm:text-base">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-6 text-slate-600">
                API docs are available at{" "}
                <a
                  href={docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-2"
                >
                  api.driftmonitor.app/docs
                </a>
                . The alpha scope is still intentionally focused, but the current workflow already covers monitor setup,
                drift review, execution history, and alert evidence in the product.
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-800 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] px-6 py-10 text-slate-100 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.88)] sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <SectionEyebrow className="text-slate-400">Open DriftMonitor</SectionEyebrow>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white">
                Use the live product, then keep the docs close for implementation detail.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                DriftMonitor now has a real app entry path. Use the sign-in flow to reach the product, and keep the API
                docs nearby when you need contract-level guidance.
              </p>
              <p className="text-sm leading-6 text-slate-400">
                Alpha note: onboarding remains selective and the dashboard is still evolving, but the current app is no
                longer just a request-access concept page.
              </p>
            </div>

            <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-sm sm:p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Choose the path that matches what you need.</h3>
                <div className="grid gap-3">
                  <a
                    href={appUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                  >
                    Sign in to the app
                  </a>
                  <a
                    href={docsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
                  >
                    Open API docs
                  </a>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                New workspaces can start from the live auth entry flow. Existing teams can sign in directly and continue
                monitor review inside the product.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
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

type ProductProofCardProps = {
  alt: string;
  className?: string;
  description: string;
  eyebrow: string;
  height: number;
  priority: boolean;
  src: string;
  title: string;
  width: number;
};

function ProductProofCard({
  alt,
  className,
  description,
  eyebrow,
  height,
  priority,
  src,
  title,
  width,
}: ProductProofCardProps) {
  return (
    <article
      className={`overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/95 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.45)] ${className ?? ""}`}
    >
      <div className="space-y-3 px-5 py-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p>
        <h3 className="text-xl font-semibold leading-tight text-slate-950">{title}</h3>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
      </div>
      <div className="border-t border-slate-200 bg-[linear-gradient(180deg,rgba(241,245,249,0.92),rgba(248,250,252,0.99))] p-4 sm:p-5">
        <ExpandableScreenshot alt={alt} height={height} src={src} title={title} width={width}>
          <div className="overflow-hidden rounded-[1.2rem] border border-slate-300 bg-slate-950 shadow-[0_20px_38px_-28px_rgba(15,23,42,0.42)]">
              <Image
                alt={alt}
                className="h-auto w-full"
                height={height}
                priority={priority}
                sizes="(min-width: 1024px) 44vw, 100vw"
                src={src}
                width={width}
              />
          </div>
        </ExpandableScreenshot>
        <p className="px-1 pt-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
          Click screenshot to inspect full size
        </p>
      </div>
    </article>
  );
}

type ScreenshotFrameProps = {
  alt: string;
  eyebrow: string;
  priority: boolean;
  src: string;
  title: string;
};

function ScreenshotFrame({ alt, eyebrow, priority, src, title }: ScreenshotFrameProps) {
  return (
    <div className="rounded-[1.75rem] border border-slate-800 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.98))] p-3 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] sm:p-4">
      <div className="mb-4 flex items-center justify-between gap-4 px-2 sm:px-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{eyebrow}</p>
          <p className="mt-1 text-sm font-medium text-slate-200">{title}</p>
        </div>
        <p className="hidden text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">
          Current web app
        </p>
      </div>
      <ExpandableScreenshot alt={alt} height={900} src={src} title={title} width={1440}>
        <div className="overflow-hidden rounded-[1.3rem] border border-slate-700/80 bg-slate-950 shadow-[0_28px_56px_-36px_rgba(15,23,42,0.78)]">
            <Image
              alt={alt}
              className="h-auto w-full"
              height={900}
              priority={priority}
              sizes="(min-width: 1280px) 52vw, 100vw"
              src={src}
              width={1440}
            />
        </div>
      </ExpandableScreenshot>
      <p className="px-2 pt-4 text-sm leading-6 text-slate-400 sm:px-3">
        Baseline comparison, grouped drift changes, and execution context from the current DriftMonitor web app.
      </p>
    </div>
  );
}

function SectionEyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${className ?? "text-slate-500"}`}>{children}</p>
  );
}

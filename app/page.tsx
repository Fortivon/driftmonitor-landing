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

export default function Home() {
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
            <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Baseline schema</p>
              <pre className="font-mono text-sm leading-6 text-slate-800">{`user.id: string\nuser.name: string`}</pre>
            </div>
            <div className="rounded-md border border-rose-200 bg-rose-50 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-rose-500">New response</p>
              <pre className="font-mono text-sm leading-6 text-slate-800">{`user.id: number   ❌ breaking change`}</pre>
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            DriftMonitor detects this automatically, so you can respond before a schema change impacts production traffic.
          </p>
        </section>

        <section className="rounded-lg border border-slate-200 bg-slate-50 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Looking for developers to test the Alpha</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            DriftMonitor is currently in private alpha. We are looking for a few developers who integrate external APIs.
          </p>
          <button className="mt-6 rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
            Request Alpha Access
          </button>
        </section>
      </div>
    </main>
  );
}

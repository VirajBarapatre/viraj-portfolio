import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viraj Barapatre — Quantitative Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Viraj Ravindra Barapatre — quantitative developer, data analyst, and AI engineer building real-time vision systems, anomaly detection, and pricing models.",
      },
      { property: "og:title", content: "Viraj Barapatre — Quant Developer & AI Engineer" },
      {
        property: "og:description",
        content: "Selected work across vision-language surveillance, anomaly detection, and dynamic pricing AI.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    tag: "Vision · Real-time",
    title: "Trinetra",
    subtitle: "AI-Augmented Surveillance Platform",
    body: "End-to-end, real-time threat identification platform leveraging Vision-Language Model APIs for automated video analysis. Containerized on Kubernetes to serve high-frequency model triggers with minimal latency.",
    stack: ["VLM APIs", "Kubernetes", "Python", "FastAPI"],
    span: "md:row-span-2",
    accent: true,
  },
  {
    tag: "Quant · Anomaly",
    title: "AML-Sentinel-AI",
    subtitle: "Anomaly Detection Engine",
    body: "Unsupervised ML engine using Isolation Forest to surface non-linear structural risks in financial datasets. Rigorous backtesting and statistical inference to minimize false positives.",
    stack: ["Isolation Forest", "Pandas", "scikit-learn"],
  },
  {
    tag: "Deep Learning",
    title: "Dynamic Pricing Simulator",
    subtitle: "Neural elasticity model",
    body: "Deep neural network (TensorFlow / Keras) simulating market elasticity and predicting price fluctuations. Achieved RMSE of 13.36 against held-out market data.",
    stack: ["TensorFlow", "Keras", "NumPy"],
    metric: "RMSE 13.36",
    span: "md:row-span-2",
  },
  {
    tag: "Research",
    title: "Backtesting Notes",
    subtitle: "Statistical inference playbook",
    body: "Ongoing notes on rolling-window evaluation, walk-forward analysis, and confidence calibration for ML systems deployed in production finance.",
    stack: ["Statistics", "Python"],
  },
];

function Portfolio() {
  const [mouse, setMouse] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-70 transition-[background] duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, color-mix(in oklab, var(--indigo-glow) 18%, transparent), transparent 60%)`,
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-[--indigo-deep] blur-3xl opacity-40" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[--indigo-glow] blur-3xl opacity-20" />
      </div>

      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <a href="#top" className="font-display text-xl tracking-tight">
          Viraj<span className="text-[--indigo-glow]">.</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="transition hover:text-foreground">Work</a>
          <a href="#about" className="transition hover:text-foreground">About</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-border bg-card/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-foreground backdrop-blur transition hover:border-[--indigo-glow] hover:text-[--indigo-glow]"
        >
          Get in touch
        </a>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-7xl px-6 pt-16 pb-28 md:px-12 md:pt-28 md:pb-40">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-10 bg-border" />
          Portfolio · 2026
        </div>
        <h1 className="mt-8 font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-8xl">
          Viraj Ravindra <em className="text-[--indigo-glow] not-italic">Barapatre</em>
          <br />
          <span className="text-muted-foreground">Quantitative Developer,</span>
          <br />
          Data Analyst & <em className="italic">AI Engineer.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          I build real-time intelligent systems at the intersection of finance, computer vision, and
          applied machine learning — engineered for latency, evaluated with rigor.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-[--indigo-glow] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[--shadow-glow] transition hover:brightness-110"
          >
            View selected work
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card"
          >
            Resume / Contact
          </a>
        </div>
      </section>

      {/* Work — Masonry */}
      <section id="work" className="mx-auto max-w-7xl px-6 pb-32 md:px-12">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected Work</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Recent <em className="italic text-[--indigo-glow]">projects</em></h2>
          </div>
          <div className="hidden text-sm text-muted-foreground md:block">
            {projects.length} case studies
          </div>
        </div>

        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[--indigo-glow] hover:shadow-[--shadow-glow] ${p.span ?? ""}`}
            >
              {p.accent && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[--indigo-deep]/40 via-transparent to-transparent" />
              )}
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{p.tag}</span>
                  <span className="font-mono">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm italic text-[--indigo-glow]">{p.subtitle}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/40 px-3 py-1 text-[11px] tracking-wide text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.metric && (
                  <span className="font-mono text-xs text-[--indigo-glow]">{p.metric}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 pb-32 md:px-12">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              <em className="italic">Engineering</em> at the edge of data.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6">
            <p>
              I work where quantitative finance meets modern AI infrastructure — designing
              systems that turn noisy, real-time data into actionable signal.
            </p>
            <p>
              My toolkit spans deep learning frameworks, distributed serving on Kubernetes, and
              the statistical inference required to trust a model in production.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                ["Focus", "Quant · AI · Vision"],
                ["Stack", "Python · TF · K8s"],
                ["Approach", "Latency-first"],
                ["Rigor", "Backtested"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-border pt-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</div>
                  <div className="mt-2 font-display text-xl text-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[--ink] via-[--indigo-deep]/40 to-background p-10 md:p-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[--indigo-glow] opacity-30 blur-3xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Let's build</div>
            <h2 className="mt-4 font-display text-5xl leading-[1.05] md:text-7xl">
              Have a problem worth <em className="italic text-[--indigo-glow]">modeling?</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Open to roles, collaborations, and research conversations in quantitative AI,
              real-time vision, and applied ML.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:hello@viraj.dev"
                className="rounded-full bg-[--indigo-glow] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[--shadow-glow] transition hover:brightness-110"
              >
                hello@viraj.dev
              </a>
              <a
                href="#"
                className="rounded-full border border-border px-6 py-3 text-sm transition hover:bg-card"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-full border border-border px-6 py-3 text-sm transition hover:bg-card"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 pb-10 md:px-12">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 Viraj Ravindra Barapatre</span>
          <span className="font-mono">Built with intent · Midnight Indigo</span>
        </div>
      </footer>
    </div>
  );
}

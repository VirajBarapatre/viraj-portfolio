import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viraj Barapatre — Quantitative Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Viraj Ravindra Barapatre — Class of 2026 CS graduate building high-fidelity AI platforms, web-scale cloud architectures, and distributed data systems.",
      },
      { property: "og:title", content: "Viraj Barapatre — Quant Developer & AI Engineer" },
      {
        property: "og:description",
        content:
          "Selected work across vision-language surveillance, anomaly detection, and dynamic pricing AI. 600/600 SIG CodeSignal, 100th percentile.",
      },
    ],
  }),
  component: Portfolio,
});

const metrics = [
  { value: "600/600", label: "SIG CodeSignal", note: "100th Percentile · Verified" },
  { value: "50,000+", label: "Financial Records / day", note: "Automated & validated" },
  { value: "99.9%", label: "Data Integrity", note: "PostgreSQL · production" },
];

const projects = [
  {
    tag: "Quant · Anomaly",
    title: "AML-Sentinel-AI",
    subtitle: "Anomaly Detection Engine",
    body: "Unsupervised ML engine using Isolation Forest to surface non-linear structural risks in financial datasets. Rigorous backtesting and statistical inference to minimize false positives.",
    stack: ["Isolation Forest", "Pandas", "scikit-learn"],
    href: "https://github.com/VirajBarapatre/AML-Sentinel-AI",
  },
  {
    tag: "Vision · Real-time",
    title: "CampusEYE",
    subtitle: "AI-Augmented Surveillance Platform",
    body: "End-to-end campus surveillance system with real-time threat detection leveraging computer vision pipelines. Engineered for low-latency inference and scalable event alerting.",
    stack: ["OpenCV", "Python", "Deep Learning", "Flask"],
    href: "https://github.com/VirajBarapatre/CampusEYE",
  },
  {
    tag: "Deep Learning",
    title: "Dynamic Pricing Simulator",
    subtitle: "Neural elasticity model",
    body: "Deep neural network (TensorFlow / Keras) simulating market elasticity and predicting price fluctuations. Achieved RMSE of 13.36 against held-out market data.",
    stack: ["TensorFlow", "Keras", "NumPy"],
    metric: "RMSE 13.36",
    href: "https://github.com/VirajBarapatre/dynamic-pricing-simulator",
  },
  {
    tag: "CV · OCR",
    title: "Text-CAPTCHA-Solver",
    subtitle: "Automated CAPTCHA recognition",
    body: "Computer vision pipeline that segments and classifies distorted text CAPTCHAs using CNN-based OCR. Trained on synthetic data augmentation for robust generalization.",
    stack: ["CNN", "OCR", "Python", "TensorFlow"],
    href: "https://github.com/VirajBarapatre/Text-CAPTCHA-Solver",
  },
  {
    tag: "Medical AI",
    title: "Brain Tumor Detection",
    subtitle: "MRI classification system",
    body: "Deep learning model for automated brain tumor detection and classification from MRI scans. High diagnostic accuracy via transfer learning on medical imaging datasets.",
    stack: ["CNN", "Transfer Learning", "Keras", "OpenCV"],
    href: "https://github.com/VirajBarapatre/Brain-Tumor-Detection-System",
  },
  {
    tag: "Medical AI",
    title: "Skin Cancer Detection",
    subtitle: "Dermatoscopic image classifier",
    body: "AI-powered system for classifying skin lesions from dermatoscopic images. Deep convolutional networks distinguish benign from malignant cases with clinical-grade precision.",
    stack: ["ResNet", "PyTorch", "OpenCV", "scikit-learn"],
    href: "https://github.com/VirajBarapatre/Skin-Cancer-Detection-System",
  },
];

const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "C++",
      "R",
      "TypeScript",
    ],
  },
  {
    category: "Infrastructure & Cloud",
    items: ["GCP", "Kubernetes", "Docker", "Terraform", "Git / GitHub", "CI/CD"],
  },
  {
    category: "Frameworks & UI",
    items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Webpack", "Postman"],
  },
  {
    category: "Specialized Domains",
    items: [
      "Deep Learning",
      "Computer Vision",
      "Quantitative Finance",
      "Anomaly Detection",
      "ETL / ELT",
      "Prompt Engineering",
    ],
  },
  {
    category: "Business Intelligence",
    items: ["Advanced Excel", "Tableau", "Power BI", "Alteryx"],
  },
];

const credentials = [
  {
    title: "SIG CodeSignal — 600 / 600",
    issuer: "Susquehanna International Group",
    detail: "100th percentile · elite algorithmic reasoning and core software design.",
  },
  {
    title: "RDBMS: PostgreSQL, PHP & MySQL",
    issuer: "IIT Bombay",
    detail: "Professional certification in advanced data systems and backend infrastructure.",
  },
  {
    title: "OCI 2025 AI Foundations Associate",
    issuer: "Oracle",
    detail: "Enterprise-scale AI implementation, cloud virtualization, and governance.",
  },
  {
    title: "Data Science · CS · SQL Engineering",
    issuer: "Codecademy",
    detail: "Completed advanced professional career paths across the data stack.",
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
          <a href="#experience" className="transition hover:text-foreground">Experience</a>
          <a href="#skills" className="transition hover:text-foreground">Skills</a>
          <a href="#credentials" className="transition hover:text-foreground">Credentials</a>
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
      <section id="top" className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:px-12 md:pt-28 md:pb-28">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-10 bg-border" />
          Portfolio · Class of 2026
        </div>
        <h1 className="mt-8 font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-8xl">
          Viraj Ravindra <em className="text-[--indigo-glow] not-italic">Barapatre</em>
          <br />
          <span className="text-muted-foreground">Quantitative Developer,</span>
          <br />
          Data Analyst & <em className="italic">AI Engineer.</em>
        </h1>
        <p className="mt-10 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Class of 2026 Computer Science student specializing in building high-fidelity AI platforms,
          web-scale cloud architectures, and optimizing distributed data systems.
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

        {/* Hero metrics */}
        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition hover:border-[--indigo-glow] hover:shadow-[--shadow-glow]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[--indigo-glow] to-transparent opacity-60" />
              <div className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                {m.value}
              </div>
              <div className="mt-3 text-sm font-medium text-foreground">{m.label}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {m.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 pb-28 md:px-12">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              <em className="italic">Engineering</em> at the edge of data.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6">
            <p>
              Highly analytical and research-oriented Computer Science graduate (Class of 2026) with
              a strong foundation in data structures, algorithms, and deep learning frameworks.
            </p>
            <p>
              Proven track record at <span className="text-foreground">Trust Fintech</span> engineering
              automated validation pipelines and managing complex RDBMS infrastructures to mitigate
              systemic ecosystem risks.
            </p>
            <p>
              Expert at leveraging quantitative data analysis, advanced prompt engineering for Large
              Language Models (LLMs), and containerized cloud orchestration to solve analytically
              complex problems at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-6 pb-28 md:px-12">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Experience</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Professional <em className="italic text-[--indigo-glow]">track record</em>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl md:text-4xl">Trust Fintech Limited</h3>
              <p className="mt-1 text-sm italic text-[--indigo-glow]">
                Data Science & Quantitative Intern
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Nagpur, India</p>
            </div>
            <div className="rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Dec 2025 — Present
            </div>
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                k: "Automated ML Data Pipelines",
                v: "Engineered robust validation pipelines to process and clean over 50,000 financial records daily, optimizing data ingestion and driving a 35% gain in system operational efficiency.",
              },
              {
                k: "Data Integrity & RDBMS Architecture",
                v: "Managed complex PostgreSQL infrastructures to guarantee 99.9% integrity for critical unallocated datasets, mitigating technical risk and establishing secure storage baselines.",
              },
              {
                k: "Data Analytics & Visualization",
                v: "Produced ad-hoc statistical dashboards for senior stakeholders, leveraging advanced query optimization to translate fragmented analytics into decision-ready commercial strategies.",
              },
              {
                k: "Process Automation",
                v: "Created custom Python ETL scripts to bridge data gaps between siloed application networks, reducing manual overhead by automating model population routines.",
              },
            ].map((item) => (
              <li key={item.k} className="border-t border-border pt-5">
                <div className="font-display text-xl text-foreground">{item.k}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work — Masonry */}
      <section id="work" className="mx-auto max-w-7xl px-6 pb-28 md:px-12">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected Work</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Recent <em className="italic text-[--indigo-glow]">projects</em>
            </h2>
          </div>
          <div className="hidden text-sm text-muted-foreground md:block">
            {projects.length} case studies
          </div>
        </div>

        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[--indigo-glow] hover:shadow-[--shadow-glow]"
            >
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{p.tag}</span>
                  <span className="font-mono">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">{p.title}</h3>
                <p className="mt-1 text-sm italic text-[--indigo-glow]">{p.subtitle}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
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
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 pb-28 md:px-12">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Toolkit</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Technical <em className="italic text-[--indigo-glow]">skills matrix</em>
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div
              key={g.category}
              className="rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition hover:border-[--indigo-glow]"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {g.category}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-foreground/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials & Education */}
      <section id="credentials" className="mx-auto max-w-7xl px-6 pb-28 md:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Credentials</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Certifications & <em className="italic text-[--indigo-glow]">achievements</em>
            </h2>

            <div className="mt-10 rounded-2xl border border-border bg-card/60 p-7 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Education</div>
              <h3 className="mt-4 font-display text-2xl text-foreground">
                B.Tech, Computer Science & Engineering
              </h3>
              <p className="mt-1 text-sm italic text-[--indigo-glow]">
                Specialization: Artificial Intelligence
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                G.H. Raisoni College of Engineering (GHRCE), Nagpur
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="border-t border-border pt-3">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Graduation
                  </div>
                  <div className="mt-1 font-display text-lg text-foreground">June 2026</div>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">CGPA</div>
                  <div className="mt-1 font-display text-lg text-foreground">8.01 / 10.00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:col-span-7">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="group flex flex-col gap-2 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition hover:border-[--indigo-glow] hover:shadow-[--shadow-glow] md:flex-row md:items-center md:justify-between md:gap-8"
              >
                <div>
                  <div className="font-display text-xl text-foreground md:text-2xl">{c.title}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {c.issuer}
                  </div>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
              </div>
            ))}
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
                href="mailto:virajbarapatre@outlook.com"
                className="rounded-full bg-[--indigo-glow] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[--shadow-glow] transition hover:brightness-110"
              >
                virajbarapatre@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/viraj-barapatre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm transition hover:bg-card"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/VirajBarapatre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm transition hover:bg-card"
              >
                GitHub
              </a>
              <a
                href="tel:+919284778451"
                className="rounded-full border border-border px-6 py-3 text-sm transition hover:bg-card"
              >
                +91 92847 78451
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

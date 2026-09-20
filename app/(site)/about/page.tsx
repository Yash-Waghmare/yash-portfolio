import { Icon } from "@/components/site/Icon";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Career journey, philosophy, and how Yash Waghmare builds, modernizes, and expands into cloud and AI.",
};

const facts = [
  { icon: "location_on", code: "LOC", color: "text-primary", value: "Pune, India", label: "Base Operations" },
  { icon: "work_history", code: "EXP", color: "text-secondary", value: "2+ Years", label: "Production Experience" },
  { icon: "school", code: "EDU", color: "text-tertiary", value: "B.Tech CS", label: "Pimpri Chinchwad College" },
  { icon: "rocket_launch", code: "PROD", color: "text-success", value: "1 Live App", label: "Land Compass (iOS/Android)" },
  { icon: "forum", code: "LEAD", color: "text-warning", value: "3+ Sessions", label: "Community Workshops" },
];

const phases = [
  {
    badge: "PHASE 01 // 2020 – 2023",
    title: "Foundations & Exploration",
    body: "Rigorous B.Tech in Computer Science paired with rapid hackathon development, deep algorithmic problem-solving, and early native mobile engineering.",
    org: "Leazkart & Academic Research",
    meta: "Pune",
    accent: "text-primary",
    items: [
      "Built cross-platform rental mechanisms using Flutter & Firebase backend pipelines.",
      "Implemented biometric ML computer vision research (Iris Liveness Detection with Keras).",
      "Mentored 100+ students through student dev clubs and open mobile tech talks.",
    ],
    tags: ["Flutter", "Python ML", "Firebase"],
    flip: false,
  },
  {
    badge: "PHASE 02 // 2024 – PRESENT",
    title: "Enterprise Modernization",
    body: "Transforming legacy frameworks at industrial scale. Translating monolithic user experiences into modular, maintainable, and high-velocity web platforms.",
    org: "Accenture (Global Delivery)",
    meta: "Active Production",
    accent: "text-secondary",
    items: [
      "Orchestrated seamless Vue.js to Next.js/React modernization preserving 100% mission-critical logic.",
      "Restructured enterprise state flows using Redux Toolkit, eliminating legacy store regressions.",
      "Authored architecture playbooks and drove weekly cross-team transfer modules.",
    ],
    tags: ["React", "Next.js", "Redux Toolkit", "TypeScript"],
    flip: true,
  },
  {
    badge: "PHASE 03 // 2024 – 2025",
    title: "Expanding Beyond the Frontend",
    body: "Mastering full delivery lifecycles: Infrastructure-as-Code, declarative serverless models, container orchestration, and solo product deployment.",
    org: "Cloud & Independent Shipping",
    meta: "Terraform + AWS",
    accent: "text-tertiary",
    items: [
      "Designed & released Land Compass to Apple App Store & Google Play Store independently.",
      "Wrote declarative Terraform scripts to provision secure AWS VPC, ECS, S3, and RDS topologies.",
      "Constructed performant REST endpoints using Node.js, Express, and structured MongoDB indexes.",
    ],
    tags: ["AWS", "Terraform IaC", "Docker", "React Native"],
    flip: false,
  },
  {
    badge: "PHASE 04 // 2025 – FUTURE",
    title: "AI-Enabled Engineering",
    body: "Not treating AI as novelty, but as a direct developer velocity multiplier. Grounding agentic architectures in deterministic test suites and production guards.",
    org: "Stanford Credentials & MCP",
    meta: "Forward Trajectory",
    accent: "text-primary-container",
    items: [
      "Completed Stanford coursework in Agentic Workflows, generative evaluation, and prompt engineering.",
      "Integrated AWS Bedrock foundational models with internal tooling for automated context indexing.",
      "Implementing Model Context Protocol (MCP) servers to empower autonomous agent coding loops.",
    ],
    tags: ["Agentic AI", "AWS Bedrock", "MCP Protocol", "LLM Pipelines"],
    flip: true,
  },
];

const tenets = [
  {
    icon: "verified",
    color: "text-primary",
    code: "TENET 01",
    title: "End-to-End Ownership",
    body: "From initial requirements synthesis to terminal deployment and user feedback iteration. No feature is “done” simply because a PR is merged; it thrives only when it delivers value safely in production.",
  },
  {
    icon: "code_blocks",
    color: "text-secondary",
    code: "TENET 02",
    title: "Technical Craft",
    body: "Writing readable, typed, and predictable codebases. Optimizing for the engineer who maintains the service at 3 AM. Architectural simplicity always triumphs over clever, unmaintainable abstractions.",
  },
  {
    icon: "smart_toy",
    color: "text-primary-container",
    code: "TENET 03",
    title: "Pragmatic AI",
    body: "Treating modern intelligence engines not as magical black boxes, but as strict workflow accelerants. Utilizing Model Context Protocols and automated tests to create robust feedback loops.",
  },
  {
    icon: "group_add",
    color: "text-tertiary",
    code: "TENET 04",
    title: "Knowledge Transfer",
    body: "True engineering prowess is proven when complex ideas are communicated simply. Documenting system design, writing migration guides, and delivering high-energy community developer sessions.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-8 pt-12 lg:px-8">
        <div className="mb-4 flex items-center gap-1 font-mono text-[13px] text-muted">
          <span className="font-medium text-primary-container">yash@cli:~$</span>
          <span>cat /core/identity/about.md</span>
          <span className="ml-1 inline-block h-3.5 w-2 bg-primary-container motion-safe:animate-pulse" />
        </div>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-8">
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-surface-container px-2 py-0.5 font-mono text-xs font-medium text-primary">
              <span className="size-1.5 rounded-full bg-success" />
              SYS.EXEC // 4.2 ABOUT YASH
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
              About <span className="text-primary">Yash</span>
            </h1>
            <p className="text-2xl font-normal leading-snug text-on-surface-variant md:text-[28px] md:leading-10">
              Building products, modernizing enterprise applications, and expanding into cloud infrastructure & AI-enabled workflows.
            </p>
            <div className="mt-2 rounded-xl bg-surface-container-low p-6 shadow-sm">
              <p className="text-lg leading-7 text-on-surface">
                Software Developer based in Pune, India, with 2+ years of production experience bridging frontend excellence, scalable backend architecture, and cloud automation. Driven by end-to-end product ownership, clean structural engineering, and solving concrete user problems.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="flex flex-col gap-2 rounded-xl bg-surface-dark p-4 font-mono text-[13px] leading-5 text-on-surface-dark shadow-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-muted">
                <span className="text-primary-container">system.manifest</span>
                <span className="flex items-center gap-1">
                  <span className="size-2 rounded-full bg-error" />
                  <span className="size-2 rounded-full bg-warning" />
                  <span className="size-2 rounded-full bg-success" />
                </span>
              </div>
              <p>
                <span className="text-primary-container">$</span> status:{" "}
                <span className="text-success">active_in_production</span>
              </p>
              <p>
                <span className="text-primary-container">$</span> current_role: Accenture ASE
              </p>
              <p>
                <span className="text-primary-container">$</span> primary_focus:{" "}
                <span className="text-surface-tint">Frontend Arch + Cloud</span>
              </p>
              <p>
                <span className="text-primary-container">$</span> verified_ships: Land Compass (Live)
              </p>
              <p>
                <span className="text-primary-container">$</span> next_vector:{" "}
                <span className="text-primary-container">Agentic Systems (MCP)</span>
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[11px] text-muted">
                <span>LOC: 18.5204° N, 73.8567° E</span>
                <span className="font-medium text-success">READY</span>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-surface-container p-4">
              <Icon name="architecture" className="text-[32px] text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Methodology</p>
                <p className="text-xl font-semibold text-on-surface">Systems-First Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-4 flex items-center justify-between font-mono text-xs text-muted">
            <span>
              <span className="font-bold text-primary">#</span> QUICK_FACTS // SYSTEM METRICS
            </span>
            <span className="hidden sm:inline">INDEX: 01-05</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {facts.map((fact) => (
              <div
                key={fact.code}
                className="flex flex-col justify-between gap-2 rounded-xl bg-surface p-4 shadow-sm hover:bg-surface-hover"
              >
                <div className="flex items-center justify-between">
                  <Icon name={fact.icon} className={`text-[24px] ${fact.color}`} />
                  <span className="font-mono text-[11px] text-muted">{fact.code}</span>
                </div>
                <div>
                  <p className="text-xl font-semibold text-on-surface">{fact.value}</p>
                  <p className="text-sm text-muted">{fact.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-12 flex flex-col gap-1">
          <p className="font-mono text-xs text-primary">$ yash --narrative --timeline</p>
          <h2 className="text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
            The Four-Phase Engineering Vector
          </h2>
          <p className="max-w-2xl text-lg text-on-surface-variant">
            From fundamental computer science experiments to large-scale enterprise refactoring and autonomous agent orchestration.
          </p>
        </div>
        <div className="relative flex flex-col gap-8">
          <div className="absolute top-4 bottom-4 left-1/2 hidden w-0.5 -translate-x-1/2 bg-outline md:block" />
          {phases.map((phase) => (
            <div key={phase.title} className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2">
              <div
                className={`flex flex-col gap-1 ${phase.flip ? "md:order-2 md:pl-8" : "md:items-end md:pr-8 md:text-right"}`}
              >
                <span className={`w-fit rounded-full bg-surface-container px-2 py-0.5 font-mono text-xs font-medium ${phase.accent}`}>
                  {phase.badge}
                </span>
                <h3 className="text-[28px] font-semibold leading-10 text-on-surface">{phase.title}</h3>
                <p className="max-w-md text-base text-on-surface-variant">{phase.body}</p>
              </div>
              <div className="absolute left-1/2 z-10 hidden size-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-surface-container bg-surface shadow-sm md:flex">
                <span className={`size-2 rounded-full ${phase.accent.replace("text-", "bg-")}`} />
              </div>
              <div className={phase.flip ? "md:order-1 md:pr-8" : "md:pl-8"}>
                <div className="flex flex-col gap-2 rounded-xl bg-surface-container-low p-6 shadow-sm hover:bg-surface-hover">
                  <div className={`flex items-center justify-between font-mono text-[13px] ${phase.accent}`}>
                    <span>{phase.org}</span>
                    <span className="text-muted">{phase.meta}</span>
                  </div>
                  <ul className="flex flex-col gap-1 text-sm text-on-surface">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-1">
                        <Icon name="check_circle" className={`mt-0.5 shrink-0 text-[18px] ${phase.accent}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 border-t border-outline/20 pt-2">
                    {phase.tags.map((tag) => (
                      <span key={tag} className="rounded bg-surface px-2 py-0.5 font-mono text-[11px] text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-container-high/40 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs text-primary"># PHILOSOPHY // ETHOS</p>
              <h2 className="text-3xl font-bold tracking-tight text-on-surface md:text-4xl">Engineering Principles</h2>
              <p className="mt-1 max-w-xl text-base text-on-surface-variant">
                Reliable software is the consequence of disciplined habits, strict trade-off evaluations, and deep technical ownership.
              </p>
            </div>
            <p className="hidden font-mono text-xs text-muted sm:block">STABILITY • VELOCITY • EMPATHY</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tenets.map((tenet) => (
              <article key={tenet.code} className="flex flex-col gap-4 rounded-xl bg-surface p-6 shadow-sm hover:bg-surface-hover">
                <div className="flex size-12 items-center justify-center rounded-lg bg-surface-container">
                  <Icon name={tenet.icon} className={`text-[28px] ${tenet.color}`} />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-muted">{tenet.code}</p>
                  <h3 className="text-xl font-semibold text-on-surface">{tenet.title}</h3>
                </div>
                <p className="text-sm text-on-surface-variant">{tenet.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 lg:px-8">
        <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl bg-surface-dark p-8 text-on-surface-dark shadow-xl lg:flex-row lg:items-center lg:p-16">
          <div className="pointer-events-none absolute -right-16 -bottom-16 size-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-2 flex items-center gap-1 font-mono text-xs text-primary-container">
              <span className="size-2 rounded-full bg-primary-container motion-safe:animate-ping" />
              NEXT_EXECUTION: /work/case-studies
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to see the code, architecture, and metrics in action?
            </h2>
            <p className="mt-2 text-base text-muted">
              Dive into detailed engineering case studies covering enterprise-scale Vue-to-Next migrations and independent native mobile production releases.
            </p>
          </div>
          <Link
            href="/work"
            className="relative z-10 inline-flex items-center justify-center gap-1 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-on-primary shadow-md hover:bg-secondary"
          >
            Explore Shipped Projects & Case Studies
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </section>
    </div>
  );
}

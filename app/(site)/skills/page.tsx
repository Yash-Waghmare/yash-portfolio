import { CapabilityFinder } from "@/components/site/CapabilityFinder";
import { Icon } from "@/components/site/Icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills organized by domain — frontend, mobile, backend, cloud, and AI — without artificial ratings.",
};

const frontendCaps = [
  "Component architecture & atomic design",
  "Large-scale legacy Vue to React/Next migrations",
  "Design system governance & WCAG compliance",
  "SSR, SSG, and ISR caching pipelines",
  "Lighthouse 90+ performance optimization",
  "Cross-browser responsive fluid layouts",
];

const mobileCaps = [
  "Complete cross-platform iOS & Android lifecycle",
  "App Store & Google Play Store compliance & launch",
  "FCM Native push notifications & deep linking",
  "Offline-first data sync architectures (Land Compass)",
];

const backendCaps = [
  "RESTful API design & contract documentation",
  "NoSQL document modeling & query indexing",
  "JWT auth, RBAC authorization & rate limiting",
  "Serverless handlers & distributed microservices",
];

const cloudCaps = [
  "IaC automation: Terraform modules for VPC & security",
  "AWS resource management: S3, EC2, Lambda, IAM",
  "Containerized builds & multi-stage Dockerfiles",
  "Automated continuous testing & zero-downtime deploy",
];

const epochs = [
  {
    n: "01",
    year: "2020",
    yearClass: "text-muted",
    badgeClass: "bg-surface-container text-on-surface",
    title: "Foundations",
    kicker: "Web & Mobile Exploration",
    kickerClass: "text-secondary",
    body: "B.Tech in Computer Science underway. Heavy experimentation with semantic web technologies, JavaScript core runtime, and mobile development with Flutter.",
    tags: ["Algorithms", "Flutter", "JS Engine"],
    tagClass: "text-muted",
    cardClass: "bg-surface-bright text-on-surface",
  },
  {
    n: "02",
    year: "2022",
    yearClass: "text-secondary",
    badgeClass: "bg-surface-container text-secondary",
    title: "Specialization",
    kicker: "Frontend + Full Stack",
    kickerClass: "text-secondary",
    body: "Application developer roles (Leazkart). Mastered React ecosystem, component lifecycles, Redux, Node.js endpoints, and distributed database models.",
    tags: ["React.js", "Node/Express", "MongoDB"],
    tagClass: "text-muted",
    cardClass: "bg-surface-bright text-on-surface",
  },
  {
    n: "03",
    year: "2024",
    yearClass: "text-primary",
    badgeClass: "bg-primary text-on-primary",
    title: "Enterprise & Product",
    kicker: "Modernization & Cloud Infra",
    kickerClass: "text-primary",
    body: "Accenture engineering: Vue-to-React/Angular migrations for massive enterprise scale. Concurrently architected and independently shipped Land Compass to Apple App Store & Google Play.",
    tags: ["Next.js", "AWS/Terraform", "React Native"],
    tagClass: "text-primary",
    cardClass: "bg-surface-bright text-on-surface",
  },
  {
    n: "04",
    year: "2025+",
    yearClass: "text-primary-container",
    badgeClass: "bg-primary-container text-on-primary",
    title: "Emerging Frontier",
    kicker: "Agentic AI & Systems",
    kickerClass: "text-primary-container",
    body: "Deepening mastery of Agentic workflows, AWS Bedrock generative APIs, Model Context Protocol (MCP), and automated developer feedback loops.",
    tags: ["Agentic AI", "AWS Bedrock", "MCP Spec"],
    tagClass: "text-primary-fixed-dim",
    cardClass: "bg-surface-dark text-on-surface-dark",
  },
];

function Chip({ children, tone = "default" }: { children: string; tone?: "default" | "secondary" }) {
  return (
    <span
      className={`rounded px-2 py-1 font-mono text-xs ${
        tone === "secondary"
          ? "bg-surface-container-low text-[12px] text-secondary"
          : "bg-surface-container text-on-surface"
      }`}
    >
      {children}
    </span>
  );
}

function Caps({ items }: { items: string[] }) {
  return (
    <div className="mt-auto flex flex-col gap-2 rounded-lg bg-surface-container-lowest p-4">
      <p className="flex items-center gap-1.5 text-sm font-semibold text-on-surface">
        <Icon name="check_circle" className="text-[18px] text-primary" />
        Production Capabilities
      </p>
      <ul className="grid grid-cols-1 gap-2 text-sm text-on-surface-variant sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-1.5">
            <span className="font-mono text-primary">›</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full overflow-hidden pb-16">
        <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-20 size-80 rounded-full bg-primary-container/10 blur-2xl" />
        <div className="relative mx-auto max-w-7xl px-4 pt-8 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <p className="flex items-center gap-1 font-mono text-[13px] text-muted">
              <span className="font-semibold text-primary">yash@sys</span>
              <span>:</span>
              <span className="text-secondary">~/capabilities</span>
              <span>$</span>
              <span className="text-on-surface">cat stack_manifest.json</span>
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-2 py-0.5 font-mono text-[11px] font-medium text-on-surface-variant">
                <span className="size-1.5 rounded-full bg-success motion-safe:animate-pulse" />
                PROD_READY // VERIFIED
              </span>
              <span className="hidden font-mono text-[11px] text-muted sm:inline">STABLE_BUILD_v2.4</span>
            </div>
          </div>
          <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
            <div className="flex flex-col gap-1 lg:col-span-8">
              <p className="flex items-center gap-2 font-mono text-xs tracking-wider text-primary uppercase">
                <Icon name="terminal" className="text-[16px]" />
                SYSTEM MATRIX & CAPABILITIES
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
                Technical Skills & Capabilities
              </h1>
              <p className="mt-1 max-w-3xl text-lg text-muted">
                Organized by domain, depth, and production capability — no arbitrary star ratings.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-4 sm:flex-row lg:col-span-4 lg:flex-col">
              <div className="flex items-center justify-between rounded-xl bg-surface-container p-4">
                <div>
                  <p className="font-mono text-[11px] tracking-wide text-muted uppercase">Architecture Domains</p>
                  <p className="text-[28px] font-bold text-on-surface">5 Pillars</p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-lg bg-surface text-primary">
                  <Icon name="hub" className="text-[24px]" />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-surface-container-high p-4">
                <div>
                  <p className="font-mono text-[11px] tracking-wide text-muted uppercase">Audit Status</p>
                  <p className="text-sm font-semibold text-on-surface">100% Production Tested</p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-lg bg-surface text-success">
                  <Icon name="verified" className="text-[22px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-surface-dark p-6 text-on-surface-dark shadow-xl">
            <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-error/80" />
                <span className="size-3 rounded-full bg-warning/80" />
                <span className="size-3 rounded-full bg-success/80" />
                <span className="ml-2 font-mono text-[12px] text-muted">bash - yash@macbook-pro:~ (zsh)</span>
              </div>
              <span className="font-mono text-[11px] text-primary-fixed-dim">eval --all-domains</span>
            </div>
            <div className="space-y-1 overflow-x-auto font-mono text-sm leading-relaxed">
              <p className="text-muted">
                <span className="text-primary-container">yash@portfolio</span>:
                <span className="text-secondary-fixed">~</span>$ ./inspect_competencies.sh --deep
              </p>
              <p className="pl-2 text-on-surface-dark">
                [i] Loading production capability benchmarks for Yash Waghmare...
              </p>
              <p className="pl-2 text-success">
                ✓ Frontend: React / Next.js / Angular enterprise modular migrations verified.
              </p>
              <p className="pl-2 text-success">
                ✓ Mobile: React Native / Expo production deployment pipeline green (App Store + Google Play).
              </p>
              <p className="pl-2 text-success">
                ✓ Cloud/IaC: Terraform & AWS ECS/Lambda automated provisioning active.
              </p>
              <p className="pl-2 text-primary-container">
                ⚡ Emerging: Agentic AI workflows, AWS Bedrock integration & MCP tooling.
              </p>
              <p className="flex items-center pt-2 text-muted">
                <span className="text-primary-container">yash@portfolio</span>:
                <span className="text-secondary-fixed">~</span>${" "}
                <span className="font-medium text-on-surface-dark">ready for deployment</span>
                <span className="ml-1 inline-block h-4 w-2 bg-primary-container motion-safe:animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-surface-bright py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 lg:px-8">
          <div className="flex max-w-2xl flex-col gap-1">
            <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
              01 // Domain Breakdown
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
              Engineering Domain Matrix
            </h2>
            <p className="text-base text-muted">
              Detailed technical specifications, active tooling, and concrete architectural outputs delivered across client, enterprise, and solo product engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            <article className="flex flex-col gap-6 rounded-xl bg-surface p-8 shadow-sm hover:bg-surface-hover lg:col-span-7">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-surface-container text-primary">
                    <Icon name="web" className="text-[28px]" />
                  </div>
                  <div>
                    <p className="font-mono text-[12px] text-muted">DOMAIN 01 // CLIENT-SIDE</p>
                    <h3 className="text-xl font-semibold text-on-surface">Frontend Engineering</h3>
                  </div>
                </div>
                <span className="rounded bg-surface-container-high px-2 py-1 font-mono text-[11px] font-semibold text-primary">
                  PRIMARY SPECIALTY
                </span>
              </div>
              <div>
                <p className="font-mono text-xs tracking-wider text-muted uppercase">Core Technologies</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["React.js", "Next.js (App/Pages)", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5 / Semantic CSS"].map(
                    (item) => (
                      <Chip key={item}>{item}</Chip>
                    ),
                  )}
                </div>
              </div>
              <div>
                <p className="font-mono text-xs tracking-wider text-muted uppercase">
                  State Management & Build Tooling
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Redux Toolkit (RTK Query)", "React Context & Hooks", "Tailwind CSS", "Vite / Webpack / Turbopack"].map(
                    (item) => (
                      <Chip key={item} tone="secondary">
                        {item}
                      </Chip>
                    ),
                  )}
                </div>
              </div>
              <Caps items={frontendCaps} />
            </article>

            <article className="flex flex-col gap-6 rounded-xl bg-surface p-8 shadow-sm hover:bg-surface-hover lg:col-span-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-surface-container text-primary">
                    <Icon name="smartphone" className="text-[28px]" />
                  </div>
                  <div>
                    <p className="font-mono text-[12px] text-muted">DOMAIN 02 // NATIVE & HYBRID</p>
                    <h3 className="text-xl font-semibold text-on-surface">Mobile App Dev</h3>
                  </div>
                </div>
                <span className="rounded bg-surface-container-high px-2 py-1 font-mono text-[11px] font-semibold text-success">
                  APP STORES LIVE
                </span>
              </div>
              <div>
                <p className="font-mono text-xs tracking-wider text-muted uppercase">Core Technologies</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["React Native", "Expo Application Services (EAS)", "Flutter / Dart", "AsyncStorage / SQLite"].map(
                    (item) => (
                      <Chip key={item}>{item}</Chip>
                    ),
                  )}
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex flex-col gap-2 rounded-lg bg-surface-container-lowest p-4">
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-on-surface">
                    <Icon name="check_circle" className="text-[18px] text-primary" />
                    Production Capabilities
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-on-surface-variant">
                    {mobileCaps.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="font-mono text-primary">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="flex flex-col gap-6 rounded-xl bg-surface p-8 shadow-sm hover:bg-surface-hover lg:col-span-4">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-surface-container text-primary">
                  <Icon name="database" className="text-[28px]" />
                </div>
                <div>
                  <p className="font-mono text-[12px] text-muted">DOMAIN 03 // SERVICES</p>
                  <h3 className="text-xl font-semibold text-on-surface">Backend & Data</h3>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs tracking-wider text-muted uppercase">Core Technologies</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "MongoDB / Mongoose", "Firebase (Firestore/Auth)", "REST API Engineering"].map(
                    (item) => (
                      <Chip key={item}>{item}</Chip>
                    ),
                  )}
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-2 rounded-lg bg-surface-container-lowest p-4">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-on-surface">
                  <Icon name="check_circle" className="text-[18px] text-primary" />
                  Capabilities
                </p>
                <ul className="flex flex-col gap-2 text-sm text-on-surface-variant">
                  {backendCaps.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="font-mono text-primary">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="flex flex-col gap-6 rounded-xl bg-surface p-8 shadow-sm hover:bg-surface-hover lg:col-span-4">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-surface-container text-primary">
                  <Icon name="cloud_sync" className="text-[28px]" />
                </div>
                <div>
                  <p className="font-mono text-[12px] text-muted">DOMAIN 04 // PLATFORM</p>
                  <h3 className="text-xl font-semibold text-on-surface">Cloud & Infra</h3>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs tracking-wider text-muted uppercase">Core Technologies</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Amazon Web Services (AWS)", "Terraform (IaC)", "Docker", "GitHub Actions CI/CD", "Linux / Shell"].map(
                    (item) => (
                      <Chip key={item}>{item}</Chip>
                    ),
                  )}
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-2 rounded-lg bg-surface-container-lowest p-4">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-on-surface">
                  <Icon name="check_circle" className="text-[18px] text-primary" />
                  Capabilities
                </p>
                <ul className="flex flex-col gap-2 text-sm text-on-surface-variant">
                  {cloudCaps.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="font-mono text-primary">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="relative flex flex-col gap-6 overflow-hidden rounded-xl bg-surface p-8 shadow-sm hover:bg-surface-hover lg:col-span-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name="psychology" className="text-[28px]" />
                  </div>
                  <div>
                    <p className="font-mono text-[12px] text-primary">DOMAIN 05 // NEXT-GEN</p>
                    <h3 className="text-xl font-semibold text-on-surface">AI & Emerging</h3>
                  </div>
                </div>
                <span className="rounded bg-primary px-2 py-0.5 font-mono text-[10px] font-bold text-on-primary uppercase">
                  Active Frontier
                </span>
              </div>
              <div>
                <p className="font-mono text-xs tracking-wider text-muted uppercase">Core Technologies</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "Agentic AI Frameworks",
                    "AWS Bedrock",
                    "Model Context Protocol (MCP)",
                    "GitHub Copilot Workflows",
                    "Prompt Engineering",
                  ].map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-1 rounded-lg bg-primary-fixed/30 p-4">
                <span className="font-mono text-[11px] font-semibold tracking-wide text-primary uppercase">
                  Positioning Principle
                </span>
                <p className="text-sm text-on-surface">
                  “AI-aware engineer focusing on practical developer tooling, orchestration, and system integration rather than hype.”
                </p>
              </div>
            </article>
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-4 rounded-xl bg-surface p-6 shadow-sm md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-surface-container text-on-surface">
                <Icon name="architecture" className="text-[20px]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Professional Engineering Rigor</p>
                <p className="text-sm text-muted">
                  Git workflows (trunk-based/git-flow), clean architecture principles, automated linting, documentation as code.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {["WCAG 2.1 AA", "CI/CD Pipeline Tested", "SOC2 Aware"].map((item) => (
                <span key={item} className="rounded bg-surface-container px-2 py-1 font-mono text-[12px] text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-surface py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                02 // Progression Velocity
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
                Learning Trajectory & Growth
              </h2>
              <p className="text-base text-muted">
                A demonstrable progression from fundamental engineering foundations to scalable enterprise systems and modern AI orchestration.
              </p>
            </div>
            <p className="flex items-center gap-2 font-mono text-xs text-muted">
              <Icon name="trending_up" className="text-[18px] text-success" />
              Constant Expansion Velocity: 2020 → 2026
            </p>
          </div>
          <div className="relative w-full">
            <div className="absolute top-[44px] left-0 -z-0 hidden h-0.5 w-full bg-outline-variant/40 lg:block">
              <div className="h-full w-3/4 bg-primary" />
            </div>
            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {epochs.map((epoch) => (
                <article key={epoch.n} className={`flex flex-col gap-4 rounded-xl p-6 shadow-sm ${epoch.cardClass}`}>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex size-10 items-center justify-center rounded-full font-mono text-sm font-bold ${epoch.badgeClass}`}
                    >
                      {epoch.n}
                    </div>
                    <span className={`font-mono text-base font-bold ${epoch.yearClass}`}>{epoch.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{epoch.title}</h3>
                    <p className={`font-mono text-[12px] font-medium ${epoch.kickerClass}`}>{epoch.kicker}</p>
                    <p className="mt-1 text-sm opacity-80">{epoch.body}</p>
                  </div>
                  <div className={`flex flex-wrap gap-1 border-t pt-2 font-mono text-[11px] ${epoch.tagClass} ${epoch.n === "04" ? "border-white/10" : "border-outline/30"}`}>
                    {epoch.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded px-2 py-0.5 ${epoch.n === "04" ? "border border-white/20 bg-surface-dark/80" : "bg-surface"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-surface-container p-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-surface text-primary">
                <Icon name="school" className="text-[20px]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Continuous Learning Mindset</p>
                <p className="text-sm text-muted">
                  B.Tech in Computer Science • Industry Workshops Conducted for 300+ Students • Certified in Generative AI Foundations.
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="flex shrink-0 items-center gap-1 rounded bg-surface px-4 py-1 text-sm font-semibold text-on-surface hover:bg-surface-hover"
            >
              Read Narrative Journey
              <Icon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>
        </div>
      </section>

      <CapabilityFinder />

      <section className="relative w-full overflow-hidden bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl bg-surface-dark p-8 text-on-surface-dark shadow-xl md:flex-row md:p-16">
            <div className="pointer-events-none absolute -right-16 -bottom-16 size-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative z-10 max-w-xl">
              <p className="font-mono text-xs text-primary-container">$ yash contact --stack-match</p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight">
                Need someone with this stack on your team?
              </h2>
              <p className="mt-2 text-base text-muted">Let’s connect on modernization, product, or cloud work.</p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-1 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-on-primary hover:bg-secondary"
            >
              Let’s connect
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

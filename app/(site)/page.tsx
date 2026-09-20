import { HomeHeroTerminal } from "@/components/site/HomeHeroTerminal";
import { Icon } from "@/components/site/Icon";
import { profile } from "@/content/profile";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: profile.homeTitle },
  description: profile.homeDescription,
};

const stack = [
  {
    icon: "web",
    iconClass: "bg-primary/10 text-primary",
    title: "Frontend",
    kicker: "Enterprise & Web",
    body: "High-performance modular client architectures and reactive state paradigms.",
    tags: ["React", "Next.js", "Angular", "Redux Toolkit", "JavaScript"],
  },
  {
    icon: "dns",
    iconClass: "bg-secondary/10 text-secondary",
    title: "Backend",
    kicker: "Services & Data",
    body: "REST services, schema definitions, and reliable persistence pipelines.",
    tags: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    icon: "cloud_sync",
    iconClass: "bg-primary-container/15 text-primary",
    title: "Cloud & DevOps",
    kicker: "Infrastructure",
    body: "Reproducible cloud environments and automated container deployment workflows.",
    tags: ["AWS", "Terraform", "Docker", "CI/CD", "IaC"],
  },
  {
    icon: "devices",
    iconClass: "bg-success/10 text-success",
    title: "Mobile",
    kicker: "Cross-Platform",
    body: "User-centric mobile applications deployed straight into production marketplaces.",
    tags: ["React Native", "Expo", "Firebase Mobile", "App Stores"],
  },
  {
    icon: "smart_toy",
    iconClass: "bg-tertiary/10 text-tertiary",
    title: "AI & Emerging",
    kicker: "Applied AI",
    body: "Integration of context protocols, Bedrock foundational models, and agent architectures.",
    tags: ["Agentic AI", "AWS Bedrock", "MCP", "Copilot"],
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex w-full flex-col items-center overflow-hidden bg-surface py-12 md:py-16">
        <div className="pointer-events-none absolute top-[-96px] left-1/2 h-[340px] w-[720px] -translate-x-1/2 rounded-full bg-primary-container/10 blur-[100px]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 lg:px-8">
          <div className="flex items-center gap-1 rounded-full bg-surface-container px-4 py-1 font-mono text-[12px] leading-4 text-primary shadow-sm">
            <span className="inline-block size-2 rounded-full bg-primary-container motion-safe:animate-pulse" />
            <span className="font-medium tracking-wider uppercase">
              Production Environment // CLI Gateway
            </span>
          </div>
          <HomeHeroTerminal />
        </div>
      </section>

      <div className="relative z-10 -mt-4 flex w-full justify-center">
        <div className="flex items-center gap-2 rounded-full bg-surface px-4 py-1 font-mono text-[12px] text-muted shadow-md">
          <Icon name="south" className="text-[16px] text-primary" />
          <span>MODERN INTERFACE // DISCOVERY</span>
        </div>
      </div>

      <section className="w-full bg-surface py-16" id="featured-work">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-2 font-mono text-[12px] font-semibold tracking-wider text-primary uppercase">
                <span className="size-2 rounded-full bg-primary" />
                Case Studies & Deployments
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
                Featured Work
              </h2>
              <p className="max-w-2xl text-lg text-muted">
                Enterprise modernization & production products shipped with strict reliability and user-focused architecture.
              </p>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary"
            >
              Explore All 5+ Projects
              <Icon name="arrow_forward" className="text-[18px] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="group flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container shadow-sm hover:shadow-md">
              <div className="flex flex-col gap-6 p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-on-primary shadow-sm">
                    Enterprise Modernization
                  </span>
                  <span className="font-mono text-[13px] text-muted">July 2024 – Present</span>
                </div>
                <div>
                  <h3 className="text-[28px] font-semibold text-on-surface group-hover:text-primary">
                    Modernizing Enterprise Applications at Scale
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-secondary">
                    <Icon name="corporate_fare" className="text-[18px]" />
                    Accenture • Associate Software Engineer
                  </p>
                </div>
                <p className="text-base text-on-surface-variant">
                  Led Vue.js to React/Next.js migration, architected modular component systems, and implemented robust Redux Toolkit state management across enterprise workflows.
                </p>
                <div className="grid grid-cols-3 gap-2 rounded-lg bg-surface-container-highest/60 p-4 text-center">
                  <div className="flex flex-col">
                    <span className="text-[28px] font-bold text-primary">100%</span>
                    <span className="text-xs text-muted">Feature Parity</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[28px] font-bold text-secondary">Vue→Next</span>
                    <span className="text-xs text-muted">Migration Core</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[28px] font-bold text-tertiary">Scale</span>
                    <span className="text-xs text-muted">Enterprise Level</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["React", "Next.js", "Redux Toolkit", "Node.js", "AWS"].map((tag) => (
                    <span key={tag} className="rounded bg-surface px-2 py-1 font-mono text-[12px] text-on-surface">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="/work/accenture-modernization"
                  className="inline-flex w-full items-center justify-between rounded-lg bg-surface px-6 py-2 text-sm font-semibold text-on-surface shadow-sm group-hover:bg-primary group-hover:text-on-primary"
                >
                  Read Enterprise Case Study
                  <Icon name="arrow_forward" className="text-[18px] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>

            <article className="group flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container shadow-sm hover:shadow-md">
              <div className="flex flex-col gap-6 p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-success px-4 py-1 text-xs font-semibold text-on-primary shadow-sm">
                    <Icon name="check_circle" className="text-[14px]" />
                    Product Shipped
                  </span>
                  <span className="font-mono text-[13px] text-muted">2024 • Solo Ownership</span>
                </div>
                <div>
                  <h3 className="text-[28px] font-semibold text-on-surface group-hover:text-primary">
                    Land Compass: Real Estate Discovery App
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-success">
                    <Icon name="smartphone" className="text-[18px]" />
                    Independent Product • Live on iOS & Android
                  </p>
                </div>
                <p className="text-base text-on-surface-variant">
                  Built and shipped cross-platform mobile app connecting property buyers to local verified agents across Tier 2/3 Indian cities. End-to-end UX, backend sync, and stores distribution.
                </p>
                <div className="grid grid-cols-3 gap-2 rounded-lg bg-surface-container-highest/60 p-4 text-center">
                  <div className="flex flex-col">
                    <span className="flex items-center justify-center gap-0.5 text-[28px] font-bold text-success">
                      <Icon name="storefront" className="text-[20px]" />
                      2
                    </span>
                    <span className="text-xs text-muted">App Stores</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[28px] font-bold text-primary">Tier 2/3</span>
                    <span className="text-xs text-muted">Target Market</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[28px] font-bold text-secondary">Solo</span>
                    <span className="text-xs text-muted">Full Lifecycle</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["React Native", "Expo", "Firebase", "REST APIs", "App Store Review"].map((tag) => (
                    <span key={tag} className="rounded bg-surface px-2 py-1 font-mono text-[12px] text-on-surface">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="/work/land-compass"
                  className="inline-flex w-full items-center justify-between rounded-lg bg-surface px-6 py-2 text-sm font-semibold text-on-surface shadow-sm group-hover:bg-primary group-hover:text-on-primary"
                >
                  Read Product Case Study
                  <Icon name="arrow_forward" className="text-[18px] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-16" id="tech-stack">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:px-8">
          <div className="flex max-w-2xl flex-col gap-1">
            <p className="flex items-center gap-2 font-mono text-[12px] font-semibold tracking-wider text-primary uppercase">
              <Icon name="layers" className="text-[16px]" />
              Capability Domains
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
              Technical Stack
            </h2>
            <p className="text-base text-muted">
              Organized by domain execution depth. Rooted in production stability, scaling patterns, and forward-looking AI workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stack.map((domain) => (
              <article
                key={domain.title}
                className="flex flex-col justify-between gap-4 rounded-xl bg-surface p-6 shadow-sm hover:bg-surface-hover"
              >
                <div className="flex flex-col gap-2">
                  <div className={`flex size-10 items-center justify-center rounded-lg ${domain.iconClass}`}>
                    <Icon name={domain.icon} className="text-[24px]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-on-surface">{domain.title}</h3>
                    <p className="font-mono text-[11px] text-muted">{domain.kicker}</p>
                  </div>
                  <p className="text-sm text-on-surface-variant">{domain.body}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {domain.tags.map((tag) => (
                    <span key={tag} className="rounded bg-surface-container px-2 py-1 font-mono text-[12px] text-on-surface">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-xl bg-surface-dark p-8 text-on-surface-dark shadow-lg">
              <div className="pointer-events-none absolute -right-12 -bottom-12 size-48 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#1e293b] text-primary-container">
                  <Icon name="folder_special" className="text-[26px]" />
                </div>
                <div>
                  <h3 className="text-[28px] font-semibold">Dive Into My Work</h3>
                  <p className="mt-1 text-base text-chrome-muted">
                    Explore detailed case studies of enterprise modernization, modular migrations, and full-stack product shipping.
                  </p>
                </div>
              </div>
              <div className="relative z-10 pt-4">
                <Link
                  href="/work"
                  className="inline-flex h-11 items-center gap-2 rounded bg-primary px-6 text-sm font-semibold text-on-primary shadow-sm hover:bg-secondary"
                >
                  View All Projects
                  <Icon name="arrow_forward" className="text-[18px]" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 rounded-xl bg-surface-container p-8 shadow-sm hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name="forum" className="text-[26px]" />
                </div>
                <div>
                  <h3 className="text-[28px] font-semibold text-on-surface">Let’s Build Something</h3>
                  <p className="mt-1 text-base text-muted">
                    Whether you are modernizing complex legacy stacks or expanding your engineering team into cloud and AI initiatives.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded bg-on-surface px-6 text-sm font-semibold text-on-primary shadow-sm hover:bg-primary"
                >
                  Get in Touch
                  <Icon name="mail" className="text-[18px]" />
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

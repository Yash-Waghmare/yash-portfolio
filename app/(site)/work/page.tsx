"use client";

import { Icon } from "@/components/site/Icon";
import { earlierProjects } from "@/content/projects";
import Link from "next/link";
import { useMemo, useState } from "react";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "enterprise", label: "Enterprise" },
  { id: "product", label: "Products" },
  { id: "research", label: "Research" },
] as const;

const MAP_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfHn1He20XY82a0QjWESxQl0x4npp8FXC-3QXH9LN-jfRdJ4yui2wAwl2hGhKwILQRbQ-j3Njbz0pZVyQFa5VhARmu-GVpRlRMeL4LVihHq0HrZH6AsHWGtAw8vA5YMvEPUKGXN07fSe6d68ft9S_sytbgKuCuIhUHSXXlGErER7SxbiMuYjWDLqlxuY-QHxWgpsLxEetPlWnCCehhg36L_cMqhSE8R3z2FL7VERy0Py8-kfsUnKFX";
const PLOT_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBhnWYkhvtoaI1b7DIZ2ZTV18BaEJyeIXHladwB5xTzkAkQXUmwFQfsApiNm6drY_hWUr2O2cLx0SRetC3sX2TLh2yGqVflAfUwC_8-xmWKBx5i0aSA40s1J28csVTUH6FD6WKuboEMZPQAMFBlLBfl114QXPfT2WXMo7iU5Q5EHrgm6h79wjRN-BgWQbvw6P5juGN9T_4OCvfNlxSKsbUgYtc3QgK8JtRGkP1fl4S0YDAWbqcPo9pT";

const earlierMeta: Record<
  string,
  { icon: string; iconClass: string; kicker: string; kickerClass: string; hover: string }
> = {
  leazkart: {
    icon: "directions_car",
    iconClass: "bg-primary/10 text-primary",
    kicker: "Mobility & P2P Rental",
    kickerClass: "text-primary",
    hover: "group-hover:text-primary",
  },
  "iris-liveness": {
    icon: "visibility",
    iconClass: "bg-tertiary/10 text-tertiary",
    kicker: "Computer Vision & Security",
    kickerClass: "text-tertiary",
    hover: "group-hover:text-tertiary",
  },
  workshops: {
    icon: "record_voice_over",
    iconClass: "bg-warning/10 text-warning",
    kicker: "Teaching & Outreach",
    kickerClass: "text-warning",
    hover: "group-hover:text-warning",
  },
};

export default function WorkPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const showEnterprise = filter === "all" || filter === "enterprise";
  const showProduct = filter === "all" || filter === "product";
  const showResearch = filter === "all" || filter === "research";
  const earlier = useMemo(
    () =>
      earlierProjects.filter(
        (project) =>
          filter === "all" ||
          project.category === filter ||
          (filter === "product" && project.category === "product"),
      ),
    [filter],
  );

  return (
    <div className="flex flex-col">
      <section className="relative w-full overflow-hidden bg-surface-dark px-4 py-16 text-on-surface-dark lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-tertiary/5 to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-1/4 size-96 rounded-full bg-primary-container/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8">
          <div className="inline-flex items-center gap-1 self-start rounded-full border border-white/10 bg-inverse-surface/80 px-4 py-1 font-mono text-[13px] text-primary-fixed shadow-sm">
            <span className="font-bold text-primary-container">$</span>
            <span>git status --portfolio=featured</span>
            <span className="ml-1 inline-block h-3.5 w-1.5 bg-primary-container motion-safe:animate-pulse" />
          </div>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="flex max-w-3xl flex-col gap-1">
              <h1 className="text-4xl font-bold tracking-tight text-on-surface-dark md:text-5xl">
                My Work
              </h1>
              <p className="text-lg text-on-surface-dark/80">
                Enterprise modernization, products shipped, and technical explorations engineered with deliberate architecture.
              </p>
            </div>
            <div
              className="flex items-center gap-1 self-start rounded-xl border border-white/10 bg-inverse-surface p-1 shadow-inner md:self-auto"
              role="tablist"
              aria-label="Filter work"
            >
              {FILTERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === item.id}
                  onClick={() => setFilter(item.id)}
                  className={`rounded-lg px-4 py-1 text-sm font-semibold transition-all ${
                    filter === item.id
                      ? "bg-primary text-on-primary shadow-sm"
                      : "text-muted hover:text-on-surface-dark"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-16 lg:px-8">
        {showEnterprise ? (
          <article className="group relative rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md lg:p-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              <div className="flex flex-col gap-6 lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-variant px-2 py-0.5 text-xs font-semibold text-primary">
                    <Icon name="domain" className="text-[14px]" />
                    Enterprise Modernization
                  </span>
                  <span className="font-mono text-[12px] text-muted">July 2024 – Present</span>
                  <span className="size-1 rounded-full bg-outline-variant" />
                  <span className="text-xs font-medium text-on-surface-variant">
                    Accenture • Associate Software Engineer
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-on-surface group-hover:text-primary md:text-4xl">
                    Modernizing Enterprise Applications at Scale
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-on-surface-variant">
                    Leading the architectural migration from a legacy single-page application to a high-concurrency micro-frontend ecosystem, ensuring zero business downtime and uncompromising state predictability.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1 rounded-lg bg-surface-container-low p-4">
                    <p className="flex items-center gap-1 text-sm font-semibold text-error">
                      <Icon name="warning" className="text-[18px]" />
                      The Challenge
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Legacy Vue.js enterprise platform burdened with monolithic state mutation, volatile routing regressions, and high latency during high-volume tenant transactions.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 rounded-lg bg-surface-container p-4">
                    <p className="flex items-center gap-1 text-sm font-semibold text-primary">
                      <Icon name="architecture" className="text-[18px]" />
                      The Solution
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Architected a Next.js/React component system powered by Redux Toolkit, enforced strict TypeScript contract interfaces, and decoupled heavy route trees.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <span className="font-mono text-xs tracking-wider text-muted uppercase">
                    Verified Production Outcomes
                  </span>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      { value: "100%", label: "Feature Parity", color: "text-success" },
                      { value: "+40%", label: "Dev Velocity", color: "text-primary" },
                      { value: "0 hrs", label: "Downtime", color: "text-tertiary" },
                      { value: "Scale", label: "Angular Phase", color: "text-warning" },
                    ].map((metric) => (
                      <div key={metric.label} className="flex flex-col rounded-lg bg-surface-bright p-2">
                        <span className={`text-[28px] font-bold ${metric.color}`}>{metric.value}</span>
                        <span className="text-xs text-muted">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {["React", "Next.js", "Redux Toolkit", "TypeScript", "Node.js", "MongoDB", "AWS", "Terraform", "Docker"].map(
                    (tag) => (
                      <span key={tag} className="rounded bg-surface-variant px-2 py-1 font-mono text-[12px] text-on-surface">
                        {tag}
                      </span>
                    ),
                  )}
                </div>
                <div className="pt-2">
                  <Link
                    href="/work/accenture-modernization"
                    className="group/btn inline-flex items-center gap-1 rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-on-primary shadow-sm hover:bg-secondary"
                  >
                    Explore Full Architecture Breakdown
                    <Icon name="arrow_forward" className="text-[18px] transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 lg:col-span-5">
                <div className="relative flex flex-col gap-4 overflow-hidden rounded-xl bg-surface-dark p-6 font-mono text-on-surface-dark shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[12px] text-muted">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-error" />
                      <span className="size-2.5 rounded-full bg-warning" />
                      <span className="size-2.5 rounded-full bg-success" />
                      <span className="ml-2 font-medium text-on-surface-dark">arch-pipeline.config.ts</span>
                    </div>
                    <span className="text-primary-container">SYS::RUNNING</span>
                  </div>
                  <svg className="h-auto w-full fill-none stroke-current text-primary-container" viewBox="0 0 420 220">
                    <rect className="fill-inverse-surface stroke-primary-container" height="50" rx="8" strokeWidth="1.5" width="100" x="10" y="20" />
                    <text className="fill-primary-fixed text-[11px] font-sans font-semibold" textAnchor="middle" x="60" y="44">
                      Legacy Vue
                    </text>
                    <text className="fill-error text-[9px] font-sans" textAnchor="middle" x="60" y="58">
                      Monolithic State
                    </text>
                    <path className="stroke-warning motion-safe:animate-pulse" d="M 110 45 L 160 45" strokeDasharray="3 3" strokeWidth="2" />
                    <polygon className="fill-warning stroke-warning" points="160,45 154,42 154,48" />
                    <rect className="fill-surface-dark stroke-success" height="60" rx="8" strokeWidth="2" width="130" x="170" y="15" />
                    <text className="fill-on-surface-dark text-[11px] font-sans font-bold" textAnchor="middle" x="235" y="38">
                      Next.js Edge App
                    </text>
                    <text className="fill-success text-[9px] font-sans" textAnchor="middle" x="235" y="52">
                      RTK Slices + Parity
                    </text>
                    <text className="fill-primary-container font-mono text-[8px]" textAnchor="middle" x="235" y="65">
                      Strict TS Contract
                    </text>
                    <path className="stroke-primary-container" d="M 235 75 L 235 125" strokeWidth="1.5" />
                    <polygon className="fill-primary-container" points="235,125 232,118 238,118" />
                    <rect className="fill-inverse-surface stroke-white/20" height="65" rx="8" strokeWidth="1.5" width="190" x="140" y="130" />
                    <text className="fill-on-surface-dark text-[11px] font-sans font-semibold" textAnchor="middle" x="235" y="152">
                      AWS ECS / Terraform VPC
                    </text>
                    <text className="fill-muted font-mono text-[9px]" textAnchor="middle" x="235" y="168">
                      MongoDB • Docker • Redis Cache
                    </text>
                    <text className="fill-primary-fixed font-mono text-[8px]" textAnchor="middle" x="235" y="183">
                      Zero-Downtime Blue/Green
                    </text>
                    <path className="stroke-primary-container" d="M 300 45 L 340 45" strokeWidth="1.5" />
                    <polygon className="fill-primary-container" points="340,45 334,42 334,48" />
                    <rect className="fill-inverse-surface stroke-warning" height="40" rx="6" strokeWidth="1.5" width="65" x="345" y="25" />
                    <text className="fill-warning text-[10px] font-sans font-semibold" textAnchor="middle" x="377" y="44">
                      Angular
                    </text>
                    <text className="fill-muted text-[8px] font-sans" textAnchor="middle" x="377" y="57">
                      Phase 2
                    </text>
                  </svg>
                  <div className="flex flex-col gap-1 rounded-lg bg-inverse-surface/60 p-2 text-[11px] text-muted">
                    <div className="flex items-center justify-between text-primary-container">
                      <span>[MIGRATION_TELEMETRY]</span>
                      <span className="font-semibold text-success">100% HEALTH</span>
                    </div>
                    <div className="text-on-surface-dark">→ Vue 2 monolith extracted: 48 modular components</div>
                    <div className="text-on-surface-dark">→ Global store re-hydrated into Redux slices</div>
                    <div className="text-on-surface-dark">→ Contract validation: TS Strict Mode enforced</div>
                    <div className="text-success">✓ 0 regressions detected across 42 release branches</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-surface-container-high p-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name="verified_user" className="text-[24px]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">Enterprise Safety Guardrails</p>
                    <p className="text-sm text-on-surface-variant">
                      Automated canary deployments via AWS pipeline with instant fallback mechanisms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ) : null}

        {showProduct ? (
          <article className="group relative rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md lg:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="order-2 flex flex-col items-center lg:order-1 lg:col-span-5">
                <div className="relative w-full max-w-[340px] rounded-[36px] border-4 border-inverse-surface/20 bg-surface-dark p-3 shadow-2xl">
                  <div className="flex items-center justify-between px-6 pt-2 pb-3 font-mono text-[11px] text-on-surface-dark">
                    <span>09:41</span>
                    <div className="h-3.5 w-16 rounded-full bg-inverse-surface" />
                    <div className="flex items-center gap-1">
                      <Icon name="wifi" className="text-[13px]" />
                      <Icon name="battery_full" className="text-[13px]" />
                    </div>
                  </div>
                  <div className="flex flex-col overflow-hidden rounded-[24px] bg-surface">
                    <div className="flex items-center justify-between bg-primary p-4 text-on-primary shadow-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="explore" className="text-[20px]" />
                        <span className="text-sm font-semibold">Land Compass</span>
                      </div>
                      <Icon name="notifications" className="text-[18px]" />
                    </div>
                    <div className="flex flex-col gap-2 bg-surface-container-high p-2">
                      <div className="flex items-center gap-2 rounded-lg bg-surface px-2 py-1.5 text-[12px] text-on-surface-variant shadow-sm">
                        <Icon name="location_on" className="text-[16px] text-primary" />
                        <span className="font-medium text-on-surface">Pune & Tier-2 Corridors</span>
                        <Icon name="tune" className="ml-auto text-[16px] text-muted" />
                      </div>
                      <div
                        className="relative flex h-36 flex-col justify-end overflow-hidden rounded-lg bg-cover bg-center p-2"
                        style={{ backgroundImage: `url('${MAP_SRC}')` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent" />
                        <div className="relative z-10 flex items-center justify-between text-on-surface-dark">
                          <span className="rounded bg-primary/90 px-1.5 py-0.5 font-mono text-[10px]">
                            18 verified plots nearby
                          </span>
                          <span className="font-mono text-[10px] text-success">GPS Locked</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 p-2">
                      <div className="flex items-center gap-2 rounded-lg bg-surface-container-low p-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={PLOT_SRC} alt="" className="size-16 rounded-md object-cover" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold text-on-surface">Green Ridge Township</p>
                          <p className="font-mono text-[11px] text-primary">₹ 34.5 L • Direct Broker</p>
                          <p className="flex items-center gap-1 pt-1 text-[10px] text-muted">
                            <Icon name="verified" className="text-[12px] text-success" />
                            Verified Title • 1.2 km from Express Highway
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-around border-t border-outline/10 py-1 font-mono text-[11px] text-muted">
                        <span className="flex items-center gap-0.5 font-bold text-primary">
                          <Icon name="map" className="text-[14px]" />
                          Map
                        </span>
                        <span className="flex items-center gap-0.5">
                          <Icon name="bookmark" className="text-[14px]" />
                          Saved
                        </span>
                        <span className="flex items-center gap-0.5">
                          <Icon name="chat" className="text-[14px]" />
                          Brokers
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-muted/40" />
                </div>
              </div>
              <div className="order-1 flex flex-col gap-6 lg:order-2 lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">
                    <span className="inline-block size-2 rounded-full bg-success motion-safe:animate-ping" />
                    Production Product Shipped
                  </span>
                  <span className="font-mono text-[12px] text-muted">Shipped 2024</span>
                  <span className="size-1 rounded-full bg-outline-variant" />
                  <span className="text-xs font-medium text-on-surface-variant">Solo Product Developer</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-on-surface group-hover:text-primary md:text-4xl">
                    Land Compass: Real Estate Discovery Mobile App
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-on-surface-variant">
                    Engineered and shipped end-to-end to iOS App Store and Google Play Store to solve non-transparent real estate discoveries in rapidly developing Tier 2/3 Indian regions.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1 rounded-lg bg-surface-container-low p-4">
                    <p className="flex items-center gap-1 text-sm font-semibold text-secondary">
                      <Icon name="travel_explore" className="text-[18px]" />
                      The Problem
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Fragmented real estate broker networks, fake duplicate listings, and absence of authenticated geolocation data outside Tier-1 metros.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 rounded-lg bg-surface-container p-4">
                    <p className="flex items-center gap-1 text-sm font-semibold text-primary">
                      <Icon name="developer_mode" className="text-[18px]" />
                      The Build
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Constructed from initial Figma prototype to production deploy via React Native and Expo, with Firebase Firestore synchronization and offline-first cache layers.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs tracking-wider text-muted uppercase">
                    Product Highlights & Metrics
                  </span>
                  {[
                    "Dual-store release: Live on both Apple App Store and Google Play Store with 99.8% crash-free sessions.",
                    "Sub-second listing search via Firestore spatial indexing and offline device storage.",
                    "Interactive customized map UI designed specifically for rural and suburban broker workflows.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 rounded-lg bg-surface-bright p-2">
                      <Icon name="check_circle" className="shrink-0 text-[20px] text-success" />
                      <span className="text-sm text-on-surface">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1">
                  {["React Native", "Expo", "Firebase Firestore", "Cloud Functions", "GeoFirestore", "REST API"].map(
                    (tag) => (
                      <span key={tag} className="rounded bg-surface-variant px-2 py-1 font-mono text-[12px] text-on-surface">
                        {tag}
                      </span>
                    ),
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 rounded-lg bg-surface-dark px-4 py-1 text-sm font-semibold text-on-surface-dark hover:bg-inverse-surface"
                  >
                    <Icon name="file_download" className="text-[18px]" />
                    App Store
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 rounded-lg bg-surface-dark px-4 py-1 text-sm font-semibold text-on-surface-dark hover:bg-inverse-surface"
                  >
                    <Icon name="android" className="text-[18px]" />
                    Google Play
                  </a>
                  <Link
                    href="/work/land-compass"
                    className="inline-flex items-center gap-1 rounded-lg bg-surface-container-high px-4 py-1 text-sm font-semibold text-primary hover:bg-surface-variant"
                  >
                    Case Study Deep Dive
                    <Icon name="arrow_outward" className="text-[18px]" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ) : null}

        {(showProduct || showResearch) && earlier.length > 0 ? (
          <section className="flex flex-col gap-8" id="research-section">
            <div>
              <p className="font-mono text-sm text-primary">$ yash --show earlier-work</p>
              <h2 className="mt-1 text-[28px] font-semibold text-on-surface">
                Earlier Work & Research Explorations
              </h2>
              <p className="text-base text-on-surface-variant">
                Pioneering foundations spanning peer-to-peer mobility, machine vision security algorithms, and engineering mentorship.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {earlier.map((project) => {
                const meta = earlierMeta[project.slug];
                return (
                  <Link
                    key={project.slug}
                    href={project.href}
                    className="group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className={`flex size-10 items-center justify-center rounded-lg ${meta?.iconClass ?? "bg-primary/10 text-primary"}`}>
                          <Icon name={meta?.icon ?? "folder"} className="text-[22px]" />
                        </div>
                        <span className="font-mono text-[11px] text-muted">{project.timeline}</span>
                      </div>
                      <div>
                        <p className={`text-xs font-semibold ${meta?.kickerClass ?? "text-primary"}`}>
                          {meta?.kicker ?? project.category}
                        </p>
                        <h3 className={`text-xl font-semibold text-on-surface ${meta?.hover ?? "group-hover:text-primary"}`}>
                          {project.shortTitle}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-outline/10 pt-6">
                      {project.technologies.map((tag) => (
                        <span key={tag} className="rounded bg-surface-variant px-2 py-0.5 font-mono text-[11px] text-on-surface">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        <section className="relative overflow-hidden rounded-2xl bg-surface-dark p-8 text-on-surface-dark shadow-xl lg:p-12">
          <div className="pointer-events-none absolute -right-10 -bottom-10 size-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 font-mono text-[13px] text-primary-container">
                <span className="size-2 rounded-full bg-success" />
                yash@contact:~$ ./initiate-conversation.sh
              </p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight">
                Interested in working together or reviewing technical details?
              </h2>
              <p className="mt-2 text-base text-muted">
                Let’s talk about modernization, product engineering, or the next thing that needs to ship.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-on-primary shadow-md hover:bg-secondary"
            >
              Get in touch
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

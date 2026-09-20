"use client";

import { useMemo, useState } from "react";

const FILTERS = [
  { id: "all", label: "All Capabilities" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "infra", label: "Cloud & Backend" },
  { id: "ai", label: "AI Tools" },
] as const;

const CARDS = [
  {
    category: "frontend",
    tag: "FRONTEND",
    title: "Enterprise Next.js Modernization",
    body: "Architected and converted complex legacy single page applications into high-velocity Next.js frameworks with zero service regression.",
    meta: "Accenture Production",
    status: "99.9% Parity",
    statusClass: "text-success",
  },
  {
    category: "mobile",
    tag: "MOBILE",
    title: "Full Lifecycle Mobile Delivery",
    body: "React Native & Expo setup, offline data reconciliation, Firebase integration, and submission review management across iOS & Android.",
    meta: "Land Compass App",
    status: "Live On Stores",
    statusClass: "text-success",
  },
  {
    category: "infra",
    tag: "CLOUD",
    title: "IaC & Cloud Provisioning",
    body: "Declarative Terraform definitions for AWS resources: VPC networks, security groups, S3 buckets, and containerized task executions.",
    meta: "AWS / Terraform",
    status: "Automated CI",
    statusClass: "text-secondary",
  },
  {
    category: "frontend",
    tag: "FRONTEND",
    title: "Predictable State Architecture",
    body: "Redux Toolkit implementation with normalized state caches, optimistic UI updates, and automated RTK Query cache invalidations.",
    meta: "Redux / Context",
    status: "Deterministic",
    statusClass: "text-success",
  },
  {
    category: "infra",
    tag: "BACKEND",
    title: "NoSQL Database Schema Design",
    body: "Document normalization, indexing strategies, real-time reactive listeners with Firebase Firestore, and secure JWT authentication middleware.",
    meta: "Node / MongoDB / Firebase",
    status: "Sub-50ms Reads",
    statusClass: "text-secondary",
  },
  {
    category: "ai",
    tag: "AI / EMERGING",
    title: "Agentic Tool Orchestration",
    body: "Model Context Protocol integration, structured tool calls for LLM agents, and automated development workflow accelerators.",
    meta: "AWS Bedrock / MCP",
    status: "System Pilot",
    statusClass: "text-primary",
  },
];

export function CapabilityFinder() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const cards = useMemo(
    () => CARDS.filter((card) => filter === "all" || card.category === filter),
    [filter],
  );

  return (
    <section className="w-full bg-surface-container-low py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
              Interactive Filter
            </p>
            <h2 className="text-[28px] font-semibold text-on-surface">Capability Finder</h2>
            <p className="text-base text-muted">
              Test stack compatibility against your team’s immediate requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Capability filters">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm ${
                  filter === item.id
                    ? "bg-primary text-on-primary"
                    : "bg-surface text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col justify-between gap-4 rounded-xl bg-surface p-4 shadow-sm hover:bg-surface-hover"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-on-surface">{card.title}</h3>
                  <span className="shrink-0 rounded bg-surface-container px-2 py-0.5 font-mono text-[10px] text-primary">
                    {card.tag}
                  </span>
                </div>
                <p className="text-sm text-muted">{card.body}</p>
              </div>
              <div className="flex items-center justify-between border-t border-outline/30 pt-2 font-mono text-[11px] text-on-surface-variant">
                <span>{card.meta}</span>
                <span className={`font-medium ${card.statusClass}`}>{card.status}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

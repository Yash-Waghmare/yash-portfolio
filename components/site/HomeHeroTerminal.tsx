"use client";

import { Icon } from "@/components/site/Icon";
import { profile } from "@/content/profile";
import { useRouter } from "next/navigation";
import { useState } from "react";

const COMMANDS = [
  { label: "yash projects", href: "/work", icon: "arrow_forward" },
  { label: "yash whoami", href: "/about", icon: "badge" },
  { label: "yash skills", href: "/skills", icon: "memory" },
  { label: "yash contact", href: "/contact", icon: "send" },
  {
    label: "yash resume",
    href: profile.resumePath,
    icon: "download",
    download: true,
    primary: true,
  },
] as const;

export function HomeHeroTerminal() {
  const router = useRouter();
  const [typed, setTyped] = useState("");

  function run(command: (typeof COMMANDS)[number]) {
    const typedText = command.download ? "yash resume --download" : command.label;
    setTyped(typedText);
    window.setTimeout(() => {
      if (command.download) {
        window.location.assign(command.href);
        return;
      }
      router.push(command.href);
    }, 400);
  }

  return (
    <div className="flex w-full max-w-[900px] flex-col overflow-hidden rounded-xl bg-surface-dark text-on-surface-dark shadow-xl">
      <div className="flex select-none items-center justify-between bg-[#131d33] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 rounded-full bg-error shadow-sm" />
          <span className="inline-block size-3 rounded-full bg-warning shadow-sm" />
          <span className="inline-block size-3 rounded-full bg-success shadow-sm" />
        </div>
        <div className="flex items-center gap-1 font-mono text-[12px] leading-4 text-chrome-muted">
          <Icon name="terminal" className="text-[15px] text-accent" />
          <span>yash@portfolio: ~ (zsh)</span>
        </div>
        <div className="hidden font-mono text-[11px] text-muted sm:block">UTF-8</div>
      </div>

      <div className="flex flex-col gap-4 overflow-x-auto p-4 font-mono text-base md:p-6">
        <div className="flex flex-col gap-1">
          <p className="flex flex-wrap items-center gap-2 font-medium">
            <span className="text-primary-container">yash@portfolio:~$</span>
            <span>whoami</span>
          </p>
          <h1 className="pl-3 text-on-surface-dark/95">
            Yash Waghmare - Software Developer
          </h1>
        </div>

        <div className="flex flex-col gap-1">
          <p className="flex flex-wrap items-center gap-2 font-medium">
            <span className="text-primary-container">yash@portfolio:~$</span>
            <span>yash --status</span>
          </p>
          <div className="flex flex-col gap-0.5 pl-3 text-on-surface-dark/90">
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-primary-container">Status:</span>
              <span>Building • Modernizing • Expanding into Cloud</span>
            </p>
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-primary-container">Years in Production:</span>
              <span>2+</span>
            </p>
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-primary-container">Current Focus:</span>
              <span>Enterprise Apps, Cloud Infrastructure</span>
            </p>
            <p className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-primary-container">Latest Ship:</span>
              <span className="flex items-center gap-1.5 font-medium text-success">
                <span className="inline-block size-2 rounded-full bg-success" />
                Land Compass (iOS/Android, Live on App Stores)
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="flex flex-wrap items-center gap-2 font-medium">
            <span className="text-primary-container">yash@portfolio:~$</span>
            <span>yash skills</span>
          </p>
          <div className="grid grid-cols-1 gap-x-6 gap-y-1 pl-3 text-on-surface-dark/90 sm:grid-cols-2">
            <p className="flex items-start gap-2">
              <span className="min-w-[80px] font-medium text-primary-container">Frontend:</span>
              <span>React, Next.js, Angular, Redux Toolkit</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="min-w-[80px] font-medium text-primary-container">Backend:</span>
              <span>Node.js, MongoDB, Firebase</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="min-w-[80px] font-medium text-primary-container">Cloud:</span>
              <span>AWS, Terraform, Docker</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="min-w-[80px] font-medium text-primary-container">Emerging:</span>
              <span className="text-host">Agentic AI, AWS Bedrock, MCP</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex flex-wrap items-center gap-2 font-medium">
            <span className="text-primary-container">yash@portfolio:~$</span>
            <span>yash --help</span>
          </p>
          <div className="flex flex-col gap-2 pl-3">
            <span className="text-sm text-chrome-muted">Available interactive commands:</span>
            <div className="flex flex-wrap gap-2 pt-1">
              {COMMANDS.map((command) => (
                <button
                  key={command.label}
                  type="button"
                  onClick={() => run(command)}
                  className={`group inline-flex cursor-pointer items-center gap-1.5 rounded px-3 py-1.5 font-mono text-[13px] shadow-sm transition-all ${
                    "primary" in command && command.primary
                      ? "bg-primary text-on-primary hover:bg-secondary"
                      : "bg-[#1e293b] text-primary-container hover:bg-primary hover:text-on-primary"
                  }`}
                >
                  <span className={"primary" in command && command.primary ? "" : "text-host group-hover:text-on-primary"}>
                    $
                  </span>
                  <span>{command.label}</span>
                  <Icon
                    name={command.icon}
                    className={`text-[14px] ${
                      "primary" in command && command.primary
                        ? ""
                        : "opacity-70 group-hover:translate-x-0.5 group-hover:opacity-100"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="flex items-center gap-2 pt-2 font-medium">
          <span className="text-primary-container">yash@portfolio:~$</span>
          <span>{typed}</span>
          <span className="inline-block h-5 w-2.5 bg-primary-container shadow-[0_0_8px_#0ea5e9] motion-safe:animate-pulse" />
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between bg-[#0b1120] px-4 py-2 font-mono text-[11px] text-muted">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-success">
            <span className="size-1.5 rounded-full bg-success" />
            zsh ready
          </span>
          <span>session: #0429</span>
        </div>
        <span>Press any button above to run</span>
      </div>
    </div>
  );
}

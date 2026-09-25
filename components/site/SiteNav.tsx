"use client";

import { Icon } from "@/components/site/Icon";
import { ResumeButton } from "@/components/site/ResumeButton";
import { navLinks, profile } from "@/content/profile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-outline bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profile.logoPath} alt="" className="size-8" />
          <span className="text-sm font-bold tracking-tight text-on-surface">
            yash<span className="text-primary-container">.dev</span>
          </span>
          <span className="ml-3 hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-on-surface group-hover:text-primary">
              {profile.name}
            </span>
            <span className="font-mono text-[11px] leading-[14px] text-muted">
              dev.cli // v{profile.cliVersion}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-2 py-1 text-sm transition-all ${
                  active
                    ? "bg-surface-hover font-semibold text-primary"
                    : "text-on-surface-variant hover:bg-surface-hover hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ResumeButton />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photoPath}
            alt={profile.name}
            className="hidden size-8 rounded-full object-cover object-[center_18%] sm:inline-block"
          />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-outline md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Icon name={open ? "close" : "menu"} className="text-[22px] text-on-surface" />
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-outline bg-surface px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-11 py-2 text-base text-on-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

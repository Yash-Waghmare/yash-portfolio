import { ContactForm } from "@/components/site/ContactForm";
import { CopyEmail } from "@/components/site/CopyEmail";
import { Icon } from "@/components/site/Icon";
import { profile } from "@/content/profile";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Yash Waghmare about product engineering, modernization, cloud, teaching, or collaboration.",
};

const openTo = [
  {
    icon: "architecture",
    title: "Enterprise Architecture",
    body: "Scalable full-stack systems and high-throughput web apps",
  },
  {
    icon: "devices",
    title: "Mobile App Engineering",
    body: "Cross-platform development using React Native & Expo",
  },
  {
    icon: "published_with_changes",
    title: "Frontend Modernization",
    body: "Zero-downtime migration from Vue/Legacy to React/Next.js",
  },
  {
    icon: "school",
    title: "Technical Mentorship",
    body: "Interactive developer workshops and modern web dev bootcamps",
  },
];

export default function ContactPage() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-8 lg:px-8">
      <header className="flex max-w-3xl flex-col gap-1">
        <div className="inline-flex items-center gap-2 self-start rounded-full bg-surface-variant/60 px-3 py-1 font-mono text-[12px] tracking-wide text-secondary">
          <span className="size-1.5 rounded-full bg-primary-container motion-safe:animate-pulse" />
          <span>cli: yash contact --intent=connect</span>
        </div>
        <h1 className="mt-1 text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
          Get in Touch
        </h1>
        <p className="text-lg text-muted">
          Let’s discuss opportunities, enterprise modernization, or collaborative projects.
        </p>
      </header>

      <section aria-label="Direct Contact Channels" className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
        <div className="group relative flex flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:bg-surface-hover">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex size-11 items-center justify-center rounded-lg bg-surface-container text-primary transition-all group-hover:bg-primary group-hover:text-on-primary">
                <Icon name="alternate_email" className="text-[24px]" />
              </div>
              <span className="font-mono text-[11px] tracking-wider text-muted uppercase">Direct Inbox</span>
            </div>
            <div className="mt-1">
              <h2 className="text-xl font-semibold text-on-surface">Email Channel</h2>
              <p className="mt-1 font-mono text-base break-all text-on-surface-variant select-all">
                {profile.email}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 pt-2">
            <CopyEmail email={profile.email} />
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary"
            >
              Compose
              <Icon name="arrow_outward" className="text-[16px]" />
            </a>
          </div>
        </div>

        <div className="group relative flex flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:bg-surface-hover">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex size-11 items-center justify-center rounded-lg bg-surface-container text-primary transition-all group-hover:bg-primary group-hover:text-on-primary">
                <Icon name="badge" className="text-[24px]" />
              </div>
              <span className="font-mono text-[11px] tracking-wider text-muted uppercase">Professional</span>
            </div>
            <div className="mt-1">
              <h2 className="text-xl font-semibold text-on-surface">LinkedIn</h2>
              <p className="mt-1 truncate font-mono text-base text-on-surface-variant">
                linkedin.com/in/yash-waghmare
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center pt-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary"
            >
              Open Profile
              <Icon name="launch" className="text-[18px]" />
            </a>
          </div>
        </div>

        <div className="group relative flex flex-col justify-between rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:bg-surface-hover">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex size-11 items-center justify-center rounded-lg bg-surface-container text-primary transition-all group-hover:bg-primary group-hover:text-on-primary">
                <Icon name="terminal" className="text-[24px]" />
              </div>
              <span className="font-mono text-[11px] tracking-wider text-muted uppercase">Repositories</span>
            </div>
            <div className="mt-1">
              <h2 className="text-xl font-semibold text-on-surface">GitHub</h2>
              <p className="mt-1 truncate font-mono text-base text-on-surface-variant">
                github.com/Yash-Waghmare
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center pt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary"
            >
              View Repositories
              <Icon name="open_in_new" className="text-[18px]" />
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col rounded-xl bg-surface-container-lowest p-8 shadow-sm lg:col-span-7">
          <div className="mb-4 flex items-center justify-between pb-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-[28px] font-semibold text-on-surface">Dispatch Message</h2>
              <span className="text-sm text-muted">Initialize an encrypted inquiry or project discussion</span>
            </div>
            <Icon name="send" className="text-[24px] text-muted" />
          </div>
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="flex flex-col rounded-xl bg-surface-container-lowest p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <Icon name="hub" className="text-[22px] text-primary" />
              <h3 className="text-xl font-semibold text-on-surface">What I’m Open To</h3>
            </div>
            <p className="mb-4 text-sm text-muted">
              Collaborating with cross-functional engineering teams, ambitious founders, and tech communities on high-impact initiatives:
            </p>
            <ul className="flex flex-col gap-2">
              {openTo.map((item) => (
                <li key={item.title} className="flex items-start gap-2 rounded-lg bg-surface-hover/70 p-2">
                  <Icon name={item.icon} className="mt-0.5 text-[20px] text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{item.title}</p>
                    <p className="text-sm text-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-xl bg-surface-container-high p-6 shadow-sm">
            <div className="pointer-events-none absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5">
              <Icon name="description" className="text-[160px] text-on-surface" />
            </div>
            <div className="mb-1 flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold tracking-widest text-primary uppercase">
                Verified Credentials
              </span>
              <span className="rounded bg-success/15 px-2 py-0.5 font-mono text-[11px] text-success">
                Updated v{profile.cliVersion}
              </span>
            </div>
            <h3 className="text-[28px] font-semibold text-on-surface">Curriculum Vitae</h3>
            <p className="mt-1 text-sm text-on-surface-variant">
              Up to date as of September 2026 • Verified track record in enterprise modernization & independently shipped applications.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={profile.resumePath}
                download
                className="group flex items-center justify-between rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-on-primary shadow-sm hover:bg-secondary"
              >
                <span className="flex items-center gap-2">
                  <Icon name="picture_as_pdf" className="text-[20px]" />
                  Download Formatted PDF
                </span>
                <Icon name="download" className="text-[18px] transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resumePath}
                download
                className="group flex items-center justify-between rounded-lg bg-surface-container-lowest px-4 py-3 text-sm font-semibold text-on-surface shadow-sm hover:bg-surface-hover"
              >
                <span className="flex items-center gap-2">
                  <Icon name="terminal" className="text-[20px] text-muted" />
                  Download ATS-Friendly PDF
                </span>
                <Icon name="download" className="text-[18px] text-muted transition-transform group-hover:translate-y-0.5" />
              </a>
              <Link
                href="/resume"
                className="flex items-center justify-center gap-1.5 py-2 text-sm font-semibold text-secondary hover:text-primary"
              >
                <Icon name="visibility" className="text-[18px]" />
                Direct Resume Preview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <aside aria-label="Terminal Session Status" className="mt-6 w-full">
        <div className="flex w-full flex-col items-start justify-between gap-4 rounded-xl bg-surface-dark p-4 shadow-md sm:flex-row sm:items-center sm:p-6">
          <div className="flex max-w-full items-center gap-2 overflow-x-auto font-mono text-base text-on-surface-dark">
            <div className="flex items-center gap-1.5 rounded bg-surface-dark/90 px-2.5 py-1 font-mono text-[12px] text-primary-fixed">
              <span className="size-2 rounded-full bg-success motion-safe:animate-pulse" />
              <span>tty: /dev/pts/0</span>
            </div>
            <span className="font-medium text-primary-container">yash@portfolio:~$</span>
            <span>exit 0</span>
            <span className="text-primary-container motion-safe:animate-pulse">▮</span>
          </div>
          <div className="flex items-center gap-4 self-end font-mono text-[12px] text-muted sm:self-auto">
            <span className="hidden text-on-surface-dark/70 md:inline">Session active & ready for queries</span>
            <Link
              href="/"
              className="rounded bg-inverse-surface px-2 py-1 text-primary-fixed hover:bg-primary hover:text-on-primary"
            >
              cd ~ (Home)
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

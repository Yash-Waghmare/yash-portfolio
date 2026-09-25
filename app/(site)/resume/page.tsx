import { Icon } from "@/components/site/Icon";
import { careerTimeline, profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { skillDomains } from "@/content/skills";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description: `Download ${profile.name}'s resume — software developer building, modernizing, and expanding into cloud and AI.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12 lg:px-8">
      <p className="text-sm">
        <Link href="/contact" className="font-medium text-primary hover:underline">
          ← Back to Contact
        </Link>
      </p>

      <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
        <div className="flex items-center justify-between bg-surface-container-high px-6 py-4">
          <div className="flex items-center gap-2">
            <Icon name="badge" className="text-[20px] text-primary" />
            <span className="text-xl font-semibold text-on-surface">
              Resume Preview: {profile.name}
            </span>
          </div>
          <span className="rounded bg-success/15 px-2 py-0.5 font-mono text-[11px] text-success">
            v{profile.cliVersion}
          </span>
        </div>

        <div className="flex flex-col gap-6 p-6 text-on-surface">
          <div className="pb-4">
            <h1 className="text-[28px] font-semibold text-on-surface">{profile.name}</h1>
            <p className="mt-0.5 text-sm font-semibold text-primary">
              {profile.role} • {profile.location}
            </p>
            <p className="mt-1 text-sm text-muted">
              {profile.headline}. {profile.focus}.
            </p>
          </div>

          <section>
            <h2 className="mb-3 text-sm font-semibold tracking-wider text-muted uppercase">
              Experience
            </h2>
            <div className="flex flex-col gap-4">
              {careerTimeline.map((item) => (
                <div key={item.org} className="flex flex-col gap-1">
                  <div className="flex flex-col justify-between gap-1 text-sm font-semibold sm:flex-row sm:items-center">
                    <span className="text-on-surface">
                      {item.title} — {item.org}
                    </span>
                    <span className="font-mono text-[13px] font-normal text-muted">{item.period}</span>
                  </div>
                  <ul className="mt-1 flex list-inside list-disc flex-col gap-1 text-sm text-on-surface-variant">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-semibold tracking-wider text-muted uppercase">
              Selected work
            </h2>
            <ul className="flex list-inside list-disc flex-col gap-1 text-sm text-on-surface-variant">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <span className="font-medium text-on-surface">{project.shortTitle}</span> —{" "}
                  {project.summary}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-semibold tracking-wider text-muted uppercase">
              Skills
            </h2>
            <ul className="flex flex-col gap-2 text-sm">
              {skillDomains.map((domain) => (
                <li key={domain.id}>
                  <span className="font-medium text-on-surface">{domain.name}:</span>{" "}
                  <span className="text-on-surface-variant">
                    {domain.skills.map((skill) => skill.split(" (")[0]).join(", ")}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <a
        href={profile.resumePath}
        download
        className="group flex items-center justify-between rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-on-primary shadow-sm hover:bg-secondary"
      >
        <span className="flex items-center gap-2">
          <Icon name="picture_as_pdf" className="text-[20px]" />
          Download Resume
        </span>
        <Icon name="download" className="text-[18px] transition-transform group-hover:translate-y-0.5" />
      </a>
    </div>
  );
}

import { CaseStudyFrame } from "@/components/site/CaseStudyFrame";
import { accentureCaseStudy, projects } from "@/content/projects";
import type { Metadata } from "next";

const project = projects.find((item) => item.slug === "accenture-modernization")!;

export const metadata: Metadata = {
  title: project.shortTitle,
  description: project.summary,
};

const toc = [
  "Overview",
  "Challenge",
  "Approach",
  "Technical details",
  "Outcomes & impact",
  "Key learnings",
];

export default function AccentureCaseStudyPage() {
  return (
    <CaseStudyFrame
      kicker={`Enterprise · ${project.company}`}
      title={project.title}
      meta={`${project.role} · ${project.timeline}`}
      toc={toc}
      next={{ href: "/work/land-compass", label: "Land Compass case study →" }}
      aside={
        <aside className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
          <p className="font-semibold text-on-surface">Project summary</p>
          <p className="mt-2 text-sm text-muted">
            {project.timeline} · {project.role}
          </p>
          <p className="mt-2 text-sm text-on-surface-variant">{project.technologies.join(" · ")}</p>
        </aside>
      }
    >
      <section id="overview">
        <h2 className="text-3xl font-bold text-on-surface">Overview</h2>
        <p className="mt-4 max-w-3xl leading-7 text-on-surface">{accentureCaseStudy.overview}</p>
      </section>
      <section id="challenge">
        <h2 className="text-3xl font-bold text-on-surface">Challenge</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-7 text-on-surface-variant">
          {accentureCaseStudy.challenge.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section id="approach">
        <h2 className="text-3xl font-bold text-on-surface">Approach</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-7 text-on-surface-variant">
          {accentureCaseStudy.approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section id="technical-details">
        <h2 className="text-3xl font-bold text-on-surface">Technical details</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-7 text-on-surface-variant">
          {accentureCaseStudy.technical.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section id="outcomes-impact">
        <h2 className="text-3xl font-bold text-on-surface">Outcomes & impact</h2>
        <ul className="mt-4 max-w-3xl space-y-2 leading-7 text-on-surface">
          {accentureCaseStudy.outcomes.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </section>
      <section id="key-learnings">
        <h2 className="text-3xl font-bold text-on-surface">Key learnings</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-7 text-on-surface-variant">
          {accentureCaseStudy.learnings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </CaseStudyFrame>
  );
}

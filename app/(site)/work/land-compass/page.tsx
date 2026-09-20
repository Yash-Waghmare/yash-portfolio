import { CaseStudyFrame } from "@/components/site/CaseStudyFrame";
import { landCompassCaseStudy, projects } from "@/content/projects";
import type { Metadata } from "next";

const project = projects.find((item) => item.slug === "land-compass")!;

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

export default function LandCompassCaseStudyPage() {
  return (
    <CaseStudyFrame
      kicker="Product · shipped, live"
      title={project.title}
      meta={`${project.role} · ${project.timeline} · ${project.status}`}
      toc={toc}
      prev={{ href: "/work/accenture-modernization", label: "← Accenture case study" }}
      next={{ href: "/work", label: "Back to Work →" }}
      aside={
        <aside className="rounded-xl bg-surface-container-lowest p-6 shadow-sm">
          <p className="font-semibold text-on-surface">Project summary</p>
          <p className="mt-2 text-sm text-muted">
            {project.timeline} · Solo · {project.status}
          </p>
          <p className="mt-2 text-sm text-on-surface-variant">{project.technologies.join(" · ")}</p>
          {project.storeLinks ? (
            <div className="mt-4 flex flex-wrap gap-4">
              {project.storeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </aside>
      }
    >
      <section id="overview">
        <h2 className="text-3xl font-bold text-on-surface">Overview</h2>
        <p className="mt-4 max-w-3xl leading-7 text-on-surface">{landCompassCaseStudy.overview}</p>
      </section>
      <section id="challenge">
        <h2 className="text-3xl font-bold text-on-surface">Challenge</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-7 text-on-surface-variant">
          {landCompassCaseStudy.challenge.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section id="approach">
        <h2 className="text-3xl font-bold text-on-surface">Approach</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-7 text-on-surface-variant">
          {landCompassCaseStudy.approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section id="technical-details">
        <h2 className="text-3xl font-bold text-on-surface">Technical details</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-7 text-on-surface-variant">
          {landCompassCaseStudy.technical.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section id="outcomes-impact">
        <h2 className="text-3xl font-bold text-on-surface">Outcomes & impact</h2>
        <ul className="mt-4 max-w-3xl space-y-2 leading-7 text-on-surface">
          {landCompassCaseStudy.outcomes.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </section>
      <section id="key-learnings">
        <h2 className="text-3xl font-bold text-on-surface">Key learnings</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-7 text-on-surface-variant">
          {landCompassCaseStudy.learnings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </CaseStudyFrame>
  );
}

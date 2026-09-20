import { Icon } from "@/components/site/Icon";
import { earlierProjects } from "@/content/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Earlier projects",
  description:
    "Leazkart, iris liveness detection, and community workshops from earlier in Yash Waghmare’s career.",
};

export default function EarlierProjectsPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-12 lg:px-8">
      <p className="text-sm">
        <Link href="/work" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
          <Icon name="arrow_back" className="text-[16px]" />
          Back to Work
        </Link>
      </p>
      <header>
        <p className="font-mono text-sm text-primary">$ yash --show earlier-work</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
          Earlier projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Product, research, and teaching work that came before the current enterprise and shipped-app focus.
        </p>
      </header>

      {earlierProjects.map((project) => (
        <article
          key={project.slug}
          id={project.slug}
          className="scroll-mt-24 rounded-xl bg-surface-container-lowest p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-on-surface">{project.title}</h2>
          <p className="mt-1 text-sm text-muted">
            {project.role} · {project.timeline}
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-on-surface">{project.summary}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-on-surface-variant">
            {project.solution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-sm text-primary">{project.technologies.join(" · ")}</p>
        </article>
      ))}
    </div>
  );
}

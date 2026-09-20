import { ButtonLink } from "@/components/site/ButtonLink";
import { Icon } from "@/components/site/Icon";
import Link from "next/link";

type Props = {
  kicker: string;
  title: string;
  meta: string;
  toc: string[];
  children: React.ReactNode;
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
  aside?: React.ReactNode;
};

function tocId(item: string) {
  return item.toLowerCase().replace(/[^a-z]+/g, "-");
}

export function CaseStudyFrame({
  kicker,
  title,
  meta,
  toc,
  children,
  prev,
  next,
  aside,
}: Props) {
  return (
    <article className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-12 lg:px-8">
      <p className="text-sm">
        <Link href="/work" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
          <Icon name="arrow_back" className="text-[16px]" />
          Back to Work
        </Link>
      </p>
      <header className="border-b border-primary/30 pb-8">
        <p className="font-mono text-sm text-primary">{kicker}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-on-surface md:text-5xl">{title}</h1>
        <p className="mt-4 text-muted">{meta}</p>
      </header>
      <nav aria-label="On this page" className="rounded-xl bg-surface-container-lowest p-5 text-sm shadow-sm">
        <p className="font-semibold text-on-surface">Contents</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {toc.map((item) => (
            <li key={item}>
              <a href={`#${tocId(item)}`} className="text-primary hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {children}
      {aside}
      <div className="flex flex-wrap justify-between gap-4 border-t border-outline pt-8">
        {prev ? (
          <ButtonLink href={prev.href} variant="tertiary">
            {prev.label}
          </ButtonLink>
        ) : (
          <ButtonLink href="/work" variant="tertiary">
            ← Back to Work
          </ButtonLink>
        )}
        {next ? (
          <ButtonLink href={next.href} variant="tertiary">
            {next.label}
          </ButtonLink>
        ) : null}
      </div>
    </article>
  );
}

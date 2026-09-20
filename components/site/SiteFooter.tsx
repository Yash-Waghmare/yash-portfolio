import { Icon } from "@/components/site/Icon";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-surface-dark py-12 text-on-surface-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-wider text-primary-container">
              System Architecture // Portfolio
            </p>
            <p className="mt-2 text-base">
              {profile.name} — Software Developer: Building • Modernizing • Expanding into Cloud & AI
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 font-mono text-xs text-success">
            <span className="size-2 rounded-full bg-success motion-safe:animate-pulse" />
            v{profile.cliVersion} • System Online
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
          <p>© 2026 {profile.name}. Precision engineering & clean architectures.</p>
          <div className="flex items-center gap-6">
            <a
              className="inline-flex items-center gap-1 text-on-surface-dark hover:text-primary-container"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="terminal" className="text-[16px]" />
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-1 text-on-surface-dark hover:text-primary-container"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="badge" className="text-[16px]" />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-1 text-on-surface-dark hover:text-primary-container"
              href={`mailto:${profile.email}`}
            >
              <Icon name="alternate_email" className="text-[16px]" />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

type Props = {
  title: string;
  tagline?: string;
};

export function PageHeader({ title, tagline }: Props) {
  return (
    <header className="border-b border-slate-200 pb-10">
      <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
        {title}
      </h1>
      {tagline ? (
        <p className="mt-4 max-w-2xl text-lg leading-7 text-muted">{tagline}</p>
      ) : null}
    </header>
  );
}

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  external?: boolean;
};

const styles = {
  primary:
    "inline-flex min-h-11 items-center justify-center gap-1 rounded-lg bg-primary px-5 text-sm font-semibold text-on-primary shadow-sm hover:bg-secondary",
  secondary:
    "inline-flex min-h-11 items-center justify-center rounded-lg bg-surface-container-high px-5 text-sm font-semibold text-primary hover:bg-surface-variant",
  tertiary:
    "inline-flex min-h-11 items-center text-sm font-semibold text-primary underline-offset-4 hover:underline",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
}: Props) {
  const className = styles[variant];
  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

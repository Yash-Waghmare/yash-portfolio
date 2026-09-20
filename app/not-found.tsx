import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-terminal px-6 font-mono text-terminal-text">
      <p className="text-host">yash@portfolio</p>
      <h1 className="mt-4 text-2xl text-terminal-bright">404 — path not found</h1>
      <p className="mt-3 text-muted">This path does not exist. Open a known page.</p>
      <div className="mt-8 flex gap-4 text-prompt">
        <Link href="/" className="underline-offset-4 hover:underline">
          Home
        </Link>
        <Link href="/work" className="underline-offset-4 hover:underline">
          Work
        </Link>
        <Link href="/contact" className="underline-offset-4 hover:underline">
          Contact
        </Link>
      </div>
    </div>
  );
}

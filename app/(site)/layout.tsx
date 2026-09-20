import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-surface font-sans text-on-surface">
      <SiteNav />
      <main className="w-full flex-1 pt-[60px]">{children}</main>
      <SiteFooter />
    </div>
  );
}

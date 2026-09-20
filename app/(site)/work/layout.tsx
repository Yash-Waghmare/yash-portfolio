import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Enterprise modernization at Accenture, Land Compass shipped to app stores, and earlier product and research work.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

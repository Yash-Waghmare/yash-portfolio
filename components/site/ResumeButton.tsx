"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type CSSProperties } from "react";

const COLORS = ["#0ea5e9", "#494bd6", "#3755c3", "#10b981", "#f59e0b", "#818cf8"];
const PARTICLES = 24;

type Particle = {
  id: number;
  color: string;
  dx: number;
  dy: number;
  rot: number;
  size: number;
  round: boolean;
};

type Burst = { id: number; particles: Particle[] };

function makeBurst(id: number): Burst {
  return {
    id,
    particles: Array.from({ length: PARTICLES }, (_, index) => {
      const angle = (index / PARTICLES) * Math.PI * 2 + Math.random() * 0.4;
      const distance = 60 + Math.random() * 60;
      return {
        id: index,
        color: COLORS[index % COLORS.length],
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance + 18,
        rot: Math.random() * 540 - 270,
        size: 4 + Math.random() * 4,
        round: Math.random() > 0.5,
      };
    }),
  };
}

export function ResumeButton() {
  const pathname = usePathname();
  const active = pathname === "/resume";
  const [bursts, setBursts] = useState<Burst[]>([]);

  function celebrate() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = Date.now();
    setBursts((current) => [...current, makeBurst(id)]);
    window.setTimeout(() => {
      setBursts((current) => current.filter((burst) => burst.id !== id));
    }, 1000);
  }

  return (
    <div className="relative">
      <div className="resume-border rounded-full p-px shadow-[0_0_12px_rgba(14,165,233,0.25)] transition-shadow hover:shadow-[0_0_18px_rgba(73,75,214,0.4)]">
        <Link
          href="/resume"
          onClick={celebrate}
          className={`relative inline-flex h-8 items-center overflow-hidden rounded-full px-4 text-[13px] font-semibold tracking-tight transition-colors ${
            active
              ? "bg-gradient-to-r from-primary to-secondary text-on-primary"
              : "bg-surface text-primary hover:bg-surface-container-low"
          }`}
        >
          <span className="resume-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <span className="relative">Resume</span>
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {bursts.map((burst) =>
          burst.particles.map((particle) => (
            <span
              key={`${burst.id}-${particle.id}`}
              className={`confetti-piece absolute top-1/2 left-1/2 ${particle.round ? "rounded-full" : "rounded-[1px]"}`}
              style={
                {
                  width: particle.size,
                  height: particle.round ? particle.size : particle.size * 1.6,
                  backgroundColor: particle.color,
                  "--dx": `${particle.dx}px`,
                  "--dy": `${particle.dy}px`,
                  "--rot": `${particle.rot}deg`,
                } as CSSProperties
              }
            />
          )),
        )}
      </div>
    </div>
  );
}

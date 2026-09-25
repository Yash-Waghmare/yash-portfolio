type NodeProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  badge: string;
  badgeFill: string;
  title: string;
  subtitle: string;
  stroke: string;
  status?: "legacy" | "live";
};

function DiagramNode({ x, y, w, h, badge, badgeFill, title, subtitle, stroke, status }: NodeProps) {
  const badgeWidth = badge.length * 6.4 + 12;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill="#131d33" stroke={stroke} strokeWidth={1.5} />
      <rect x={x + 10} y={y + 10} width={badgeWidth} height={16} rx={4} fill={badgeFill} fillOpacity={0.18} />
      <text
        x={x + 10 + badgeWidth / 2}
        y={y + 21.5}
        textAnchor="middle"
        fill={badgeFill}
        fontFamily="var(--font-jetbrains), monospace"
        fontSize={9}
        fontWeight={700}
      >
        {badge}
      </text>
      {status ? (
        <circle
          cx={x + w - 14}
          cy={y + 18}
          r={3.5}
          fill={status === "live" ? "#10b981" : "#ef4444"}
          className={status === "live" ? "motion-safe:animate-pulse" : undefined}
        />
      ) : null}
      <text x={x + 10} y={y + 44} fill="#e2e8f0" fontFamily="var(--font-inter), sans-serif" fontSize={11.5} fontWeight={600}>
        {title}
      </text>
      <text x={x + 10} y={y + 58} fill="#94a3b8" fontFamily="var(--font-inter), sans-serif" fontSize={9}>
        {subtitle}
      </text>
    </g>
  );
}

function Flow({ d }: { d: string }) {
  return (
    <g>
      <path d={d} stroke="#1e293b" strokeWidth={3} strokeLinecap="round" />
      <path
        d={d}
        stroke="url(#md-flow)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="6 8"
        className="diagram-flow"
        filter="url(#md-glow)"
        markerEnd="url(#md-arrow)"
      />
    </g>
  );
}

const STAGES = [
  { x: 30, label: "EXTRACT", done: true },
  { x: 157, label: "REBUILD", done: true },
  { x: 283, label: "HARDEN", done: true },
  { x: 410, label: "SCALE", done: false },
];

export function ModernizationDiagram() {
  return (
    <svg
      viewBox="0 0 440 256"
      className="h-auto w-full"
      fill="none"
      role="img"
      aria-label="Migration pipeline: legacy Vue monolith through an RTK and TypeScript contract layer into a Next.js and React app, then an Angular phase, running on AWS ECS with Terraform and Docker."
    >
      <defs>
        <pattern id="md-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="#ffffff" fillOpacity="0.07" />
        </pattern>
        <linearGradient id="md-flow" x1="0" y1="0" x2="440" y2="256" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="md-legacy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ef4444" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="md-contract" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#494bd6" />
        </linearGradient>
        <linearGradient id="md-live" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#10b981" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="md-infra" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#334155" />
          <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="md-progress" x1="30" y1="0" x2="283" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#10b981" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
        <filter id="md-glow" x="0" y="0" width="440" height="256" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="md-halo" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <marker id="md-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0.5 L7 4 L0 7.5 Z" fill="#818cf8" />
        </marker>
      </defs>

      <rect width="440" height="256" fill="url(#md-dots)" />

      <rect x="315" y="20" width="115" height="70" rx="10" fill="#10b981" fillOpacity="0.25" filter="url(#md-halo)" />

      <Flow d="M125 55 L158 55" />
      <Flow d="M277 55 L311 55" />
      <Flow d="M400 90 L400 124" />
      <Flow d="M345 90 C345 128 316 157 289 157" />

      <DiagramNode
        x={10}
        y={20}
        w={115}
        h={70}
        badge="VUE 2"
        badgeFill="#f59e0b"
        title="Legacy Vue"
        subtitle="Monolithic store"
        stroke="url(#md-legacy)"
        status="legacy"
      />
      <DiagramNode
        x={162}
        y={20}
        w={115}
        h={70}
        badge="RTK · TS"
        badgeFill="#38bdf8"
        title="Contract Layer"
        subtitle="Slices + strict types"
        stroke="url(#md-contract)"
      />
      <DiagramNode
        x={315}
        y={20}
        w={115}
        h={70}
        badge="NEXT"
        badgeFill="#10b981"
        title="Next.js / React"
        subtitle="100% feature parity"
        stroke="url(#md-live)"
        status="live"
      />
      <DiagramNode
        x={315}
        y={128}
        w={115}
        h={62}
        badge="NG"
        badgeFill="#f59e0b"
        title="Angular"
        subtitle="Phase 2 rollout"
        stroke="#f59e0b"
      />
      <DiagramNode
        x={10}
        y={128}
        w={275}
        h={62}
        badge="AWS"
        badgeFill="#818cf8"
        title="ECS · Terraform VPC · Docker"
        subtitle="Blue/green deploys · zero downtime · MongoDB"
        stroke="url(#md-infra)"
      />

      <line x1="30" y1="222" x2="410" y2="222" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
      <line x1="30" y1="222" x2="283" y2="222" stroke="url(#md-progress)" strokeWidth="4" strokeLinecap="round" />
      {STAGES.map((stage) => (
        <g key={stage.label}>
          <circle
            cx={stage.x}
            cy={222}
            r={6}
            fill="#0f172a"
            stroke={stage.done ? "#10b981" : "#f59e0b"}
            strokeWidth={2}
          />
          {stage.done ? (
            <circle cx={stage.x} cy={222} r={2.5} fill="#10b981" />
          ) : (
            <circle cx={stage.x} cy={222} r={2.5} fill="#f59e0b" className="motion-safe:animate-pulse" />
          )}
          <text
            x={stage.x}
            y={246}
            textAnchor="middle"
            fill={stage.done ? "#94a3b8" : "#f59e0b"}
            fontFamily="var(--font-jetbrains), monospace"
            fontSize={8.5}
            letterSpacing="1"
          >
            {stage.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export type SkillDomain = {
  id: string;
  name: string;
  skills: string[];
  capabilities: string[];
  note?: string;
};

export const skillDomains: SkillDomain[] = [
  {
    id: "frontend",
    name: "Frontend engineering",
    skills: [
      "React.js (production, complex apps)",
      "Redux & Redux Toolkit",
      "Next.js (SSR, static generation)",
      "Angular (enterprise apps)",
      "JavaScript (ES6+, modern syntax)",
      "HTML/CSS (semantic markup, BEM)",
    ],
    capabilities: [
      "Component architecture",
      "State management",
      "Routing & navigation",
      "API integration",
      "Performance optimization",
      "Debugging complex UIs",
      "Application migration",
    ],
  },
  {
    id: "mobile",
    name: "Mobile development",
    skills: [
      "React Native (iOS/Android)",
      "Expo (development & deployment)",
      "Firebase integration",
      "Flutter (prior experience)",
    ],
    capabilities: [
      "Cross-platform development",
      "App store deployment",
      "Mobile-first design",
      "Real-time synchronization",
    ],
  },
  {
    id: "backend",
    name: "Backend & data",
    skills: [
      "Node.js (Express, REST APIs)",
      "MongoDB (schema design, queries)",
      "Firebase (Realtime DB, Firestore)",
      "REST API design & integration",
      "Authentication & security basics",
    ],
    capabilities: [
      "API design",
      "Auth flows",
      "Document data modeling",
    ],
  },
  {
    id: "cloud",
    name: "Cloud & infrastructure",
    skills: [
      "AWS (EC2, Lambda, SNS, and related services)",
      "Terraform (IaC)",
      "Docker (containerization)",
      "CI/CD pipelines",
      "Cloud architecture patterns",
    ],
    capabilities: [
      "Infrastructure as code",
      "Service wiring on AWS",
      "Containerized deploys",
    ],
    note: "Growing expertise; enterprise project experience in progress.",
  },
  {
    id: "ai",
    name: "AI & emerging tech",
    skills: [
      "Agentic AI (Stanford certification)",
      "AWS Bedrock foundations",
      "GitHub Copilot (IDE integration)",
      "MCP (Model Context Protocol)",
      "AI-assisted development workflows",
    ],
    capabilities: [
      "Practical AI-assisted delivery",
      "Tooling around agents and MCP",
    ],
    note: "AI-aware engineer, not AI expert. Practical learning and experimentation.",
  },
];

export const additionalSkills = [
  "Git & version control",
  "Technical writing & documentation",
  "Teaching & mentoring",
  "Problem-solving & debugging",
  "Collaboration & communication",
  "Continuous learning mindset",
];

export const learningTrajectory = [
  { year: "2020", label: "Web & mobile exploration" },
  { year: "2022", label: "Frontend specialization + backend" },
  { year: "2024", label: "Enterprise patterns + cloud" },
  { year: "2025", label: "AI-enabled engineering" },
];

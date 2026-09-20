export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yashwaghmare.com";

export const profile = {
  name: "Yash Waghmare",
  role: "Software Developer",
  headline: "Building · Modernizing · Cloud & AI",
  location: "Pune, India",
  years: "2+",
  status: "in production",
  focus: "enterprise apps · cloud infrastructure",
  latestShip: "Land Compass (iOS/Android, live)",
  education: "B.Tech Computer Science",
  college: "Pimpri Chinchwad College of Engineering",
  workshops: "3+",
  cliVersion: "2026.1",
  email: "hello@yashwaghmare.com",
  linkedin: "https://www.linkedin.com/in/yash-waghmare",
  github: "https://github.com/Yash-Waghmare",
  twitter: "",
  resumePath: "/downloads/resume.pdf",
  photoPath: "/images/yash-waghmare.jpg",
  homeTitle: "Yash Waghmare — Software Developer",
  homeDescription:
    "Software developer building, modernizing, and expanding into cloud and AI.",
};

export const aboutIntro = `I am a software developer who builds modern applications, modernizes legacy systems, and is expanding into cloud infrastructure and AI-enabled engineering. At Accenture I work on enterprise app modernization — moving complex Vue.js products onto React, Next.js, and Angular while keeping behavior intact. Independently I shipped Land Compass, a live iOS and Android app for real-estate discovery in Tier 2/3 Indian cities. I care about ownership, clear architecture, and work that people can actually use.`;

export const philosophy = [
  {
    title: "Ownership",
    body: "I treat the work as mine until it ships and holds up. That means architecture decisions, edge cases, and the last mile of documentation — not just the happy path.",
  },
  {
    title: "Learning",
    body: "The stack has already shifted once in my career and it will again. I stay close to production problems and pick up cloud, infrastructure, and AI tools as the work demands them.",
  },
  {
    title: "Problem-solving",
    body: "I start from the constraint: legacy behavior that cannot break, a market that needs a simple mobile flow, a team that needs a pattern they can reuse. The interesting part is the trade-off, not the tool.",
  },
  {
    title: "Responsible technology",
    body: "AI is a multiplier, not a substitute for judgment. I use it to move faster on well-understood work and stay cautious where correctness, privacy, or user trust is on the line.",
  },
  {
    title: "Collaboration",
    body: "Modernization only sticks if other people can own it. I write things down, transfer context, and prefer patterns a team can extend over clever one-offs.",
  },
];

export const careerTimeline = [
  {
    period: "2024 – Present",
    org: "Accenture",
    title: "Associate Software Engineer",
    highlights: [
      "App modernization (Vue → React / Next.js and Angular)",
      "Frontend architecture and Redux Toolkit state management",
      "Cloud infrastructure with AWS, Terraform, and Docker",
    ],
  },
  {
    period: "2022 – 2023",
    org: "Leazkart",
    title: "Application Developer",
    highlights: [
      "Peer-to-peer vehicle rental product work",
      "Flutter + Firebase feature delivery",
      "End-to-end mobile flows from idea to working app",
    ],
  },
  {
    period: "2020 – 2024",
    org: "Pimpri Chinchwad College of Engineering",
    title: "B.Tech Computer Science",
    highlights: [
      "Projects across web, mobile, and ML",
      "Community workshops on Flutter and web development",
      "Foundations that led into product and enterprise work",
    ],
  },
];

export const journeyPhases = [
  {
    title: "Phase 1: Foundations & experimentation",
    body: "College was for shipping small things quickly — web apps, Flutter experiments, and workshops that forced me to explain ideas out loud. I learned how products feel to a first-time user, and that teaching something is the fastest way to find the gaps in your own understanding.",
  },
  {
    title: "Phase 2: Enterprise software engineering",
    body: "At Accenture the constraint is scale: a live Vue.js application with complex state, routing, and component behavior that still has to work tomorrow. I design React/Next.js architecture, migrate modules with feature parity, and hand patterns to other teams so the modernization is not a one-person rewrite.",
  },
  {
    title: "Phase 3: Expanding beyond frontend",
    body: "The next layer is infrastructure. AWS, Terraform, and Docker are no longer adjacent knowledge — they are part of how the systems I touch actually run. I am growing this on real enterprise work, not only tutorials, and I am honest about where I am still building depth.",
  },
  {
    title: "Phase 4: AI-enabled engineering",
    body: "I am an AI-aware engineer, not an AI expert. Stanford’s Agentic AI coursework, AWS Bedrock foundations, GitHub Copilot, and MCP are how I am learning to put models inside real workflows. The goal is practical leverage: faster delivery, better tooling, and judgment about when not to use them.",
  },
];

export const quickFacts = [
  { label: "Location", value: "Pune, India" },
  { label: "Years in software", value: "2+" },
  { label: "Education", value: "B.Tech Computer Science" },
  { label: "Workshops conducted", value: "3+" },
  { label: "Continuous learning", value: "Agentic AI certified" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export const contactInterests = [
  "Product engineering opportunities",
  "Application modernization projects",
  "Cloud architecture discussions",
  "Teaching & mentoring",
  "Collaboration & partnerships",
  "Questions & ideas",
];

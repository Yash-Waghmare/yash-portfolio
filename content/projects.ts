export type ProjectCategory = "enterprise" | "product" | "research";

export type Project = {
  slug: string;
  filename: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  company?: string;
  timeline: string;
  role: string;
  status?: string;
  summary: string;
  challenge?: string;
  idea?: string;
  solution: string[];
  outcomes: string[];
  technologies: string[];
  href: string;
  storeLinks?: { label: string; href: string }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "accenture-modernization",
    filename: "accenture.md",
    title: "Modernizing enterprise applications at scale",
    shortTitle: "Accenture modernization",
    category: "enterprise",
    company: "Accenture",
    timeline: "July 2024 – Present",
    role: "Associate Software Engineer",
    summary:
      "Legacy Vue.js application with complex state, routing, and component behavior — modernized to React/Next.js without losing functionality.",
    challenge:
      "A production Vue.js application with dense state, routing, and component behavior needed a path onto React and Next.js. The constraint was feature parity: nothing users already relied on could disappear during the move.",
    solution: [
      "Designed Next.js/React architecture for the target application",
      "Implemented Redux Toolkit for predictable state management",
      "Migrated modules while preserving existing behavior",
      "Conducted cross-team knowledge transfer so the pattern could scale",
    ],
    outcomes: [
      "Full feature parity with the legacy app",
      "Improved code maintainability",
      "Foundation for further scaling",
      "Expanded the approach to Angular migration work",
    ],
    technologies: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "AWS",
      "Terraform",
      "Docker",
    ],
    href: "/work/accenture-modernization",
    featured: true,
  },
  {
    slug: "land-compass",
    filename: "land-compass.md",
    title: "Land Compass: real estate discovery",
    shortTitle: "Land Compass",
    category: "product",
    timeline: "2024",
    role: "Solo product developer",
    status: "Live on App Stores",
    summary:
      "A mobile app connecting property buyers to local real estate agents in Tier 2/3 Indian cities. Designed, built, and shipped independently.",
    idea: "A mobile app connecting property buyers to local real estate agents in Tier 2/3 Indian cities.",
    solution: [
      "Architected a React Native + Expo stack",
      "Designed UI/UX for a mobile-first discovery flow",
      "Built Firebase authentication and database",
      "Shipped to the iOS App Store and Google Play",
      "Iterated from user feedback after launch",
    ],
    outcomes: [
      "Live on iOS and Android",
      "Independent product ownership from idea to store",
      "Real users in Tier 2/3 markets",
    ],
    technologies: ["React Native", "Expo", "Firebase", "REST API"],
    href: "/work/land-compass",
    storeLinks: [
      { label: "iOS App Store", href: "#" },
      { label: "Google Play", href: "#" },
    ],
    featured: true,
  },
  {
    slug: "leazkart",
    filename: "leazkart.md",
    title: "Leazkart",
    shortTitle: "Leazkart",
    category: "product",
    timeline: "2022 – 2023",
    role: "Application Developer",
    summary: "Peer-to-peer vehicle rental — mobile product work with Flutter and Firebase.",
    solution: [
      "Shipped rental flows on Flutter",
      "Integrated Firebase for auth and data",
    ],
    outcomes: ["Working peer-to-peer rental experience"],
    technologies: ["Flutter", "Firebase"],
    href: "/work/earlier-projects#leazkart",
    featured: false,
  },
  {
    slug: "iris-liveness",
    filename: "iris.md",
    title: "Iris liveness detection",
    shortTitle: "Iris liveness",
    category: "research",
    timeline: "College",
    role: "Research / engineering",
    summary: "ML + image processing for iris liveness detection, with a React-facing demo.",
    solution: [
      "Trained and evaluated models in Python/Keras",
      "Connected inference to a simple React interface",
    ],
    outcomes: ["Working liveness-detection prototype"],
    technologies: ["Python", "Keras", "React"],
    href: "/work/earlier-projects#iris-liveness",
    featured: false,
  },
  {
    slug: "workshops",
    filename: "workshops.md",
    title: "Community workshops",
    shortTitle: "Workshops",
    category: "research",
    timeline: "2020 – 2024",
    role: "Instructor",
    summary: "Flutter and web development workshops — teaching and outreach.",
    solution: [
      "Designed hands-on sessions for students",
      "Covered Flutter and web fundamentals",
    ],
    outcomes: ["3+ workshops conducted"],
    technologies: ["Flutter", "Web"],
    href: "/work/earlier-projects#workshops",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const earlierProjects = projects.filter((project) => !project.featured);

export const accentureCaseStudy = {
  overview: `As an Associate Software Engineer at Accenture I work on enterprise application modernization. The core problem is familiar and high-stakes: a Vue.js product that already serves real users, with years of accumulated state, routing, and component behavior, needs a path onto React and Next.js without a visible break in functionality.`,
  challenge: [
    "The current state was a dense Vue.js codebase whose complexity lived in shared state, nested routes, and components that had grown around each other.",
    "The constraint was parity: every flow that existed had to exist after the migration, on a timeline that still served the business.",
    "It mattered because the legacy stack was slowing change. A cleaner architecture is only valuable if users never notice the cutover.",
  ],
  approach: [
    "React and Next.js were the target because they match how the organization wants to build going forward — component model, routing, and a path to better data fetching.",
    "Redux Toolkit became the state spine so migrated modules would share one predictable pattern instead of ad-hoc stores.",
    "We migrated in slices: map a Vue module, rebuild it, verify behavior, then transfer the pattern so other engineers could continue the work.",
  ],
  technical: [
    "Module-by-module replacement rather than a big-bang rewrite",
    "Redux Toolkit slices aligned to domain state, not page components",
    "Routing mapped from Vue Router concepts onto the Next.js App Router / React Router equivalent used in the target app",
    "API contracts kept stable so backend teams were not blocked on the UI move",
  ],
  outcomes: [
    "Feature parity with the legacy application",
    "Clearer maintainability for teams inheriting the new modules",
    "A repeatable migration pattern later applied to Angular work",
    "A foundation for further frontend and cloud work on the same program",
  ],
  learnings: [
    "Legacy complexity is usually load-bearing. Read the old behavior before you replace the old code.",
    "Migration is a communication problem as much as a technical one — other teams need a pattern, not a hero rewrite.",
    "Parity is a product requirement. Visual polish can wait; missing a flow cannot.",
  ],
};

export const landCompassCaseStudy = {
  overview: `Land Compass started as a gap I could see clearly: buyers in Tier 2 and Tier 3 Indian cities still depend on local agents, but the discovery experience is fragmented. I designed, built, and shipped a React Native app — live on iOS and Android — as a solo product developer.`,
  challenge: [
    "The market gap was local and practical: people looking for land and property needed a way to reach agents who actually operate in their city.",
    "Constraints were those of an indie product: one engineer, app-store requirements, and an MVP that had to be understandable on a phone.",
    "It mattered because a usable mobile flow is the difference between an idea and something a stranger will install.",
  ],
  approach: [
    "React Native + Expo for one codebase on iOS and Android, with a realistic path to store submission.",
    "Firebase for authentication and the first data layer so I could ship without standing up a custom backend on day one.",
    "MVP scoped to discovery and connection — not a full real-estate OS.",
  ],
  technical: [
    "Expo-managed workflow for builds and store delivery",
    "Firebase Auth and database for accounts and listings-adjacent data",
    "REST-shaped API boundaries so the client stays replaceable",
    "Mobile-first UI: large targets, short copy, no desktop-first layouts",
  ],
  outcomes: [
    "Shipped to the iOS App Store and Google Play",
    "Independent ownership from idea through release and iteration",
    "Feedback loop with real users after launch",
  ],
  learnings: [
    "Shipping is a skill. Store review, icons, permissions, and crash-free first launches are the product.",
    "MVP scope is a kindness to your future self — and to the first user.",
    "Mobile work lives in the details: keyboards, empty states, and what happens when the network is bad.",
  ],
};

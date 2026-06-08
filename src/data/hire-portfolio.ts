export interface OutcomeBlock {
  label: string;
  value: string;
}

export interface HireProduct {
  slug: string;
  label: string;
  headline: string;
  body: string;
  image: string;
  tags: string[];
  href: string;
  externalHref?: string;
  info: { label: string; value: string }[];
  outcomes: OutcomeBlock[];
  weight: "heavy" | "compact";
}

export interface HireClientProject {
  title: string;
  client: string;
  outcome: string;
  tags: string[];
  image: string;
  video?: string;
  videoSpeed?: number;
  href: string;
}

export const HIRE_POSITIONING = {
  name: "Tie Love",
  title: "Product Designer & AI-Driven Developer",
  subtitle: "0→1 products · AI-native experiences · shipped systems",
  status: "Open to full-time roles",
  headline: "I design and build products end to end.",
  intro:
    "Not screens in a deck. I work on business outcomes, user flows, and product ecosystems. As a founder who has launched multiple live products, I own the arc from concept through brand, UX, engineering, and iteration.",
  photo: "/assets/tie-sitting-infront-logo.png",
  linkedin: "https://www.linkedin.com/in/tielove/",
  email: "mailto:tie@madebytie.com",
  book: "/book",
  x: "https://x.com/tielove333",
  portfolio: "/work",
};

export const HIRE_LOCATION = [
  { label: "Based in", value: "Boise, ID" },
  { label: "Open to", value: "Local & remote roles" },
  { label: "Relocation", value: "For the right opportunity" },
];

export const HIRE_EXPERTISE = [
  { label: "18 years experience", highlight: true },
  { label: "Graphic design" },
  { label: "Web design" },
  { label: "Product design" },
  { label: "AI products" },
  { label: "AI-driven development" },
  { label: "AI-first design" },
];

export interface HireStackGroup {
  category: string;
  items: string[];
}

export const HIRE_STACK: HireStackGroup[] = [
  {
    category: "Design",
    items: ["Figma", "Adobe Creative Cloud"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend & infra",
    items: ["Vercel", "Supabase", "Google Cloud", "AWS", "Railway", "Cloudflare"],
  },
  {
    category: "Platforms & services",
    items: ["WordPress", "Resend", "SendGrid", "Stripe"],
  },
  {
    category: "AI APIs",
    items: ["OpenAI API", "Anthropic API", "Gemini API", "Vercel AI SDK"],
  },
  {
    category: "IDE & AI dev",
    items: ["Cursor", "Claude Code", "Codex", "Antigravity", "Zed"],
  },
];

export const HIRE_STATS = [
  { value: 4, suffix: "", label: "products built & shipped" },
  { value: 169, suffix: "+", label: "projects delivered" },
  { value: 18, suffix: "Y", label: "years in design & product" },
];

export const HIRE_PILLARS = [
  {
    value: "0→1",
    title: "Full Product Ownership",
    desc: "I build and launch products, not mockups. Brand, UX, systems, and code. One owner, zero handoffs, from discovery to live users.",
  },
  {
    value: "AI",
    title: "AI-Native Workflows",
    desc: "I integrate AI into product experiences to reduce friction and increase efficiency, from autonomous agents to intelligent scoping and decision support.",
  },
  {
    value: "Fast",
    title: "Startup Velocity",
    desc: "Agencies take months. I ship in weeks. Rapid iteration without sacrificing craft, under real constraints and real deadlines.",
  },
];

export const HIRE_PRODUCTS: HireProduct[] = [
  {
    slug: "scope-architect",
    label: "Scope Architect",
    headline: "AI scoping that turns vague discovery into bankable contracts.",
    body: "Scope Architect is a founder-built product that solves the invisible risk of agency life: bad scoping. It takes raw discovery notes and uses recursive AI expansion to generate internal technical blueprints and client-ready proposals, protecting margins and building trust from day zero.",
    image: "/labs/scope-architect/featured.png",
    tags: ["Brand Design", "UI Design", "UX", "Full-Stack Development w/ AI"],
    href: "/work/scope-architect",
    info: [
      { label: "01", value: "Founder-led product" },
      { label: "02", value: "Gemini 3.1 + Vercel AI SDK" },
      { label: "03", value: "In active development" },
    ],
    outcomes: [
      {
        label: "Problem",
        value:
          "Scoping eats senior time, misses edge cases, and erodes margins before a project even starts.",
      },
      {
        label: "Design",
        value:
          "Dual-perspective UX: dense internal blueprint for devs, polished client proposal for stakeholders. Calibration engine for real-time budget math.",
      },
      {
        label: "AI",
        value:
          "3-pass recursive expansion with Gemini maps vague requirements to modules, features, and atomic tasks, flagging dependencies humans miss.",
      },
      {
        label: "Outcome",
        value:
          "Reduced scoping time from days to minutes. Clearer client trust. Defensible quotes that protect studio margins.",
      },
    ],
    weight: "heavy",
  },
  {
    slug: "loretorch",
    label: "LoreTorch",
    headline: "An AI game master that makes tabletop worlds feel infinite.",
    body: "LoreTorch is a venture I'm building in the VTT space, centered on Aris, an AI-powered game master and world-building engine. The design challenge: deliver the depth and spontaneity of a live GM inside a digital product that stays fast, flexible, and narratively rich.",
    image: "/assets/loretorch-hero.png",
    tags: ["Brand Design", "UI Design", "UX", "Full-Stack Development w/ AI"],
    href: "/work/loretorch",
    externalHref: "https://loretorch.com",
    info: [
      { label: "01", value: "Founder & product lead" },
      { label: "02", value: "Aris AI game master" },
      { label: "03", value: "Live at loretorch.com" },
    ],
    outcomes: [
      {
        label: "Problem",
        value:
          "Digital tabletop tools handle maps and dice, but the soul of the game is the GM. That experience was missing.",
      },
      {
        label: "Design",
        value:
          "Narrative-first UX for session setup, world state, and player interaction, designed for high-fantasy depth without overwhelming new players.",
      },
      {
        label: "AI",
        value:
          "Aris reads lore, tracks world state, and improvises like a live game master, reducing prep time and increasing session engagement.",
      },
      {
        label: "Outcome",
        value:
          "Faster onboarding into sessions. Richer narrative flow. A product category wedge competitors aren't building.",
      },
    ],
    weight: "heavy",
  },
  {
    slug: "vizon-os",
    label: "Vizon OS",
    headline: "An AI-native operating system for modern business.",
    body: "Vizon OS unifies strategy, CRM, projects, docs, messaging, and workflows into one intelligent workspace, with Lenz AI as an autonomous layer that reads across everything and actually does the work.",
    image: "/projects/vizon-os/tasks-kanban.png",
    tags: ["Brand Design", "UI Design", "UX", "Full-Stack Development w/ AI"],
    href: "/work/vizon-os",
    externalHref: "https://vizonos.com",
    info: [
      { label: "01", value: "Live & scaling" },
      { label: "02", value: "Multi-tenant SaaS" },
    ],
    outcomes: [
      {
        label: "Problem",
        value: "Small teams drowning in tool sprawl. Context breaks every time you switch apps.",
      },
      {
        label: "Outcome",
        value: "One shared brain for the business. Reduced friction across CRM, tasks, docs, and AI-assisted execution.",
      },
    ],
    weight: "compact",
  },
  {
    slug: "capsole",
    label: "Capsole",
    headline: "The operating system for creative agencies.",
    body: "Capsole is an agency OS I'm building to unify client delivery: scoping, project execution, team workflows, and client communication in one system designed for how studios actually work.",
    image: "/projects/vizon-os/workflow.png",
    tags: ["Brand Design", "UI Design", "UX", "Full-Stack Development w/ AI"],
    href: "/work/capsole",
    info: [
      { label: "01", value: "Founder-led build" },
      { label: "02", value: "Agency operations platform" },
    ],
    outcomes: [
      {
        label: "Problem",
        value: "Agencies stitch together Notion, spreadsheets, and PM tools, losing context and billable time.",
      },
      {
        label: "Outcome",
        value: "One system for how agencies scope, deliver, and communicate, built from 18 years of running client work.",
      },
    ],
    weight: "compact",
  },
];

export const HIRE_CLIENT_WORK: HireClientProject[] = [
  {
    title: "Global hackathon series, 0 to launch in 2 weeks",
    client: "BCH Devcon · Bitmain",
    outcome:
      "Bitmain needed a global hackathon brand, site, and growth automation from zero. I delivered the full identity, website, and launch systems inside a two-week runway.",
    tags: ["0→1 Launch", "Brand", "Growth Systems"],
    image: "/projects/bch-devcon/bch-event-badge.png",
    href: "/work/bch-devcon",
  },
  {
    title: "$50M crypto VC fund, brand and site in 3 weeks",
    client: "Permissionless Ventures · Bitmain",
    outcome:
      "A fund launch that needed to look institutional and move at startup speed. Full brand system and marketing site shipped in three weeks.",
    tags: ["Brand", "Product Marketing", "Velocity"],
    image: "/projects/permissionless/hero-bg.png",
    video: "/projects/permissionless/Screen-Recording-2019-09-22-at-8.09.23-PM.mov",
    href: "/work/permissionless-ventures",
  },
  {
    title: "Tech corridor launch for a city ecosystem",
    client: "Windward Tech District · Alpharetta",
    outcome:
      "Positioned Alpharetta's tech corridor as a credible innovation hub with brand, launch site, and ecosystem storytelling delivered in four weeks.",
    tags: ["Ecosystem Design", "Brand", "Web"],
    image: "/projects/windward-tech-district/culture-screenshot.png",
    video: "/projects/windward-tech-district/home-page-animated-section.mov",
    videoSpeed: 0.33,
    href: "/work/windward-tech-district",
  },
];

export const HIRE_ROLES = [
  "Product Designer (Mid-Senior)",
  "Senior Product Designer",
  "Lead Product Designer",
  "Founding Designer",
  "AI Product Designer",
];

export const HIRE_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "proof", label: "Proof" },
  { id: "stack", label: "Stack" },
  { id: "roles", label: "Open To" },
  { id: "products", label: "Products" },
  { id: "client-work", label: "Client Work" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
];

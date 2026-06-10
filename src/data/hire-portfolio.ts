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
  title: "Lead Product Designer · AI Product Builder",
  subtitle: "0→1 products · AI-native systems · brand through production",
  status: "Open to full-time roles",
  headline: "I design and ship complex products end to end.",
  intro:
    "Not screens in a deck. I work on business outcomes, user flows, and product ecosystems. As a founder who has launched four production-grade platforms solo, I own brand, product design, platform design, and AI-orchestrated development. My portfolio is the interview: walk through live systems, not algorithm puzzles.",
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
  { label: "18 years in product & design", highlight: true },
  { label: "0→1 product ownership" },
  { label: "Brand & design systems" },
  { label: "Product design & UX" },
  { label: "Platform design" },
  { label: "AI-orchestrated development" },
  { label: "AI-native product strategy" },
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
    items: ["WordPress", "Resend", "SendGrid", "Stripe", "LiveKit", "TipTap"],
  },
  {
    category: "AI APIs",
    items: ["OpenAI API", "Anthropic API", "Gemini API", "Vercel AI SDK"],
  },
  {
    category: "AI dev & orchestration",
    items: ["Cursor", "Claude Code", "Codex", "Antigravity", "Zed"],
  },
];

export const HIRE_STATS = [
  { value: 4, suffix: "", label: "founder products shipped" },
  { value: 169, suffix: "+", label: "projects delivered" },
  { value: 18, suffix: "Y", label: "years in design & product" },
];

export const HIRE_HOW_I_WORK =
  "I use AI-driven engineering pipelines to move at the speed of a full product team. I own the design decisions, platform design, and product direction. AI handles the heavy lifting of implementation so I can focus on what actually moves the business. Evaluate me on live deployments and product walkthroughs, not whiteboard coding exercises.";

export const HIRE_PILLARS = [
  {
    value: "0→1",
    title: "Full Product Ownership",
    desc: "Brand, marketing site, product design, platform design, and production deployment. One owner from blank canvas to live users, no handoffs.",
  },
  {
    value: "AI",
    title: "AI-Orchestrated Execution",
    desc: "I integrate AI into product experiences and development workflows to reduce friction and ship faster, from autonomous agents to cloud sandboxes and intelligent scoping.",
  },
  {
    value: "Proof",
    title: "Portfolio Over Puzzles",
    desc: "Four complex platforms built solo. I'd rather walk you through Scope Architect or Capsole live than reverse a binary tree. Product vision and shipped systems are the evaluation.",
  },
];

export const HIRE_PRODUCTS: HireProduct[] = [
  {
    slug: "scope-architect",
    label: "Scope Architect",
    headline: "A command center for building with AI.",
    body: "Scope Architect is a founder-built platform that turns vague discovery into bankable contracts. I designed and built the full product: brand, marketing site, dual-audience UX, calibration engine, and an AI orchestration layer that runs Codex inside cloud VM sandboxes with OAuth-connected dev accounts.",
    image: "/labs/scope-architect/featured.png",
    tags: ["Brand", "Product Design", "Platform Design", "AI-Orchestrated Build"],
    href: "/work/scope-architect",
    info: [
      { label: "01", value: "Brand, site, and product design" },
      { label: "02", value: "Cloud VM sandboxes + OAuth Codex" },
      { label: "03", value: "Gemini + Vercel AI SDK" },
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
          "Dual-perspective UX: dense internal blueprint for devs, polished client proposal for stakeholders. Brand, site, and calibration engine for real-time budget math.",
      },
      {
        label: "Platform",
        value:
          "AI command center with recursive 3-pass expansion, Zod-validated schemas, and cloud sandbox execution. OAuth-linked Codex accounts run inside VMs directly in the platform.",
      },
      {
        label: "Outcome",
        value:
          "Scoping drops from days to minutes. Defensible quotes, clearer client trust, and margin protection from day zero.",
      },
    ],
  },
  {
    slug: "vizon-os",
    label: "Vizon OS",
    headline: "An AI-native operating system for modern business.",
    body: "Vizon OS is my moonshot platform: a live, multi-tenant SaaS that replaces an entire stack of disconnected tools with one shared brain. Strategy, operations, and intelligence in a single product. I built the brand, marketing site, product design, and the full production-grade platform using AI-orchestrated development to ship enterprise infrastructure solo.",
    image: "/projects/vizon-os/tasks-kanban.png",
    tags: ["Brand", "Product Design", "Platform Design", "AI-Orchestrated Build"],
    href: "/work/vizon-os",
    externalHref: "https://vizonos.com",
    info: [
      { label: "01", value: "Strategy: moonshot planning, personas, brand & funnels" },
      { label: "02", value: "Operations: CRM, projects, docs, messaging" },
      { label: "03", value: "Intelligence: Nexus, Lenz AI, agents, workflows" },
    ],
    outcomes: [
      {
        label: "Problem",
        value:
          "Small teams drown in tool sprawl. Strategy lives in one app, CRM in another, execution in a third. Context breaks at every switch and AI can't help because nothing is connected.",
      },
      {
        label: "Design",
        value:
          "Full brand system, marketing site, and product UI across three platform layers: Strategy (Discover, Innovate, Accelerate), Operations (CRM, Projects, Docs, Messaging), and Intelligence (Nexus, Lenz AI, Agents, Workflows). One cohesive visual language from moonshot planning to daily execution.",
      },
      {
        label: "Platform",
        value:
          "Multi-tenant SaaS with a unified data model. Strategy suite for masterplans, personas, and campaigns. CRM with contacts, deals, emails, and workflows. Projects & tasks execution engine. TipTap collaborative docs with AI writing. Real-time messaging with LiveKit voice and video. Vizon Nexus as the context engine. Lenz AI for insights and contextual chat. One-click AI agents. Platform-wide workflow rules with multi-step AI nodes.",
      },
      {
        label: "Outcome",
        value:
          "One shared brain for the business. Strategy, CRM, and AI in a single system. Reduced tool sprawl, faster execution, and intelligence that actually understands context across every module.",
      },
    ],
  },
  {
    slug: "capsole",
    label: "Capsole",
    headline: "The operating system for creative agencies.",
    body: "Capsole is an agency OS I designed and built to unify the full client lifecycle: AI project scoping, client proposals, e-sign, project management, real-time collaborative documents, and LiveKit voice and video. Brand, product design, platform design, and AI-driven development, all from 18 years of running client work.",
    image: "/projects/vizon-os/workflow.png",
    tags: ["Brand", "Product Design", "Platform Design", "AI-Orchestrated Build"],
    href: "/work/capsole",
    info: [
      { label: "01", value: "Proposals, e-sign, and AI scoping" },
      { label: "02", value: "TipTap collab + LiveKit calling" },
      { label: "03", value: "Agency PM + client portals" },
    ],
    outcomes: [
      {
        label: "Problem",
        value:
          "Agencies stitch together Notion, spreadsheets, PM tools, and email. Context and billable time vanish at every handoff.",
      },
      {
        label: "Design",
        value:
          "Agency-native UX for client portals, internal delivery views, proposals, and team workflows. Brand and product identity built for principals who've been burned by generic PM tools.",
      },
      {
        label: "Platform",
        value:
          "Unified platform with AI scoping, client proposals, e-sign flows, real-time TipTap documents, LiveKit voice and video, and Slack-style team collaboration in one data model.",
      },
      {
        label: "Outcome",
        value:
          "Less coordination overhead, more billable craft. Scoping connects directly to delivery. One system for how agencies actually work.",
      },
    ],
  },
  {
    slug: "loretorch",
    label: "LoreTorch",
    headline: "A full AI dungeon master inside a virtual tabletop.",
    body: "LoreTorch is a complete VTT platform built around Aris, an AI game master that improvises worlds, tracks state, and runs sessions. I own the brand, website, product design, and the full production-grade platform, using AI-orchestrated development for one of the most interaction-heavy product categories there is.",
    image: "/assets/loretorch-hero.png",
    tags: ["Brand", "Product Design", "Platform Design", "AI-Orchestrated Build"],
    href: "/work/loretorch",
    externalHref: "https://loretorch.com",
    info: [
      { label: "01", value: "Full VTT platform" },
      { label: "02", value: "Aris AI game master" },
      { label: "03", value: "Live at loretorch.com" },
    ],
    outcomes: [
      {
        label: "Problem",
        value:
          "Digital tabletop tools handle maps and dice, but the soul of the game is the GM. That experience was missing from every VTT on the market.",
      },
      {
        label: "Design",
        value:
          "Brand, marketing site, and narrative-first UX for session setup, world state, and player interaction. High-fantasy depth without overwhelming new players.",
      },
      {
        label: "Platform",
        value:
          "Full VTT with complex state management, generative AI prompt chains for dungeon master mechanics, and real-time session orchestration across players and world data.",
      },
      {
        label: "Outcome",
        value:
          "Faster session prep, richer narrative flow, and a product category wedge competitors aren't building.",
      },
    ],
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
  "Principal Product Designer",
  "Lead Product Designer",
  "AI Product Lead",
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

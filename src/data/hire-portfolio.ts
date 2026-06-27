export interface OutcomeBlock {
  label: string;
  value: string;
}

export interface HireProduct {
  slug: string;
  label: string;
  /** Honest product status shown next to the label - never imply user adoption. */
  status: string;
  /** One unique lead-positioning line stating what this product proves. */
  positioning: string;
  headline: string;
  body: string;
  /** Empty string renders a visible placeholder slot instead of an image. */
  image: string;
  imageAlt: string;
  tags: string[];
  href: string;
  externalHref?: string;
  /** Demo video slot. Renders only when src is set - accepts YouTube, Mux, or self-hosted URLs. */
  video?: { src: string; poster: string };
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

export interface HireTestimonial {
  quote: string;
  name: string;
  role: string;
}

export const HIRE_POSITIONING = {
  name: "Tie Love",
  title: "Lead Product Designer · AI Product Builder",
  subtitle: "0→1 products · AI-native systems · brand through production",
  status: "Open to full-time roles",
  headline: "I design and ship complex products end to end.",
  intro:
    "I'm a designer and builder with range across the whole product. My roots are in brand systems, UI and website design, and the development to ship them, for clients from startups to enterprise. Over 18 years that grew into designing and building complete products end to end. As a founder I've launched four production-grade platforms on my own: brand, product, platform, and the AI-orchestrated development behind them. Every one is live and on this page. Inside a team I bring the same range and ownership. I work close to engineering, move quickly, and get AI-native features into production.",
  photo: "/assets/tie-sitting-infront-logo.png",
  photoAlt: "Tie Love, Lead Product Designer, seated in front of the made by tie logo",
  linkedin: "https://www.linkedin.com/in/tielove/",
  email: "mailto:tie@madebytie.com",
  book: "/book",
  // PLACEHOLDER: upload the PDF to /public/tie-love-resume.pdf - link is live but the file does not exist yet.
  resume: "/tie-love-resume.pdf",
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
  { value: 179, suffix: "+", label: "projects delivered" },
  { value: 18, suffix: "Y", label: "years in design & product" },
];

export const HIRE_HOW_I_WORK =
  "I use AI-driven engineering pipelines to move at the speed of a full product team. I own the design, platform, and product direction, and AI handles the bulk of the implementation. That lets one person take a product from idea to production without the usual handoffs.";

export const HIRE_PILLARS = [
  {
    value: "0→1",
    title: "Full Product Ownership",
    desc: "Brand, marketing website, product design, platform design, and production deployment. One owner from first idea to live deployment, no handoffs.",
  },
  {
    value: "AI",
    title: "AI-Orchestrated Execution",
    desc: "I integrate AI into product experiences and development workflows to reduce friction and ship faster, from autonomous agents to cloud sandboxes and intelligent scoping.",
  },
  {
    value: "Teams",
    title: "Built Solo, Designed for Teams",
    desc: "Eighteen years of client and stakeholder collaboration. Founder ownership means I've sat on every side of the table: PM, engineering, design, and support. I know what each discipline needs from a designer. I give direct critique and expect it back.",
  },
];

export const HIRE_PRODUCTS: HireProduct[] = [
  {
    slug: "scope-architect",
    label: "Scope Architect",
    status: "Launching now",
    positioning: "Dev tooling + agent infrastructure",
    headline: "Mission control for building with AI.",
    body: "Scope Architect turns a raw idea into an agent-ready plan, hands the work to coding agents over MCP, and keeps every task, token, and PR visible as the build moves. I designed and built the full product: brand, marketing website, product UX, and the orchestration layer (scoping engine, cloud sandbox execution, context management, and BYOK). It's the same product category as Vercel Sandbox and agent platforms.",
    image: "/projects/scope-architect/command-center.png",
    imageAlt:
      "Scope Architect Command Center showing live task execution across modules and agents",
    tags: ["Dev Tooling", "Agent Orchestration", "MCP + Cloud Sandboxes"],
    href: "/work/scope-architect",
    // PLACEHOLDER: drop the demo video URL into src (YouTube, Mux, or self-hosted MP4). Slot renders once src is set.
    video: { src: "", poster: "/projects/scope-architect/command-center.png" },
    info: [
      { label: "01", value: "Brand, website, and product design" },
      { label: "02", value: "MCP handoff + cloud sandboxes" },
      { label: "03", value: "Context engine + BYOK" },
    ],
    outcomes: [
      {
        label: "Problem",
        value:
          "AI coding sessions lose context, drift silently, and leave you flying blind. Chat forgets, and the thread breaks between the idea and the shipped code.",
      },
      {
        label: "Design",
        value:
          "UX that keeps a human in command of agent work: idea-to-scope flow, a shared command center for you and your agent, and execution views that surface every task, token, and PR in real time.",
      },
      {
        label: "Platform",
        value:
          "Structured scoping engine with Zod-validated schemas, MCP handoff to coding agents, cloud sandbox execution, context and memory management, and BYOK across providers.",
      },
      {
        label: "Outcome",
        value:
          "Launching now. In production: a raw idea becomes an agent-ready plan in minutes, and the build stays visible and on-thread from scope to merged PR.",
      },
    ],
  },
  {
    slug: "vizon-os",
    label: "Vizon OS",
    status: "Private beta · in use with clients",
    positioning: "Multi-tenant enterprise scope",
    headline: "An AI-native operating system for modern business.",
    body: "Vizon OS is my moonshot platform: a live, multi-tenant SaaS that replaces an entire stack of disconnected tools with one shared brain. CRM, docs, messaging, and AI agents in one data model. I built the brand, marketing website, product design, and the full production-grade platform using AI-orchestrated development to ship enterprise infrastructure solo.",
    image: "/projects/vizon-os/tasks-kanban.png",
    imageAlt: "Vizon OS task board showing kanban columns inside the projects module",
    tags: ["Multi-Tenant SaaS", "CRM + Docs + Messaging", "AI Agents"],
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
          "Full brand system, marketing website, and product UI across three platform layers: Strategy, Operations, and Intelligence. One cohesive visual language from moonshot planning to daily execution.",
      },
      {
        label: "Platform",
        value:
          "Multi-tenant SaaS with a unified data model: CRM, projects, TipTap collaborative docs, LiveKit messaging, Lenz AI, one-click agents, and platform-wide workflow rules with multi-step AI nodes.",
      },
      {
        label: "Outcome",
        value:
          "In private beta, running live with client teams. One system in place of a CRM, a docs tool, a messaging app, and a strategy suite, with AI that keeps context across every module.",
      },
    ],
  },
  {
    slug: "capsole",
    label: "Capsole",
    status: "Private beta",
    positioning: "Deep domain expertise, productized",
    headline: "The operating system for creative agencies.",
    body: "Capsole is an agency OS I designed and built to unify the full client lifecycle: AI project scoping, client proposals, e-sign, project management, real-time collaborative documents, and LiveKit voice and video. Eighteen years of running agency work, productized into one system.",
    // PLACEHOLDER: no Capsole screenshot exists in the repo - add one and set the path here. Empty string renders a visible placeholder slot.
    image: "",
    imageAlt: "Capsole agency workspace showing proposals and project delivery views",
    tags: ["Agency OS", "Proposals + E-Sign", "Real-Time Collaboration"],
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
          "In private beta. Scoping connects directly to proposals, e-sign, and delivery in one system, built to give agencies back the billable hours that coordination eats.",
      },
    ],
  },
  {
    slug: "loretorch",
    label: "LoreTorch",
    status: "Launching now",
    positioning: "Interaction-heavy real-time UX",
    headline: "A full AI dungeon master inside a virtual tabletop.",
    body: "LoreTorch is a complete VTT platform built around Aris, an AI game master that improvises worlds, tracks state, and runs sessions. I own the brand, website, product design, and the full production-grade platform: live multiplayer state and AI orchestration in one of the most interaction-heavy product categories there is.",
    image: "/assets/loretorch-hero.png",
    imageAlt:
      "LoreTorch virtual tabletop showing a fantasy map with the Aris AI game master interface",
    tags: ["Real-Time Multiplayer", "AI Game Master", "Live World State"],
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
          "Brand, marketing website, and narrative-first UX for session setup, world state, and player interaction. High-fantasy depth without overwhelming new players.",
      },
      {
        label: "Platform",
        value:
          "Full VTT with complex state management, generative AI prompt chains for dungeon master mechanics, and real-time session orchestration across players and world data.",
      },
      {
        label: "Outcome",
        value:
          "Launching now at loretorch.com. An AI game master that improvises worlds and runs live multiplayer sessions. A category wedge no incumbent VTT is building.",
      },
    ],
  },
];

// Real testimonials only - never invent quotes.
export const HIRE_TESTIMONIALS: HireTestimonial[] = [
  {
    quote:
      "We were launching a global hackathon series at San Francisco Blockchain Week starting at zero and needed everything ready to launch within 2 weeks. Tie delivered. We received a lot of great comments on the branding during the kickoff SF Hackathon. You did a great job!",
    name: "Vincent",
    role: "Investment Director, BITMAIN",
  },
  {
    quote: "[TESTIMONIAL: quote from a client or collaborator]",
    name: "[Name]",
    role: "[Role, Company]",
  },
];

export const HIRE_CLIENT_WORK: HireClientProject[] = [
  // PLACEHOLDER: add a recent client project here to lead the row, e.g.
  // { title: "[RECENT CLIENT PROJECT]", client: "...", outcome: "...", tags: [...], image: "...", href: "..." },
  {
    title: "Global hackathon series, 0 to launch in 2 weeks",
    client: "BCH Devcon · Bitmain",
    outcome:
      "Bitmain needed a global hackathon brand, website, and growth automation from zero. I delivered the full identity, website, and launch systems inside a two-week runway.",
    tags: ["0→1 Launch", "Brand", "Growth Systems"],
    image: "/projects/bch-devcon/bch-event-badge.png",
    href: "/work/bch-devcon",
  },
  {
    title: "$50M crypto VC fund, brand and website in 3 weeks",
    client: "Permissionless Ventures · Bitmain",
    outcome:
      "A fund launch that needed to look institutional and move at startup speed. Full brand system and marketing website shipped in three weeks.",
    tags: ["Brand", "Product Marketing", "Velocity"],
    image: "/projects/permissionless/hero-bg.png",
    video: "/projects/permissionless/Screen-Recording-2019-09-22-at-8.09.23-PM.mov",
    href: "/work/permissionless-ventures",
  },
  {
    title: "Tech corridor launch for a city ecosystem",
    client: "Windward Tech District · Alpharetta",
    outcome:
      "Positioned Alpharetta's tech corridor as a credible innovation hub with brand, launch website, and ecosystem storytelling delivered in four weeks.",
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
  "Founding Designer",
  "AI Product Lead",
  "Founder in Residence",
];

export const HIRE_ROLES_NOTE =
  "I'm also open to design-led founding roles where 0→1 ownership is the job.";

export const HIRE_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "proof", label: "Proof" },
  { id: "roles", label: "Open To" },
  { id: "stack", label: "Stack" },
  { id: "products", label: "Products" },
  { id: "client-work", label: "Client Work" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
];

import catGames from "@/assets/cat-games.jpg";
import catBranding from "@/assets/cat-branding.jpg";
import catWebapp from "@/assets/cat-webapp.jpg";
import catSocial from "@/assets/cat-social.jpg";
import catStrategy from "@/assets/cat-strategy.jpg";
import gAi from "@/assets/gallery-ai.jpg";
import gStudio from "@/assets/gallery-studio.jpg";
import gProduct from "@/assets/gallery-product.jpg";
import gLifestyle from "@/assets/gallery-lifestyle.jpg";
import gAction from "@/assets/gallery-action.jpg";
import gUgc from "@/assets/gallery-ugc.jpg";

export type Category = {
  slug: string;
  group: "Consultation" | "Services" | "Work" | "Play";
  title: string;
  kicker: string;
  blurb: string;
  image: string;
  span: string;
  intro: string;
  editorial: string;
  deliverables: { title: string; desc: string }[];
  outcomes: string[];
  timeline?: { label: string; title: string; desc: string }[];
};

const sprintTimeline = [
  { label: "48 Hours", title: "First creative", desc: "A signature asset in your hands — direction you can react to, not a deck." },
  { label: "7 Days", title: "MVP live", desc: "A working version out in the real world, ready for feedback and traffic." },
  { label: "30 Days", title: "Systems live & tested", desc: "Everything shipped, wired and measured. A reality you can sell." },
];

export const categories: Category[] = [
  {
    slug: "consultation",
    group: "Consultation",
    title: "Consultation & Strategy",
    kicker: "See the whole board",
    blurb: "Diagnosis, direction and a commercial roadmap — from one conversation to full advisory.",
    image: catStrategy,
    span: "md:col-span-7 md:row-span-2",
    intro:
      "Most founders don't need another consultant. They need someone who can see the whole board — and actually build it. We combine commercial strategy with creative and technical execution so decisions turn into artefacts, not action items.",
    editorial: "Business intelligence meets creative intelligence.",
    deliverables: [
      { title: "Clarity Call", desc: "One high-impact conversation. Immediate direction, no fluff." },
      { title: "Reality Sprint", desc: "Flagship 30-day engagement — diagnose, define, build, launch." },
      { title: "Advisory Retainer", desc: "Your external innovation department, month to month." },
      { title: "The Boardroom", desc: "1–2 day executive intervention with an AI opportunity map." },
    ],
    outcomes: ["Positioning that lands", "A 90-day execution plan", "Investor-ready narrative", "Roadmap you can staff"],
    timeline: sprintTimeline,
  },
  {
    slug: "branding-design",
    group: "Services",
    title: "Branding & Design",
    kicker: "Identity with teeth",
    blurb: "Positioning, visual systems and brand worlds built to be remembered, not tolerated.",
    image: catBranding,
    span: "md:col-span-5",
    intro:
      "We build brands as systems: a sharp proposition, a distinctive visual language and the assets to deploy it everywhere on day one. No beige rectangles, no 60-page guidelines nobody opens.",
    editorial: "A brand is a decision, made visible.",
    deliverables: [
      { title: "Naming & proposition", desc: "The words that make people lean in." },
      { title: "Identity system", desc: "Logo, type, colour, motion and layout rules." },
      { title: "Brand guidelines", desc: "Lightweight, practical, built for the team using it." },
      { title: "Launch toolkit", desc: "Social, deck, web and print assets, ready to ship." },
    ],
    outcomes: ["Instant recognition", "Consistency across every channel", "Faster creative production", "Premium perception"],
  },
  {
    slug: "web-app-design",
    group: "Services",
    title: "Web & App Design",
    kicker: "Ship it, don't spec it",
    blurb: "Conversion-led websites, product MVPs and native-feeling apps — designed and built in weeks.",
    image: catWebapp,
    span: "md:col-span-5",
    intro:
      "Stop buying websites. Build a system. We design and engineer editorial, high-performance sites and product MVPs that look premium and behave like software — measurable, fast and easy to extend.",
    editorial: "Design that works as hard as it looks.",
    deliverables: [
      { title: "Website design & build", desc: "Editorial, fast, SEO-ready and conversion-focused." },
      { title: "Product MVP", desc: "A working app you can demo, test and sell in 30 days." },
      { title: "Design systems", desc: "Components and tokens your team can build on." },
      { title: "CRO & analytics", desc: "Instrumented from day one so you learn fast." },
    ],
    outcomes: ["Live in 30 days", "Lighthouse-grade performance", "Ownership of everything", "A platform, not a page"],
    timeline: sprintTimeline,
  },
  {
    slug: "ai-content",
    group: "Services",
    title: "AI Content Creation",
    kicker: "Content engines",
    blurb: "AI pipelines that turn one product into a month of on-brand assets — human-directed.",
    image: gAi,
    span: "md:col-span-4",
    intro:
      "One shoot becomes hundreds of assets. We build AI content engines — trained on your brand, directed by humans — that produce photography, video, ads and copy at a velocity a traditional agency can't touch.",
    editorial: "Machine speed. Studio taste.",
    deliverables: [
      { title: "AI product photography", desc: "Studio, lifestyle and campaign imagery from a single reference." },
      { title: "AI video generation", desc: "Generative ads, hooks and cutdowns for every platform." },
      { title: "Brand-trained pipelines", desc: "Reusable workflows your team can run themselves." },
      { title: "Automation", desc: "Content shipped on a schedule, without a human bottleneck." },
    ],
    outcomes: ["8x faster content cycles", "Lower cost per asset", "Always-on testing", "Full asset ownership"],
  },
  {
    slug: "content-production",
    group: "Services",
    title: "Content Production",
    kicker: "Cinematic craft",
    blurb: "Commercials, product photography and creator-led UGC shot to earn attention.",
    image: gStudio,
    span: "md:col-span-4",
    intro:
      "Film-grade production without agency overhead. Concept, direction, shoot and edit — for brand films, product stills and creator content built for how people actually scroll.",
    editorial: "Frames that earn attention.",
    deliverables: [
      { title: "Commercial production", desc: "Brand films and campaign hero assets." },
      { title: "Product photography", desc: "Editorial stills for web, retail and paid." },
      { title: "UGC & creator content", desc: "Authentic, platform-native video that converts." },
      { title: "Creative direction", desc: "One vision across every touchpoint." },
    ],
    outcomes: ["Hero assets you can build a quarter on", "Consistent brand world", "Platform-ready cutdowns", "Reusable content library"],
  },
  {
    slug: "social-media",
    group: "Services",
    title: "Social Media",
    kicker: "Always-on",
    blurb: "Strategy, content calendars and paid creative for feeds that never sleep.",
    image: catSocial,
    span: "md:col-span-4",
    intro:
      "Social isn't a posting schedule, it's a testing machine. We build the strategy, produce the volume and read the data — so every week you know what's working and why.",
    editorial: "Volume, taste and a feedback loop.",
    deliverables: [
      { title: "Channel strategy", desc: "Positioning, formats and cadence per platform." },
      { title: "Content production", desc: "Monthly batches of static, video and creator assets." },
      { title: "Paid creative", desc: "Hook-first ad variants built to be tested." },
      { title: "Reporting", desc: "Clear signal on what to double down on." },
    ],
    outcomes: ["+312% average engagement lift", "Predictable output", "Lower CPA on paid", "A library that compounds"],
  },
  {
    slug: "naga-x-games",
    group: "Play",
    title: "NagaXGames",
    kicker: "The play engine",
    blurb: "Interactive worlds, branded games and playable experiences for the next attention frontier.",
    image: catGames,
    span: "md:col-span-6",
    intro:
      "Games are the most powerful attention format on earth. NagaXGames builds playable brand experiences, prototypes and original titles — from web-based mini games to full interactive worlds.",
    editorial: "Attention you don't have to buy.",
    deliverables: [
      { title: "Branded games", desc: "Playable campaigns for launches and activations." },
      { title: "Game prototypes", desc: "Vertical slices to test a mechanic or pitch a title." },
      { title: "Interactive experiences", desc: "3D, WebGL and immersive product moments." },
      { title: "Original IP", desc: "Titles we build and publish, alone or with partners." },
    ],
    outcomes: ["Dwell time, not impressions", "Shareable by design", "Data-rich engagement", "IP you own"],
  },
  {
    slug: "automation",
    group: "Services",
    title: "Automation & AI Systems",
    kicker: "Build once, run forever",
    blurb: "Internal AI tools, agents and workflows that remove the bottleneck from your business.",
    image: gAction,
    span: "md:col-span-6",
    intro:
      "We map where your time actually goes, then wire systems that take it back — AI agents, integrations and internal tools that run the repeatable parts of the business while you focus on the rest.",
    editorial: "Systems that work while you sleep.",
    deliverables: [
      { title: "AI opportunity map", desc: "Where AI creates real margin in your operation." },
      { title: "Workflow automation", desc: "CRM, ops and content pipelines wired end-to-end." },
      { title: "Internal AI tools", desc: "Custom assistants trained on your data." },
      { title: "Team enablement", desc: "Training so it sticks after we leave." },
    ],
    outcomes: ["Hours back every week", "Fewer handoffs and errors", "Scalable operations", "Documented systems"],
  },
];

export const groups = ["Consultation", "Services", "Play", "Work"] as const;

export const workItems = [
  { src: gProduct, label: "Product", tag: "Commercial" },
  { src: gLifestyle, label: "Lifestyle", tag: "Editorial" },
  { src: gStudio, label: "Studio", tag: "Production" },
  { src: gAction, label: "Action", tag: "Sports" },
  { src: gAi, label: "AI Generated", tag: "Generative" },
  { src: gUgc, label: "UGC", tag: "Creator" },
];

export const metrics = [
  { v: "48h", l: "To first creative" },
  { v: "30", l: "Days to live systems" },
  { v: "120+", l: "Brands shipped" },
  { v: "40M+", l: "Views generated" },
];

export const logos = ["NORTHWAVE", "LUMEN", "ATLAS&CO", "VERIDIAN", "MONOLITH", "HELIO", "FOUNDRY", "PARALLEL"];

export function getCategory(slug?: string) {
  return categories.find((c) => c.slug === slug);
}

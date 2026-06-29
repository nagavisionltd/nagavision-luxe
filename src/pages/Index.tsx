import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles, Film, Camera, Users, Image as ImageIcon, Video, Compass,
  PenTool, Bot, ArrowRight, ArrowUpRight, Calendar, Mail, Layout, Gamepad2, Smartphone,
  Instagram, Linkedin, Youtube, Plus, Minus, Play, Check, Menu, X, Zap, Rocket, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

import heroReel from "@/assets/hero-reel.jpg";
import gProduct from "@/assets/gallery-product.jpg";
import gLifestyle from "@/assets/gallery-lifestyle.jpg";
import gStudio from "@/assets/gallery-studio.jpg";
import gAction from "@/assets/gallery-action.jpg";
import gAi from "@/assets/gallery-ai.jpg";
import gUgc from "@/assets/gallery-ugc.jpg";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  { icon: Sparkles, title: "AI Content Creation", desc: "Scalable, on-brand assets generated and refined by humans." },
  { icon: Film, title: "Commercial Production", desc: "Cinematic films that turn brands into culture." },
  { icon: Users, title: "UGC Content", desc: "Authentic creator-led video that converts on every platform." },
  { icon: Camera, title: "Product Photography", desc: "Editorial stills that make products impossible to scroll past." },
  { icon: ImageIcon, title: "Social Media Content", desc: "Always-on creative for feeds that never sleep." },
  { icon: Video, title: "AI Video Generation", desc: "Generative video pipelines for speed without sacrifice." },
  { icon: Layout, title: "Web Design", desc: "Conversion-led, editorial websites that look as good as they perform." },
  { icon: Smartphone, title: "App Development", desc: "Native-feeling mobile and web apps shipped fast, built to scale." },
  { icon: Gamepad2, title: "Game Development", desc: "Interactive worlds and branded games for the next attention frontier." },
  { icon: Compass, title: "Brand Strategy", desc: "Positioning, voice, and visual systems built to last." },
  { icon: PenTool, title: "Creative Direction", desc: "End-to-end art direction across every touchpoint." },
  { icon: Bot, title: "Automation & AI Consulting", desc: "Workflows that ship content while you sleep." },
];

const process = [
  { n: "01", title: "Discover", desc: "We dig into your brand, audience, and ambition to define what success looks like." },
  { n: "02", title: "Create", desc: "Concept, shoot, generate, edit. Cinematic craft meets AI velocity." },
  { n: "03", title: "Automate", desc: "We wire content engines so production scales without your team scaling." },
  { n: "04", title: "Scale", desc: "Measure, iterate, expand. Always-on creative that compounds." },
];

const metrics = [
  { v: "+312%", l: "Avg. engagement lift" },
  { v: "8x", l: "Faster content cycles" },
  { v: "120+", l: "Brands shipped" },
  { v: "40M+", l: "Views generated" },
];

const testimonials = [
  { q: "NagaVision rebuilt our entire content engine. We ship in days what used to take quarters.", a: "Head of Brand, DTC Skincare" },
  { q: "The cinematic quality with AI speed is unreal. Our launch campaign outperformed every benchmark.", a: "CMO, Series B Startup" },
  { q: "They don't just make content. They build systems that make content forever.", a: "Founder, Lifestyle Brand" },
];

const faqs = [
  { q: "How is NagaVision different from a traditional agency?", a: "We blend a film-grade production studio with AI content systems, so brands get both craft and velocity — without the overhead of a legacy agency." },
  { q: "Do I need to be a funded startup to work with you?", a: "Not at all. We work with early-stage founders, creators, scaling DTC brands and established companies. Scope flexes to your stage — momentum matters more than runway." },
  { q: "Can you handle full-funnel creative — from strategy to ads?", a: "Yes. We cover strategy, production, AI generation, social, paid creative, web, apps and the automation that ties it all together." },
  { q: "How fast can you actually move?", a: "First creative in 48 hours. MVP within 7 days. All systems live and tested within 30 days. We're built for velocity without cutting craft." },
  { q: "Do you license footage or build owned assets?", a: "Everything we deliver is fully owned by you — including AI-generated work — unless explicitly stated otherwise." },
];

const logos = ["NORTHWAVE", "LUMEN", "ATLAS&CO", "VERIDIAN", "MONOLITH", "HELIO", "FOUNDRY", "PARALLEL"];

const galleryItems = [
  { src: gProduct, label: "Product", tag: "Commercial" },
  { src: gLifestyle, label: "Lifestyle", tag: "Editorial" },
  { src: gStudio, label: "Studio", tag: "Production" },
  { src: gAction, label: "Action", tag: "Sports" },
  { src: gAi, label: "AI Generated", tag: "Generative" },
  { src: gUgc, label: "UGC", tag: "Creator" },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container">
        <div className={`flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-elegant" : "bg-transparent"}`}>
          <a href="#top" className="flex items-center gap-2 focus-ring" aria-label="NagaVision home">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-gold">
              <span className="absolute inset-0.5 rounded-full bg-background" />
              <span className="relative font-display text-sm font-bold text-gold">N</span>
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">NagaVision</span>
          </a>
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring">{n.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <a href="#contact">Contact</a>
            </Button>
            <Button asChild size="sm" className="rounded-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
              <a href="#contact">Book a Call <ArrowRight className="ml-1 h-3.5 w-3.5" /></a>
            </Button>
          </div>
          <button
            className="md:hidden p-2 -mr-2 text-foreground focus-ring"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-3xl p-6 animate-fade-in">
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-base text-foreground/90">{n.label}</a>
              ))}
              <Button asChild className="rounded-full bg-gradient-gold text-primary-foreground mt-2">
                <a href="#contact" onClick={() => setOpen(false)}>Book a Discovery Call</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  return (
    <section id="top" className="relative min-h-dvh overflow-hidden bg-gradient-hero pt-32 pb-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial-gold" />
      </motion.div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Creative Studio × AI Systems</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] leading-[0.95] tracking-tight font-light">
            Content That <em className="not-italic text-gradient-gold font-medium">Moves People.</em>
            <br />
            AI That <em className="not-italic shimmer-text font-medium">Moves Business.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            We pair cinematic production with AI content systems — building creative engines for brands, creators and startups that refuse to be ignored.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="rounded-full h-14 px-8 bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold text-base">
              <a href="#contact"><Calendar className="mr-2 h-4 w-4" /> Book a Discovery Call</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 border-border bg-transparent hover:bg-secondary text-base">
              <a href="#work">View Portfolio <ArrowUpRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </motion.div>

        {/* Reel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }}
          className="relative mt-20 md:mt-28"
        >
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-elegant glass">
            <img src={heroReel} alt="NagaVision cinematic reel — film camera with golden lens flares" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button aria-label="Play showreel" className="group relative h-20 w-20 md:h-24 md:w-24 rounded-full glass-strong flex items-center justify-center focus-ring">
                <span className="absolute inset-0 rounded-full bg-gold/20 animate-ping" />
                <Play className="h-6 w-6 md:h-8 md:w-8 text-gold ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>Showreel · 2026</span>
              <span className="text-gold">01 / 24</span>
            </div>
          </div>

          <div className="mt-6 overflow-hidden">
            <div className="reel-track">
              {[...galleryItems, ...galleryItems].map((g, i) => (
                <div key={i} className="relative h-24 w-40 rounded-xl overflow-hidden glass shrink-0">
                  <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover opacity-80" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Logos() {
  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="container">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10">
          Trusted by creators, brands and startups
        </p>
        <div className="overflow-hidden">
          <div className="marquee">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display text-2xl md:text-3xl font-light tracking-widest text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-28 md:py-40 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold">— Services</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl tracking-tight font-light">
              A studio with the <em className="text-gradient-gold not-italic font-medium">range of a network.</em>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Twelve disciplines, one team. We move between film sets, AI pipelines and product builds without losing craft.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-3xl p-8 bg-card border border-border hover:border-gold/40 transition-all duration-500 hover-lift overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-radial-gold pointer-events-none" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/40 transition-colors">
                  <s.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display text-2xl mb-3 font-medium">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center text-xs text-gold/0 group-hover:text-gold transition-colors">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="work" className="py-28 md:py-40 bg-card/20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold">— Selected Work</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 tracking-tight font-light">
              Frames that <em className="text-gradient-gold not-italic font-medium">earn attention.</em>
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors group">
            Request full portfolio <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-12 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {[
            { ...galleryItems[0], cls: "col-span-12 md:col-span-5 row-span-2" },
            { ...galleryItems[1], cls: "col-span-6 md:col-span-4 row-span-1" },
            { ...galleryItems[2], cls: "col-span-6 md:col-span-3 row-span-1" },
            { ...galleryItems[3], cls: "col-span-12 md:col-span-4 row-span-1" },
            { ...galleryItems[4], cls: "col-span-6 md:col-span-3 row-span-1" },
            { ...galleryItems[5], cls: "col-span-6 md:col-span-5 row-span-1" },
          ].map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`group relative rounded-2xl overflow-hidden ${g.cls}`}
            >
              <img src={g.src} alt={`${g.label} — ${g.tag}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold mb-1">{g.tag}</p>
                  <p className="font-display text-xl">{g.label}</p>
                </div>
                <span className="h-8 w-8 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4 text-gold" />
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-50 -z-10" />
      <div className="container">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">— Process</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 tracking-tight font-light">
            From brief to <em className="text-gradient-gold not-italic font-medium">always-on engine.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {process.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card p-8 md:p-10 relative group hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-display text-5xl text-gold/30 group-hover:text-gold transition-colors">{p.n}</span>
                <span className="h-2 w-2 rounded-full bg-gold" />
              </div>
              <h3 className="font-display text-2xl mb-3 font-medium">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="py-28 md:py-36 bg-card/30 border-y border-border/50">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="font-display text-5xl md:text-7xl text-gradient-gold font-medium tracking-tight">{m.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.l}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 flex flex-col justify-between min-h-[240px]"
            >
              <blockquote className="font-display text-lg leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-gradient-gold/30 border border-gold/30" />
                <span className="text-sm text-muted-foreground">{t.a}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { name: "Launch", price: "From $4.5k", desc: "For new brands shipping their first signature campaign.", features: ["Brand & creative direction", "1 commercial shoot day", "AI content starter kit", "30-day support"] },
    { name: "Scale", price: "From $12k/mo", desc: "Always-on content engine for growth-stage brands.", features: ["Monthly production day", "AI content pipeline", "Social + paid creative", "Performance reporting"], featured: true },
    { name: "Bespoke", price: "Custom", desc: "Enterprise-grade systems and integrated AI workflows.", features: ["Dedicated creative team", "Custom AI tooling", "Multi-market rollouts", "Strategic partnership"] },
  ];
  return (
    <section id="pricing" className="py-28 md:py-40">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">— Pricing</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 tracking-tight font-light">
            Flexible scopes. <em className="text-gradient-gold not-italic font-medium">Premium outcomes.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">Every engagement is custom-scoped. Below is a teaser — your quote is built around your goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-3xl p-8 border transition-all hover-lift ${t.featured ? "bg-gradient-to-b from-gold/10 to-card border-gold/40 shadow-gold" : "bg-card border-border"}`}>
              {t.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-gradient-gold text-primary-foreground font-medium">Most Loved</span>}
              <h3 className="font-display text-2xl font-medium">{t.name}</h3>
              <div className="mt-2 font-display text-4xl text-gradient-gold">{t.price}</div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" /> <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className={`mt-8 w-full rounded-full ${t.featured ? "bg-gradient-gold text-primary-foreground hover:opacity-90" : "bg-secondary hover:bg-muted text-foreground"}`}>
                <a href="#contact">Get a custom quote</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-28 md:py-40 bg-card/20">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">— FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 tracking-tight font-light">
            Questions, <em className="text-gradient-gold not-italic font-medium">answered.</em>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-sm">Still curious? <a href="#contact" className="text-gold hover:underline">Talk to us</a> — we reply within a day.</p>
        </div>
        <div className="md:col-span-7">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-display text-lg text-left hover:text-gold hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks — we'll be in touch within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-60 -z-10" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">— Let's Build</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 tracking-tight font-light leading-[1]">
              Start a <em className="text-gradient-gold not-italic font-medium">conversation.</em>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Tell us about your brand. We'll respond with ideas, references, and a clear next step within one business day.
            </p>
            <div className="mt-10 space-y-4">
              <Button asChild size="lg" className="rounded-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold w-full sm:w-auto">
                <a href="#" onClick={(e)=>{e.preventDefault(); toast.message("Calendar opens here", { description: "Wire this to Calendly or Cal.com." });}}>
                  <Calendar className="mr-2 h-4 w-4" /> Book a Discovery Call
                </a>
              </Button>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-gold" /> <a href="mailto:hello@nagavision.com" className="hover:text-foreground">hello@nagavision.com</a>
              </div>
              <div className="flex items-center gap-3 pt-4">
                {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" aria-label={`Social ${i}`} className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-gold/50 hover:text-gold transition-colors focus-ring">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="lg:col-span-7 glass-strong rounded-3xl p-8 md:p-10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <Input id="name" required className="mt-2 bg-background/60 border-border h-12 rounded-xl" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <Input id="email" type="email" required className="mt-2 bg-background/60 border-border h-12 rounded-xl" placeholder="you@brand.com" />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="text-xs uppercase tracking-widest text-muted-foreground">Company</label>
              <Input id="company" className="mt-2 bg-background/60 border-border h-12 rounded-xl" placeholder="Brand or company" />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Project</label>
              <Textarea id="message" required rows={5} className="mt-2 bg-background/60 border-border rounded-xl resize-none" placeholder="Tell us what you're building…" />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold h-14 text-base">
              Send message <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-gold">
            <span className="absolute inset-0.5 rounded-full bg-background" />
            <span className="relative font-display text-sm font-bold text-gold">N</span>
          </span>
          <span className="font-display text-lg">NagaVision</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NagaVision Studio. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Logos />
      <Services />
      <Gallery />
      <Process />
      <Metrics />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

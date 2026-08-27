import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logos } from "@/data/site";

export function SectionHead({ kicker, title, sub, center }: { kicker: string; title: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-14 ${center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      <span className="text-xs tracking-[0.3em] uppercase text-gold">— {kicker}</span>
      <h2 className="font-display text-4xl md:text-6xl mt-4 tracking-tight font-semibold uppercase leading-[0.95]">{title}</h2>
      {sub && <p className="mt-6 text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function LogoMarquee() {
  return (
    <section className="py-14 border-y border-border/50 bg-card/30">
      <div className="container">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Trusted by founders, creators and scaling brands
        </p>
        <div className="overflow-hidden">
          <div className="marquee">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display text-2xl md:text-3xl font-light tracking-widest text-muted-foreground/70 whitespace-nowrap">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTABand({
  title = "Turn your idea into something real.",
  sub = "One conversation. A clear diagnosis. A 30-day plan to ship it.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-60 -z-10" />
      <div className="container text-center max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold uppercase leading-[0.95]">{title}</h2>
        <p className="font-editorial text-2xl md:text-3xl mt-5 text-gradient-gold">In 30 days.</p>
        <p className="mt-6 text-muted-foreground">{sub}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full h-14 px-8 bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold text-base">
            <Link to="/contact">
              <Calendar className="mr-2 h-4 w-4" /> Book a Discovery Call
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 border-border bg-transparent hover:bg-secondary text-base">
            <Link to="/work">
              See the work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

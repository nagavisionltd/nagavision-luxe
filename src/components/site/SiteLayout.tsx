import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/site";

const nav = [
  { label: "Consultation", to: "/consultation" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "NagaXGames", to: "/naga-x-games" },
  { label: "Contact", to: "/contact" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-[13px] font-extrabold uppercase leading-[0.85] tracking-tight ${className}`}>
      Naga
      <br />
      Vision
    </span>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container">
        <div className={`flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-elegant" : "bg-transparent"}`}>
          <Link to="/" className="focus-ring" aria-label="NagaVision home">
            <Wordmark />
          </Link>
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm transition-colors focus-ring ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex">
            <Button asChild size="sm" className="rounded-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
              <Link to="/contact">
                Start a build <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
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
                <Link key={n.to} to={n.to} className="text-base text-foreground/90">
                  {n.label}
                </Link>
              ))}
              <Button asChild className="rounded-full bg-gradient-gold text-primary-foreground mt-2">
                <Link to="/contact">Book a Discovery Call</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Wordmark />
          <p className="mt-5 text-sm text-muted-foreground max-w-xs">
            London creative &amp; digital innovation studio. Strategic. Cinematic. Technological. Human.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label={["Instagram", "LinkedIn", "YouTube"][i]}
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:text-gold transition-colors focus-ring"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 grid grid-cols-2 gap-x-6 gap-y-3">
          {categories.map((c) => (
            <Link key={c.slug} to={`/${c.slug}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
              {c.title}
            </Link>
          ))}
        </div>
        <div className="md:col-span-3 flex flex-col gap-3 text-sm text-muted-foreground">
          <Link to="/work" className="hover:text-gold transition-colors">Work</Link>
          <Link to="/services" className="hover:text-gold transition-colors">All services</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
          <a href="mailto:hello@nagavision.com" className="hover:text-gold transition-colors">hello@nagavision.com</a>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-border/40 text-xs text-muted-foreground">
        © {new Date().getFullYear()} NagaVision. All rights reserved.
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function SiteLayout() {
  return (
    <div className="min-h-dvh bg-background">
      <ScrollToTop />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

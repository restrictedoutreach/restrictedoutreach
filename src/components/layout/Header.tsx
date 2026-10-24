import { useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import { basePath } from "@/lib/localized-seo";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import brand from "@/assets/restricted-outreach-brand.png";
import { useCommercial } from "@/lib/commercial";
export default function Header() {
  const [open, setOpen] = useState(false);
  const c = useCommercial();
  const location = useLocation();
  const links = [
    {
      to: "/strategy" as const,
      label: c("Estrategia IA", "Estratègia IA", "AI strategy"),
    },
    {
      to: "/services/development" as const,
      label: c("Desarrollo", "Desenvolupament", "Development"),
    },
    { to: "/method" as const, label: c("Método 3A", "Mètode 3A", "3A method") },
    { to: "/about" as const, label: c("Nosotros", "Nosaltres", "About") },
    { to: "/contact" as const, label: c("Contacto", "Contacte", "Contact") },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="commercial-container flex h-20 items-center justify-between gap-5">
        <Link to="/" aria-label="RESTRICTED OUTREACH">
          <img
            src={brand}
            alt="RESTRICTED OUTREACH"
            className="h-7 sm:h-9 w-auto max-w-[185px] object-contain"
          />
        </Link>
        <nav
          aria-label={c(
            "Navegación principal",
            "Navegació principal",
            "Main navigation",
          )}
          className="hidden lg:flex items-center gap-1"
        >
          {links.map((l) => (
            <Button
              asChild
              key={l.to}
              variant="ghost"
              className={
                basePath(location.pathname) === l.to
                  ? "text-accent"
                  : "text-muted-foreground"
              }
            >
              <Link to={l.to}>{l.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Button asChild className="hidden sm:flex h-10 rounded-md">
            <Link to="/diagnosis">
              {c(
                "Solicitar diagnóstico",
                "Sol·licitar diagnòstic",
                "Request a diagnosis",
              )}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden commercial-container py-5 flex flex-col gap-2 border-t border-border">
          {links.map((l) => (
            <Button
              asChild
              variant="ghost"
              key={l.to}
              className="justify-start"
            >
              <Link to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </Button>
          ))}
          <Button asChild>
            <Link to="/diagnosis" onClick={() => setOpen(false)}>
              {c(
                "Solicitar diagnóstico",
                "Sol·licitar diagnòstic",
                "Request a diagnosis",
              )}
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

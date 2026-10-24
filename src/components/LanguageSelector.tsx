import { Link, useLocation } from "@tanstack/react-router";
import { basePath, commercialPaths, pathLanguage, type SiteLanguage } from "@/lib/localized-seo";
import { Button } from "@/components/ui/button";

const languages: { code: SiteLanguage; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ca", label: "CA" },
];

const LanguageSelector = () => {
  const pathname = useLocation({ select: (location) => location.pathname });
  const language = pathLanguage(pathname);
  const path = commercialPaths.find((p) => p === basePath(pathname)) ?? "/";

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-muted/50 p-0.5">
      {languages.map((lang) => (
        <Button
          asChild
          variant="ghost"
          size="sm"
          key={lang.code}
          className={`h-7 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
            language === lang.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {lang.code === "en" ? (
            <Link to={path} hrefLang="en" aria-label="English" aria-current={language === "en" ? "page" : undefined} onClick={() => localStorage.setItem("language", "en")}>{lang.label}</Link>
          ) : path === "/" ? (
            <Link to="/$lang" params={{ lang: lang.code }} hrefLang={lang.code} aria-label={lang.code === "es" ? "Español" : "Català"} aria-current={language === lang.code ? "page" : undefined} onClick={() => localStorage.setItem("language", lang.code)}>{lang.label}</Link>
          ) : (
            <Link to="/$lang/$" params={{ lang: lang.code, _splat: path.slice(1) }} hrefLang={lang.code} aria-label={lang.code === "es" ? "Español" : "Català"} aria-current={language === lang.code ? "page" : undefined} onClick={() => localStorage.setItem("language", lang.code)}>{lang.label}</Link>
          )}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSelector;

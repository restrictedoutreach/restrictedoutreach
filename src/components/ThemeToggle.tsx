import { useTheme } from "next-themes";
import { useHydrated } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCommercial } from "@/lib/commercial";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useHydrated();
  const c = useCommercial();
  const light = hydrated && resolvedTheme === "light";
  const label = light
    ? c("Cambiar a modo oscuro", "Canviar a mode fosc", "Switch to dark mode")
    : c("Cambiar a modo claro", "Canviar a mode clar", "Switch to light mode");

  return (
    <Button variant="ghost" size="icon" aria-label={label} title={label}
      disabled={!hydrated} onClick={() => setTheme(light ? "dark" : "light")}
      className="shrink-0">
      {light ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
}
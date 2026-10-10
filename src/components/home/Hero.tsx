import { Link } from "@/lib/router-compat";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import planeLogo from "@/assets/plane-logo-transparent.png";
import GridBackground from "@/components/animations/GridBackground";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useTranslation();
  const fullText = t("hero.titlePart1");
  const highlightText = t("hero.titleHighlight");
  const [displayedText, setDisplayedText] = useState("");
  const [showHighlight, setShowHighlight] = useState(false);
  const [highlightDisplayed, setHighlightDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setShowHighlight(true);
        let highlightIndex = 0;
        const highlightInterval = setInterval(() => {
          if (highlightIndex < highlightText.length) {
            setHighlightDisplayed(highlightText.slice(0, highlightIndex + 1));
            highlightIndex++;
          } else {
            clearInterval(highlightInterval);
          }
        }, 100);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [fullText, highlightText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background min-h-[80vh] flex items-center">
      <GridBackground className="z-0" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-5 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.img
          src={planeLogo}
          alt=""
          className="w-[700px] h-auto opacity-[0.08] select-none terminal-logo-bright"
          aria-hidden="true"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>{t("hero.badge")}</span>
              <img src={planeLogo} alt="Plane logo" className="h-5 w-auto terminal-logo-bright" />
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl min-h-[1.2em]">
              {displayedText}
              {showHighlight && <span className="text-gradient">{highlightDisplayed}</span>}
              <span
                className={`inline-block w-[0.5em] h-[1em] ml-1 bg-primary align-middle transition-opacity duration-100 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
                style={{ transform: "translateY(-0.1em)" }}
              />
            </h1>

            <motion.p
              className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Button asChild size="lg" className="group min-w-[180px]">
                <Link to="/solutions">
                  {t("hero.exploreSolutions")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[180px]">
                <Link to="/contact">
                  <Play className="mr-2 h-4 w-4" />
                  {t("hero.scheduleDemo")}
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[t("hero.enterpriseReady"), t("hero.soc2gdpr"), t("hero.support247")].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Animated frame container */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary via-primary/50 to-accent/30">
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-60 blur-sm"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              />

              {/* Corner accents */}
              <motion.div
                className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-lg"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-lg"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />

              {/* Title header bar */}
              <div className="relative bg-card rounded-t-xl border-b border-border/50">
                <div className="flex items-center gap-3 px-4 py-3">
                  {/* Window controls */}
                  <div className="flex gap-1.5">
                    <motion.div className="w-3 h-3 rounded-full bg-destructive" whileHover={{ scale: 1.2 }} />
                    <motion.div className="w-3 h-3 rounded-full bg-yellow-500" whileHover={{ scale: 1.2 }} />
                    <motion.div className="w-3 h-3 rounded-full bg-green-500" whileHover={{ scale: 1.2 }} />
                  </div>

                  {/* Title */}
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-foreground">
                      <span className="text-gradient font-semibold">Plane</span>
                      <span className="text-muted-foreground hidden sm:inline"> — Platform Demo</span>
                    </span>
                  </div>

                  {/* Live indicator */}
                  <motion.div
                    className="flex items-center gap-1.5"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground hidden sm:inline">LIVE</span>
                  </motion.div>
                </div>
              </div>

              {/* Video container */}
              <div className="relative bg-card rounded-b-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/_NcfSOfL16I?autoplay=1&mute=1&loop=1&playlist=_NcfSOfL16I&controls=0&showinfo=0&rel=0&modestbranding=1"
                    title="Plane Platform Demo"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ height: "50%" }}
                />
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-8 -z-10 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

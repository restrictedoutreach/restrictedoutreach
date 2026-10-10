import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MatrixRain from "@/components/animations/MatrixRain";
import TypewriterTitle from "@/components/animations/TypewriterTitle";
import { useTranslation } from "react-i18next";
import {
  Zap,
  Code2,
  Wand2,
  Rocket,
  Brain,
  Sparkles,
  Blocks,
  GitBranch,
  Globe,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Palette,
  Shield,
} from "lucide-react";

const lovableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Lovable & Vibe Coding Experts | RESTRICTED OUTREACH",
  description:
    "Expert Lovable developers and vibe coding specialists. Build production-ready web apps with AI-powered development. RESTRICTED OUTREACH.",
  url: "https://www.restrictedoutreach.com/experts/lovable",
};

const stats = [
  { value: "50+", labelKey: "statProjects" },
  { value: "10x", labelKey: "statSpeed" },
  { value: "99%", labelKey: "statSatisfaction" },
  { value: "#1", labelKey: "statExperts" },
];

const featureKeys = [
  { icon: Wand2, titleKey: "featureVibeTitle", descKey: "featureVibeDesc" },
  { icon: Brain, titleKey: "featureAiTitle", descKey: "featureAiDesc" },
  { icon: Blocks, titleKey: "featureComponentsTitle", descKey: "featureComponentsDesc" },
  { icon: Shield, titleKey: "featureProductionTitle", descKey: "featureProductionDesc" },
  { icon: GitBranch, titleKey: "featureIterationTitle", descKey: "featureIterationDesc" },
  { icon: Globe, titleKey: "featureDeployTitle", descKey: "featureDeployDesc" },
];

const useCaseKeys = [
  { icon: Rocket, titleKey: "useCaseMVP", descKey: "useCaseMVPDesc" },
  { icon: Palette, titleKey: "useCasePrototype", descKey: "useCasePrototypeDesc" },
  { icon: Code2, titleKey: "useCaseEnterprise", descKey: "useCaseEnterpriseDesc" },
];

const whyItemKeys = [
  "whyItem1",
  "whyItem2",
  "whyItem3",
  "whyItem4",
  "whyItem5",
  "whyItem6",
];

const techStack = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "Supabase",
  "shadcn/ui",
];

const LovablePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO
        title="Lovable & Vibe Coding | AI-Powered Web Development"
        description="Expert Lovable developers and vibe coding specialists. Build production-ready web apps with AI-powered development. RESTRICTED OUTREACH."
        canonical="/experts/lovable"
        jsonLd={lovableJsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-28">
        <MatrixRain columnCount={25} opacity={0.3} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {t("lovable.badge")}
            </div>
            <TypewriterTitle
              text={t("lovable.heroTitle1")}
              highlightText={t("lovable.heroTitleHighlight")}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            />
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("lovable.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  {t("lovable.startProject")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer">
                  {t("lovable.explorePlatform")}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{t(`lovable.${stat.labelKey}`)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-6">{t("lovable.techStack")}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {techStack.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What is Vibe Coding */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
                <MessageSquare className="h-4 w-4" />
                {t("lovable.vibeCodingBadge")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("lovable.vibeCodingTitle")}</h2>
              <p className="text-muted-foreground text-lg">{t("lovable.vibeCodingDesc")}</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", titleKey: "vibeStep1Title", descKey: "vibeStep1Desc", icon: MessageSquare },
              { step: "02", titleKey: "vibeStep2Title", descKey: "vibeStep2Desc", icon: Wand2 },
              { step: "03", titleKey: "vibeStep3Title", descKey: "vibeStep3Desc", icon: Rocket },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border/60 bg-card p-6 text-center relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {item.step}
                </div>
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4 mt-2" />
                <h3 className="text-lg font-semibold mb-2">{t(`lovable.${item.titleKey}`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`lovable.${item.descKey}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("lovable.featuresTitle")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("lovable.featuresDescription")}</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureKeys.map((feature, i) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-border/60 bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t(`lovable.${feature.titleKey}`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`lovable.${feature.descKey}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("lovable.useCasesTitle")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("lovable.useCasesDescription")}</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {useCaseKeys.map((useCase, i) => (
              <motion.div
                key={useCase.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border/60 bg-card p-8 text-center"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-5">
                  <useCase.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(`lovable.${useCase.titleKey}`)}</h3>
                <p className="text-muted-foreground text-sm">{t(`lovable.${useCase.descKey}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why RESTRICTED OUTREACH */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t("lovable.whyPalantirTitle")}
                  <span className="text-primary">{t("lovable.whyPalantirHighlight")}</span>?
                </h2>
                <p className="text-muted-foreground mb-8">{t("lovable.whyPalantirDesc")}</p>
                <ul className="space-y-4">
                  {whyItemKeys.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{t(`lovable.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-primary/10 p-8 lg:p-10">
                <Zap className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t("lovable.innovationTitle")}</h3>
                <p className="text-muted-foreground mb-6">{t("lovable.innovationDesc")}</p>
                <Button asChild>
                  <Link to="/contact">
                    {t("lovable.talkAboutProject")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-20 bg-primary/5 overflow-hidden">
        <MatrixRain columnCount={15} opacity={0.15} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("lovable.ctaTitle")}</h2>
              <p className="text-muted-foreground mb-8">{t("lovable.ctaDescription")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    {t("lovable.startProject")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">{t("lovable.viewServices")}</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default LovablePage;

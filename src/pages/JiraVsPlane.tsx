import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MatrixRain from "@/components/animations/MatrixRain";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import {
  ArrowRight, Check, X, Zap, Shield,
  DollarSign, Server, Layers,
  Cloud, Lock, CheckCircle2, ArrowRightLeft
} from "lucide-react";
import planeLogo from "@/assets/plane-logo.svg";
import jiraLogo from "@/assets/integrations/jira.avif";

const experienceIcons = [Layers, Zap, Shield, DollarSign, CheckCircle2, Lock];
const editionIcons = [Cloud, Server, Lock];

const JiraVsPlane = () => {
  const { t } = useTranslation();

  const comparisonData = Array.from({ length: 8 }, (_, i) => ({
    category: t(`jiraVsPlane.comparison.${i}.category`),
    plane: t(`jiraVsPlane.comparison.${i}.plane`),
    jira: t(`jiraVsPlane.comparison.${i}.jira`),
  }));

  const featureTable = Array.from({ length: 10 }, (_, i) => ({
    feature: t(`jiraVsPlane.features.${i}.feature`),
    plane: t(`jiraVsPlane.features.${i}.plane`),
    jira: t(`jiraVsPlane.features.${i}.jira`),
  }));

  const migrationSteps = Array.from({ length: 4 }, (_, i) => ({
    step: String(i + 1),
    title: t(`jiraVsPlane.migration.steps.${i}.title`),
    desc: t(`jiraVsPlane.migration.steps.${i}.desc`),
  }));

  const whatMovesOver = Array.from({ length: 5 }, (_, i) =>
    t(`jiraVsPlane.migration.whatMoves.${i}`)
  );

  const experienceAfterSwitch = Array.from({ length: 6 }, (_, i) => ({
    title: t(`jiraVsPlane.experience.${i}.title`),
    desc: t(`jiraVsPlane.experience.${i}.desc`),
    icon: experienceIcons[i],
  }));

  const editions = Array.from({ length: 3 }, (_, i) => ({
    name: t(`jiraVsPlane.editions.${i}.name`),
    desc: t(`jiraVsPlane.editions.${i}.desc`),
    tag: t(`jiraVsPlane.editions.${i}.tag`),
    icon: editionIcons[i],
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jira vs Plane — Why Teams Switch | RESTRICTED OUTREACH",
    "description": t("jiraVsPlane.hero.subtitle"),
    "url": "https://www.restrictedoutreach.com/jira-vs-plane",
  };

  return (
    <Layout>
      <SEO
        title={t("jiraVsPlane.seo.title")}
        description={t("jiraVsPlane.seo.description")}
        canonical="/jira-vs-plane"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <MatrixRain columnCount={25} opacity={0.2} />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/6 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary mb-6">
                <ArrowRightLeft className="h-3.5 w-3.5" />
                PLANE VS JIRA
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t("jiraVsPlane.hero.title")}{" "}
                <span className="text-gradient">Plane</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("jiraVsPlane.hero.subtitle")}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    {t("jiraVsPlane.hero.ctaPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/migration">{t("jiraVsPlane.hero.ctaSecondary")}</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary font-mono text-sm mb-2">// {t("jiraVsPlane.comparisonSection.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("jiraVsPlane.comparisonSection.title")}{" "}
                <span className="text-gradient">{t("jiraVsPlane.comparisonSection.titleHighlight")}</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left text-sm font-mono text-muted-foreground w-1/5"></th>
                    <th className="py-4 px-4 text-left text-sm font-semibold text-primary w-2/5">
                      <span className="flex items-center gap-2">
                        <img src={planeLogo} alt="Plane" className="h-5 w-5" />
                        Plane
                      </span>
                    </th>
                    <th className="py-4 px-4 text-left text-sm font-semibold text-muted-foreground w-2/5">
                      <span className="flex items-center gap-2">
                        <img src={jiraLogo} alt="Jira" className="h-5 w-5" />
                        Jira
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <motion.tr
                      key={row.category}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <td className="py-4 px-4 text-sm font-semibold text-foreground">{row.category}</td>
                      <td className="py-4 px-4 text-sm text-foreground bg-primary/5 rounded-l-none">
                        <span className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {row.plane}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">
                        <span className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive/50 shrink-0 mt-0.5" />
                          {row.jira}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-12 lg:py-16 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary font-mono text-sm mb-2">// {t("jiraVsPlane.migrationSection.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("jiraVsPlane.migrationSection.title")}{" "}
                <span className="text-gradient">{t("jiraVsPlane.migrationSection.titleHighlight")}</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("jiraVsPlane.migrationSection.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {migrationSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-xl border border-border bg-card p-6 h-full transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <ArrowRightLeft className="h-5 w-5 text-primary" />
                {t("jiraVsPlane.migrationSection.whatMovesTitle")}
              </h3>
              <ul className="space-y-3">
                {whatMovesOver.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience After Switch */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary font-mono text-sm mb-2">// {t("jiraVsPlane.experienceSection.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("jiraVsPlane.experienceSection.title")}{" "}
                <span className="text-gradient">{t("jiraVsPlane.experienceSection.titleHighlight")}</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceAfterSwitch.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="group rounded-xl border border-border bg-card p-8 h-full transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editions */}
      <section className="py-12 lg:py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary font-mono text-sm mb-2">// {t("jiraVsPlane.editionsSection.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("jiraVsPlane.editionsSection.title")}{" "}
                <span className="text-gradient">{t("jiraVsPlane.editionsSection.titleHighlight")}</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {t("jiraVsPlane.editionsSection.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {editions.map((ed, i) => {
              const Icon = ed.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group rounded-xl border border-border bg-card p-8 h-full transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono text-primary/70 bg-primary/5 rounded-full px-3 py-1">
                        {ed.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{ed.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ed.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Feature Table */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary font-mono text-sm mb-2">// {t("jiraVsPlane.featureSection.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("jiraVsPlane.featureSection.title")}{" "}
                <span className="text-gradient">{t("jiraVsPlane.featureSection.titleHighlight")}</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="py-4 px-6 text-left text-sm font-mono text-muted-foreground w-1/4">{t("jiraVsPlane.featureSection.featureCol")}</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-primary w-[37.5%]">
                      <span className="flex items-center gap-2">
                        <img src={planeLogo} alt="Plane" className="h-5 w-5" />
                        Plane
                      </span>
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-muted-foreground w-[37.5%]">
                      <span className="flex items-center gap-2">
                        <img src={jiraLogo} alt="Jira" className="h-5 w-5" />
                        Jira
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureTable.map((row, i) => (
                    <motion.tr
                      key={i}
                      className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <td className="py-3 px-6 text-sm font-medium text-foreground">{row.feature}</td>
                      <td className="py-3 px-6 text-sm text-foreground">
                        <span className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {row.plane}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-sm text-muted-foreground">
                        <span className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive/50 shrink-0 mt-0.5" />
                          {row.jira}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-primary/8 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-primary/5 p-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                {t("jiraVsPlane.cta.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                {t("jiraVsPlane.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    {t("jiraVsPlane.cta.ctaPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://app.plane.so/sign-up" target="_blank" rel="noopener noreferrer">
                    {t("jiraVsPlane.cta.ctaSecondary")}
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default JiraVsPlane;

import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MatrixRain from "@/components/animations/MatrixRain";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import {
  Shield, Lock, FileCheck, Server, Globe, Cpu,
  ArrowRight, Search, Map, Box, MessageSquare, CheckCircle2,
  Building2, Layers, Cloud, Bot, Zap
} from "lucide-react";

const Enterprise = () => {
  const { t } = useTranslation();

  const clients = [
    "StarkBank", "Zerodha", "Brown Brothers Harriman",
    "Dolby", "Sony", "Ruby Labs"
  ];

  const complianceBadges = [
    { name: "ISO 27001:2022", icon: Shield },
    { name: "SOC 2", icon: Lock },
    { name: "GDPR", icon: FileCheck },
  ];

  const complianceFeatures = [
    {
      title: t("enterprise.compliance.compliantTitle"),
      desc: t("enterprise.compliance.compliantDesc"),
      icon: Shield,
    },
    {
      title: t("enterprise.compliance.secureTitle"),
      desc: t("enterprise.compliance.secureDesc"),
      icon: Server,
    },
    {
      title: t("enterprise.compliance.auditTitle"),
      desc: t("enterprise.compliance.auditDesc"),
      icon: FileCheck,
    },
  ];

  const migrationPhases = [
    {
      phase: t("enterprise.migration.phase1Label"),
      title: t("enterprise.migration.phase1Title"),
      steps: [
        { label: t("enterprise.migration.step1"), icon: Search },
        { label: t("enterprise.migration.step2"), icon: FileCheck },
      ],
    },
    {
      phase: t("enterprise.migration.phase2Label"),
      title: t("enterprise.migration.phase2Title"),
      steps: [
        { label: t("enterprise.migration.step3"), icon: Map },
        { label: t("enterprise.migration.step4"), icon: Layers },
      ],
    },
    {
      phase: t("enterprise.migration.phase3Label"),
      title: t("enterprise.migration.phase3Title"),
      steps: [
        { label: t("enterprise.migration.step5"), icon: Box },
        { label: t("enterprise.migration.step6"), icon: MessageSquare },
        { label: t("enterprise.migration.step7"), icon: CheckCircle2 },
      ],
    },
  ];

  const deploymentOptions = [
    {
      title: t("enterprise.deployment.airgappedTitle"),
      desc: t("enterprise.deployment.airgappedDesc"),
      icon: Lock,
      tag: t("enterprise.deployment.airgappedTag"),
    },
    {
      title: t("enterprise.deployment.restrictedTitle"),
      desc: t("enterprise.deployment.restrictedDesc"),
      icon: Shield,
      tag: t("enterprise.deployment.restrictedTag"),
    },
    {
      title: t("enterprise.deployment.managedTitle"),
      desc: t("enterprise.deployment.managedDesc"),
      icon: Cloud,
      tag: t("enterprise.deployment.managedTag"),
    },
  ];

  const enterpriseFeatures = [
    {
      title: t("enterprise.features.multiRegionTitle"),
      desc: t("enterprise.features.multiRegionDesc"),
      icon: Globe,
    },
    {
      title: t("enterprise.features.managedTitle"),
      desc: t("enterprise.features.managedDesc"),
      icon: Server,
    },
    {
      title: t("enterprise.features.ltsTitle"),
      desc: t("enterprise.features.ltsDesc"),
      icon: Layers,
    },
    {
      title: t("enterprise.features.k8sTitle"),
      desc: t("enterprise.features.k8sDesc"),
      icon: Cpu,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Plane Enterprise - RESTRICTED OUTREACH",
    "description": t("enterprise.meta.description"),
    "url": "https://www.restrictedoutreach.com/enterprise",
  };

  return (
    <Layout>
      <SEO
        title="Plane Enterprise | ISO 27001, SOC2 & GDPR Compliant Project Management"
        description={t("enterprise.meta.description")}
        canonical="/enterprise"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <MatrixRain columnCount={25} opacity={0.2} />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/6 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary mb-6">
                <Building2 className="h-3.5 w-3.5" />
                {t("enterprise.badge")}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t("enterprise.heroTitle")}{" "}
                <span className="text-gradient">{t("enterprise.heroTitleHighlight")}</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("enterprise.heroDescription")}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    {t("enterprise.heroCta")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">{t("enterprise.heroCtaSecondary")}</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">
              {t("enterprise.trustedBy")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {clients.map((client) => (
                <motion.div
                  key={client}
                  className="flex items-center gap-2 text-muted-foreground/70 hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Building2 className="h-5 w-5 text-primary/40" />
                  <span className="text-sm font-semibold tracking-wide">{client}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">{t("enterprise.compliance.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("enterprise.compliance.title")}{" "}
                <span className="text-gradient">{t("enterprise.compliance.titleHighlight")}</span>
              </h2>
              <div className="flex items-center justify-center gap-6 mt-8">
                {complianceBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.name} className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">{badge.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="group rounded-xl border border-border bg-card p-8 h-full transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Methodology — THE PRIORITY */}
      <section className="py-20 lg:py-28 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">{t("enterprise.migration.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("enterprise.migration.title")}{" "}
                <span className="text-gradient">{t("enterprise.migration.titleHighlight")}</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("enterprise.migration.description")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {migrationPhases.map((phase, phaseIndex) => (
              <ScrollReveal key={phaseIndex} delay={phaseIndex * 0.15} direction="up">
                <div className="relative rounded-xl border border-border bg-card p-8 h-full">
                  {/* Phase indicator */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {phaseIndex + 1}
                    </div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">{phase.phase}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-6">{phase.title}</h3>

                  {/* Steps */}
                  <div className="space-y-4">
                    {phase.steps.map((step, stepIndex) => {
                      const StepIcon = step.icon;
                      return (
                        <motion.div
                          key={stepIndex}
                          className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: phaseIndex * 0.15 + stepIndex * 0.1, duration: 0.4 }}
                        >
                          <StepIcon className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-sm text-foreground">{step.label}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Connector line */}
                  {phaseIndex < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Guarantee */}
          <ScrollReveal delay={0.5}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-6 py-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  {t("enterprise.migration.guarantee")}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">{t("enterprise.deployment.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("enterprise.deployment.title")}{" "}
                <span className="text-gradient">{t("enterprise.deployment.titleHighlight")}</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {t("enterprise.deployment.description")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {deploymentOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="group rounded-xl border border-border bg-card p-8 h-full transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono text-primary/70 bg-primary/5 rounded-full px-3 py-1">
                        {option.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{option.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 lg:py-28 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">{t("enterprise.features.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("enterprise.features.title")}{" "}
                <span className="text-gradient">{t("enterprise.features.titleHighlight")}</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div className="group rounded-xl border border-border bg-card p-6 h-full text-center transition-all hover:border-primary/40">
                    <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plane AI */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-primary/8 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <p className="text-primary font-mono text-sm mb-2">{t("enterprise.ai.badge")}</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("enterprise.ai.title")}{" "}
                <span className="text-gradient">{t("enterprise.ai.titleHighlight")}</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t("enterprise.ai.description")}
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Bot, text: t("enterprise.ai.feature1") },
                  { icon: Zap, text: t("enterprise.ai.feature2") },
                  { icon: MessageSquare, text: t("enterprise.ai.feature3") },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* AI Agent Flow Diagram */}
            <ScrollReveal direction="right">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="space-y-6">
                  {[
                    { step: "1", label: t("enterprise.ai.flow1"), color: "bg-primary/20" },
                    { step: "2", label: t("enterprise.ai.flow2"), color: "bg-primary/15" },
                    { step: "3", label: t("enterprise.ai.flow3"), color: "bg-primary/10" },
                    { step: "4", label: t("enterprise.ai.flow4"), color: "bg-primary/5" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-4 rounded-lg ${item.color} p-4`}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.4 }}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {item.step}
                      </div>
                      <span className="text-sm text-foreground">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("enterprise.cta.title")}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t("enterprise.cta.description")}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    {t("enterprise.cta.button")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Enterprise;

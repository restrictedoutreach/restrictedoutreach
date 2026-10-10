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
  Shield,
  Cpu,
  Layers,
  Users,
  BarChart3,
  Workflow,
  Globe,
  ArrowRight,
  CheckCircle2,
  Bot,
  Rocket,
} from "lucide-react";

const outsystemsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "OutSystems - AI-Powered Low-Code Platform | RESTRICTED OUTREACH",
  description:
    "OutSystems: AI-powered low-code development platform for enterprise applications. Expert implementation by RESTRICTED OUTREACH.",
  url: "https://www.restrictedoutreach.com/experts/outsystems",
};

const stats = [
  { value: "87%", labelKey: "statDev" },
  { value: "3x", labelKey: "statSpeed" },
  { value: "+1500", labelKey: "statClients" },
  { value: "#1", labelKey: "statLeader" },
];

const featureKeys = [
  { icon: Cpu, titleKey: "featureAiTitle", descKey: "featureAiDesc" },
  { icon: Bot, titleKey: "featureAgentTitle", descKey: "featureAgentDesc" },
  { icon: Layers, titleKey: "featureFullstackTitle", descKey: "featureFullstackDesc" },
  { icon: Shield, titleKey: "featureSecurityTitle", descKey: "featureSecurityDesc" },
  { icon: Workflow, titleKey: "featureAutomationTitle", descKey: "featureAutomationDesc" },
  { icon: Globe, titleKey: "featureCloudTitle", descKey: "featureCloudDesc" },
];

const useCaseKeys = [
  { icon: BarChart3, titleKey: "useCaseEfficiency", descKey: "useCaseEfficiencyDesc" },
  { icon: Users, titleKey: "useCaseExperience", descKey: "useCaseExperienceDesc" },
  { icon: Rocket, titleKey: "useCaseRevenue", descKey: "useCaseRevenueDesc" },
];

const trustedBy = ["HEINEKEN", "Bosch", "Western Union", "Zurich Insurance", "Syngenta", "Toyota"];

const whyItemKeys = ["whyItem1", "whyItem2", "whyItem3", "whyItem4", "whyItem5", "whyItem6"];

const OutSystemsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO
        title="OutSystems | AI-Powered Low-Code Platform"
        description="OutSystems: AI-powered low-code development platform for enterprise applications. Expert implementation by RESTRICTED OUTREACH."
        canonical="/experts/outsystems"
        jsonLd={outsystemsJsonLd}
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
              {t("outsystems.badge")}
            </div>
            <TypewriterTitle
              text={t("outsystems.heroTitle1")}
              highlightText={t("outsystems.heroTitleHighlight") + t("outsystems.heroTitle2")}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            />
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("outsystems.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  {t("outsystems.requestDemo")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.outsystems.com/low-code-platform/" target="_blank" rel="noopener noreferrer">
                  {t("outsystems.explorePlatform")}
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
                <div className="text-sm text-muted-foreground">{t(`outsystems.${stat.labelKey}`)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-6">{t("outsystems.trustedBy")}</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustedBy.map((company) => (
              <span key={company} className="text-sm font-semibold text-muted-foreground/60 uppercase tracking-wider">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("outsystems.featuresTitle")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("outsystems.featuresDescription")}</p>
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
                <h3 className="text-lg font-semibold mb-2">{t(`outsystems.${feature.titleKey}`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`outsystems.${feature.descKey}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("outsystems.useCasesTitle")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("outsystems.useCasesDescription")}</p>
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
                <h3 className="text-xl font-semibold mb-3">{t(`outsystems.${useCase.titleKey}`)}</h3>
                <p className="text-muted-foreground text-sm">{t(`outsystems.${useCase.descKey}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why RESTRICTED OUTREACH */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t("outsystems.whyPalantirTitle")}
                  <span className="text-primary">{t("outsystems.whyPalantirHighlight")}</span>?
                </h2>
                <p className="text-muted-foreground mb-8">{t("outsystems.whyPalantirDesc")}</p>
                <ul className="space-y-4">
                  {whyItemKeys.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{t(`outsystems.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-primary/10 p-8 lg:p-10">
                <Zap className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t("outsystems.innovationTitle")}</h3>
                <p className="text-muted-foreground mb-6">{t("outsystems.innovationDesc")}</p>
                <Button asChild>
                  <Link to="/contact">
                    {t("outsystems.talkAboutProject")} <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("outsystems.ctaTitle")}</h2>
              <p className="text-muted-foreground mb-8">{t("outsystems.ctaDescription")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    {t("outsystems.requestDemo")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">{t("outsystems.viewServices")}</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default OutSystemsPage;

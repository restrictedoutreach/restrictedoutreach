import { Link } from "@/lib/router-compat";
import { ArrowRightLeft, Wrench, Code, Shield, ArrowRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import MatrixRain from "@/components/animations/MatrixRain";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";

const services = [
  { id: "migration", icon: ArrowRightLeft, href: "/services/migration", features: 4 },
  { id: "implementation", icon: Wrench, href: "/services/implementation", features: 4 },
  { id: "development", icon: Code, href: "/services/development", features: 4 },
  { id: "managed", icon: Shield, href: "/services/managed", features: 4 },
];

const featureKeys: Record<string, string[]> = {
  migration: ["services.features.zeroDataLoss", "services.features.userTraining", "services.features.postMigration", "services.features.customFieldMapping"],
  implementation: ["services.features.bestPractices", "services.features.customWorkflow", "services.features.governance", "services.features.performance"],
  development: ["services.features.apiIntegrations", "services.features.customAutomations", "services.features.thirdParty", "services.features.workflowExtensions"],
  managed: ["services.features.monitoring247", "services.features.proactiveMaintenance", "services.features.userSupport", "services.features.healthChecks"],
};

const serviceTitleKeys: Record<string, string> = {
  migration: "services.migration", implementation: "services.implementation",
  development: "services.development", managed: "services.managed",
};
const serviceDescKeys: Record<string, string> = {
  migration: "services.migrationDesc", implementation: "services.implementationDesc",
  development: "services.developmentDesc", managed: "services.managedDesc",
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Project Management Consulting Services",
  "serviceType": ["Software Implementation", "Migration Services", "Custom Development", "Managed Services"],
  "provider": { "@type": "Organization", "name": "RESTRICTED OUTREACH", "url": "https://www.restrictedoutreach.com" },
  "areaServed": { "@type": "Country", "name": "Spain" },
  "description": "Expert implementation, migration, custom development, and 24/7 managed services for enterprise project management.",
  "url": "https://www.restrictedoutreach.com/services"
};

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title="Enterprise Consulting Services | RESTRICTED OUTREACH" description="Expert implementation, Jira migration, custom development, and 24/7 managed support. Spain's first certified partner offers end-to-end project management solutions." canonical="/services" jsonLd={servicesJsonLd} />
      
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 overflow-hidden">
        <MatrixRain columnCount={20} opacity={0.25} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{t("servicesPage.title")}</h1>
              <p className="mt-6 text-lg text-muted-foreground">{t("servicesPage.heroDesc")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} delay={index * 0.1}>
                  <Link to={service.href} className="group block h-full">
                    <div className="rounded-2xl border border-border bg-card p-8 h-full transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                      <div className="flex items-start gap-5 mb-6">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {t(serviceTitleKeys[service.id])}
                          </h2>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {t(serviceDescKeys[service.id])}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {featureKeys[service.id].map((fk, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                            {t(fk)}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                        {t("servicesPage.learnMore")}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <ScrollReveal delay={0}><div><div className="text-4xl font-bold text-primary mb-2">#1</div><div className="text-muted-foreground">{t("servicesPage.partnerInSpain")}</div></div></ScrollReveal>
            <ScrollReveal delay={0.1}><div><div className="text-4xl font-bold text-primary mb-2">100%</div><div className="text-muted-foreground">{t("servicesPage.successRate")}</div></div></ScrollReveal>
            <ScrollReveal delay={0.2}><div><div className="text-4xl font-bold text-primary mb-2">24/7</div><div className="text-muted-foreground">{t("servicesPage.supportAvailable")}</div></div></ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("servicesPage.readyTitle")}</h2>
              <p className="text-lg text-muted-foreground mb-8">{t("servicesPage.readyDesc")}</p>
              <Button asChild size="lg"><Link to="/contact">{t("servicesPage.scheduleConsultation")}</Link></Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;

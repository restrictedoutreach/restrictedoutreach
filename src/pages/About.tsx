import { Link } from "@/lib/router-compat";
import { Award, Users, Globe, Shield, Target, Heart, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import MatrixRain from "@/components/animations/MatrixRain";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import palantirLogo from "@/assets/restricted-outreach-square.png";
import palantirBrand from "@/assets/restricted-outreach-brand.png";

const About = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, titleKey: "about.excellence", descKey: "about.excellenceDesc" },
    { icon: Users, titleKey: "about.partnership", descKey: "about.partnershipDesc" },
    { icon: Heart, titleKey: "about.dedication", descKey: "about.dedicationDesc" },
    { icon: Shield, titleKey: "about.trust", descKey: "about.trustDesc" },
  ];

  const milestones = [
    { year: "2025", titleKey: "about.milestone2025", descKey: "about.milestone2025Desc" },
    { year: "2024", titleKey: "about.milestone2024", descKey: "about.milestone2024Desc" },
  ];

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About RESTRICTED OUTREACH",
    "description": "Learn about RESTRICTED OUTREACH, Spain's first certified Plane partner.",
    "url": "https://www.restrictedoutreach.com/about",
    "mainEntity": { "@type": "Organization", "name": "RESTRICTED OUTREACH", "foundingDate": "2023", "description": "Spain's first certified Plane partner" }
  };

  return (
    <Layout>
      <SEO title="About Us" description="Meet RESTRICTED OUTREACH, Spain's first certified Plane partner: expert Plane implementation, migration and consulting with EN/ES support." canonical="/about" jsonLd={aboutJsonLd} />
      
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 overflow-hidden">
        <MatrixRain columnCount={20} opacity={0.25} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Award className="h-4 w-4" />
              {t("about.badge")}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t("about.title")} {COMPANY.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{t("about.heroDesc")}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t("about.missionTitle")}</h2>
              <p className="text-lg text-muted-foreground mb-6">{t("about.missionP1")}</p>
              <p className="text-lg text-muted-foreground mb-6">{t("about.missionP2")}</p>
              <p className="text-lg text-muted-foreground">{t("about.missionP3")}</p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <img src={palantirLogo} alt="RESTRICTED OUTREACH Logo" className="h-36 w-36 object-contain mx-auto mb-6" />
                  <img src={palantirBrand} alt="RESTRICTED OUTREACH" className="h-20 object-contain mx-auto mb-4" />
                  <p className="text-muted-foreground mt-2">{COMPANY.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">{t("about.valuesTitle")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("about.valuesDesc")}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{t(value.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">{t("about.journeyTitle")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("about.journeyDesc")}</p>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{milestone.year}</div>
                    {index < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{t(milestone.titleKey)}</h3>
                    <p className="text-muted-foreground">{t(milestone.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t("about.whyWorkTitle")}</h2>
              <ul className="space-y-4">
                {[
                  { Icon: Award, titleKey: "about.certifiedExpertise", descKey: "about.certifiedExpertiseDesc" },
                  { Icon: Globe, titleKey: "about.bilingualSupport", descKey: "about.bilingualSupportDesc" },
                  { Icon: Shield, titleKey: "about.enterpriseSecurity", descKey: "about.enterpriseSecurityDesc" },
                  { Icon: Users, titleKey: "about.dedicatedTeam", descKey: "about.dedicatedTeamDesc" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.Icon className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">{t(item.titleKey)}</h3>
                      <p className="text-muted-foreground">{t(item.descKey)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "#1", labelKey: "about.partnerInSpain" },
                  { value: "100%", labelKey: "about.certified" },
                  { value: "24/7", labelKey: "about.support" },
                  { value: "EN/ES", labelKey: "about.bilingual" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-6 text-center">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{t(stat.labelKey)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("about.readyTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("about.readyDesc")}</p>
            <Button asChild size="lg">
              <Link to="/contact">
                {t("about.contactUs")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

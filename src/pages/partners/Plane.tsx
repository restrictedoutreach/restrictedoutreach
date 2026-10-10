import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import PlaneCompose from "@/components/home/PlaneCompose";
import PlaneMCP from "@/components/home/PlaneMCP";
import WhyPlane from "@/components/home/WhyPlane";
import Testimonials from "@/components/home/Testimonials";
import Importers from "@/components/home/Importers";
import Integrations from "@/components/home/Integrations";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import CTASection from "@/components/home/CTASection";

const planeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Plane - Project Management Platform | RESTRICTED OUTREACH",
  "description": "Discover Plane: the unified workspace for projects, docs, and analytics. Expert implementation by RESTRICTED OUTREACH.",
  "url": "https://www.restrictedoutreach.com/partners/plane",
};

const PlanePage = () => {
  return (
    <Layout>
      <SEO
        title="Plane | Unified Project Management Platform"
        description="Discover Plane: the unified workspace for projects, docs, and analytics. Expert implementation by RESTRICTED OUTREACH, Spain's first certified partner."
        canonical="/partners/plane"
        jsonLd={planeJsonLd}
      />
      <Hero />
      <Stats />
      <PlaneCompose />
      <PlaneMCP />
      <WhyPlane />
      <Testimonials />
      <Importers />
      <Integrations />
      <Services />
      <WhyUs />
      <CTASection />
    </Layout>
  );
};

export default PlanePage;

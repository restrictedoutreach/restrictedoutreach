import { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import MatrixRain from "@/components/animations/MatrixRain";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMPANY } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

const contactJsonLd = {
  "@context": "https://schema.org", "@type": "ContactPage",
  "name": "Contact RESTRICTED OUTREACH",
  "url": "https://www.restrictedoutreach.com/contact",
  "mainEntity": { "@type": "Organization", "name": "RESTRICTED OUTREACH", "email": "hello@palantircode.com", "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": ["English", "Spanish"] } }
};

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to send');
      toast({ title: t("contact.successTitle"), description: t("contact.successDesc") });
      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    } catch {
      toast({ title: t("contact.errorTitle"), description: t("contact.errorDesc"), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <SEO title="Contact Us – Get Expert Plane Support" description="Contact RESTRICTED OUTREACH for a free consultation on Plane implementation, Jira migration, and custom development. Based in Barcelona, serving teams across Spain and Europe." canonical="/contact" jsonLd={contactJsonLd} />
      
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background py-20 overflow-hidden">
        <MatrixRain columnCount={20} opacity={0.25} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{t("contact.title")}</h1>
            <p className="mt-6 text-lg text-muted-foreground">{t("contact.heroDesc")}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">{t("contact.sendMessage")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.name")} *</Label>
                    <Input id="name" name="name" placeholder={t("contact.namePlaceholder")} value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.email")} *</Label>
                    <Input id="email" name="email" type="email" placeholder={t("contact.emailPlaceholder")} value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">{t("contact.company")}</Label>
                    <Input id="company" name="company" placeholder={t("contact.companyPlaceholder")} value={formData.company} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.subject")} *</Label>
                    <Input id="subject" name="subject" placeholder={t("contact.subjectPlaceholder")} value={formData.subject} onChange={handleChange} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.message")} *</Label>
                  <Textarea id="message" name="message" placeholder={t("contact.messagePlaceholder")} rows={6} value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? t("contact.sending") : (<><Send className="mr-2 h-4 w-4" />{t("contact.send")}</>)}
                </Button>
              </form>
            </div>

            <div className="lg:pl-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{t("contact.contactInfo")}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
                  <div><h3 className="font-semibold text-foreground">{t("contact.emailLabel")}</h3><a href={`mailto:${COMPANY.email}`} className="text-muted-foreground hover:text-primary transition-colors">{COMPANY.email}</a></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></div>
                  <div><h3 className="font-semibold text-foreground">{t("contact.locationLabel")}</h3><p className="text-muted-foreground">{COMPANY.address}</p></div>
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{t("contact.quickActions")}</h3>
                <div className="grid gap-4">
                  <a href="#" className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-accent">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Calendar className="h-5 w-5" /></div>
                    <div><h4 className="font-medium text-foreground">{t("contact.scheduleDemo")}</h4><p className="text-sm text-muted-foreground">{t("contact.scheduleDemoDesc")}</p></div>
                  </a>
                  <a href="#" className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-accent">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"><MessageSquare className="h-5 w-5" /></div>
                    <div><h4 className="font-medium text-foreground">{t("contact.liveChat")}</h4><p className="text-sm text-muted-foreground">{t("contact.liveChatDesc")}</p></div>
                  </a>
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
                <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  {t("contact.partnerBadge")}
                </div>
                <p className="text-sm text-muted-foreground">{t("contact.partnerBadgeDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

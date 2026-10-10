import { useParams, Link } from "@/lib/router-compat";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

import coverJiraMigration from "@/assets/blog/cover-jira-migration.jpg";
import coverPlaneCompose from "@/assets/blog/cover-plane-compose.jpg";
import coverBestPractices from "@/assets/blog/cover-best-practices.jpg";

const coverImages: Record<string, string> = {
  "cover-jira-migration": coverJiraMigration,
  "cover-plane-compose": coverPlaneCompose,
  "cover-best-practices": coverBestPractices,
};

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const posts = t("blog.posts", { returnObjects: true }) as Array<{
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: string;
    category: string;
    image: string;
    content: string;
  }>;

  const post = posts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} canonical={`/blog/${post.slug}`} type="article" jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { "@type": "Person", name: post.author },
        publisher: { "@type": "Organization", name: "RESTRICTED OUTREACH" },
        image: `https://www.restrictedoutreach.com${coverImages[post.image] ?? "/og-image.png"}`,
        mainEntityOfPage: `https://www.restrictedoutreach.com/blog/${post.slug}`,
      }} />

      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <ScrollReveal>
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("blog.backToBlog")}
              </Link>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="aspect-[16/9] overflow-hidden rounded-xl mb-8">
              <img
                src={coverImages[post.image]}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
              {post.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 pt-8 border-t border-border">
              <Button asChild>
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("blog.backToBlog")}
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

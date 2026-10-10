import { Link } from "@/lib/router-compat";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MatrixRain from "@/components/animations/MatrixRain";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import coverJiraMigration from "@/assets/blog/cover-jira-migration.jpg";
import coverPlaneCompose from "@/assets/blog/cover-plane-compose.jpg";
import coverBestPractices from "@/assets/blog/cover-best-practices.jpg";

const coverImages: Record<string, string> = {
  "cover-jira-migration": coverJiraMigration,
  "cover-plane-compose": coverPlaneCompose,
  "cover-best-practices": coverBestPractices,
};

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  featured: boolean;
  content: string;
};

const Blog = () => {
  const { t } = useTranslation();

  const posts = t("blog.posts", { returnObjects: true }) as BlogPost[];
  const featuredPosts = posts.filter((p) => p.featured);

  return (
    <Layout>
      <SEO title="Blog: Plane Tips & Guides" description="Insights on Plane project management, Jira migration guides, workflow automation tips, and best practices from Spain's first certified Plane partner." canonical="/blog" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 lg:py-28">
        <MatrixRain columnCount={20} opacity={0.25} />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              {t("blog.badge")}
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t("blog.title")}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t("blog.heroDesc")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Carousel */}
      {featuredPosts.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl font-bold mb-8">{t("blog.featured")}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {featuredPosts.map((post) => (
                    <CarouselItem key={post.slug}>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
                      >
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
                            <img
                              src={coverImages[post.image]}
                              alt={post.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-col justify-center p-6 lg:p-10">
                            <Badge variant="secondary" className="w-fit mb-3 text-xs">
                              {post.category}
                            </Badge>
                            <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors mb-3">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <User className="h-3.5 w-3.5" />
                                {post.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {post.readTime}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 lg:-left-6" />
                <CarouselNext className="-right-4 lg:-right-6" />
              </Carousel>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={coverImages[post.image]}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <Badge variant="secondary" className="w-fit mb-3 text-xs">
                      {post.category}
                    </Badge>
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

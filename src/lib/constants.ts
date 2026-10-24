// RESTRICTED OUTREACH Company Information and Navigation Data

export const COMPANY = {
  name: "RESTRICTED OUTREACH",
  tagline: "AI Strategy & Development",
  description: "AI strategy at scale, applications with Lovable and agentic solutions with Claude.",
  email: "raul.pelaez@palantircode.com",
  address: "Benet Cortada 8, Escalera F, 2º 1ª, 08174 Sant Cugat del Vallés, Barcelona, Spain",
} as const;

export const NAVIGATION = {
  solutions: [
    { name: "Marketing", href: "/solutions#marketing", description: "Campaign management & content calendars" },
    { name: "Sales", href: "/solutions#sales", description: "Sales pipelines & CRM workflows" },
    { name: "HR & People", href: "/solutions#hr", description: "Onboarding & performance reviews" },
    { name: "Operations", href: "/solutions#operations", description: "Process automation & resource management" },
    { name: "Finance", href: "/solutions#finance", description: "Budget approvals & expense tracking" },
    { name: "IT & DevOps", href: "/solutions#it", description: "Incident management & service desk" },
    { name: "Customer Service", href: "/solutions#support", description: "Support ticketing & SLA management" },
    { name: "R&D", href: "/solutions#rd", description: "Product development & innovation tracking" },
  ],
  services: [
    { name: "Migration Services", href: "/services/migration", description: "Migrate from Jira, Linear, ClickUp, or Asana" },
    { name: "Implementation", href: "/services/implementation", description: "Best practices setup & workflow design" },
    { name: "Custom Development", href: "/services/development", description: "API integrations & custom automations" },
    { name: "Managed Services", href: "/services/managed", description: "24/7 monitoring & proactive maintenance" },
  ],
  main: [
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "Enterprise", href: "/enterprise" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
} as const;

export const STATS = [
  { label: "First Partner in Spain", value: "#1" },
  { label: "2nd European Partner", value: "#2" },
  { label: "Plane Certified", value: "100%" },
  { label: "Enterprise Companies", value: "+300" },
  { label: "Support Available", value: "24/7" },
] as const;

export const WHY_PLANE = [
  {
    title: "Projects",
    description: "Customizable workflows, dependency tracking, and flexible boards to manage any project type.",
    icon: "Layout",
  },
  {
    title: "Wiki",
    description: "Built-in documentation with rich text editor and publishable pages for your team's knowledge base.",
    icon: "FileText",
  },
  {
    title: "AI",
    description: "Automate routine tasks and gain insights across projects with intelligent automation.",
    icon: "Sparkles",
  },
  {
    title: "Deployment",
    description: "Cloud, Self-hosted, or Airgapped options to meet your security and compliance requirements.",
    icon: "Cloud",
  },
] as const;

export const SOLUTIONS = [
  {
    id: "marketing",
    title: "Marketing",
    description: "Campaign management, content calendars, and creative workflows in Plane.",
    icon: "Megaphone",
  },
  {
    id: "sales",
    title: "Sales",
    description: "Sales pipelines, CRM workflows, and deal tracking to close more deals.",
    icon: "TrendingUp",
  },
  {
    id: "hr",
    title: "HR & People",
    description: "Onboarding workflows, performance reviews, and employee management.",
    icon: "Users",
  },
  {
    id: "operations",
    title: "Operations",
    description: "Process automation, resource management, and operational efficiency.",
    icon: "Settings",
  },
  {
    id: "finance",
    title: "Finance",
    description: "Budget approvals, expense tracking workflows, and financial planning.",
    icon: "DollarSign",
  },
  {
    id: "it",
    title: "IT & DevOps",
    description: "Incident management, service desk, and infrastructure workflows.",
    icon: "Server",
  },
  {
    id: "support",
    title: "Customer Service",
    description: "Support ticketing, SLA management, and customer success workflows.",
    icon: "HeadphonesIcon",
  },
  {
    id: "rd",
    title: "R&D",
    description: "Product development, innovation tracking, and research management.",
    icon: "Lightbulb",
  },
] as const;

export const SERVICES = [
  {
    id: "migration",
    title: "Migration Services",
    description: "Seamlessly migrate from Jira, Linear, ClickUp, or Asana to Plane.",
    features: [
      "Zero data loss guaranteed",
      "User training included",
      "Post-migration support",
      "Custom field mapping",
    ],
    icon: "ArrowRightLeft",
  },
  {
    id: "implementation",
    title: "Implementation & Configuration",
    description: "Get started with Plane the right way with expert setup and configuration.",
    features: [
      "Best practices setup",
      "Custom workflow design",
      "Governance frameworks",
      "Performance optimization",
    ],
    icon: "Wrench",
  },
  {
    id: "development",
    title: "Custom Development",
    description: "Extend Plane's capabilities with custom integrations and automations.",
    features: [
      "API integrations",
      "Custom automations",
      "Third-party connectors",
      "Workflow extensions",
    ],
    icon: "Code",
  },
  {
    id: "managed",
    title: "Managed Services",
    description: "Focus on your business while we manage your Plane infrastructure.",
    features: [
      "24/7 monitoring",
      "Proactive maintenance",
      "User support",
      "Regular health checks",
    ],
    icon: "Shield",
  },
] as const;

export const WHY_US = [
  {
    title: "Spain's First Certified Partner",
    description: "We were the first company in Spain to achieve official Plane partnership status.",
    icon: "Award",
  },
  {
    title: "Deep Expertise",
    description: "Years of experience with project management tools and enterprise implementations.",
    icon: "GraduationCap",
  },
  {
    title: "Bilingual Support",
    description: "Full support in both English and Spanish for seamless communication.",
    icon: "Globe",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2, GDPR, and ISO27001 compliant solutions for enterprise requirements.",
    icon: "Lock",
  },
] as const;

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/restricted-outreach", icon: "Linkedin" },
  { name: "GitHub", href: "https://github.com/Restricted Outreach", icon: "Github" },
] as const;

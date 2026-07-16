import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({
    meta: [
      { title: "Blog | Royal Reality Groups" },
      { name: "description", content: "Real estate blog — investment tips, buying guides, GVMC vs VMRDA comparisons, and Visakhapatnam property market news." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

const blogPosts = [
  {
    id: "gvmc-vs-vmrda",
    title: "GVMC vs VMRDA: Which Approval Matters for Your Property?",
    excerpt: "Understanding the difference between GVMC and VMRDA approvals is crucial before investing in Visakhapatnam real estate. Learn which one applies to your property.",
    category: "Legal Guide",
    date: "July 10, 2026",
    readTime: "5 min read",
    image: heroImg,
  },
  {
    id: "top-investment-areas-vizag-2026",
    title: "Top 5 Investment Areas in Visakhapatnam for 2026",
    excerpt: "Discover the fastest-growing localities in Vizag for real estate investment. From Madhurawada to Bhogapuram — where should you put your money?",
    category: "Investment",
    date: "July 5, 2026",
    readTime: "7 min read",
    image: project1,
  },
  {
    id: "plot-vs-apartment",
    title: "Plot vs Apartment: Which is a Better Investment in Vizag?",
    excerpt: "Confused between buying a plot or an apartment? We break down the pros, cons, returns, and suitability of each option for Visakhapatnam buyers.",
    category: "Buying Guide",
    date: "June 28, 2026",
    readTime: "6 min read",
    image: project2,
  },
  {
    id: "home-loan-tips-first-time-buyers",
    title: "Home Loan Tips for First-Time Buyers in 2026",
    excerpt: "Getting your first home loan can be overwhelming. Here are proven tips to improve eligibility, reduce interest, and speed up approval.",
    category: "Finance",
    date: "June 20, 2026",
    readTime: "5 min read",
    image: project3,
  },
  {
    id: "property-registration-guide-ap",
    title: "Complete Property Registration Guide for Andhra Pradesh",
    excerpt: "Step-by-step guide to registering your property in AP — documents needed, stamp duty calculation, and how to avoid common mistakes.",
    category: "Legal Guide",
    date: "June 15, 2026",
    readTime: "8 min read",
    image: heroImg,
  },
  {
    id: "why-vizag-real-estate-booming",
    title: "Why Visakhapatnam Real Estate is Booming in 2026",
    excerpt: "IT corridor expansion, proposed executive capital, new airport — multiple factors driving unprecedented growth in Vizag property market.",
    category: "Market News",
    date: "June 10, 2026",
    readTime: "4 min read",
    image: project1,
  },
];

function Blog() {
  return (
    <>
      <section className="border-b border-border/60 bg-card py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Insights & Updates</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Our <span className="text-gold-gradient">Blog</span></h1>
          <p className="mx-auto mt-5 text-muted-foreground">
            Real estate news, investment tips, buying guides, and market insights for Visakhapatnam property buyers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="group overflow-hidden rounded-md border border-border/60 bg-card transition-colors hover:border-primary/40">
              <div className="overflow-hidden">
                <img src={post.image} alt={post.title} width={600} height={400} loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-primary">{post.category}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg text-foreground group-hover:text-primary line-clamp-2">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Link
                    to="/knowledge-center"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

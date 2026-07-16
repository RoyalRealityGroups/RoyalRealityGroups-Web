import { createFileRoute, Link, Outlet, useMatch } from "@tanstack/react-router";
import { BookOpen, FileText, ArrowRight } from "lucide-react";
import { knowledgeArticles } from "@/lib/knowledge-center-data";

export const Route = createFileRoute("/knowledge-center")({
  component: KnowledgeCenterLayout,
  head: () => ({
    meta: [
      { title: "Knowledge Center | Royal Reality Groups" },
      { name: "description", content: "Real estate knowledge center — learn about GVMC approval, VMRDA, LRS, EC, mutation, registration process, home loans, and property buying guides." },
    ],
    links: [{ rel: "canonical", href: "/knowledge-center" }],
  }),
});

const categories = [
  { name: "Approvals", icon: FileText, desc: "Government approvals and permissions needed for property transactions." },
  { name: "Documentation", icon: FileText, desc: "Essential documents every property buyer and seller should know about." },
  { name: "Process Guides", icon: BookOpen, desc: "Step-by-step guides for registration, loans, and verification." },
  { name: "Buying Guides", icon: BookOpen, desc: "Comprehensive guides for buying plots, apartments, and making investments." },
];

function KnowledgeCenterLayout() {
  // If a child route is active (article detail), render only the Outlet
  try {
    const match = useMatch({ from: "/knowledge-center/$articleId", shouldThrow: false });
    if (match) {
      return <Outlet />;
    }
  } catch {
    // No child match, render listing
  }

  return <KnowledgeCenterListing />;
}

function KnowledgeCenterListing() {
  return (
    <>
      <section className="border-b border-border/60 bg-card py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Learn & Grow</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Knowledge <span className="text-gold-gradient">Center</span></h1>
          <p className="mx-auto mt-5 text-muted-foreground">
            Educational resources to help you make informed real estate decisions. From approvals to investment strategies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {categories.map((category) => {
          const articles = knowledgeArticles.filter((a) => a.category === category.name);
          return (
            <div key={category.name} className="mb-14">
              <div className="mb-6 flex items-center gap-3">
                <category.icon className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="font-serif text-2xl text-foreground">{category.name}</h2>
                  <p className="text-sm text-muted-foreground">{category.desc}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    to="/knowledge-center/$articleId"
                    params={{ articleId: article.id }}
                    className="group rounded-md border border-border/60 bg-card p-6 transition-colors hover:border-primary/60"
                  >
                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary">{article.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

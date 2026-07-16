import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getArticleById } from "@/lib/knowledge-center-data";

export const Route = createFileRoute("/knowledge-center/$articleId")({
  component: KnowledgeArticlePage,
  head: ({ params }) => {
    const article = getArticleById(params.articleId);
    return {
      meta: [
        { title: `${article?.title || "Article"} | Knowledge Center | Royal Reality Groups` },
        { name: "description", content: article?.summary || "" },
      ],
    };
  },
});

function KnowledgeArticlePage() {
  const { articleId } = Route.useParams();
  const article = getArticleById(articleId);

  if (!article) {
    throw notFound();
  }

  // Simple markdown-like rendering for the content
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("**") && block.endsWith("**")) {
        return <h3 key={i} className="mt-6 mb-3 font-serif text-xl text-foreground">{block.replace(/\*\*/g, "")}</h3>;
      }
      if (block.startsWith("**")) {
        return <h3 key={i} className="mt-6 mb-3 font-serif text-xl text-foreground">{block.replace(/\*\*/g, "")}</h3>;
      }
      if (block.startsWith("- ") || block.startsWith("* ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- ") || l.startsWith("* "));
        return (
          <ul key={i} className="my-3 ml-4 list-disc space-y-1.5">
            {items.map((item, j) => (
              <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                {item.replace(/^[-*]\s+/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
              </li>
            ))}
          </ul>
        );
      }
      if (block.match(/^\d+\./)) {
        const items = block.split("\n").filter((l) => l.match(/^\d+\./));
        return (
          <ol key={i} className="my-3 ml-4 list-decimal space-y-1.5">
            {items.map((item, j) => (
              <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                {item.replace(/^\d+\.\s+/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
              </li>
            ))}
          </ol>
        );
      }
      return <p key={i} className="my-3 text-sm leading-relaxed text-muted-foreground">{block}</p>;
    });
  };

  return (
    <>
      <section className="border-b border-border/60 bg-card py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Link to="/knowledge-center" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Knowledge Center
          </Link>
          <span className="mt-4 block text-xs uppercase tracking-widest text-primary">{article.category}</span>
          <h1 className="mt-2 font-serif text-4xl text-foreground md:text-5xl">{article.title}</h1>
          <p className="mt-4 text-muted-foreground">{article.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <article className="prose-sm">
          {renderContent(article.content)}
        </article>

        <div className="mt-12 rounded-md border border-primary/30 bg-primary/5 p-6 text-center">
          <h3 className="font-serif text-xl text-foreground">Need Expert Assistance?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Our team can guide you through every step of your real estate journey.</p>
          <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

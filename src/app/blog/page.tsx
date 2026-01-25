import Link from "next/link";

import { Container } from "@/components/container";
import { getBlogPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Blog | Anas Ali",
    description: "Thoughts on engineering, design, and building products.",
};

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <main className="min-h-screen bg-background">

            <div className="pt-32 pb-20">
                <Container>
                    <div className="max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6">
                            WRITING
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Thoughts on software engineering, design patterns, and building
                            delightful user experiences.
                        </p>
                    </div>

                    <div className="grid gap-8 max-w-4xl mx-auto">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block bg-card border border-border rounded-2xl p-8 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <time className="text-sm text-muted-foreground shrink-0 font-mono">
                                        {post.date}
                                    </time>
                                </div>

                                {post.excerpt && (
                                    <p className="text-muted-foreground mb-6 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                )}

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex gap-2">
                                        {post.tags?.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="flex items-center gap-2 text-sm font-semibold text-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        Read Post <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </div>
        </main>
    );
}

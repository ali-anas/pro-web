
import { Container } from "@/components/container";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { mdxComponents } from "@/components/mdx-components";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamicParams = true;

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">

            <article className="pt-32 pb-16">
                {/* Header */}
                <Container>
                    <div className="max-w-3xl mx-auto mb-12">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Blogs
                        </Link>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                            <time dateTime={post.date}>{post.date}</time>
                            <span>•</span>
                            <span>{post.readingTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6">
                            {post.title}
                        </h1>
                        {post.tags && (
                            <div className="flex gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </Container>

                {/* Content */}
                <Container>
                    <div className="max-w-3xl mx-auto prose dark:prose-invert md:prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl">
                        <MDXRemote
                            source={post.content}
                            components={mdxComponents}
                            options={{
                                parseFrontmatter: true,
                                mdxOptions: {
                                    rehypePlugins: [
                                        [
                                            // @ts-ignore
                                            rehypePrettyCode,
                                            {
                                                theme: "github-dark",
                                                keepBackground: true,
                                            },
                                        ],
                                    ],
                                },
                            }}
                        />
                    </div>
                </Container>
            </article>
        </main>
    );
}

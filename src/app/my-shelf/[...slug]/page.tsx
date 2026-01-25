import { Container } from "@/components/container";
import { getDocBySlug, getShelfDocs, getShelfNavigation, findNodeBySlug } from "@/lib/shelf";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { mdxComponents } from "@/components/mdx-components";
import { ShelfNavigation } from "@/components/shelf-navigation";
import { ShelfChildren } from "@/components/shelf-children";

export const dynamicParams = true;

export async function generateStaticParams() {
    const docs = getShelfDocs();
    return docs
        .filter((doc) => doc.slug.length > 0)
        .map((doc) => ({
            slug: doc.slug,
        }));
}

export default async function ShelfDocPage({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    const doc = getDocBySlug(slug);
    const nav = getShelfNavigation(slug);
    const currentNode = findNodeBySlug(slug);

    if (!doc) {
        notFound();
    }

    return (
        <div className="py-12 px-8">
            <Container>
                <article className="max-w-3xl">
                    <div className="mb-8">
                        <nav className="text-sm text-muted-foreground mb-4">
                            {slug.map((part, i) => (
                                <span key={i}>
                                    <span className="capitalize">{part}</span>
                                    {i < slug.length - 1 && <span className="mx-2">/</span>}
                                </span>
                            ))}
                        </nav>
                        <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-wide">
                            {doc.title.charAt(0).toUpperCase() + doc.title.slice(1)}
                        </h1>
                    </div>

                    <div className="prose dark:prose-invert md:prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl">
                        <MDXRemote
                            source={doc.content}
                            components={mdxComponents}
                            options={{
                                parseFrontmatter: true,
                                mdxOptions: {
                                    rehypePlugins: [
                                        [
                                            // @ts-ignore
                                            rehypePrettyCode,
                                            { theme: "github-dark", keepBackground: true },
                                        ],
                                    ],
                                },
                            }}
                        />
                    </div>

                    {currentNode && <ShelfChildren node={currentNode} />}

                    <ShelfNavigation prev={nav.prev} next={nav.next} />
                </article>
            </Container>
        </div>
    );
}


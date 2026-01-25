import { Container } from "@/components/container";
import { getDocBySlug, getShelfTree } from "@/lib/shelf";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { ShelfFolderCard } from "@/components/shelf-folder-card";

export const metadata = {
    title: "My Shelf | Anas Ali",
    description: "Frontend learning notes, code snippets, and documentation.",
};

export default function MyShelfPage() {
    const doc = getDocBySlug([]);
    const tree = getShelfTree();

    // Get top-level folders
    const folders = tree.filter((node) => node.isFolder && node.children);

    return (
        <div className="py-12 px-8">
            <Container>
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6">
                        My Shelf
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                        A collection of my learning notes, code snippets, and documentation.
                    </p>

                    {/* Topic Cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {folders.map((folder) => (
                            <ShelfFolderCard key={folder.name} folder={folder} countLabel="topics" />
                        ))}
                    </div>

                    {/* Intro Content */}
                    {doc && (
                        <div className="mt-16 prose dark:prose-invert md:prose-lg prose-headings:font-bold prose-a:text-primary">
                            <MDXRemote
                                source={doc.content}
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
                    )}
                </div>
            </Container>
        </div>
    );
}

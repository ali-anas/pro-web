import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    authors?: string;
    tags?: string[];
    content: string;
    excerpt?: string;
    readingTime?: string;
};

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            const { data, content } = matter(fileContents);

            // Extract date from filename if not in frontmatter (YYYY-MM-DD-slug.md)
            let date = "";
            let slug = fileName.replace(/\.md$/, "");

            const filenameMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
            if (filenameMatch) {
                date = filenameMatch[1];
                // If slug is defined in frontmatter, use it, else use filename slug
                if (!data.slug) {
                    slug = filenameMatch[2];
                }
            }

            // Prefer frontmatter data
            if (data.slug) slug = data.slug;
            if (data.date) date = data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date;

            return {
                slug,
                title: data.title || slug,
                date: date || new Date().toISOString().split('T')[0],
                authors: data.authors,
                tags: data.tags || [],
                content,
                // Simple reading time estimate
                readingTime: `${Math.ceil(content.split(/\s+/).length / 200)} min read`,
            };
        });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getBlogPost(slug: string): BlogPost | undefined {
    const posts = getBlogPosts();
    return posts.find((post) => post.slug === slug);
}

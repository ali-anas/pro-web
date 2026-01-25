import fs from "fs";
import path from "path";
import matter from "gray-matter";

const shelfDirectory = path.join(process.cwd(), "src/content/shelf");

export type ShelfDoc = {
    slug: string[];
    title: string;
    content: string;
    sidebarPosition?: number;
    overview?: string;
};

export type ShelfTreeNode = {
    name: string;
    slug: string[];
    isFolder: boolean;
    sidebarPosition?: number;
    children?: ShelfTreeNode[];
    overview?: string;
};

/**
 * Gets all shelf documents recursively
 */
export function getShelfDocs(dir: string = shelfDirectory, basePath: string[] = []): ShelfDoc[] {
    if (!fs.existsSync(dir)) {
        return [];
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const docs: ShelfDoc[] = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Recurse into subdirectories
            docs.push(...getShelfDocs(fullPath, [...basePath, entry.name]));
        } else if (entry.name.endsWith(".md")) {
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            // Generate slug from path
            let slug: string[];
            if (entry.name === "index.md") {
                slug = basePath;
            } else {
                slug = [...basePath, entry.name.replace(/\.md$/, "")];
            }

            // Extract title from frontmatter or first heading
            let title = data.title;
            if (!title) {
                const headingMatch = content.match(/^#\s+(.+)$/m);
                title = headingMatch ? headingMatch[1] : slug[slug.length - 1] || "Introduction";
            }

            docs.push({
                slug,
                title,
                content,
                sidebarPosition: data.sidebar_position,
                overview: data.overview,
            });
        }
    }

    return docs;
}

/**
 * Gets a single doc by slug parts
 */
export function getDocBySlug(slugParts: string[]): ShelfDoc | undefined {
    const docs = getShelfDocs();
    return docs.find(
        (doc) => doc.slug.join("/") === slugParts.join("/")
    );
}

/**
 * Builds a tree structure from docs for sidebar navigation
 */
export function getShelfTree(): ShelfTreeNode[] {
    const docs = getShelfDocs();
    const tree: ShelfTreeNode[] = [];

    // Helper to find or create a folder node
    function getOrCreateFolder(parts: string[], nodes: ShelfTreeNode[]): ShelfTreeNode[] {
        if (parts.length === 0) return nodes;

        const [current, ...rest] = parts;
        let folder = nodes.find((n) => n.name === current && n.isFolder);

        if (!folder) {
            folder = {
                name: current,
                slug: [],
                isFolder: true,
                children: [],
            };
            nodes.push(folder);
        }

        return getOrCreateFolder(rest, folder.children!);
    }

    for (const doc of docs) {
        if (doc.slug.length === 0) {
            // Root index
            tree.unshift({
                name: doc.title,
                slug: [],
                isFolder: false,
                sidebarPosition: doc.sidebarPosition,
                overview: doc.overview,
            });
        } else if (doc.slug.length === 1) {
            // Direct child (could be folder index or standalone doc)
            const existing = tree.find((n) => n.name.toLowerCase() === doc.slug[0].toLowerCase());
            if (existing && existing.isFolder) {
                // It's a folder, add index
                existing.slug = doc.slug;
                existing.sidebarPosition = doc.sidebarPosition;
                existing.overview = doc.overview;
            } else {
                tree.push({
                    name: doc.title,
                    slug: doc.slug,
                    isFolder: false,
                    sidebarPosition: doc.sidebarPosition,
                    overview: doc.overview,
                });
            }
        } else {
            // Nested item
            const folderPath = doc.slug.slice(0, -1);
            const parentNodes = getOrCreateFolder(folderPath, tree);

            // Check if this is an index for the folder
            const fileName = doc.slug[doc.slug.length - 1];
            if (fileName === "index" || fileName === "intro") {
                // Find the parent folder node in the direct hierarchy
                let currentNodes = tree;
                let parentFolder: ShelfTreeNode | undefined;

                for (const part of folderPath) {
                    parentFolder = currentNodes.find(n => n.name.toLowerCase() === part.toLowerCase() && n.isFolder);
                    if (parentFolder && parentFolder.children) {
                        currentNodes = parentFolder.children;
                    } else {
                        break;
                    }
                }

                if (parentFolder) {
                    parentFolder.slug = doc.slug;
                    parentFolder.sidebarPosition = doc.sidebarPosition;
                    parentFolder.overview = doc.overview;
                }
            } else {
                parentNodes.push({
                    name: doc.title,
                    slug: doc.slug,
                    isFolder: false,
                    sidebarPosition: doc.sidebarPosition,
                    overview: doc.overview,
                });
            }
        }
    }

    // Sort by sidebar position or name
    function sortNodes(nodes: ShelfTreeNode[]): void {
        nodes.sort((a, b) => {
            // Root index always first
            if (a.slug.length === 0) return -1;
            if (b.slug.length === 0) return 1;

            // Use sidebarPosition if available
            if (a.sidebarPosition !== undefined && b.sidebarPosition !== undefined) {
                return a.sidebarPosition - b.sidebarPosition;
            }
            if (a.sidebarPosition !== undefined) return -1;
            if (b.sidebarPosition !== undefined) return 1;

            // Folders first
            if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1;

            return a.name.localeCompare(b.name);
        });
        nodes.forEach((n) => n.children && sortNodes(n.children));
    }

    sortNodes(tree);
    return tree;
}

/**
 * Gets previous and next navigation links for a given slug
 */
export function getShelfNavigation(slug: string[]): {
    prev?: { title: string; href: string };
    next?: { title: string; href: string };
} {
    const tree = getShelfTree();
    const flatDocs: { title: string; href: string }[] = [];

    // Flatten the tree to a linear list of navigable items
    function flatten(nodes: ShelfTreeNode[]) {
        for (const node of nodes) {
            if (!node.isFolder) {
                flatDocs.push({
                    title: node.name,
                    href: node.slug.length === 0 ? "/my-shelf" : `/my-shelf/${node.slug.join("/")}`,
                });
            }
            if (node.children) {
                flatten(node.children);
            }
        }
    }

    flatten(tree);

    const currentHref = slug.length === 0 ? "/my-shelf" : `/my-shelf/${slug.join("/")}`;
    const currentIndex = flatDocs.findIndex((doc) => doc.href === currentHref);

    if (currentIndex === -1) {
        return {};
    }

    return {
        prev: flatDocs[currentIndex - 1],
        next: flatDocs[currentIndex + 1],
    };
}

/**
 * Finds a node in the tree by its slug
 */
export function findNodeBySlug(slug: string[]): ShelfTreeNode | undefined {
    const tree = getShelfTree();

    // Helper to search recursively
    function search(nodes: ShelfTreeNode[], targetSlug: string[]): ShelfTreeNode | undefined {
        for (const node of nodes) {
            // Check if slugs match
            if (node.slug.join("/") === targetSlug.join("/")) {
                return node;
            }

            // If it's a folder, search children
            if (node.children) {
                const found = search(node.children, targetSlug);
                if (found) return found;
            }
        }
        return undefined;
    }

    // Special case for root
    if (slug.length === 0) {
        // Find the root node (usually the one with empty slug)
        // In our tree construction, root index is added with empty slug
        return tree.find(n => n.slug.length === 0);
    }

    return search(tree, slug);
}


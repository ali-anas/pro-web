"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Folder, FileText } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ShelfTreeNode } from "@/lib/shelf";

interface ShelfSidebarProps {
    tree: ShelfTreeNode[];
}

function TreeNode({ node, depth = 0 }: { node: ShelfTreeNode; depth?: number }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(true);

    const href = node.slug.length === 0 ? "/my-shelf" : `/my-shelf/${node.slug.join("/")}`;
    const isActive = pathname === href;

    if (node.isFolder && node.children) {
        return (
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors hover:bg-muted",
                        "text-muted-foreground hover:text-foreground"
                    )}
                    style={{ paddingLeft: `${depth * 12 + 12}px` }}
                >
                    <ChevronRight
                        className={cn(
                            "w-4 h-4 transition-transform",
                            isOpen && "rotate-90"
                        )}
                    />
                    <Folder className="w-4 h-4" />
                    <span className="capitalize">{node.name}</span>
                </button>
                {isOpen && (
                    <div>
                        {node.children.map((child, i) => (
                            <TreeNode key={i} node={child} depth={depth + 1} />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors",
                isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
            style={{ paddingLeft: `${depth * 12 + 12}px` }}
        >
            <FileText className="w-4 h-4" />
            <span>{node.name}</span>
        </Link>
    );
}

export function ShelfSidebar({ tree }: ShelfSidebarProps) {
    return (
        <aside className="w-full h-full p-4 overflow-y-auto">
            <div className="mb-4 px-3">
                <h2 className="text-lg font-bold text-foreground">My Shelf</h2>
                <p className="text-xs text-muted-foreground">Learning notes & snippets</p>
            </div>
            <nav className="space-y-1">
                {tree.map((node, i) => (
                    <TreeNode key={i} node={node} />
                ))}
            </nav>
        </aside>
    );
}


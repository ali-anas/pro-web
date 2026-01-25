import Link from "next/link";
import { Folder, ArrowRight } from "lucide-react";
import { ShelfTreeNode } from "@/lib/shelf";

interface ShelfFolderCardProps {
    folder: ShelfTreeNode;
    countLabel?: string;
}

export function ShelfFolderCard({ folder, countLabel = "items" }: ShelfFolderCardProps) {
    return (
        <Link
            href={folder.slug.length > 0 ? `/my-shelf/${folder.slug.join("/")}` : "/my-shelf"}
            className="group block p-6 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-all"
        >
            <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                    <Folder className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground capitalize group-hover:text-primary transition-colors">
                    {folder.name}
                </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
                {folder.children?.length || 0} {countLabel}
            </p>
            <span className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight className="w-4 h-4" />
            </span>
        </Link>
    );
}

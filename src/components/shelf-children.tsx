import Link from "next/link";
import { Folder, ArrowRight, FileText } from "lucide-react";
import { ShelfTreeNode } from "@/lib/shelf";
import { ShelfFolderCard } from "./shelf-folder-card";

interface ShelfChildrenProps {
    node: ShelfTreeNode;
}

export function ShelfChildren({ node }: ShelfChildrenProps) {
    if (!node.children || node.children.length === 0) {
        return null;
    }

    const folders = node.children.filter((child) => child.isFolder);
    const files = node.children.filter((child) => !child.isFolder);

    return (
        <div className="mt-12 space-y-12">
            {/* Folders Section */}
            {folders.length > 0 && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        Collections
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        {folders.map((folder) => (
                            <ShelfFolderCard key={folder.name} folder={folder} />
                        ))}
                    </div>
                </div>
            )}

            {/* Files Section */}
            {files.length > 0 && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        Topics
                    </h3>
                    <div className="grid gap-4">
                        {files.map((file) => (
                            <Link
                                key={file.name}
                                href={file.slug.length > 0 ? `/my-shelf/${file.slug.join("/")}` : "/my-shelf"}
                                className={`group flex justify-between p-4 rounded-xl border border-border bg-card hover:bg-muted/50 transition-all text-left ${file.overview ? "items-start" : "items-center"
                                    }`}
                            >
                                <div className={`flex gap-4 max-w-8/10 ${file.overview ? "items-start" : "items-center"}`}>
                                    <div
                                        className={`p-2 rounded-lg bg-secondary text-secondary-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors ${file.overview ? "mt-0.5" : ""
                                            }`}
                                    >
                                        <FileText className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <span className="font-medium text-foreground group-hover:text-primary transition-colors block">
                                            {file.name}
                                        </span>
                                        {file.overview && (
                                            <p className="text-sm text-muted-foreground line-clamp-2 !mt-1">
                                                {file.overview}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <ArrowRight
                                    className={`w-4 h-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all ${file.overview ? "mt-3" : ""
                                        }`}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

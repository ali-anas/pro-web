import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShelfNavigationProps {
    prev?: { title: string; href: string };
    next?: { title: string; href: string };
}

export function ShelfNavigation({ prev, next }: ShelfNavigationProps) {
    if (!prev && !next) return null;

    return (
        <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-border">
            {prev ? (
                <Link
                    href={prev.href}
                    className={cn(
                        "group flex-1 flex flex-col gap-2 p-4 rounded-xl border border-border",
                        "hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
                    )}
                >
                    <span className="text-sm text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </span>
                    <span className="font-medium text-foreground">{prev.title}</span>
                </Link>
            ) : (
                <div className="flex-1" />
            )}

            {next ? (
                <Link
                    href={next.href}
                    className={cn(
                        "group flex-1 flex flex-col gap-2 p-4 rounded-xl border border-border",
                        "hover:border-primary/50 hover:bg-primary/5 transition-all text-right items-end"
                    )}
                >
                    <span className="text-sm text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                        Next <ChevronRight className="w-4 h-4" />
                    </span>
                    <span className="font-medium text-foreground">{next.title}</span>
                </Link>
            ) : (
                <div className="flex-1" />
            )}
        </div>
    );
}

"use client";

import * as React from "react";
import { Command, Search, FileText, CornerDownLeft } from "lucide-react";
import { Command as CommandPrimitive } from "cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import type { ShelfDoc } from "@/lib/shelf";

interface ShelfSearchProps {
    docs: ShelfDoc[];
    enableShortcut?: boolean;
}

export function ShelfSearch({ docs, enableShortcut = true }: ShelfSearchProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!enableShortcut) return;

        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [enableShortcut]);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted/30 border border-border rounded-lg hover:bg-muted/50 hover:text-foreground transition-colors w-full max-w-xs transition-all"
            >
                <Search className="w-4 h-4" />
                <span className="flex-1 text-left">Search docs...</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            {/* Mobile Search Icon */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            >
                <Search className="w-5 h-5" />
            </button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandPrimitive className="h-full w-full">
                    <div className="flex items-center border-b border-border px-3">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <CommandPrimitive.Input
                            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                            placeholder="Type a command or search..."
                        />
                    </div>
                    <CommandPrimitive.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                        <CommandPrimitive.Empty className="py-6 text-center text-sm text-muted-foreground">
                            No results found.
                        </CommandPrimitive.Empty>
                        <CommandPrimitive.Group heading="Documentation" className="text-foreground">
                            {docs.map((doc) => (
                                <CommandPrimitive.Item
                                    key={doc.slug.join("/")}
                                    value={doc.title}
                                    onSelect={() => {
                                        setOpen(false);
                                        router.push(`/my-shelf/${doc.slug.join("/")}`);
                                    }}
                                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 gap-2 hover:bg-primary/10 hover:text-foreground cursor-pointer"
                                >
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                    <span className="flex-1">{doc.title}</span>
                                    <CornerDownLeft className="h-4 w-4 text-muted-foreground opacity-50" />
                                </CommandPrimitive.Item>
                            ))}
                        </CommandPrimitive.Group>
                    </CommandPrimitive.List>
                </CommandPrimitive>
            </CommandDialog>
        </>
    );
}

// Minimal wrapper for the Dialog logic using built-in HTML dialog or fixed overlay
// Since we don't have Radix Dialog installed, we'll build a custom overlay
function CommandDialog({
    open,
    onOpenChange,
    children,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
            <div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-all"
                onClick={() => onOpenChange(false)}
            />
            <div className="fixed z-50 grid w-full max-w-lg gap-4 bg-background p-0 shadow-lg duration-200 sm:rounded-lg border border-border top-[20%] sm:top-auto">
                <div className="flex flex-col overflow-hidden rounded-md bg-popover text-popover-foreground">
                    {children}
                </div>
            </div>
        </div>
    );
}

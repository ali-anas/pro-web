"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ShelfSidebar } from "@/components/shelf-sidebar";
import type { ShelfTreeNode } from "@/lib/shelf";

interface MobileShelfSidebarProps {
    tree: ShelfTreeNode[];
    search?: React.ReactNode;
}

export function MobileShelfSidebar({ tree, search }: MobileShelfSidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    // Prevent scroll when mobile sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            {/* Mobile Sidebar (Overlay) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 z-50 w-80 bg-background border-r border-border md:hidden pt-20 flex flex-col"
                        >
                            {search && <div className="p-4 border-b border-border">{search}</div>}
                            <ShelfSidebar tree={tree} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Mobile Floating Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-white shadow-lg md:hidden hover:scale-110 active:scale-95 transition-transform"
                aria-label="Toggle Library Menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </>
    );
}

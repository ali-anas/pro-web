"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { useNavbar } from "@/hooks/use-navbar";

export function Navbar() {
    const { navItems, isLinkActive } = useNavbar();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="bg-background/80 backdrop-blur-md border-b border-border">
                <Container>
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <span className="text-2xl font-black tracking-tighter text-primary">
                                ANAS ALI
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            <nav className="flex items-center gap-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-foreground",
                                            isLinkActive(item.href)
                                                ? "text-foreground"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                            <div className="pl-4 border-l border-border">
                                <ThemeToggle />
                            </div>
                        </div>

                        {/* Mobile Right Actions */}
                        <div className="flex md:hidden items-center gap-2">
                            <ThemeToggle />
                            <button
                                className="text-foreground p-2"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <Container className="py-8">
                            <nav className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary",
                                            isLinkActive(item.href)
                                                ? "text-primary"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Role } from "@/lib/resume";
import { HighlightedText } from "@/components/highlighted-text";

export function RoleItem({ role }: { role: Role }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative border-l-2 border-border/50 pl-6 pb-2 last:pb-0 sm:ml-2">
            <div className="absolute top-2 left-[-7px] w-3 h-3 rounded-full bg-border" />

            <div className="flex flex-col mb-2">
                <span className="text-lg font-semibold text-foreground">{role.role}</span>
                <span className="text-sm text-muted-foreground font-mono">{role.period}</span>
            </div>

            <p className="text-muted-foreground text-sm mb-3">{role.description}</p>

            {role.deliverables && role.deliverables.length > 0 && (
                <div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
                    >
                        {isOpen ? "Show Less" : "More Details"}
                        {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                            >
                                <ul className="list-disc list-outside ml-4 mt-3 space-y-1 text-sm text-muted-foreground/90 marker:text-primary/50">
                                    {role.deliverables.map((item, i) => (
                                        <li key={i}>
                                            {item.split(/(\*\*.*?\*\*)/).map((part, index) => {
                                                if (part.startsWith("**") && part.endsWith("**")) {
                                                    return (
                                                        <HighlightedText text={part.slice(2, -2)} uniqueKey={index} />
                                                    );
                                                }
                                                return <span key={index}>{part}</span>;
                                            })}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}

"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                "hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: isDark ? 0 : 1,
                    rotate: isDark ? 90 : 0,
                    opacity: isDark ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Sun className="w-5 h-5 text-amber-500" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    scale: isDark ? 1 : 0,
                    rotate: isDark ? 0 : -90,
                    opacity: isDark ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Moon className="w-5 h-5 text-blue-500" />
            </motion.div>
        </button>
    );
}

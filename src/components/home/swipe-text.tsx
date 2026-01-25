"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SwipeTextProps {
    words: string[];
    interval?: number;
    className?: string;
}

export function SwipeText({ words, interval = 3000, className }: SwipeTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, interval);
        return () => clearInterval(timer);
    }, [words.length, interval]);

    const currentWord = words[index];

    return (
        <span className={`inline-block relative h-[1.2em] w-full text-left ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    className="absolute left-0 top-0 whitespace-nowrap"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {currentWord.split("").map((char, i) => (
                        <motion.span
                            key={`${index}-${i}`}
                            className="inline-block"
                            variants={{
                                hidden: { y: "-100%", opacity: 0 },
                                visible: { y: "0%", opacity: 1 },
                                exit: { y: "100%", opacity: 0 },
                            }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.05,
                                ease: [0.33, 1, 0.68, 1], // Cubic bezier for smooth swipe
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.span>
            </AnimatePresence>
            {/* Invisible spacer to maintain width if needed, though absolute positioning makes this tricky. 
          For now, we let the parent handle width or we accept that width might collapse if we don't have a static spacer.
          Actually, distinct words usually imply variable width. 
          A common trick is to render the longest word invisibly to set a min-width, 
          or just let the layout flow if it's on its own line.
      */}
            <span className="invisible pointer-events-none select-none">
                {words.sort((a, b) => b.length - a.length)[0]}
            </span>
        </span>
    );
}

"use client";

import { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SwipeTextV2Props {
    words: string[];
    interval?: number;
    className?: string;
}

export function SwipeTextV2({ words, interval = 3500, className }: SwipeTextV2Props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, interval);
        return () => clearInterval(timer);
    }, [words.length, interval]);

    const currentWord = words[index];

    // Memoize the characters array to prevent unnecessary re-computations
    const characters = useMemo(() => currentWord.split(""), [currentWord]);

    // Memoize the longest word calculation so it only runs when the words prop changes
    const longestWord = useMemo(() => {
        return [...words].sort((a, b) => b.length - a.length)[0];
    }, [words]);

    return (
        <span className={`inline-block relative h-[1.2em] w-full text-left overflow-hidden ${className}`}>
            <AnimatePresence mode="popLayout">
                {/* We re-render the word container on index change to trigger stagger children */}
                <motion.span
                    key={index}
                    className="absolute left-0 top-0 whitespace-nowrap flex"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {characters.map((char, i) => (
                        <motion.span
                            key={`${index}-${i}`}
                            className="inline-block"
                            initial={{ y: "-150%" }} // Enter from top
                            animate={{ y: "0%" }}    // Land in center
                            exit={{ y: "150%" }}     // Exit to bottom
                            transition={{
                                duration: 0.5,
                                delay: i * 0.05, // Stagger delay based on index
                                ease: [0.33, 1, 0.68, 1], // Custom bezier for natural feel
                            }}
                            style={{ willChange: "transform" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.span>
            </AnimatePresence>

            {/* Invisible spacer using the longest word to prevent layout shifts. 
                Using memoized value.
            */}
            <span className="invisible pointer-events-none select-none">
                {longestWord}
            </span>
        </span>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { SwipeText } from "@/components/home/swipe-text";
import { SwipeTextV2 } from "@/components/home/swipe-text-v2";

export function Hero() {
    return (
        <div className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-background pt-20">
            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[1000px] rounded-full bg-primary/20 blur-[120px] opacity-30" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-blue-600/10 blur-[100px] opacity-20" />

            <Container className="relative z-10">
                <div className="max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground">
                            ENGINEERING
                            <br />
                            <div className="flex flex-col gap-4">
                                {/* V1 Animation (Commented out) */}

                                {/* <div className="text-2xl font-mono text-muted-foreground tracking-normal block mb-[-10px]">V1 (Current)</div> */}
                                {/* <SwipeText
                                    words={["EXPERIENCES", "SYSTEMS", "FOR END-USERS"]}
                                    className="text-primary block h-[1.2em]"
                                    interval={3000}
                                /> */}


                                {/* V2 Animation */}
                                <SwipeTextV2
                                    words={["EXPERIENCES", "SYSTEMS", "FOR END-USERS"]}
                                    className="text-primary block h-[1.2em] mt-2"
                                    interval={3000}
                                />
                            </div>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mt-16 max-w-2xl text-xl text-muted-foreground md:text-2xl"
                    >
                        Building high-performance applications with a focus on design,
                        interactivity, and user experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-primary text-white rounded-full hover:bg-red-700 transition-all hover:scale-105"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-all"
                        >
                            About Me
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}

"use client";

import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { HighlightedText } from "@/components/highlighted-text";
import { EXPERIENCE, SKILLS } from "@/lib/resume";
import { RoleItem } from "./role-item";

const SOCIALS = [
    // { name: "Twitter", href: "https://twitter.com/example", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ali-anas", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/alianas", icon: Linkedin },
    { name: "Email", href: "mailto:anasalialmora@gmail.com", icon: Mail },
];

const START_DATE = new Date("2021-12-27"); // Career start date

function calculateTotalExperience() {
    const now = new Date();
    const diffInMonths = (now.getFullYear() - START_DATE.getFullYear()) * 12 + (now.getMonth() - START_DATE.getMonth());
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    if (months === 0) return `${years} Years`;
    if (months > 6) return `${years}.5+ Years`; // Approximate half years
    return `${years}+ Years`;
}

export default function AboutPage() {
    const totalExperience = calculateTotalExperience();

    return (
        <main className="min-h-screen bg-background">
            <div className="pt-32 pb-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        {/* Intro */}
                        <section className="mb-24">
                            {/* ... existing intro content ... */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-8"
                            >
                                I BUILD THINGS FOR THE WEB.
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="prose prose-lg text-muted-foreground mb-8"
                            >
                                <p>
                                    Hi, I'm Anas. I'm a software engineer passionate about building high-quality
                                    products. I care deeply about performance, accessibility, and
                                    the little details that make a product feel great to use.
                                </p>
                                <p>
                                    Currently, I'm working with <HighlightedText text="Phonepe" uniqueKey="Phonepe" /> within Online merchants team.
                                    Our team is focussed on building secure and seamless payment solutions on web for online merchants ecosystem and supports the organization in enhancing its offerings.
                                </p>
                            </motion.div>

                            {/* Actions & Socials */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                            >
                                <Link
                                    href="https://drive.google.com/file/d/1TzratXkW5YCJBKkk7Mm5Q9ni66RxMPED/view?usp=sharing"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Resume
                                </Link>

                                <div className="flex gap-4">
                                    {SOCIALS.map((social) => (
                                        <Link
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground hover:text-primary transition-colors cursor-pointer"
                                            title={social.name}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </section>

                        {/* Experience */}
                        <section className="mb-24">
                            {/* <div className="flex items-center justify-between mb-12"> */}
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                // className="text-2xl font-bold text-foreground flex items-center gap-4"
                                className="flex items-center justify-between mb-12 w-full"
                            >
                                <div className="text-2xl font-bold text-foreground flex items-center gap-4">
                                    <span className="w-8 h-[2px] bg-primary"></span>
                                    EXPERIENCE
                                </div>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="text-lg font-mono font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
                                >
                                    {totalExperience}
                                </motion.span>
                            </motion.h2>
                            {/* </div> */}

                            <div className="space-y-12 border-l-2 border-muted pl-8 md:pl-12 relative">
                                {EXPERIENCE.map((company, index) => (
                                    <motion.div
                                        key={company.company}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute top-2 left-[-41px] md:left-[-57px] w-4 h-4 rounded-full bg-background border-2 border-primary" />

                                        {/* Company Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                                            <h3 className="text-xl font-bold text-foreground">
                                                {company.company}
                                            </h3>
                                            <span className="text-sm font-mono text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded">
                                                {company.totalPeriod}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed mb-6">{company.description}</p>

                                        {/* Nested Roles */}
                                        <div className="space-y-8 pl-4 sm:pl-0">
                                            {company.roles.map((role, roleIndex) => (
                                                <RoleItem key={roleIndex} role={role} />
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl font-bold text-foreground mb-12 flex items-center gap-4"
                            >
                                <span className="w-8 h-[2px] bg-primary"></span>
                                SKILLS
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {SKILLS.map((category, index) => (
                                    <motion.div
                                        key={category.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-card border border-border p-6 rounded-2xl hover:border-primary/20 transition-colors"
                                    >
                                        <h3 className="text-lg font-semibold text-foreground mb-4">
                                            {category.name}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-muted text-sm text-foreground rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </main>
    );
}

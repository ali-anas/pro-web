
import { Container } from "@/components/container";
import { projects } from "@/lib/projects";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Projects | Anas Ali",
    description: "A showcase of my recent work and side projects.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background">

            <div className="pt-32 pb-20">
                <Container>
                    <div className="max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6">
                            WORK & PLAY
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            A collection of projects, and experiments I've built.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors duration-500 flex flex-col"
                            >
                                {/* Main Card Link (Background) */}
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="absolute inset-0 z-0"
                                    aria-label={`View ${project.title}`}
                                />

                                <div className="aspect-video relative overflow-hidden bg-muted z-10 pointer-events-none">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Inset Shadow Overlay */}
                                    <div className="absolute inset-0 shadow-[inset_0_0_80px_-20px_rgba(0,0,0,0.4)] pointer-events-none z-10" />

                                    {/* Overlay with Buttons (Pointer Events Enabled) */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm pointer-events-auto">
                                        {project.link && <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform relative z-20"
                                            title="View Live"
                                        >
                                            <ExternalLink className="w-6 h-6" />
                                        </a>}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 text-white border border-white/20 rounded-full hover:scale-110 transition-transform hover:bg-white hover:text-black relative z-20"
                                                title="View Code"
                                            >
                                                <Github className="w-6 h-6" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 pointer-events-none relative z-10 flex flex-col justify-between flex-1">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6 line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 flex items-center justify-between">
                                        <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </main>
    );
}

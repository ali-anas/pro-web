import { Container } from "@/components/container";
import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

export const dynamicParams = true;

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="py-20">
            <Container>
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 mt-6"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Projects
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        {project.description}
                    </p>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted/50 mb-12">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
                    {/* Main Content */}
                    <div className="prose dark:prose-invert md:prose-lg prose-headings:font-bold prose-a:text-primary">
                        {project.content ? (
                            <MDXRemote source={project.content} />
                        ) : (
                            <p>No detailed description available.</p>
                        )}
                    </div>

                    {/* Sidebar / Meta */}
                    <div className="space-y-8">
                        {/* Links */}
                        <div className="flex flex-col gap-4">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    <Globe className="w-4 h-4" /> Visit Live Site
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition-colors"
                                >
                                    <Github className="w-4 h-4" /> View Source
                                </a>
                            )}
                        </div>

                        {/* Tech Stack */}
                        <div className="p-6 rounded-xl border border-border bg-card">
                            <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

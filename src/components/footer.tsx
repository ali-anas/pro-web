import Link from "next/link";
import { Container } from "@/components/container";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
    // { name: "Twitter", href: "https://twitter.com/example", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ali-anas", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/alianas", icon: Linkedin },
];

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30 text-muted-foreground">
            <Container>
                <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-foreground mb-4 block">
                            ANAS ALI
                        </Link>
                        <p className="max-w-xs text-sm">
                            Building digital experiences.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/projects" className="hover:text-primary transition-colors">
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-primary transition-colors">
                                    Writing
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-shelf" className="hover:text-primary transition-colors">
                                    My Shelf
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Connect</h3>
                        <div className="flex gap-4">
                            {SOCIALS.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-secondary rounded-full hover:bg-secondary/80 hover:text-primary transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="mailto:anasalialmora@gmail.com"
                            className="inline-flex items-center gap-2 mt-4 text-sm hover:text-primary transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            anasalialmora@gmail.com
                        </Link>
                    </div>
                </div>

                {/* Bottom */}
                {/* <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs gap-4">
                    <p>&copy; {new Date().getFullYear()} Anas Ali. All rights reserved.</p>
                    <p>Designed & Built with Next.js</p>
                </div> */}
            </Container>
        </footer>
    );
}

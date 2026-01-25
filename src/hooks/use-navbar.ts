"use client";

import { usePathname } from "next/navigation";

export const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "My Shelf", href: "/my-shelf" },
    { name: "About", href: "/about" },
];

export function useNavbar() {
    const pathname = usePathname();

    const isLinkActive = (href: string) => pathname === href;

    return {
        navItems,
        isLinkActive,
    };
}

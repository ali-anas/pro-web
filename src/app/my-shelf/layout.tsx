import { getShelfTree, getShelfDocs } from "@/lib/shelf";
import { ShelfSidebar } from "@/components/shelf-sidebar";
import { MobileShelfSidebar } from "@/components/mobile-shelf-sidebar";
import { ShelfSearch } from "@/components/shelf-search";

export default async function MyShelfLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const tree = getShelfTree();
    const docs = getShelfDocs();

    return (
        <div className="flex min-h-screen bg-background relative">
            {/* Desktop Sidebar (Sticky) */}
            <aside className="hidden md:flex flex-col w-72 h-[calc(100vh-80px)] sticky top-20 border-r border-border bg-muted/20">
                <div className="p-4 border-b border-border">
                    <ShelfSearch docs={docs} />
                </div>
                <ShelfSidebar tree={tree} />
            </aside>

            {/* Mobile Sidebar (Client Component) */}
            <MobileShelfSidebar
                tree={tree}
                search={<ShelfSearch docs={docs} enableShortcut={false} />}
            />

            {/* Main Content */}
            <main className="flex-1 w-full pt-16 md:pt-20">
                {children}
            </main>
        </div>
    );
}

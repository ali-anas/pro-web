import { cn } from "@/lib/utils";
import { Info, AlertTriangle, AlertCircle, Lightbulb, FileText } from "lucide-react";

type CalloutType = "note" | "info" | "tip" | "warning" | "error";

interface CalloutProps {
    type?: CalloutType;
    title?: string;
    children: React.ReactNode;
}

const calloutStyles: Record<CalloutType, { border: string; bg: string; icon: typeof Info; iconColor: string }> = {
    note: {
        border: "border-purple-500",
        bg: "bg-purple-500/15",
        icon: FileText,
        iconColor: "text-purple-400",
    },
    info: {
        border: "border-blue-500",
        bg: "bg-blue-500/15",
        icon: Info,
        iconColor: "text-blue-400",
    },
    tip: {
        border: "border-green-500",
        bg: "bg-green-500/15",
        icon: Lightbulb,
        iconColor: "text-green-400",
    },
    warning: {
        border: "border-amber-500",
        bg: "bg-amber-500/15",
        icon: AlertTriangle,
        iconColor: "text-amber-400",
    },
    error: {
        border: "border-red-500",
        bg: "bg-red-500/15",
        icon: AlertCircle,
        iconColor: "text-red-400",
    },
};

export function Callout({ type = "note", title, children }: CalloutProps) {
    const styles = calloutStyles[type];
    const Icon = styles.icon;

    // Default title based on type if not provided
    const displayTitle = title ?? type.charAt(0).toUpperCase() + type.slice(1);

    return (
        <div
            className={cn(
                "my-6 flex gap-2 rounded-lg border-l-4 p-4",
                styles.border,
                styles.bg
            )}
        >
            <Icon className={cn("h-5 w-5 shrink-0", styles.iconColor)} />
            <div className="flex-1">
                <p className={cn("font-semibold !mt-0 mb-1 capitalize leading-tight", styles.iconColor)}>
                    {displayTitle}
                </p>
                <div className="text-foreground text-sm [&>p]:m-0">{children}</div>
            </div>
        </div>
    );
}

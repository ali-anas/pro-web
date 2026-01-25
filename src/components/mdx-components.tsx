import { Callout } from "@/components/callout";

// Note, Info, Tip, Warning, Error callout components
export const Note = ({ children }: { children: React.ReactNode }) => (
    <Callout type="note">{children}</Callout>
);

export const Info = ({ children }: { children: React.ReactNode }) => (
    <Callout type="info">{children}</Callout>
);

export const Tip = ({ children }: { children: React.ReactNode }) => (
    <Callout type="tip">{children}</Callout>
);

export const Warning = ({ children }: { children: React.ReactNode }) => (
    <Callout type="warning">{children}</Callout>
);

export const Error = ({ children }: { children: React.ReactNode }) => (
    <Callout type="error">{children}</Callout>
);

export const mdxComponents = {
    Note,
    Info,
    Tip,
    Warning,
    Error,
    Callout,
};

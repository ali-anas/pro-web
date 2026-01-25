"use client";
import React from 'react';

export function HighlightedText({ text, uniqueKey }: { text: string, uniqueKey?: React.Key }) {
    if (!text) return;
    return <span className="text-primary/80 bg-primary/10 px-1 rounded font-medium" key={uniqueKey}>{text}</span>
}

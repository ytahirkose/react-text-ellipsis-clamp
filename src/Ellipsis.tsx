import { useMemo, useState, forwardRef } from "react";

type IntrinsicEl = keyof JSX.IntrinsicElements;

export type EllipsisProps<T extends IntrinsicEl = "div"> = {
    maxLines?: number;
    expandable?: boolean;
    as?: T;
} & Omit<JSX.IntrinsicElements[T], "ref" | "children"> & {
    children?: React.ReactNode;
};

export const Ellipsis = forwardRef<HTMLElement, EllipsisProps>(({
    maxLines = 2,
    expandable = false,
    as = "div",
    style,
    children,
    ...rest
}, ref) => {
    const [expanded, setExpanded] = useState(false);
    const Tag = as as any;

    const clampStyle = useMemo(() => {
        if (expanded) return style || {};
        return {
            display: "-webkit-box",
            WebkitLineClamp: maxLines,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            ...(style || {})
        };
    }, [expanded, maxLines, style]);

    return (
        <Tag ref={ref} style={clampStyle} {...rest}>
            {children}
            {expandable && (
                <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                    style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        margin: "0 0 0 .25rem",
                        cursor: "pointer",
                        textDecoration: "underline",
                        font: "inherit"
                    }}
                >
                    {expanded ? "Show less" : "Show more"}
                </button>
            )}
        </Tag>
    );
});

Ellipsis.displayName = "Ellipsis";

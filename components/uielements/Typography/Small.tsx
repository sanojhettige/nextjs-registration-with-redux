import React from "react";

// This component use to create a Small size typos
// @interface Props
interface Props {
    children: React.ReactNode,
    className?: string
}
export default function Small({ children, className }: Props) {
    return (
        <small className={`text-xs ${className && className}`}>
            {children}
        </small>
    );
}
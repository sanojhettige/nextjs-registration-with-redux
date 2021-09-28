import React from "react";

// This component use to create a Heading 5 size typos
// @interface Props
interface Props {
    children: React.ReactNode,
    className?: string,
}
export default function H5({ children, className }: Props) {
    return (
        <h2 className={`text-1xl h5 ${className}`}>
            {children}
        </h2>
    );
}
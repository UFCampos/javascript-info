import { HTMLAttributes } from "react";

export const Scroller: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
    return <div className="overflow-y-auto py-20" {...props}>{children}</div>;
}
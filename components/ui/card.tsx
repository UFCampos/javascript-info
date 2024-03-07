import { HTMLAttributes } from "react";

export const Card: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
    return <div {...props} className="bg-black/15 dark:bg-black rounded-3xl p-4 flex flex-col w-full border mx-0">{children}</div>;
}

import { HTMLAttributes } from "react";

export const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return <button {...props} className={`font-bold rounded-md bg-slate-600/80 dark:bg-black ${props.className}`}>{children}</button>;
}
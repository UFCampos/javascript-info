import { HTMLAttributes } from "react";

type NavProps = HTMLAttributes<HTMLDivElement>  

export const Nav: React.FC<NavProps> = ({ children, className }) => {
    return <nav className={`flex gap-4 fixed top-0 ${className}`}>{children}</nav>;
}
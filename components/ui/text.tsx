export const Title = ({ children, ...props }: { children: React.ReactNode }) => {
    return <h1 className="text-5xl w-full text-center font-bold" {...props}>{children}</h1>;
}

export const Subtitle = ({ children, ...props }: { children: React.ReactNode }) => {
    return <h2 className="w-full text-3xl mb-5 text-center font-semibold" {...props}>{children}</h2>;
}
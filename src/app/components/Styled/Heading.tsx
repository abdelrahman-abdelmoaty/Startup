import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function Heading({ children, ...props }: HeadingProps) {
  return (
    <h2 {...props} className={`mx-auto max-w-4xl font-bold text-3xl md:text-5xl leading-snug ${props.className}`}>
      {children}
    </h2>
  );
}

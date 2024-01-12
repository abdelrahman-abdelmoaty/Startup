import { AnchorHTMLAttributes } from "react";

interface ContainedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function ContainedLink({ children, ...props }: ContainedLinkProps) {
  return (
    <a {...props} className={`hover:shadow-[0_5px_10px_rgba(4,10,34,0.2)] transition-shadow duration-300 text-white font-bold bg-foreground px-8 py-3 rounded-lg ${props.className}`}>
      {children}
    </a>
  );
}

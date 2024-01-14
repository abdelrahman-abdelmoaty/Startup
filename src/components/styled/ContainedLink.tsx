import { cn } from "@/utils/lib";
import { AnchorHTMLAttributes } from "react";

interface ContainedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function ContainedLink({ children, className, ...props }: ContainedLinkProps) {
  return (
    <a {...props} className={cn("hover:shadow-[0_5px_10px_rgba(4,10,34,0.2)] transition-shadow duration-300 text-white font-semibold bg-foreground px-8 py-3 rounded-lg", className)}>
      {children}
    </a>
  );
}

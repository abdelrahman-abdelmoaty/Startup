import { cn } from "@/utils/lib";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface ContainedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export default function ContainedLink({
  children,
  className,
  ...props
}: ContainedLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "hover:shadow-[0_5px_10px_rgb a(4,10,34,0.2)] dark:hover:opacity-80 transition duration-300 text-white font-semibold bg-foreground px-8 py-3 rounded-md cursor-pointer",
        className
      )}
    >
      {children}
    </Link>
  );
}

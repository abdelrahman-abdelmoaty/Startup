import { HTMLAttributes } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export default function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <p {...props} className={`mx-auto max-w-3xl font-medium text-base md:text-xl text-gray-400 leading-relaxed mt-5 ${props.className}`}>
      {children}
    </p>
  );
}

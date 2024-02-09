import { cn } from "@/utils/lib";

type ParagraphProps = React.HTMLAttributes<HTMLHeadingElement>;

const Paragraph: React.FC<ParagraphProps> = ({ children, className, ...props }: ParagraphProps) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-3xl font-medium text-base md:text-xl text-gray-600 dark:text-gray-200 leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;

import { cn } from "@/utils/lib";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

const Heading: React.FC<HeadingProps> = ({ children, className, ...props }) => {
  return (
    <h2 className={cn("mx-auto max-w-4xl font-bold text-3xl md:text-5xl leading-snug mb-6", className)} {...props}>
      {children}
    </h2>
  );
};

export default Heading;

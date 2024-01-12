import { forwardRef } from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}
const MoonSVG = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props} className={`${className} h-5 w-5 stroke-current dark:hidden md:h-6 md:w-6`} viewBox="0 0 23 23" fill="none">
    <path
      d="M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
));

export default MoonSVG;

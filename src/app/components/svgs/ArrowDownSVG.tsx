import { forwardRef } from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}
const ArrowDownSVG = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props} className={className} width="15" height="14" viewBox="0 0 15 14">
    <path
      d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
      fill="currentColor"
    ></path>
  </svg>
));

export default ArrowDownSVG;

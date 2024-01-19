import SaaS_1 from "@/components/SaaS_1/SaaS_1";
import SaaS_2 from "@/components/SaaS_2/SaaS_2";
import RouteHeader from "@/components/ui/RouteHeader";

export default function About() {
  return (
    <div>
      <RouteHeader route="about" heading="About Page" />
      <SaaS_1 />
      <SaaS_2 />
    </div>
  );
}

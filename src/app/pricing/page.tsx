import RouteHeader from "@/components/ui/RouteHeader";
import Pricing from "@/components/Pricing/Pricing";

export default function PricingPage() {
  return (
    <div>
      <RouteHeader route="pricing" heading="Simple and Affordable Pricing" />
      <Pricing />
    </div>
  );
}
"use client";
import PricingPlanCard from "@components/Pricing/PricingPlanCard";
import { PRICES_PLANS } from "@components/Pricing/PricingPlansData";
import { useState } from "react";
import { cn } from "@/utils/lib";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import PricingSVG from "@components/SVGs/PricingSVG";

export default function Pricing() {
  const [yearly, setYearly] = useState<boolean>(false);
  const handleToggle = () => {
    setYearly((prev) => !prev);
  };
  return (
    <section id="pricing" className="bg-background dark:bg-backgroundDark py-24 relative">
      <div className="container">
        <Heading className="text-center">Simple and Affordable Pricing</Heading>
        <Paragraph className="text-center mb-24">
          There are many variations of passages of Lorem Ipsum available but the majority have
          suffered alteration in some form.
        </Paragraph>
        <div className="flex items-center justify-center gap-5 my-12 font-semibold">
          <p className={cn({ "text-foreground": !yearly })}>Monthly</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value="monthly"
              className="sr-only peer"
              aria-label="monthly yearly toggle"
              onClick={handleToggle}
            />
            <div className="w-12 h-4 bg-dropMenuDark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:bg-white after:border-blue-600 after:border-[6px] after:rounded-full after:h-7 after:w-7 after:transition-all"></div>
          </label>
          <p className={cn({ "text-foreground": yearly })}>Yearly</p>
        </div>
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PRICES_PLANS.map((pricingPlan, idx) => (
            <PricingPlanCard key={idx} pricingPlan={pricingPlan} yearly={yearly} />
          ))}
        </div>
      </div>
      <PricingSVG className="absolute left-0 bottom-0" />
    </section>
  );
}

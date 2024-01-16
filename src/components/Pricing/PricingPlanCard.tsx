import { PricingPlan } from "@/utils/types";
import ContainedLink from "@components/ui/ContainedLink";
import { PRICING_PLANS_FEATURES } from "@components/Pricing/PricingPlansData";
import CheckMarkSVG from "@components/SVGs/CheckMarkSVG";
import WrongMarkSVG from "@components/SVGs/WrongMarkSVG";
import PricingCardSVG from "@components/SVGs/PricingCardSVG";

export default function PricingPlanCard({ pricingPlan: { name, desc, pricePerMonth, pricePerYear, features }, yearly }: { pricingPlan: PricingPlan; yearly: boolean }) {
  return (
    <div className="bg-background dark:bg-dropMenuDark p-10 rounded-lg flex flex-col gap-5 relative z-20 shadow-lg">
      <div className="flex items-center">
        <div className="flex items-center">
          <p className="font-bold text-3xl">${yearly ? pricePerYear : pricePerMonth}</p>
          <p className="text-3xl text-gray-400 font-bold">/{yearly ? "mo" : "yr"}</p>
        </div>
        <p className="ml-auto font-bold text-xl">{name}</p>
      </div>
      <p className="text-gray-400">{desc}</p>
      <ContainedLink className="text-center cursor-pointer">Start free trial</ContainedLink>
      <hr className="border-gray-500 border-opacity-30 my-4" />
      <div className="flex flex-col gap-3">
        {PRICING_PLANS_FEATURES.map((ppr, idx) => {
          return (
            <div key={idx} className="flex items-center gap-2">
              <div className="bg-[#ECF0FF] dark:bg-[#212957] p-1 rounded-full">{features.includes(idx) ? <CheckMarkSVG className="text-foreground" /> : <WrongMarkSVG className="text-foreground" />}</div>
              <p className="text-gray-400 font-medium">{ppr}</p>
            </div>
          );
        })}
      </div>
      <PricingCardSVG className="absolute right-0 bottom-0" />
    </div>
  );
}

import { Feature } from "@/utils/types";

export default function FeatureCard({ feature: { SVGElement, heading, paragraph } }: { feature: Feature }) {
  return (
    <div className="flex flex-col items-start text-start max-w-md gap-6">
      <div className="bg-dropMenu dark:bg-dropMenuDark p-4 rounded-xl text-foreground mb-5">{SVGElement}</div>
      <h3 className="font-bold text-2xl">{heading}</h3>
      <p className="text-gray-400 font-medium">{paragraph}</p>
    </div>
  );
}

import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import FeatureCard from "@components/Features/FeatureCard";
import { FEATURES } from "@components/Features/FeaturesData";

export default function Features() {
  return (
    <section className="bg-secondaryBackground dark:bg-secondaryBackgroundDark">
      <div className="container text-center py-24">
        <Heading>Main Features</Heading>
        <Paragraph className="mb-14">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</Paragraph>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

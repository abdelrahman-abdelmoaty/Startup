import FeatureCard from "../Styled/FeatureCard";
import { FEATURES } from "../Styled/FeaturesData";
import Heading from "../Styled/Heading";
import Paragraph from "../Styled/Paragraph";

export default function Features() {
  return (
    <section className="bg-secondaryBackground dark:bg-secondaryBackgroundDark">
      <div className="container text-center md:py-28 py-20">
        <Heading>Main Features</Heading>
        <Paragraph className="mb-12">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</Paragraph>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} SVGElement={feature.SVGElement} heading={feature.heading} paragraph={feature.paragraph} />
          ))}
        </div>
      </div>
    </section>
  );
}

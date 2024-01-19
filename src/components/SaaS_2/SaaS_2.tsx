import Image from "next/image";
import Paragraph from "@components/ui/Paragraph";
import SaaS_2_img from "@images/SaaS_2/SaaS_2.svg";

export default function SaaS_1() {
  return (
    <section className="py-24 bg-background dark:bg-backgroundDark">
      <div className="container flex flex-col lg:items-center lg:flex-row gap-2 0">
        <div className="lg:w-1/2 mx-auto md:mx-0">
          <Image width="100" height="100" src={SaaS_2_img.src} alt="SaaS_2_img" className="w-full max-w-lg" />
        </div>
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-10 max-w-lg">
            <div className="flex flex-col items-start gap-1">
              <h3 className="font-bold text-2xl">Bug free code</h3>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
            </div>
            <div className="flex flex-col items-start gap-1">
              <h3 className="font-bold text-2xl">Premier support</h3>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Paragraph>
            </div>
            <div className="flex flex-col items-start gap-1">
              <h3 className="font-bold text-2xl">Next.js</h3>
              <Paragraph>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim.</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Heading from "@components/styled/Heading";
import Paragraph from "@components/styled/Paragraph";
import CorrectSVG from "@components/svgs/CorrectSVG";
import Image from "next/image";
import SaaS_1_img from "@components/sections/SaaS_1/imgs/SaaS_1.svg";

export default function SaaS_1() {
  return (
    <section className="bg-background dark:bg-backgroundDark py-24">
      <div className="container flex flex-col lg:flex-row gap-20 ">
        <div className="flex flex-col lg::w-2/4 items-start text-start">
          <Heading>Crafted for Startup, SaaS and Business Sites.</Heading>
          <Paragraph className="mb-12 ml-0">The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables.</Paragraph>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="w-fit flex items-center gap-5">
              <div className="p-1  bg-[#ECF0FF]">
                <CorrectSVG className="text-foreground w-6 h-6" />
              </div>
              <Paragraph className="mt-0 p-0">Premium quality</Paragraph>
            </div>
            <div className="w-fit flex items-center gap-5">
              <div className="p-1  bg-[#ECF0FF]">
                <CorrectSVG className="text-foreground w-6 h-6" />
              </div>
              <Paragraph className="mt-0 p-0">Next.js</Paragraph>
            </div>
            <div className="w-fit flex items-center gap-5">
              <div className="p-1  bg-[#ECF0FF]">
                <CorrectSVG className="text-foreground w-6 h-6" />
              </div>
              <Paragraph className="mt-0 p-0">Tailwind CSS</Paragraph>
            </div>
            <div className="w-fit flex items-center gap-5">
              <div className="p-1  bg-[#ECF0FF]">
                <CorrectSVG className="text-foreground w-6 h-6" />
              </div>
              <Paragraph className="mt-0 p-0">Rich documentation</Paragraph>
            </div>
            <div className="w-fit flex items-center gap-5">
              <div className="p-1  bg-[#ECF0FF]">
                <CorrectSVG className="text-foreground w-6 h-6" />
              </div>
              <Paragraph className="mt-0 p-0">Use for lifetime</Paragraph>
            </div>
            <div className="w-fit flex items-center gap-5">
              <div className="p-1  bg-[#ECF0FF]">
                <CorrectSVG className="text-foreground w-6 h-6" />
              </div>
              <Paragraph className="mt-0 p-0">Developer friendly</Paragraph>
            </div>
          </div>
        </div>
        <div className="mx-auto lg:w-1/2">
          <Image width="100" height="100" src={SaaS_1_img.src} alt="SaaS_1_img" className="w-full" />
        </div>
      </div>
    </section>
  );
}

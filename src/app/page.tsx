import Features from "./components/Sections/Features";
import Hero from "./components/Sections/Hero";
import Video from "./components/Sections/Video";
import graygrids from "../../public/graygrids.svg";
import tailadmin from "../../public/tailadmin.svg";
import tailgrids from "../../public/tailgrids.svg";
import uideck from "../../public/uideck.svg";
import lineicons from "../../public/lineicons.svg";
import Heading from "./components/Styled/Heading";
import Paragraph from "./components/Styled/Paragraph";
import CorrectSVG from "./components/svgs/CorrectSVG";
import aboutImg from "../../public/about-image.svg";
import aboutImg2 from "../../public/about-image-2.svg";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Video />
      <section className="flex items-center justify-center bg-background dark:bg-backgroundDark pt-16 p-5">
        <div className="bg-secondaryBackgroundDark py-14 container flex items-center justify-center gap-10 flex-wrap">
          <a href="/">
            <Image width="100" height="100" src={graygrids.src} alt="graygrids" className="h-12 w-56" />
          </a>
          <a href="/">
            <Image width="100" height="100" src={tailadmin.src} alt="tailadmin" className="h-12 w-56" />
          </a>
          <a href="/">
            <Image width="100" height="100" src={lineicons.src} alt="lineicons" className="h-12 w-56" />
          </a>
          <a href="/">
            <Image width="100" height="100" src={uideck.src} alt="uideck" className="h-12 w-56" />
          </a>
          <a href="/">
            <Image width="100" height="100" src={tailgrids.src} alt="tailgrids" className="h-12 w-56" />
          </a>
        </div>
      </section>
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
                <Paragraph className="mt-0">Premium quality</Paragraph>
              </div>
              <div className="w-fit flex items-center gap-5">
                <div className="p-1  bg-[#ECF0FF]">
                  <CorrectSVG className="text-foreground w-6 h-6" />
                </div>
                <Paragraph className="mt-0">Next.js</Paragraph>
              </div>
              <div className="w-fit flex items-center gap-5">
                <div className="p-1  bg-[#ECF0FF]">
                  <CorrectSVG className="text-foreground w-6 h-6" />
                </div>
                <Paragraph className="mt-0">Tailwind CSS</Paragraph>
              </div>
              <div className="w-fit flex items-center gap-5">
                <div className="p-1  bg-[#ECF0FF]">
                  <CorrectSVG className="text-foreground w-6 h-6" />
                </div>
                <Paragraph className="mt-0">Rich documentation</Paragraph>
              </div>
              <div className="w-fit flex items-center gap-5">
                <div className="p-1  bg-[#ECF0FF]">
                  <CorrectSVG className="text-foreground w-6 h-6" />
                </div>
                <Paragraph className="mt-0">Use for lifetime</Paragraph>
              </div>
              <div className="w-fit flex items-center gap-5">
                <div className="p-1  bg-[#ECF0FF]">
                  <CorrectSVG className="text-foreground w-6 h-6" />
                </div>
                <Paragraph className="mt-0">Developer friendly</Paragraph>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:w-1/2">
            <Image width="100" height="100" src={aboutImg.src} alt="aboutImg" className="w-full" />
          </div>
        </div>
      </section>
      <hr className="container" />
      <section className="py-24 bg-background dark:bg-backgroundDark">
        <div className="container flex flex-col lg:items-center lg:flex-row gap-10">
          <div className="lg:w-1/2 mx-auto md:mx-0">
            <Image width="100" height="100" src={aboutImg2.src} alt="aboutImg2" className="w-full max-w-lg" />
          </div>
          <div className="flex flex-col lg:w-1/2 gap-10 max-w-lg">
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
      </section>
    </main>
  );
}

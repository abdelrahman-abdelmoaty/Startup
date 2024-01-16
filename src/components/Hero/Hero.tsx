import ContainedLink from "@/components/ui/ContainedLink";
import Paragraph from "@/components/ui/Paragraph";
import HeroLeftSVG from "@components/svgs/HeroLeftSVG";
import HeroRightSVG from "@components/svgs/HeroRightSVG";

export default function Hero() {
  return (
    <section className="relative bg-background dark:bg-backgroundDark pt-32 pb-20 lg:pt-48 lg:pb-44">
      <HeroRightSVG className="absolute right-0 top-0 opacity-30 md:opacity-100" />
      <HeroLeftSVG className="absolute left-0 bottom-0 opacity-30 md:opacity-100" />
      <div className="h-full container flex items-center justify-center text-center flex-col z-10 relative leading-snug">
        <h1 className="max-w-4xl font-bold text-3xl md:text-5xl leading-snug mb-12">Free and Open-Source Next.js Template for Startup & SaaS</h1>
        <Paragraph>
          Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages, components, and sections you need to launch a complete business website, built-with Next 13.x and Tailwind CSS.
        </Paragraph>
        <div className="mt-12 flex flex-col sm:flex-row gap-5 items-center">
          <ContainedLink href="/getPro" className="hover:shadow-none hover:opacity-80 py-4 px-6 w-fit">
            🔥 Get Pro
          </ContainedLink>
          <ContainedLink href="" className="hover:shadow-none hover:opacity-100 dark:hover:opacity-100 dark:hover:bg-gray-500 py-4 text-text dark:text-textDark bg-gray-300 hover:bg-gray-400 dark:bg-[#535771]">
            Star on Github
          </ContainedLink>
        </div>
      </div>
    </section>
  );
}

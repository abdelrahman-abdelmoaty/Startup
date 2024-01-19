import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
export default function RouteHeader({ route, heading }: { route: string; heading: string }) {
  return (
    <section className="bg-background dark:bg-backgroundDark">
      <div className="container pt-36">
        <Heading className="!text-3xl ml-0">{heading}</Heading>
        <div className="flex items-center flex-wrap justify-between gap-5">
          <Paragraph className="!text-base max-w-xl m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.</Paragraph>
          <div className="flex items-center gap-3 min-w-16 font-medium">
            <a href="/" className="hover:text-foreground transition text-gray-400">
              Home
            </a>
            <span className="block h-2 w-2 rotate-45 border-t-2 border-r-2 border-gray-400"></span>
            <p className="text-foreground capitalize">{route} Page</p>
          </div>
        </div>
      </div>
    </section>
  );
}

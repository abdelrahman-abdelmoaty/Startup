import React from "react";
import Image from "next/image";
import { Blog } from "@/utils/types";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
export default function ({ blog: { title, desc, date, author, authorTitle, authorImgUrl, category, url, blogImgUrl } }: { blog: Blog }) {
  return (
    <div className="shadow-lg dark:shadow-md bg-background dark:bg-[#1D2144] rounded-lg">
      <div className="relative w-full">
        <img src={blogImgUrl} alt={title} className="w-full rounded-t-lg object-cover" />
        {/* <Image src={blogImgUrl} alt={title} width="100" height="100" className="w-full rounded-lg object-cover"></Image> */}
        <div className="absolute right-4 top-4 bg-foreground rounded-3xl py-2 px-4 font-semibold text-sm text-white">{category}</div>
      </div>
      <div className="p-5">
        <a href={url}>
          <Heading className="text-2xl md:text-2xl mb-3">{title}</Heading>
        </a>
        <Paragraph className="text-base md:text-base mb-6">{desc}</Paragraph>
        <hr className="border-gray-500 border-opacity-30 my-4" />
        <div className="flex gap-5 items-center">
          <Image src={authorImgUrl} alt={author} width="100" height="100" className="w-10"></Image>
          <div className="flex gap-5">
            <div className="flex flex-col justify-between">
              <p className="text-sm">By {author}</p>
              <p className="text-gray-500 text-sm">{authorTitle}</p>
            </div>
            <div className="border-r-[1px] border-gray-500 border-opacity-30"></div>
            <div className="flex flex-col justify-between">
              <p className="text-sm">Date</p>
              <p className="text-gray-500 text-sm">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/utils/types";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
export default function BlogCard({
  blog: { id, title, desc, date, author, authorTitle, authorImgUrl, category, url, blogImgUrl },
}: {
  blog: Blog;
}) {
  return (
    <Link href={url} className="block group">
      <div className="shadow-lg dark:shadow-md bg-background dark:bg-[#1D2144] rounded-lg max-w-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl cursor-pointer">
        <div className="relative h-52 overflow-hidden">
          <Image sizes="" fill src={blogImgUrl} alt={title} className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute right-4 top-4 bg-foreground rounded-3xl py-2 px-4 font-semibold text-sm text-white">
            {category}
          </div>
        </div>
        <div className="p-5">
          <Heading className="text-2xl md:text-2xl mb-3 group-hover:text-foreground transition-colors duration-200">{title}</Heading>
          <Paragraph className="text-base md:text-base mb-6 line-clamp-3">{desc}</Paragraph>
          <hr className="border-gray-500 border-opacity-30 my-4" />
          <div className="flex gap-5 items-center">
            <Image src={authorImgUrl} alt={author} width="100" height="100" className="w-10 h-10 rounded-full object-cover"></Image>
            <div className="flex gap-5">
              <div className="flex flex-col justify-between">
                <p className="text-sm font-medium">By {author}</p>
                <p className="text-gray-500 text-sm">{authorTitle}</p>
              </div>
              <div className="border-r-[1px] border-gray-500 border-opacity-30"></div>
              <div className="flex flex-col justify-between">
                <p className="text-sm font-medium">Date</p>
                <p className="text-gray-500 text-sm">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

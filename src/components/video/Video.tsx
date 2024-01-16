"use client";
import { useState } from "react";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import PlaySVG from "@components/SVGs/PlaySVG";
import shape from "./imgs/shape.svg";
import videoImage from "./imgs/videoImage.jpg";
import Image from "next/image";

export default function Video() {
  const [openVideo, setOpenVideo] = useState<boolean>(false);
  return (
    <section className="bg-background dark:bg-backgroundDark relative">
      <div className="container text-center py-20 md:py-28 z-20 relative">
        <Heading>We are ready to help</Heading>
        <Paragraph className="mb-12">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</Paragraph>
        <div className="relative max-w-[770px] mx-auto aspect-[77/40]">
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-5 text-foreground bg-opacity-80"
            onClick={() => {
              setOpenVideo(true);
            }}
          >
            <PlaySVG />
          </button>
          <div className="w-full h-full relative">
            <Image fill src={videoImage.src} alt="" />
          </div>
        </div>
      </div>
      <Image fill src={shape.src} alt="" className="absolute bottom-0 left-0 right-0 z-10 w-full" />
      {openVideo && (
        <div className="fixed inset-0 h-full flex items-center justify-center bg-black bg-opacity-60 z-50 sm:px-24">
          <div className="container flex flex-col items-start">
            <button
              onClick={() => {
                setOpenVideo(false);
              }}
              className="relative mb-4 ml-auto"
            >
              <span className="relative my-1.5 block h-0.5 w-[30px] bg-white  top-[7px] rotate-45"></span>
              <span className="relative my-1.5 block h-0.5 w-[30px] bg-white opacity-0 "></span>
              <span className="relative my-1.5 block h-0.5 w-[30px] bg-white  top-[-8px] -rotate-45"></span>
            </button>

            <iframe
              src="https://www.youtube.com/embed/BoyfXL4IZM0?si=ijhQNRiYki-TvszV&autoplay=1&loop=1&autopause=0&muted=1"
              title="YouTube video player"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="aspect-video w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

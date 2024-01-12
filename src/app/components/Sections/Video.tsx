"use client";
import { useEffect, useState } from "react";
import Heading from "../Styled/Heading";
import Paragraph from "../Styled/Paragraph";
import PlaySVG from "../svgs/PlaySVG";
import shape from "../svgs/shape.svg";
import videoImage from "../svgs/video.webp";
import Image from "next/image";

export default function Video() {
  const [openVideo, setOpenVideo] = useState<boolean>(false);
  return (
    <section className="bg-background dark:bg-backgroundDark relative">
      <div className="container text-center py-20 md:py-28 z-20 relative">
        <Heading>We are ready to help</Heading>
        <Paragraph className="mb-12">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</Paragraph>
        <div className="relative lg:w-1/2 mx-auto">
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-5 text-foreground bg-opacity-80"
            onClick={() => {
              setOpenVideo(true);
            }}
          >
            <PlaySVG />
          </button>
          <Image width="100" height="100" src={videoImage.src} alt="" className="w-full h-full bg-cover" />
        </div>
      </div>
      <Image width="100" height="100" src={shape.src} alt="" className="absolute bottom-0 left-0 right-0 z-10 w-full" />
      {openVideo && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-60 z-30">
          <div className="flex items-start">
            <iframe
              width="900"
              height="700"
              src="https://www.youtube.com/embed/BoyfXL4IZM0?si=ijhQNRiYki-TvszV&autoplay=1&loop=1&autopause=0&muted=1"
              title="YouTube video player"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="inline-block"
            ></iframe>
            <button
              className="m-4"
              onClick={() => {
                setOpenVideo(false);
              }}
            >
              <span className="block w-[30px] h-0.5 bg-white top-[7px] rotate-45"></span>
              <span className="block w-[30px] h-0.5 bg-white top-[-8px] -rotate-45"></span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

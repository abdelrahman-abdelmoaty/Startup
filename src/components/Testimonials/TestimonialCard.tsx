import FilledStarSVG from "@/components/svgs/FilledStarSVG";
import Image from "next/image";
import { Testimonial } from "@/utils/types";
import Paragraph from "@/components/ui/Paragraph";
export default function TestimonialCard({ testimonial: { quote, img, name, title } }: { testimonial: Testimonial }) {
  return (
    <div className="bg-background dark:bg-dropMenuDark p-8 flex flex-col gap-5 shadow-sm rounded-lg">
      <div className="flex gap-1">
        <FilledStarSVG className=" text-yellow-500" />
        <FilledStarSVG className=" text-yellow-500" />
        <FilledStarSVG className=" text-yellow-500" />
        <FilledStarSVG className=" text-yellow-500" />
        <FilledStarSVG className=" text-yellow-500" />
      </div>
      <Paragraph className="dark:text-textDark !text-base font-normal">“{quote}”</Paragraph>
      <hr className="border-gray-500 border-opacity-30 my-4" />
      <div className="flex gap-3">
        <Image width="50" height="50" src={img} alt={"person-image"}></Image>
        <div className="flex flex-col">
          <p>{name}</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

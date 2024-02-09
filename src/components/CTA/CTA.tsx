import ContainedLink from "@components/ui/ContainedLink";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import LeftSubscribeCardSVG from "@components/SVGs/LeftSubscribeCardSVG";
import FormElement from "../ui/FormElement";

export default function CTA() {
  return (
    <section className="bg-background dark:bg-backgroundDark py-24">
      <div className="container gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="dark:bg-dropMenuDark bg-secondaryBackground rounded-md p-10 sm:col-span-2 h-fit">
          <div className="mb-10">
            <Heading className="!text-3xl mb-3">Need Help? Open a Ticket</Heading>
            <Paragraph className="!text-base ml-0">
              Our support team will get back to you ASAP via email.
            </Paragraph>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <FormElement label="Your Name" name="name" placeholder="Enter your name" />
            <FormElement label="Your Email" name="email" placeholder="Enter your Email" />
          </div>
          <div className="flex flex-col gap-2 mb-12">
            <label htmlFor="msg" className="text-sm">
              Your Message
            </label>
            <textarea
              name="msg"
              id="msg"
              placeholder="Enter your Message"
              className="dark:bg-[#242B51] rounded-lg py-3 px-6 focus:outline-foreground focus:outline-1 shadow-lg text-gray-400 h-36 outline-none resize-none"
            />
          </div>
          <button
            aria-label="submit ticket"
            className="hover:shadow-[0_5px_10px_rgba(4,10,34,0.2)] dark:hover:opacity-80 transition duration-300 text-white bg-foreground px-8 rounded-md cursor-pointer py-4 font-medium text-center"
          >
            Submit Ticket
          </button>
        </div>
        <div className="relative rounded-md p-10 bg-secondaryBackground dark:bg-[#0F1849] h-fit min-w-60">
          <div className="relative z-20 flex flex-col gap-3">
            <Heading className="!text-2xl mb-0">Subscribe to receive future updates</Heading>
            <Paragraph className="!text-base">
              Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis
              lectus.
            </Paragraph>
            <hr className="border-gray-500 border-opacity-30 my-8" />
            <input
              type="text"
              name="subName"
              id="subName"
              placeholder="Enter your name"
              className="dark:bg-[#242B51] rounded-lg py-3 px-6 focus:outline-foreground focus:outline-1 shadow-lg text-gray-400 outline-none"
            />
            <input
              type="text"
              name="subEmail"
              id="subEmial"
              placeholder="Enter your email"
              className="dark:bg-[#242B51] rounded-lg py-3 px-6 focus:outline-foreground focus:outline-1 shadow-lg text-gray-400 outline-none"
            />
            <button
              aria-label="subscribe"
              className="hover:shadow-[0_5px_10px_rgba(4,10,34,0.2)] dark:hover:opacity-80 transition duration-300 text-white bg-foreground px-8 rounded-md cursor-pointer py-4 font-medium text-center"
            >
              Subscribe
            </button>
            <Paragraph className="!text-base text-center">
              No spam guaranteed, So please don’t send any spam mail.
            </Paragraph>
          </div>
          <LeftSubscribeCardSVG className="absolute left-0 top-0 z-10" />
        </div>
      </div>
    </section>
  );
}

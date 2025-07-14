"use client";
import { useState } from "react";
import ContainedLink from "@components/ui/ContainedLink";
import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import LeftSubscribeCardSVG from "@components/SVGs/LeftSubscribeCardSVG";
import FormElement from "../ui/FormElement";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('subName') as string;
    const email = formData.get('subEmail') as string;
    
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }
    
    alert('Thank you for subscribing!');
    form.reset();
  };

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
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <FormElement 
                label="Your Name" 
                name="name" 
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <FormElement 
                label="Your Email" 
                name="email" 
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-2 mb-12">
              <label htmlFor="msg" className="text-sm">
                Your Message
              </label>
              <textarea
                name="msg"
                id="msg"
                placeholder="Enter your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="dark:bg-[#242B51] rounded-lg py-3 px-6 focus:outline-foreground focus:outline-1 shadow-lg text-gray-600 dark:text-gray-200 h-36 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              aria-label="submit ticket"
              className="hover:shadow-[0_5px_10px_rgba(4,10,34,0.2)] dark:hover:opacity-80 transition duration-300 text-white bg-foreground px-8 rounded-md cursor-pointer py-4 font-medium text-center"
            >
              Submit Ticket
            </button>
          </form>
        </div>
        <div className="relative rounded-md p-10 bg-secondaryBackground dark:bg-[#0F1849] h-fit min-w-60">
          <div className="relative z-20 flex flex-col gap-3">
            <Heading className="!text-2xl mb-0">Subscribe to receive future updates</Heading>
            <Paragraph className="!text-base">
              Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis
              lectus.
            </Paragraph>
            <hr className="border-gray-500 border-opacity-30 my-8" />
            <form onSubmit={handleSubscribe}>
              <input
                type="text"
                name="subName"
                id="subName"
                placeholder="Enter your name"
                required
                className="dark:bg-[#242B51] rounded-lg py-3 px-6 focus:outline-foreground focus:outline-1 shadow-lg text-gray-600 dark:text-gray-200 outline-none mb-3 w-full"
              />
              <input
                type="email"
                name="subEmail"
                id="subEmail"
                placeholder="Enter your email"
                required
                className="dark:bg-[#242B51] rounded-lg py-3 px-6 focus:outline-foreground focus:outline-1 shadow-lg text-gray-600 dark:text-gray-200 outline-none mb-3 w-full"
              />
              <button
                type="submit"
                aria-label="subscribe"
                className="hover:shadow-[0_5px_10px_rgba(4,10,34,0.2)] dark:hover:opacity-80 transition duration-300 text-white bg-foreground px-8 rounded-md cursor-pointer py-4 font-medium text-center w-full"
              >
                Subscribe
              </button>
            </form>
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

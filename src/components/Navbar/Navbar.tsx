"use client";
import ArrowDownSVG from "@components/SVGs/ArrowDownSVG";
import ThemeSwitch from "@/theme/ThemeSwitch";
import { useState } from "react";
import ContainedLink from "@components/ui/ContainedLink";
import Image from "next/image";
import { cn } from "@/utils/lib";
import logoBlack from "@images/logo/logoBlack.svg";
import logoWhite from "@images/logo/logoWhite.svg";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const scrolled = useScroll();

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-50 pr-20 lg:pr-0 bg-background dark:bg-[#4a6cf733]",
        {
          "fixed backdrop-blur-sm py-2 shadow-sm bg-opacity-70 dark:bg-opacity-70":
            scrolled,
          "absolute bg-transparent dark:bg-transparent py-4": !scrolled,
        }
      )}
    >
      <div className="container flex items-center">
        <Link href="/" aria-label="home" className="lg:mr-16 py-4">
          <Image
            width="100"
            height="100"
            src={logoBlack.src}
            alt={"logo"}
            className="w-full block dark:hidden"
          />
          <Image
            width="100"
            height="100"
            src={logoWhite.src}
            alt={"logo"}
            className="w-full hidden dark:block"
          />
        </Link>
        <button
          aria-label="hambuger menu"
          onClick={handleToggleMenu}
          className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
        >
          <span
            className={cn(
              "relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white",
              { "top-[7px] rotate-45": toggleMenu }
            )}
          ></span>
          <span
            className={cn(
              "relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white",
              { "opacity-0": toggleMenu }
            )}
          ></span>
          <span
            className={cn(
              "relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white",
              { "top-[-8px] -rotate-45": toggleMenu }
            )}
          ></span>
        </button>
        <nav>
          <ul
            className={cn(
              "text-text dark:text-textDark lg:items-center flex-col absolute top-full right-5 bg-background dark:bg-backgroundDark w-60 rounded-md px-6 py-4 items-start lg:py-0 border-[1px] lg:border-none lg:w-fit lg:bg-transparent lg:dark:bg-transparent lg:static lg:flex-row lg:flex gap-x-10",
              {
                flex: toggleMenu,
                hidden: !toggleMenu,
              }
            )}
          >
            <li className="py-2">
              <Link href="/" aria-label="home" className="hover:opacity-70">
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/about"
                aria-label="about"
                className="hover:opacity-70"
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link href="/blog" aria-label="blog" className="hover:opacity-70">
                Blog
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/pricing"
                aria-label="pricing"
                className="hover:opacity-70"
              >
                Pricing
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/support"
                aria-label="support"
                className="hover:opacity-70"
              >
                Support
              </Link>
            </li>
            <li className="group relative py-2">
              <DropDownMenu />
            </li>
          </ul>
        </nav>
        <div className="ml-auto items-center gap-5 flex">
          <Link
            href="/signin"
            className="hidden md:block hover:opacity-70 transition duration-300 text-text font-bold dark:text-textDark"
          >
            Sign In
          </Link>
          <ContainedLink href="/signup" className="hidden md:block">
            Sign Up
          </ContainedLink>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

const DropDownMenu = () => {
  const [toggleSubMenu, setToggleSubMenu] = useState<boolean>(false);
  const handleToggleSubMenu = () => {
    setToggleSubMenu((prev) => !prev);
  };
  return (
    <>
      <button
        aria-label="pages"
        className="hover:opacity-70 flex items-center gap-x-[5px] cursor-pointer"
        onClick={handleToggleSubMenu}
      >
        <span>pages</span>
        <ArrowDownSVG className="relative top-[2px]" />
      </button>
      <div
        className={cn(
          "bg-background dark:bg-backgroundDark lg:dark:bg-dropMenuDark lg:absolute lg:top-full lg:translate-y-4 lg:shadow-lg lg:left-0 lg:rounded-lg lg:p-2 lg:py-4 transition-transform duration-100 group-hover:translate-y-0 lg:block lg:invisible lg:group-hover:visible",
          { block: toggleSubMenu, hidden: !toggleSubMenu }
        )}
      >
        <ul className="text-sm w-52">
          <li className="px-1 lg:px-4 py-2">
            <Link href="/about" className="hover:opacity-70">
              About Page
            </Link>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <Link href="/pricing" className="hover:opacity-70">
              Pricing Page
            </Link>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <Link href="/support" className="hover:opacity-70">
              Contact Page
            </Link>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <Link href="/blog" className="hover:opacity-70">
              Blog Grid Page
            </Link>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <Link
              href="/blog/sidebar"
              aria-label="blog sidebar"
              className="hover:opacity-70"
            >
              Blog Sidebar Page
            </Link>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <Link
              href="/blog/details"
              aria-label="blog details"
              className="hover:opacity-70"
            >
              Blog Details Page
            </Link>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <Link
              href="/signin"
              aria-label="signin"
              className="hover:opacity-70"
            >
              Sign In Page
            </Link>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <Link
              href="/signup"
              aria-label="signup"
              className="hover:opacity-70"
            >
              Sign Up Page
            </Link>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <Link href="/error" aria-label="error" className="hover:opacity-70">
              Error Page
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

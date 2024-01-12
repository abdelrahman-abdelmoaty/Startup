"use client";
import logo from "../../../../public/logo.svg";
import logoDark from "../../../../public/logo-2.svg";
import ArrowDownSVG from "../svgs/ArrowDownSVG";
import ThemeSwitch from "../Theme/ThemeSwitch";
import { useEffect, useState } from "react";
import ContainedLink from "../Styled/ContainedLink";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${scrolled ? "fixed bg-background dark:bg-[#4a6cf733] backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70 py-2.5" : "absolute bg-transparent py-4"} shadow-sm top-0 left-0 right-0 z-50 pr-20 lg:px-8`}>
      <div className={`container flex items-center `}>
        <a href="/" className="lg:mr-16 py-4">
          <img src={logo.src} alt="" className="hidden dark:block w-full" />
          <img src={logoDark.src} alt="" className="block dark:hidden" />
        </a>
        <button onClick={handleToggleMenu} className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
          <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${toggleMenu && "top-[7px] rotate-45"}`}></span>
          <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${toggleMenu && "opacity-0 "}`}></span>
          <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${toggleMenu && "top-[-8px] -rotate-45"}`}></span>
        </button>
        <nav className="">
          <ul
            className={`text-text dark:text-textDark lg:items-center flex-col absolute top-full right-5 bg-background dark:bg-backgroundDark  w-60 rounded-md px-6 py-4 items-start lg:py-0 border-[1px] lg:border-none lg:w-fit lg:bg-transparent lg:dark:bg-transparent lg:static lg:flex-row lg:flex gap-x-10 ${
              toggleMenu ? "flex" : "hidden"
            }`}
          >
            <li className="py-2 lg:py-4">
              <a href="" className="hover:opacity-70">
                Home
              </a>
            </li>
            <li className="py-2 lg:py-4">
              <a href="" className="hover:opacity-70">
                About
              </a>
            </li>
            <li className="py-2 lg:py-4">
              <a href="" className="hover:opacity-70">
                Blog
              </a>
            </li>
            <li className="py-2 lg:py-4">
              <a href="" className="hover:opacity-70">
                Support
              </a>
            </li>
            <li className="group relative">
              <DropDownMenu />
            </li>
          </ul>
        </nav>
        <div className="ml-auto items-center gap-5 flex">
          <a href="" className="hidden md:block hover:opacity-70 text-text font-bold dark:text-textDark">
            Sign in
          </a>
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
      <a className="hover:opacity-70 flex items-center gap-x-[5px] py-4 cursor-pointer" onClick={handleToggleSubMenu}>
        Pages <ArrowDownSVG />
      </a>
      <div
        className={`bg-background dark:bg-backgroundDark lg:dark:bg-dropMenuDark lg:absolute lg:top-full lg:translate-y-4 lg:shadow-lg lg:left-0 lg:rounded-lg lg:p-2 lg:py-4 transition-all duration-500 group-hover:translate-y-0 lg:block lg:invisible lg:group-hover:visible ${
          toggleSubMenu ? "block" : "hidden"
        }
 `}
      >
        <ul className="text-sm w-52">
          <li className="px-1 lg:px-4 py-2">
            <a href="" className="hover:opacity-70">
              About Page
            </a>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <a href="" className="hover:opacity-70">
              Contact Page
            </a>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <a href="" className="hover:opacity-70">
              Blog Grid Page
            </a>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <a href="" className="hover:opacity-70">
              Blog Sidebar Page
            </a>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <a href="" className="hover:opacity-70">
              Blog Details Page
            </a>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <a href="" className="hover:opacity-70">
              Sign In Page
            </a>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <a href="" className="hover:opacity-70">
              Sign Up Page
            </a>
          </li>
          <li className="px-1 lg:px-4 py-2">
            <a href="" className="hover:opacity-70">
              Error Page
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

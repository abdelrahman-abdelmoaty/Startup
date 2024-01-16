"use client";
import { useScroll } from "framer-motion";

export default function BackToTop() {
  const scrolled = useScroll();
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {scrolled && (
        <div className="fixed bottom-8 right-8 z-[99]" onClick={goToTop}>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-foreground text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-[0_5px_10px_rgba(4,10,34,0.2)] dark:bg-opacity-80 dark:hover:bg-opacity-100">
            <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
          </div>
        </div>
      )}
    </>
  );
}

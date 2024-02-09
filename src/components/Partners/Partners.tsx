import Image from "next/image";
import graygrids from "@images/partners/graygrids.svg";
import tailadmin from "@images/partners/tailadmin.svg";
import tailgrids from "@images/partners/tailgrids.svg";
import uideck from "@images/partners/uideck.svg";
import lineicons from "@images/partners/lineicons.svg";

export default function Partners() {
  return (
    <section className="bg-background dark:bg-backgroundDark pt-16">
      <div className="container">
        <div className="bg-secondaryBackgroundDark py-14 flex items-center justify-around flex-wrap gap-y-10 px-5">
          <a
            href="/"
            aria-label="home"
            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
          >
            <Image
              width="100"
              height="100"
              src={graygrids.src}
              alt="graygrids"
              className="h-12 w-56"
            />
          </a>
          <a
            href="/"
            aria-label="home"
            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
          >
            <Image
              width="100"
              height="100"
              src={tailadmin.src}
              alt="tailadmin"
              className="h-12 w-56"
            />
          </a>
          <a
            href="/"
            aria-label="home"
            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
          >
            <Image
              width="100"
              height="100"
              src={lineicons.src}
              alt="lineicons"
              className="h-12 w-56"
            />
          </a>
          <a
            href="/"
            aria-label="home"
            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
          >
            <Image width="100" height="100" src={uideck.src} alt="uideck" className="h-12 w-56" />
          </a>
          <a
            href="/"
            aria-label="home"
            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition"
          >
            <Image
              width="100"
              height="100"
              src={tailgrids.src}
              alt="tailgrids"
              className="h-12 w-56"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

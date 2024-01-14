import Image from "next/image";
import graygrids from "@components/sections/partners/imgs/graygrids.svg";
import tailadmin from "@components/sections/partners/imgs/tailadmin.svg";
import tailgrids from "@components/sections/partners/imgs/tailgrids.svg";
import uideck from "@components/sections/partners/imgs/uideck.svg";
import lineicons from "@components/sections/partners/imgs/lineicons.svg";

export default function Partners() {
  return (
    <section className="bg-background dark:bg-backgroundDark pt-16">
      <div className="container">
        <div className="bg-secondaryBackgroundDark py-14 flex items-center justify-around flex-wrap gap-y-10 px-5">
          <a href="/">
            <Image width="100" height="100" src={graygrids.src} alt="graygrids" className="h-12 w-56" />
          </a>
          <a href="/">
            <Image width="100" height="100" src={tailadmin.src} alt="tailadmin" className="h-12 w-56" />
          </a>
          <a href="/">
            <Image width="100" height="100" src={lineicons.src} alt="lineicons" className="h-12 w-56" />
          </a>
          <a href="/">
            <Image width="100" height="100" src={uideck.src} alt="uideck" className="h-12 w-56" />
          </a>
          <a href="/">
            <Image width="100" height="100" src={tailgrids.src} alt="tailgrids" className="h-12 w-56" />
          </a>
        </div>
      </div>
    </section>
  );
}

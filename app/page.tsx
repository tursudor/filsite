import Image from "next/image";
import m5 from "../public/m5.png";
import bmw from "../public/2982ea0a-f5a7-40e3-98ac-1968a8f75cf3.jpeg";
import filsitelogo from "../public/filsitelogo.png";

export default function Home() {
  return (
    <div className="">
      <div className="hero">
        <Image
          // loading='lazy' // {lazy} | {eager}
          className="absolute"
          src={bmw}
          alt="an image with a car on a lift"
          width={1900}
        // height={38}
        // priority
        />
        <div className="logo">
          <Image
            className=""
            src={filsitelogo}
            alt="garage logo"
            width={1900}
          // height={38}
          // priority
          />
        </div>
      </div>
      <main className="">
      </main>
      <footer className="">
      </footer>
    </div>
  );
}

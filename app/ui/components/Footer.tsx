import { Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

//amélioration à faire : component link + mapper les liens icons

function Footer() {
  return (
    <nav className="flex z-40 w-full h-auto items-center justify-center flex-col inset-x-0 bg-background/70 gap-10 bg-[url('/bg_footer.svg')] bg-auto bg-no-repeat bg-center  py-10">
      <ul className="flex gap-5 md:gap-10">
        <li>
          <a href="/">
            <Image
              src="fb_logo.svg"
              width={24}
              height={24}
              alt="logo Facebook"
            />
          </a>
        </li>
        <li>
          <Image
            src="x_logo.svg"
            width={24}
            height={24}
            alt="logo X (Twitter)"
          />
        </li>
        <li>
          <Image
            src="insta_logo.svg"
            width={24}
            height={24}
            alt="logo Instagram"
          />{" "}
        </li>
        <li>
          <Image
            src="linkedin_logo.svg"
            width={24}
            height={24}
            alt="logo Linkedin"
          />
        </li>
        <li>
          <Image
            src="tiktok_logo.svg"
            width={24}
            height={24}
            alt="logo TikTok"
          />
        </li>
        <li>
          <Image src="yt_logo.svg" width={24} height={24} alt="logo Youtube" />
        </li>
      </ul>
      <Image src="lumy_logo.svg" width={59} height={20} alt="logo Lumy" />
      <div className="flex gap-5">
        <Link className="text-white" href="#">
          Mentions Légales
        </Link>
        <Link className="text-white" href="#">
          Site Officiel
        </Link>
      </div>
    </nav>
  );
}

export default Footer;

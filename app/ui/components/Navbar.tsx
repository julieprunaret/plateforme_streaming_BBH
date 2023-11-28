"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <Navbar className="py-5">
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link color="foreground" href="./" className="text-white font-bold">
            {pathname === "/" && (
              <span className="text-[#FF11AA] mr-2">&#x2022;</span>
            )}
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="./Playlists"
            aria-current="page"
            className="text-white font-bold"
          >
            {pathname === "/Playlists" && (
              <span className="text-[#FF11AA] mr-2">&#x2022; </span>
            )}
            Playlists
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white font-bold" href="./Direct">
            {pathname === "/Direct" && (
              <span className="text-[#FF11AA] mr-2">&#x2022; </span>
            )}
            Direct
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarBrand className="hidden sm:flex gap-4 justify-center">
        <Image src="logoBBH.svg" width={47} height={62} alt="Logo BBH" />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="default"
            href="#"
            variant="flat"
            className="font-bold"
          >
            bbh.bzh
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

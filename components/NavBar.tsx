"use client";

import { FunctionComponent, useState } from "react";
import { HiMiniLanguage } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import Link from "next/link";

import { cn } from "@/utils/tailwind";

import Button from "./Button";
import LangSwitcher from "./LangSwitcher";

interface NavBarProps {
  locale: string;
}

const NavBar: FunctionComponent<NavBarProps> = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenuHandler = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-10 flex h-16  w-full flex-1 justify-center border-b border-b-primary-300 bg-white max-sm:fixed max-sm:px-4 sm:px-20">
      <div className="relative flex w-full flex-1 items-center text-sm">
        <h1>
          <Link href="/" className={"flex items-center text-nowrap text-2xl font-extrabold text-primary-600 max-md:text-lg"}>
            &#60;devPomme🍎 /&#62;
          </Link>
        </h1>
        <ul
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className={cn(
            "relative flex items-center gap-4 bg-white max-md:flex-col max-md:gap-4 md:ml-auto md:flex-row",
            isMenuOpen
              ? "top-16 z-10 gap-4 bg-opacity-80 p-4 max-md:absolute max-md:left-0 max-md:flex max-md:w-full"
              : "mr-7 max-md:hidden"
          )}>
          <li className={"whitespace-nowrap text-base"}>About Me</li>
          <li className={"text-base"}>Work</li>
          <li className={"text-base"}>Portfolio</li>
          <li className={"text-base"}>Contact</li>
          {/*  <li className={"mr-0 md:ml-auto"}>
            <Button theme={"primary"} size="medium" className={"max-md:w-full"} type="button">
              Download CV
            </Button>
          </li> */}
        </ul>
        <div className="max-md:ml-auto max-md:mr-4">
          <LangSwitcher />
        </div>
        <button
          onClick={() => {
            onClickMenuHandler();
          }}
          className={"md:hidden"}
          type={"button"}>
          {isMenuOpen ? <IoClose className={"size-8 text-primary-600"} /> : <LuMenu className={"size-8 text-primary-600"} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

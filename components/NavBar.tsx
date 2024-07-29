"use client";

import { FunctionComponent, useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import { cn } from "@/utils/tailwind";

import Button from "./Button";

const NavBar: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onClickMenuHandler = () => {
    setIsMenuOpen(prev => !prev);
  };
  return (
    <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10 max-sm:px-3">
      <div className="relative flex w-full max-w-4xl items-center justify-between text-sm">
        <h1>
          <a href="/">devPomme</a>
        </h1>
        <ul
          className={cn(
            "relative flex gap-4 bg-white max-sm:flex-col max-sm:gap-4 sm:flex-row",
            isMenuOpen ? "absolute top-16 z-10 gap-4 p-4 max-sm:left-0 max-sm:flex max-sm:w-full" : "max-sm:hidden"
          )}>
          <li className={"text-base"}>About Me</li>
          <li className={"text-base"}>Work</li>
          <li className={"text-base"}>Portfolio</li>
          <li className={"text-base"}>Contact</li>
          <li className={"mr-0 sm:ml-auto"}>
            <Button theme={"primary"} className={"max-sm:w-full"} type="button">
              Download CV
            </Button>
          </li>
        </ul>

        <button
          onClick={() => {
            onClickMenuHandler();
          }}
          className={"sm:hidden"}
          type={"button"}>
          {isMenuOpen ? <IoClose className={"size-8"} /> : <LuMenu className={"size-8"} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

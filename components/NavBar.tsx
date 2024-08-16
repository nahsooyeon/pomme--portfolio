"use client";

import { FunctionComponent, useState, useTransition } from "react";
import { HiMiniLanguage } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import { useLocale } from "next-intl";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

import { cn } from "@/utils/tailwind";

import { usePathname, useRouter } from "@/i18n";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import Button from "./Button";

const locales = ["ko", "en", "de"];

interface NavBarProps {
  locale: string;
}

const NavBar: FunctionComponent<NavBarProps> = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const onClickMenuHandler = () => {
    setIsMenuOpen(prev => !prev);
  };
  const changeLanguage = (newLocale: "ko" | "de" | "en") => {
    const nextLocale = newLocale;
    const params: { [anyProp: string]: string } = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    console.log(pathname, params, searchParams);

    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale,
      });
    });
  };

  return (
    <nav className="flex h-16 w-full flex-1 justify-center border-b border-b-foreground/10 max-sm:px-4 sm:px-20">
      <div className="relative flex w-full flex-1 items-center text-sm">
        <h1>
          <Link href="/">&#60;devPomme /&#62;</Link>
        </h1>
        <ul
          className={cn(
            "relative flex items-center gap-4 bg-white max-sm:flex-col max-sm:gap-4 sm:flex-row",
            isMenuOpen
              ? "absolute top-16 z-10 gap-4 p-4 max-sm:left-0 max-sm:flex max-sm:w-full"
              : "ml-auto mr-7 max-sm:hidden"
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
        <Menu as="div">
          <div>
            <MenuButton className={"flex items-center"}>
              <HiMiniLanguage />
              {locale}
            </MenuButton>
          </div>
          <MenuItems className={"flex flex-col gap-4 bg-white"} anchor="bottom">
            {locales.map(locale => (
              <MenuItem key={locale}>
                <button
                  type="button"
                  onClick={() => {
                    changeLanguage(locale as "ko" | "de" | "en");
                    // router.push(pathname, undefined, { locale });
                  }}>
                  {locale}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>

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

"use client";

import { FunctionComponent, useTransition } from "react";
import { HiMiniLanguage } from "react-icons/hi2";

import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

import { locales, usePathname, useRouter } from "@/i18n";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const LangSwitcher: FunctionComponent = () => {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const changeLanguage = (newLocale: "ko" | "de" | "en") => {
    const nextLocale = newLocale;
    const params: { [anyProp: string]: string } = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale,
      });
    });
  };
  return (
    <Menu as="div">
      <div>
        <MenuButton className={"flex items-center text-gray-500 hover:text-pink-400"}>
          <HiMiniLanguage className={"text-xl"} />
          <span className={"text-lg"}>{locale.toUpperCase()}</span>
        </MenuButton>
      </div>
      <MenuItems
        transition
        className={
          "z-20 flex flex-col gap-4 rounded-md bg-white px-4 py-2 shadow-md transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        }
        anchor={"bottom"}>
        {locales.map(locale => (
          <MenuItem key={locale}>
            <button
              type="button"
              className="text-center text-gray-500 hover:text-pink-500"
              onClick={() => {
                changeLanguage(locale as "ko" | "de" | "en");
                // router.push(pathname, undefined, { locale });
              }}>
              {locale.toUpperCase()}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default LangSwitcher;

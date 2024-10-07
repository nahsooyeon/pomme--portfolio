import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LocalePrefix} from 'next-intl/routing';
// Can be imported from a shared config
export const locales = ["ko", "en", "de"] as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./i18n/${locale}.json`)).default,
  };
});

export const localePrefix: LocalePrefix<typeof locales> = 'never';

export const { Link, usePathname, useRouter } =
createSharedPathnamesNavigation({ locales, localePrefix, });
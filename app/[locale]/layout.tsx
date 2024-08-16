import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";

import NavBar from "@/components/NavBar";

import "../globals.css";

const defaultUrl = "https://pomme.dev";

const pretendard = localFont({
  src: "../../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});
export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "🍎devPomme's Portfolio",
  description: "The fastest way to build apps with Next.js and Supabase",
  visualViewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0",
  openGraph: {
    titile: "🍎devPomme's Portfolio",
    description: "The fastest way to build apps with Next.js and Supabase",
    images: "../opengraph-image.png",
  },
  twitter: {
    card: "",
    site: "@a_lady_on_fire",
    title: "🍎devPomme's Portfolio",
    description: "",
    image: "../twitter-image.png",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html suppressHydrationWarning={true} lang={locale} className={pretendard.className}>
      <body className="bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar locale={locale} />
          <main className="flex min-h-screen flex-col items-center max-sm:px-4 sm:px-20">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

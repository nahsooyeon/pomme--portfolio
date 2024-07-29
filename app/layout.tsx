import localFont from "next/font/local";

import NavBar from "@/components/NavBar";

import "./globals.css";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});
export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "🍎devPomme's Portfolio",
  description: "The fastest way to build apps with Next.js and Supabase",
  visualViewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pretendard.className}>
      <body className="bg-background text-foreground">
        <NavBar />
        <main className="flex min-h-screen flex-col items-center max-sm:px-4 sm:px-20">{children}</main>
      </body>
    </html>
  );
}

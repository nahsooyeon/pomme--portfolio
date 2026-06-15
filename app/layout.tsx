import localFont from "next/font/local";

import "./globals.css";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata = {
  title: "404",
  description: "Page not found",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
}

import {  type NextRequest } from "next/server";
import createIntlMiddleware from 'next-intl/middleware';

import { updateSession } from "@/utils/supabase/middleware";
import { locales } from "./i18n";

export async function middleware(request: NextRequest) {
  await updateSession(request);
  const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale: "ko"
  })
  const intlResponse = intlMiddleware(request);
  await updateSession(request);
  return intlResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/",
    "/(ko|de|en)/:path*",
    '/((?!api|_next|.*\\..*).*)',
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

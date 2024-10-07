import createIntlMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";

import { updateSession } from "@/utils/supabase/middleware";

import { locales } from "./i18n";

export async function middleware(request: NextRequest) {
  // 특정 경로에서는 로케일 처리 생략 (API, _next 등)
  const pathname = request.nextUrl.pathname;

  const excludePaths = [
    "/api",
    "/_next",
    "/favicon.ico",
    /\.(svg|png|jpg|jpeg|gif|webp)$/i, // 이미지 경로 제외
  ];
  // 로케일을 적용하지 않을 경로 필터링
  if (
    excludePaths.some(path => {
      if (typeof path === "string") {
        return pathname.startsWith(path);
      } else if (path instanceof RegExp) {
        return path.test(pathname); // RegExp일 경우 test() 메서드를 사용하여 검사
      }
      return false;
    })
  ) {
    // 세션 업데이트 등 필요한 작업 처리
    await updateSession(request);
    return NextResponse.next();
  }

  // 나머지 경로에서는 로케일 처리 적용
  const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale: "ko",
  });

  // 로케일 처리된 응답 반환
  const intlResponse = intlMiddleware(request);
  await updateSession(request);
  return intlResponse;
}

export const config = {
  matcher: [
    // 로케일이 적용될 경로 설정
    "/",
    "/(ko|de|en)/:path*",
    "/((?!api|_next|.*\\..*).*)", // 제외할 경로들 설정
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

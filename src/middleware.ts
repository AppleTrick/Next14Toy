import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const newRequestHeaders = new Headers(request.headers);
  // newRequestHeaders.set("some-thing", "something from headers");
  // const response = NextResponse.next({
  //   request: {
  //     headers: newRequestHeaders,
  //   },
  // });

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/1", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  // matcher: ["/about/:path*", "/dashboard/:path*"],

  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { NextRequest } from "next/server";

// interface CustomRequest extends NextRequest {
//   userId: string
// }

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  request.nextUrl.searchParams.set("userId", "ghjhvhghghghg");
  const headers = new Headers(request.headers);
  headers.set("userId", "40f2ba49-6684-4a01-8cef-f5c6f91f2563");
  if (pathname == "/")
    return NextResponse.rewrite(new URL("/tutor/dashboard", request.url), {
      request: {
        headers,
      },
    });
  return NextResponse.next({
    request: {
      headers,
    },
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:PATH*",
};

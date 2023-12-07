import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { NextRequest } from "next/server";

// interface CustomRequest extends NextRequest {
//   userId: string
// }

// This function can be marked `async` if using `await` inside
function deleteCookie(request: NextRequest, key: string) {
  request.cookies.delete(key);
}
function setToken(
  request: NextRequest,
  header: Headers,
  token: string,
  usertype: string
) {
  try {
    const decodedToken = jwtDecode(token);
    const now = new Date().getTime() / 1000;
    if (decodedToken.exp && now >= decodedToken.exp) {
      deleteCookie(request, `${usertype}_access_token`);
      return;
    }

    const userId = decodedToken.sub;

    if (userId) {
      header.set(`${usertype}_id`, userId);
      header.set(`${usertype}_token`, token);
      return;
    }
    deleteCookie(request, `${usertype}_access_token`);
  } catch (error) {
    deleteCookie(request, `${usertype}_access_token`);
  }
}
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const header = new Headers(request.headers);
  const cookies = request.cookies;
  console.log(cookies);

  const tutorToken = cookies.get("tutor_access_token")?.value;
  const learnerToken = cookies.get("learner_access_token")?.value;
  const adminToken = cookies.get("admin_access_token")?.value;

  tutorToken && setToken(request, header, tutorToken, "tutor");
  learnerToken && setToken(request, header, learnerToken, "learner");
  adminToken && setToken(request, header, adminToken, "admin");

  return NextResponse.next({
    request: {
      headers: header,
    },
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:PATH*",
};

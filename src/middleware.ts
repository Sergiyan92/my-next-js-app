import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const isLoggedIn: boolean = true;

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("my-cookie");
  //   if (!isLoggedIn && request.url === "http://localhost:3000/profile") {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  //   return NextResponse.next();
  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile"],
};

import { COOKIE, ROUTES } from "@/constants";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/'];

export default async function middleware(req: NextRequest) {
  const cookie = await cookies();
  
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(currentPath);

  if (isProtectedRoute) {
    const token = cookie.get(COOKIE.ACCESS_TOKEN)?.value;

    if (!token) {
      return NextResponse.redirect(new URL(ROUTES.SIGN_IN, req.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
}
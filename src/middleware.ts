import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = [""];
const publicRoutes = [""];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get("session")?.value;

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  if (isPublicRoute && cookie && !protectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}
// const protectedRoutes = ["/profile", "/addpet"];
// const publicRoutes = ["/signin", "/signup"];

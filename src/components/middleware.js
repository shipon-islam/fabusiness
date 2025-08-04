// import { verifyToken } from "@/lib/jwt";
// import { NextResponse } from "next/server";

// export async function middleware(request) {
//   const token = request.cookies.get("token")?.value;
//   const protectedPaths = ["/dashboard", "/admin"];

//   const isProtected = protectedPaths.some((path) =>
//     request.nextUrl.pathname.startsWith(path)
//   );

//   if (!isProtected) return NextResponse.next();

//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   try {
//     const isAdmin = await verifyToken(token);
//     if (isAdmin) {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   } catch (err) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

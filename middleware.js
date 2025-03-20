import { NextResponse } from "next/server";

export function middleware(req) {
    if (req.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/not-found", req.url), 307);
    }
    return NextResponse.next();
}

export const config = {
    matcher: "/", 
};

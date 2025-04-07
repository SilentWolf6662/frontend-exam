import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const debugBypass = false

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const sessionId = request.cookies.get('si')?.value;

    try {
        if (debugBypass) return NextResponse.next();
        const req = await fetch("http://localhost:4444/login/loggedin", {
            method: "GET",
            headers: {
                'Cookie': `si=${sessionId}`, // Send si cookie with the request
            }
        });

        // If no sessionId is found or status is not 200 (OK), redirect to the login page
        if (!sessionId || req.status !== 200) return NextResponse.redirect(new URL('/login', request.url));

        // Allow the request to proceed if the user is logged in
        if (sessionId && req.status === 200) {
            return NextResponse.next();
        }
    } catch (error) {
        console.error('Error during fetch:', error);
        // Redirect to the login page in case of fetch error
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
            * Match all request paths inside (Admin & Dashboard) except for the ones starting with:
            * - api (API routes)
            * - _next/static (static files)
            * - _next/image (image optimization files)
            * - favicon.ico, sitemap.xml, robots.txt (metadata files)
        */

        // Match any path under /admin or /dashboard
        '/admin/:path*',
        '/dashboard/:path*',
    ],
}

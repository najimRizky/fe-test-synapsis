import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('Authorization', `Bearer ${process.env.API_KEY}`)

  return NextResponse.rewrite(req.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}
 
export const config = {
  matcher: '/api/:path*',
}
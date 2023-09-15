import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/api')) {
    const API_KEY = process.env.API_KEY
    const response = NextResponse.next()
    
    response.headers.set(
      "Authorization", 
      `Bearer ${API_KEY}`
    )

    return response
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: '/api/:path*',
}
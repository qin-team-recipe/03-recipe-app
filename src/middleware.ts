import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { AFTER_LOGIN_URL_COOKIE_KEY, SESSION_COOKIE_KEY } from '@/constants';

export function middleware(request: NextRequest) {
  if (!request.cookies.has(SESSION_COOKIE_KEY)) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.set(AFTER_LOGIN_URL_COOKIE_KEY, request.url);

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/shopping/:path*'],
};

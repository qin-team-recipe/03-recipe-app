import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { AFTER_LOGIN_URL_KEY } from '@/constants';

export function middleware(request: NextRequest) {
  if (!request.cookies.has('auth')) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.set(AFTER_LOGIN_URL_KEY, request.url);

    // for test
    response.cookies.set(
      AFTER_LOGIN_URL_KEY,
      new URL('/shopping', request.url).toString()
    );

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/recipe/:path*'],
};

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const cspHeader = `
    script-src 'unsafe-inline' 'unsafe-eval' data: *; worker-src 'self' 'unsafe-inline' * blob:;
  `;
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
        .replace(/\s{2,}/g, ' ')
        .trim();

    const response = NextResponse.next();
    response.headers.set(
        'Content-Security-Policy',
        contentSecurityPolicyHeaderValue
    );

    return response;
}


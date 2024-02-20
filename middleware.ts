import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // Define CSP to only include script-src 'self' 'wasm-unsafe-eval';
    // Remove or modify other directives according to your needs.
    const cspHeader = `
    script-src 'wasm-unsafe-eval''
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

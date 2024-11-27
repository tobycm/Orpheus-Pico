/**
 * middleware - used for detecting client browser/compatibilities
 */

import { NextRequest, NextResponse, userAgent } from "next/server";

export default function middleware(request: NextRequest) {
  const agent = userAgent(request);
  const response = NextResponse.next();

  // browsers that don't support things i want
  const badbrowsers = ["Firefox", "Safari"];
  if (
    !!agent.browser.name &&
    badbrowsers.some((browser) => agent.browser.name == browser)
  ) {
    response.cookies.set("badBrowser", agent.browser.name);
  }
  return response;
}

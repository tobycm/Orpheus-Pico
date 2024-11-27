/**
 * lil' banner for if people are using an unsupported browser :(
 */

"use client";

import { getCookie, setCookie } from "cookies-next/client";
import { useEffect, useState } from "react";

export default function UnsupportedBrowserBanner() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const badBrowser = getCookie("badBrowser");
    const accepted = getCookie("browserAccept") == "true";
    if (badBrowser && !accepted) {
      setOpen(true);
    }
  });

  return isOpen ? (
    <div className="bottom-0 fixed w-screen bg-yellow-500 flex items-center justify-center p-4">
      <span className="font-sans">
        The browser you're using may not show animations properly!
      </span>
      <span
        className="font-mono text-xl items-center flex h-full ml-4"
        onClick={() => {
          setOpen(false);
          setCookie("browserAccept", "true");
        }}
      >
        ✖
      </span>
    </div>
  ) : undefined;
}

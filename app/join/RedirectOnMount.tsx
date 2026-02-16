"use client";

import { useEffect } from "react";

export function RedirectOnMount({ url }: { url: string }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null;
}

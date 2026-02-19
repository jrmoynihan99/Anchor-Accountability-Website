"use client";
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] || "");

  useEffect(() => {
    function onScroll() {
      // The active section is the last one whose top has crossed the threshold.
      // This correctly handles tall sections: once you scroll past a section's
      // top it stays active until the NEXT section's top crosses the threshold.
      const THRESHOLD = 150;
      let activeId = sectionIds[0] || "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= THRESHOLD) {
          activeId = id;
        }
      }

      setActive(activeId);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(onScroll, 10);

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return active;
}

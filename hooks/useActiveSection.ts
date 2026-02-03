"use client";
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] || "hero");

  useEffect(() => {
    function onScroll() {
      let closestId = sectionIds[0] || "hero";
      let minDistance = Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        // Skip sections that are completely above the viewport
        if (rect.bottom < 80) continue;

        const distance = Math.abs(rect.top - 100);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      }

      // Bottom-of-page: force last section as active
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
        closestId = sectionIds[sectionIds.length - 1] || closestId;
      }

      setActive(closestId);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(onScroll, 10);

    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return active;
}

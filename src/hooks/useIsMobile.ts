import { useEffect, useState } from "react";

export function useIsMobile(customBreakpoint?: number) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const breakpoint = customBreakpoint || 0;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    setIsMobile(window.innerWidth < breakpoint);

    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

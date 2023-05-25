import { useEffect, useState } from "react";

interface Breakpoints {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  "2xl": boolean;
}

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const breakpoints = {
    sm: { min: 200, max: 639 },
    md: { min: 640, max: 767 },
    lg: { min: 768, max: 1023 },
    xl: { min: 1024, max: 1279 },
    "2xl": { min: 1280, max: windowWidth < 1536 ? 1536 : windowWidth },
    "3xl": { min: 0, max: 0 }, // Por algum motivo se remover isso o 2xl não entra no resultado do reduce
  } as const;

  useEffect(() => {
    if (document && !windowWidth) {
      const body = document.body;
      setWindowWidth(body.clientWidth);
    }
    function resizeWindow() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [windowWidth]);

  return Object.entries(breakpoints).reduce((acc, [breakpoint, { min, max }]) => {
    const isCurrentBreakpoint = windowWidth >= min && windowWidth <= max;
    return {
      ...acc,
      [breakpoint]: isCurrentBreakpoint, // windowWidth ? windowWidth <= minWidth : false,
    };
  }, {} as Breakpoints);
}

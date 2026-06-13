"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useGsap() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const animateFrom = (
    selector: string,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars & { scrollTrigger?: ScrollTrigger.Vars }
  ) => {
    if (!scope.current) return;
    const elements = scope.current.querySelectorAll(selector);
    if (elements.length === 0) return;

    const st = toVars.scrollTrigger;
    gsap.fromTo(elements, fromVars, {
      ...toVars,
      scrollTrigger:
        st && typeof st === "object"
          ? { ...st, trigger: st.trigger || scope.current }
          : st,
    });
  };

  return { scope, gsap, ScrollTrigger, animateFrom };
}

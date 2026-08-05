"use client";

import { useCallback, useEffect, useState } from "react";

const INTRO_KEY = "portfolio-intro-seen";
const INTERNAL_NAV_KEY = "portfolio-internal-nav";

export function markInternalNavigationToHome() {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(INTERNAL_NAV_KEY, "true");
  }
}

export function useIntroAnimation() {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeenIntro = sessionStorage.getItem(INTRO_KEY);
    const isInternalNav = sessionStorage.getItem(INTERNAL_NAV_KEY);

    if (hasSeenIntro || isInternalNav) {
      setShowIntro(false);
      sessionStorage.removeItem(INTERNAL_NAV_KEY);
    }
  }, []);

  const handleAnimationComplete = useCallback(() => {
    sessionStorage.setItem(INTRO_KEY, "true");
    setShowIntro(false);
  }, []);

  return {
    showIntro: mounted ? showIntro : false,
    handleAnimationComplete,
  };
}

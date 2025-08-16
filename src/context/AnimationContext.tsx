'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnimationContextType {
  reducedMotion: boolean;
  enableAnimations: boolean;
  toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType>({
  reducedMotion: false,
  enableAnimations: true,
  toggleAnimations: () => { /* Default implementation, will be replaced by provider */ },
});

export const useAnimation = (): AnimationContextType => useContext(AnimationContext);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user's system preferences for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent): void => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleAnimations = (): void => {
    setEnableAnimations((prev) => !prev);
  };

  const value = {
    reducedMotion,
    enableAnimations,
    toggleAnimations,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}; 
"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const getMatches = (query: string) => {
    const isClient = typeof window !== "undefined";
    if (isClient) return window.matchMedia(query).matches;

    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));
  const handleChange = () => setMatches(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    if (matchMedia.addEventListener) {
      matchMedia.addEventListener("change", handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener("change", handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};

import { useResizeObserver } from "../lib/external-components";
import { useState, useLayoutEffect, useEffect } from "react";

export const useSize = (target) => {
  const [size, setSize] = useState();

  useEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

import React, { RefObject, useState, useEffect } from 'react';

interface Size {
  width: number;
  height: number;
}

export const useResizeObserver = (ref: RefObject<HTMLElement>): Size => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver((entries) => {
        if (entries.length === 0) return;
        const { width, height } = entries[0].contentRect;
        setSize({ width, height });
      });

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref]);

  return size;
}

export default useResizeObserver;

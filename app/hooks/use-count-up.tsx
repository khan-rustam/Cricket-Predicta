"use client"

import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // in milliseconds
  delay?: number; // in milliseconds
  prefix?: string;
  suffix?: string;
  decimal?: number;
}

export function useCountUp({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  decimal = 0,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const countingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView || countingRef.current) return;
    
    countingRef.current = true;
    
    let startTime: number;
    const startValue = 0;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (end - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    const delayTimeout = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [inView, end, duration, delay]);

  const formattedCount = decimal > 0 
    ? count.toFixed(decimal) 
    : count.toString();

  const displayValue = `${prefix}${formattedCount}${suffix}`;

  return { count, displayValue, ref, inView };
} 
"use client";
import React, { useEffect, useRef, useState, ReactNode, ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number; // ms
  once?: boolean; // animate only first time
  threshold?: number; // intersection threshold
}

/**
 * Simple intersection-based fade & translate reveal wrapper.
 * Usage: <Reveal><div>Content</div></Reveal>
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  once = true,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              if (once) {
                setHasAnimated(true);
                observer.unobserve(entry.target);
              }
            } else if (!once) {
              setVisible(false);
            }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const style: React.CSSProperties = {
    transition: 'opacity 0.9s cubic-bezier(0.22,0.61,0.36,1), transform 0.9s cubic-bezier(0.22,0.61,0.36,1)',
    transitionDelay: `${delay}ms`,
    opacity: visible || hasAnimated ? 1 : 0,
    transform: visible || hasAnimated ? 'translateY(0)' : 'translateY(28px)',
    willChange: 'opacity, transform',
  };

  return (
    <Tag ref={ref as any} className={className} style={style}>
      {children}
    </Tag>
  );
}

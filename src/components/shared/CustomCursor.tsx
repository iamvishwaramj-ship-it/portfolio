import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

/**
 * Custom cursor with dot + ring that follow mouse movement.
 * Only renders on non-touch devices.
 */
const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number>(0);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const moveDot = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animateRing = () => {
      ringPos.current.x += (posRef.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (posRef.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`;
      }
      animFrame.current = requestAnimationFrame(animateRing);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', moveDot);
    animFrame.current = requestAnimationFrame(animateRing);

    // Detect hoverable elements
    const interactables = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveDot);
      cancelAnimationFrame(animFrame.current);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <div
            ref={dotRef}
            className="cursor-dot"
            style={{
              transform: isHovering ? 'scale(2)' : 'scale(1)',
              transition: 'transform 0.2s ease',
            }}
          />
          <div
            ref={ringRef}
            className="cursor-ring"
            style={{
              width: isHovering ? '48px' : '32px',
              height: isHovering ? '48px' : '32px',
              opacity: isHovering ? 1 : 0.6,
              borderColor: isHovering ? 'var(--color-accent-cyan)' : 'var(--color-primary)',
              transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, border-color 0.3s ease',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;

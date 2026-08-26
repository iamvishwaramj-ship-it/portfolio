import { useState, useEffect, useRef } from 'react';

/**
 * Animated typewriter effect hook.
 * Cycles through an array of strings with typing and deleting animations.
 */
export const useTypewriter = (strings: string[], speed = 80, deleteSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const currentString = strings[currentIndex];

    const tick = () => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(tick, speed);
        } else {
          // Pause before deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(currentString.slice(0, displayText.length - 1));
          timeoutRef.current = setTimeout(tick, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % strings.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, currentIndex, strings, speed, deleteSpeed, pauseTime]);

  return { displayText, isTyping: !isDeleting };
};

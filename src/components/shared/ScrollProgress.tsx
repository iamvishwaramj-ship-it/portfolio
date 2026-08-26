import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Sticky scroll progress bar at the top of the page.
 */
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CountUp = ({
  target,
  duration = 2,
}: {
  target: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const end = target;
    const increment = end / (duration * 60); // 60 frames per second

    let current = start;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 1000 / 60); // Run at ~60 FPS

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [target, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.span>
  );
};

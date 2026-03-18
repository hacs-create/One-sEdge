'use client';

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SplitTextAnimationProps {
  children: string | ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  splitBy?: 'char' | 'word';
}

export function SplitTextAnimation({ 
  children, 
  className = "", 
  style = {},
  delay = 0,
  duration = 0.05,
  splitBy = 'char'
}: SplitTextAnimationProps) {
  // If children is not a string, render as-is with simple animation
  if (typeof children !== 'string') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  const text = children as string;
  
  // Split text by character or word
  const elements = splitBy === 'char' 
    ? text.split('') 
    : text.split(' ');

  return (
    <div className={className} style={style}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * duration,
            ease: [0.25, 0.4, 0.25, 1]
          }}
          style={{ display: 'inline-block' }}
        >
          {splitBy === 'word' && index > 0 ? '\u00A0' : ''}{element}{splitBy === 'char' && element === ' ' ? '\u00A0' : ''}
        </motion.span>
      ))}
    </div>
  );
}

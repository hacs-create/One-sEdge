'use client';

import { motion } from "motion/react";

interface AnimatedGradientBackgroundProps {
  variant?: 'dark' | 'light' | 'accent';
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedGradientBackground({ 
  variant = 'dark', 
  className = '',
  children 
}: AnimatedGradientBackgroundProps) {
  
  // Different gradient configurations based on variant
  const gradientConfigs = {
    dark: {
      colors: [
        'linear-gradient(135deg, #1c1917 0%, #292524 25%, #1c1917 50%, #0c0a09 75%, #1c1917 100%)',
        'linear-gradient(225deg, #292524 0%, #1c1917 25%, #0c0a09 50%, #1c1917 75%, #292524 100%)',
        'linear-gradient(315deg, #0c0a09 0%, #1c1917 25%, #292524 50%, #1c1917 75%, #0c0a09 100%)',
      ]
    },
    light: {
      colors: [
        'linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 25%, #f5f5f4 50%, #fafaf9 75%, #f5f5f4 100%)',
        'linear-gradient(225deg, #e7e5e4 0%, #f5f5f4 25%, #fafaf9 50%, #f5f5f4 75%, #e7e5e4 100%)',
        'linear-gradient(315deg, #fafaf9 0%, #f5f5f4 25%, #e7e5e4 50%, #f5f5f4 75%, #fafaf9 100%)',
      ]
    },
    accent: {
      colors: [
        'linear-gradient(135deg, #1c1917 0%, #0f3524 25%, #1c1917 50%, #0c0a09 75%, #1c1917 100%)',
        'linear-gradient(225deg, #0f3524 0%, #1c1917 25%, #0c0a09 50%, #1c1917 75%, #0f3524 100%)',
        'linear-gradient(315deg, #0c0a09 0%, #1c1917 25%, #0f3524 50%, #1c1917 75%, #0c0a09 100%)',
      ]
    }
  };

  const currentGradients = gradientConfigs[variant].colors;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* First gradient layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: currentGradients,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Second gradient layer with opacity for depth */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Third gradient layer - subtle shimmer effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)',
            'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)',
            'linear-gradient(270deg, transparent 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "motion/react";
import logoImage from "figma:asset/94d2a1608764c2418d01da3661a2fd1181af5801.png";

interface LoadingScreenProps {
  isVisible: boolean;
}

export function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <img 
                src={logoImage} 
                alt="One's edge" 
                className="w-full h-full object-contain" 
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
              className="text-center"
            >
              <h1 
                className="text-2xl sm:text-3xl bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  letterSpacing: "0.02em"
                }}
              >
                One's edge
              </h1>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { Button } from "./ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import logoImage from "figma:asset/94d2a1608764c2418d01da3661a2fd1181af5801.png";
import { useEffect } from "react";

export function ClientHero() {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-16"
          >
            <div className="w-20 h-20 relative">
              <img src={logoImage} alt="One's edge" className="w-full h-full object-contain opacity-90" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-12 px-4"
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}>
              One's edge RECRUITMENT
            </span>
            <Link href="/services#telecom">
              <span className="block text-base sm:text-lg md:text-xl text-slate-600 tracking-wide cursor-pointer hover:text-slate-900 transition-colors duration-300" style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.1em' }}>
                通信代理販売/アウトソーシング事業
              </span>
            </Link>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-center text-slate-600 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg px-4"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            私たちは、通信商材の営業代理・代行業務とアウトソーシング事業を通じて、<br className="hidden sm:block" />
            お客様のビジネスに新たな価値を提供します
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 sm:px-10 py-5 sm:py-6 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.1em' }}
              >
                お問い合わせ
              </Button>
            </Link>
            <Link href="/company" className="w-full sm:w-auto">
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 sm:px-10 py-5 sm:py-6 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: '0.1em' }}
              >
                会社概要
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 text-center"
          >
            <div className="inline-block animate-bounce">
              <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

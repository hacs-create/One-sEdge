'use client';

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "figma:asset/94d2a1608764c2418d01da3661a2fd1181af5801.png";

export function ClientHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { id: "/", label: "トップ" },
    { id: "/company", label: "会社概要" },
    { id: "/services", label: "事業内容" },
    { id: "/recruitment", label: "採用情報" },
    { id: "/contact", label: "お問い合わせ" },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 bg-white/98 backdrop-blur-xl shadow-lg border-b border-stone-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-4 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative transition-transform duration-500 group-hover:scale-105">
              <img 
                src={logoImage} 
                alt="One's edge" 
                className="w-full h-full object-contain transition-all duration-500" 
              />
            </div>
            <span 
              className="text-lg sm:text-xl tracking-tight transition-all duration-500 bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#15803d] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              One's edge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.id}
                className={`px-5 py-2 transition-all duration-500 relative group ${
                  scrolled 
                    ? "text-stone-600 hover:text-stone-900" 
                    : "text-stone-200 hover:text-white"
                }`}
                style={{ 
                  fontFamily: "'Manrope', sans-serif", 
                  fontSize: '0.875rem', 
                  letterSpacing: '0.05em',
                  fontWeight: 500,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-500 ${
                  scrolled ? "bg-stone-900" : "bg-white"
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-500 ${
              scrolled 
                ? "text-stone-600 hover:text-stone-900" 
                : "text-stone-200 hover:text-white"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-stone-200 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className="block w-full text-left px-4 py-4 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-all duration-300 border-l-2 border-transparent hover:border-[#22c55e]"
                style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: '0.05em', fontWeight: 500 }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

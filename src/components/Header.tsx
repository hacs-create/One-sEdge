import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "figma:asset/94d2a1608764c2418d01da3661a2fd1181af5801.png";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Detect if we're on a dark background section by checking all dark sections
      const darkSections = document.querySelectorAll('[data-dark-section="true"]');
      let isOnDarkSection = false;
      
      // Check if current scroll position is within any dark section
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        const scrollY = window.scrollY;
        
        // Check if the header position (top of viewport) is within this dark section
        if (scrollY >= sectionTop - 100 && scrollY < sectionBottom - 100) {
          isOnDarkSection = true;
        }
      });
      
      setIsDarkBackground(isOnDarkSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navItems = [
    { id: "home", label: "トップ" },
    { id: "company", label: "会社概要" },
    { id: "services", label: "事業内容" },
    { id: "recruitment", label: "採用情報" },
    { id: "contact", label: "お問い合わせ" },
  ];

  return (
    <>
      {/* Desktop Navigation - Left Side */}
      <div className="hidden lg:block fixed top-0 left-0 z-50 h-screen pointer-events-none">
        <div className="flex flex-col h-full py-12 px-8">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="mb-16 group pointer-events-auto"
          >
            <div className="w-12 h-12 transition-all duration-500 group-hover:scale-110">
              <img 
                src={logoImage} 
                alt="One's edge" 
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          {/* Vertical Navigation */}
          <nav className="flex flex-col gap-6 pointer-events-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-all duration-500 text-left uppercase tracking-[0.2em] group relative ${
                  isDarkBackground 
                    ? 'text-white/70 hover:text-white' 
                    : 'text-stone-800/70 hover:text-stone-900'
                }`}
                style={{ 
                  fontFamily: "'Manrope', sans-serif", 
                  fontSize: '0.75rem',
                  fontWeight: 400
                }}
              >
                <span className="relative">
                  {item.label}
                  <span 
                    className={`absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDarkBackground ? 'bg-white' : 'bg-stone-900'
                    }`}
                  ></span>
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Copyright - Right Side (Desktop) */}
      <div className="hidden lg:block fixed top-0 right-0 z-50 h-screen pointer-events-none">
        <div className="flex items-center justify-center h-full px-8">
          <div 
            className={`tracking-widest transition-colors duration-500 ${
              isDarkBackground ? 'text-white/40' : 'text-stone-800/40'
            }`}
            style={{ 
              writingMode: 'vertical-rl',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.3em'
            }}
          >
            ©2024 ONE'S EDGE CORPORATION
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <header 
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-500 ${
          isDarkBackground ? 'bg-black/30' : 'bg-white/90'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          {/* Logo */}
          <button onClick={() => onNavigate("home")}>
            <div className="w-10 h-10">
              <img 
                src={logoImage} 
                alt="One's edge" 
                className="w-full h-full object-contain transition-all duration-500"
              />
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors duration-500 relative ${
              isDarkBackground ? 'text-white' : 'text-stone-900'
            }`}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`backdrop-blur-xl py-8 px-6 transition-colors duration-500 overflow-hidden ${
                isDarkBackground ? 'bg-black/95' : 'bg-white/95'
              }`}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-4 transition-all duration-300 uppercase tracking-widest border-b ${
                    isDarkBackground 
                      ? 'text-white/80 hover:text-white border-white/10' 
                      : 'text-stone-800/80 hover:text-stone-900 border-stone-800/10'
                  }`}
                  style={{ 
                    fontFamily: "'Manrope', sans-serif", 
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    letterSpacing: '0.15em'
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

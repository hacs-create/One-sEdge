import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ContactCTAProps {
  onNavigate: (section: string) => void;
}

export function ContactCTA({ onNavigate }: ContactCTAProps) {
  return (
    <section className="relative py-32 bg-neutral-50 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50 to-neutral-100" />
      
      {/* Animated gradient effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#16a34a]/10 to-[#22c55e]/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Content Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm p-12 rounded-sm border border-neutral-200"
          >
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-[#16a34a]"
              >
                <path d="M3 7h18M3 12h18M3 17h18" />
                <rect x="5" y="3" width="14" height="18" rx="2" />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-800 mb-4 tracking-[0.3em] uppercase"
              style={{ 
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: '0.3em'
              }}
            >
              CONTACT
            </motion.h2>

            {/* Japanese Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neutral-600 mb-8"
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: '0.875rem',
                letterSpacing: '0.1em'
              }}
            >
              お問い合わせはこちらから
            </motion.p>

            {/* Button */}
            <motion.button
              onClick={() => onNavigate("contact")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ x: 5 }}
              className="group flex items-center justify-between w-full px-8 py-5 bg-gradient-to-r from-[#16a34a] to-[#22c55e] hover:from-[#15803d] hover:to-[#16a34a] text-white transition-all duration-300 border-0"
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: '0.875rem',
                letterSpacing: '0.05em'
              }}
            >
              <span>お問い合わせフォーム</span>
              <ArrowRight 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                strokeWidth={1.5}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

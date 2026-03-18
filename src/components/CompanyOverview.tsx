'use client';

import { Target, Building2, MapPin, Calendar, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ParallaxImage } from "./ParallaxSection";
import { TypewriterText } from "./TypewriterText";
import ceoImage from "figma:asset/83ec9b7bef136b338b441e90463e23d9a93573c3.png";

interface CompanyOverviewProps {
  onNavigate?: (section: string) => void;
}

export function CompanyOverview({ onNavigate }: CompanyOverviewProps) {
  const companyInfo = [
    {
      icon: Building2,
      label: "会社名",
      value: "合同会社One's edge",
    },
    {
      icon: MapPin,
      label: "所在地",
      value: "岐阜県羽島郡岐南町上印食2-15 シャルマンハウス 201",
    },
    {
      icon: Calendar,
      label: "設立年",
      value: "2020年11月6日",
    },
    {
      icon: Phone,
      label: "電話番号",
      value: "070-2250-2001",
    },
    {
      icon: Mail,
      label: "メール",
      value: "info@onesedge.co.jp",
    },
  ];

  return (
    <section id="company" className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#22c55e]/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#22c55e]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="max-w-4xl mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-xs sm:text-sm tracking-[0.3em] text-stone-500 uppercase" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Company
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl mb-8 text-stone-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            会社概要
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent"
          />
        </div>

        {/* Mission Statement with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-24 sm:mb-32 max-w-7xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 relative group/image"
          >
            <motion.div 
              className="relative h-[400px] lg:h-[600px] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680538993040-63e1dbc523b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMzI1NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elegant office"
                className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent group-hover/image:from-stone-900/50 transition-all duration-700"></div>
              
              {/* Premium shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/image:translate-x-full transition-transform duration-1500"></div>
              </div>
            </motion.div>
            {/* Decorative frame with animation */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#22c55e]/30 -z-10"
              whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col justify-center px-4 lg:px-0"
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 mb-8 border-2 border-stone-300 text-stone-700 group/icon relative overflow-hidden"
              whileHover={{ 
                scale: 1.1,
                borderColor: "#22c55e",
                backgroundColor: "#22c55e"
              }}
              transition={{ duration: 0.4 }}
            >
              <Target className="w-8 h-8 group-hover/icon:text-white transition-colors duration-400 relative z-10" strokeWidth={1.5} />
            </motion.div>
            
            <motion.h3 
              className="text-2xl sm:text-4xl lg:text-5xl mb-8 text-stone-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypewriterText 
                text="Mission"
                delay={1200}
                speed={120}
              />
            </motion.h3>
            
            <div className="space-y-6 text-stone-600 leading-relaxed" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p 
                  className="text-lg sm:text-2xl text-stone-900 italic leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  「人と人、企業と社会の"つながり"をデザインする」
                </p>
                {/* Accent underline */}
                <motion.div 
                  className="h-0.5 bg-[#22c55e] mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.div>
              <motion.p 
                className="text-sm sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                私たちの使命は、コミュニケーションを通じて価値を生み出し、すべての人にとって身近で信頼できるパートナーであり続けることです。
                <br />
                通信というインフラを軸に、ビジネスの現場・地域・お客様の暮らしをより豊かにする"架け橋"となることを目指しています。
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Company Information */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl lg:text-5xl mb-12 sm:mb-16 text-stone-900 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Information
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-stone-900 text-stone-100 p-8 sm:p-12 lg:p-16 relative overflow-hidden group/info"
          >
            {/* Animated decorative corner */}
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-600/10 to-transparent"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            {/* Premium shimmer overlay */}
            <div className="absolute inset-0 opacity-0 group-hover/info:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/info:translate-x-full transition-transform duration-2000"></div>
            </div>
            
            <div className="space-y-8 sm:space-y-10 relative z-10">
              {companyInfo.map((info, index) => {
                const Icon = info.icon;
                const isPhone = info.label === "電話番号";
                const isEmail = info.label === "メール";
                const isClickable = isPhone || isEmail;
                const Component = isClickable ? motion.a : motion.div;
                const props = isPhone ? { href: "tel:070-2250-2001" } : isEmail ? { href: "mailto:info@onesedge.co.jp" } : {};
                
                return (
                  <Component
                    key={index}
                    {...props}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className={`flex flex-col sm:flex-row gap-4 sm:gap-8 pb-8 sm:pb-10 border-b border-stone-700 last:border-0 last:pb-0 group/item ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className="flex items-center gap-4 sm:w-1/3">
                      <motion.div 
                        className="w-10 h-10 flex items-center justify-center border border-stone-600 group-hover/item:border-[#22c55e] group-hover/item:bg-[#22c55e]/10 transition-all duration-300 flex-shrink-0 relative overflow-hidden"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-5 h-5 text-stone-400 group-hover/item:text-[#22c55e] transition-colors duration-300 relative z-10" strokeWidth={1.5} />
                      </motion.div>
                      <span className="text-xs sm:text-sm tracking-wider text-stone-400 group-hover/item:text-[#22c55e] transition-colors duration-300 uppercase" style={{ fontFamily: "'Manrope', sans-serif" }}>
                        {info.label}
                      </span>
                    </div>
                    <div className="sm:w-2/3 text-stone-100 group-hover/item:text-white text-sm sm:text-lg pl-14 sm:pl-0 break-words transition-colors duration-300" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      {info.value}
                    </div>
                  </Component>
                );
              })}
            </div>
          </motion.div>

          {/* Learn More Button */}
          <div className="max-w-6xl mx-auto mt-16 sm:mt-20 text-center">
            <motion.button
              onClick={() => onNavigate?.('company')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white border-2 border-stone-900 hover:bg-transparent hover:text-stone-900 transition-all duration-300 relative overflow-hidden"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <span className="relative z-10">詳しく見る</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" strokeWidth={1.5} />
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </div>
        </div>

        {/* CEO Message Section */}
        <div className="max-w-6xl mx-auto mt-24 sm:mt-32 lg:mt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-stone-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
            >
              代表挨拶
            </h2>
            <p
              className="text-stone-500 text-sm mb-12 sm:mb-16 tracking-[0.2em]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              CEO MESSAGE
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  「つながりを、もっと身近に。」<br />
                  この言葉には、私たち One's edge が掲げる想いが込められています。
                </p>
                <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  時代が変化するスピードが加速する中で、本当に必要なのは"人の想い"をつなぐ力です。<br />
                  私たちは通信業界をはじめとする多様なフィールドで、挑戦を恐れず、常に現場から新しい価値を生み出すことを大切にしています。
                </p>
                <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  お客様、そして一緒に働く仲間とともに成長し、未来を切り拓く企業であり続けます。
                </p>
                <div className="mt-8 sm:mt-12 pt-8 border-t border-stone-200">
                  <p className="text-stone-900 mb-1" style={{ fontFamily: "'Yu Mincho', 'YuMincho', 'Hiragino Mincho ProN', serif", fontWeight: 600 }}>
                    合同会社 One's edge
                  </p>
                  <p className="text-stone-700" style={{ fontFamily: "'Yu Mincho', 'YuMincho', 'Hiragino Mincho ProN', serif" }}>
                    代表取締役　寺垣 快人
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <ParallaxImage
                  src={ceoImage}
                  alt="CEO"
                  speed={0.15}
                  className="aspect-[3/4]"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#22c55e]/30 -z-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

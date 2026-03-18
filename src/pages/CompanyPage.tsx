'use client';

import { Target, Users, TrendingUp, MapPin, Mail, Phone, Calendar, Heart, Link2 } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ParallaxImage } from "../components/ParallaxSection";
import ceoImage from "figma:asset/83ec9b7bef136b338b441e90463e23d9a93573c3.png";
import { SplitTextAnimation } from "../components/SplitTextAnimation";

export function CompanyPage() {
  const history = [
    { year: "2020年11月", event: "合同会社 One's edge 設立" },
    { year: "2021年4月", event: "通信商材営業代理業務を開始" },
    { year: "2022年3月", event: "アウトソーシング事業部を立ち上げ" },
    { year: "2023年8月", event: "固定通信回線移動通信式サービス提供開始" },
    { year: "2024年", event: "事業拡大により新オフィスへ移転" },
  ];

  const steps = [
    { id: "mission", label: "ミッション", title: "Mission" },
    { id: "ceo-message", label: "代表挨拶", title: "CEO Message" },
    { id: "ceo-story", label: "創業ストーリー", title: "CEO Story" },
    { id: "current-thoughts", label: "現在の想い", title: "Current Thoughts" },
    { id: "information", label: "会社情報", title: "Information" },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 lg:py-48 bg-stone-900 overflow-hidden" data-dark-section="true">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIyNDMzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-24 h-px bg-gradient-to-r from-[#22c55e]/80 via-[#22c55e]/60 to-transparent mb-8 mx-auto"
            />
            <SplitTextAnimation
              className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
              delay={0.2}
              duration={0.08}
              splitBy="char"
            >
              Company
            </SplitTextAnimation>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-stone-300 tracking-[0.2em] text-sm sm:text-base"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              会社概要
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Concept Section */}
      <section id="mission" className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-32 sm:mb-40"
            >
              <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8" />
              <SplitTextAnimation
                className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-stone-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
                delay={0}
                duration={0.08}
                splitBy="char"
              >
                Mission
              </SplitTextAnimation>
              <p
                className="text-stone-500 text-sm mb-16 sm:mb-20 tracking-[0.2em]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                私たちの使命
              </p>
              
              <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
                <p
                  className="text-2xl sm:text-3xl lg:text-4xl text-stone-900 leading-relaxed mb-8"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  「人と人、企業と社会の"つながり"をデザインする」
                </p>
                <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  私たちの使命は、コミュニケーションを通じて価値を生み出し、すべての人にとって身近で信頼できるパートナーであり続けることです。<br />
                  通信というインフラを軸に、ビジネスの現場・地域・お客様の暮らしをより豊かにする"架け橋"となることを目指しています。
                </p>
              </div>

              {/* Core Values Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {/* Value 1: Connection */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="group relative bg-white p-8 lg:p-10 border-2 border-stone-200 hover:border-[#22c55e]/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className="w-16 h-16 border-2 border-stone-300 flex items-center justify-center mb-6 group-hover:border-[#22c55e] group-hover:bg-[#22c55e] transition-all duration-500 relative overflow-hidden"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Users className="w-8 h-8 text-stone-700 group-hover:text-white transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                      {/* Fill animation */}
                      <div className="absolute inset-0 bg-[#22c55e] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </motion.div>
                    
                    {/* Title */}
                    <h3 
                      className="text-2xl lg:text-3xl text-stone-900 mb-4 group-hover:text-[#22c55e] transition-colors duration-500"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      つながり
                    </h3>
                    
                    {/* English subtitle */}
                    <p 
                      className="text-stone-400 text-sm tracking-wider uppercase mb-4"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                    >
                      Connection
                    </p>
                    
                    {/* Description */}
                    <p 
                      className="text-stone-600 leading-relaxed text-sm lg:text-base"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      人と人、企業と社会をつなぎ、コミュニケーションを通じて新しい価値を創造します。
                    </p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>

                {/* Value 2: Trust */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="group relative bg-white p-8 lg:p-10 border-2 border-stone-200 hover:border-[#22c55e]/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className="w-16 h-16 border-2 border-stone-300 flex items-center justify-center mb-6 group-hover:border-[#22c55e] group-hover:bg-[#22c55e] transition-all duration-500 relative overflow-hidden"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart className="w-8 h-8 text-stone-700 group-hover:text-white transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                      {/* Fill animation */}
                      <div className="absolute inset-0 bg-[#22c55e] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </motion.div>
                    
                    {/* Title */}
                    <h3 
                      className="text-2xl lg:text-3xl text-stone-900 mb-4 group-hover:text-[#22c55e] transition-colors duration-500"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      信頼
                    </h3>
                    
                    {/* English subtitle */}
                    <p 
                      className="text-stone-400 text-sm tracking-wider uppercase mb-4"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                    >
                      Trust
                    </p>
                    
                    {/* Description */}
                    <p 
                      className="text-stone-600 leading-relaxed text-sm lg:text-base"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      身近で信頼できるパートナーとして、お客様に寄り添い続けます。
                    </p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>

                {/* Value 3: Bridge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="group relative bg-white p-8 lg:p-10 border-2 border-stone-200 hover:border-[#22c55e]/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className="w-16 h-16 border-2 border-stone-300 flex items-center justify-center mb-6 group-hover:border-[#22c55e] group-hover:bg-[#22c55e] transition-all duration-500 relative overflow-hidden"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link2 className="w-8 h-8 text-stone-700 group-hover:text-white transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                      {/* Fill animation */}
                      <div className="absolute inset-0 bg-[#22c55e] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </motion.div>
                    
                    {/* Title */}
                    <h3 
                      className="text-2xl lg:text-3xl text-stone-900 mb-4 group-hover:text-[#22c55e] transition-colors duration-500"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      架け橋
                    </h3>
                    
                    {/* English subtitle */}
                    <p 
                      className="text-stone-400 text-sm tracking-wider uppercase mb-4"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                    >
                      Bridge
                    </p>
                    
                    {/* Description */}
                    <p 
                      className="text-stone-600 leading-relaxed text-sm lg:text-base"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      通信インフラを軸に、ビジネス・地域・暮らしを豊かにする架け橋となります。
                    </p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Concept */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8" />
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-stone-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
              >
                Concept
              </h2>
              <p
                className="text-stone-500 text-sm mb-16 sm:mb-20 tracking-[0.2em]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                私たちのコンセプト
              </p>

              <div className="max-w-4xl mx-auto">
                <p
                  className="text-xl sm:text-2xl lg:text-3xl text-stone-900 leading-relaxed mb-8"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  One's edge（ワンズエッジ）＝「ひとりひとりの強みを最大限に」
                </p>
                <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  私たちは、人それぞれが持つ"エッジ＝強み"を活かし、チームとして最大の成果を生み出すことを大切にしています。<br />
                  現場で得たリアルな経験と、人と人との信頼関係こそが、私たちの原動力です。<br />
                  常にお客様の立場に立ち、「現場発の提案力」で新しい価値を創造していきます。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges and Current Thoughts Section */}
      <section id="current-thoughts" className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8" />
                  <h2
                    className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-stone-900 tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
                  >
                    ストーリー
                  </h2>
                  <p
                    className="text-stone-500 text-sm mb-12 tracking-[0.2em]"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    STORY
                  </p>

                  <div className="space-y-6">
                    <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      「現場から生まれた、リアルなつながりを力に。」
                    </p>
                    <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      私はこれまで、通信業界の現場で数多くのお客様・スタッフ・企業の方々と関わってきました。<br />
                      その中で感じたのは、「どれだけ便利な時代になっても、最後に人を動かすのは"想い"である」ということでした。
                    </p>
                    <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      成果や数字だけを追うのではなく、<br />
                      "人との信頼関係"を築くことこそが、継続的な成長につながる。<br />
                      そう信じ、「つながりを、もっと身近に。」という想いを形にしたのが、One's edge です。
                    </p>
                    <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      社名には「ひとりひとりの強み（One's edge）」を活かし、<br />
                      チームとして新しい価値を生み出すという意味を込めています。
                    </p>
                    <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      通信事業をはじめ、営業支援や店舗運営など、現場から積み上げてきた経験を活かしながら、<br />
                      クライアント・お客様・そして仲間すべてに"良い循環"をつくる企業を目指しています。
                    </p>
                    <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      これからも、現場に立ち、耳を傾け、<br />
                      人の想いをつなぐことで、社会に価値を届けていきます。
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <ParallaxImage
                    src="https://images.unsplash.com/photo-1693423362454-7db6c8e07a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFsbGVuZ2UlMjBncm93dGglMjBkZXRlcm1pbmF0aW9ufGVufDF8fHx8MTc2MjMxMzA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Challenge and Growth"
                    speed={0.2}
                    className="aspect-[3/4]"
                  />
                  <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#22c55e]/30 -z-10" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section id="information" className="py-24 sm:py-32 lg:py-40 bg-stone-900 text-white" data-dark-section="true">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20 sm:mb-24"
            >
              <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
              >
                Information
              </h2>
              <p
                className="text-stone-400 text-sm tracking-[0.2em]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                会社情報
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {/* Left Column - Company Details */}
              <div className="space-y-8">
                <div className="group flex items-start gap-4 pb-8 border-b border-stone-700 hover:border-[#22c55e] transition-all duration-300">
                  <div className="w-12 h-12 border-2 border-stone-700 flex items-center justify-center flex-shrink-0 group-hover:border-[#22c55e] group-hover:bg-[#22c55e]/10 transition-all duration-300">
                    <Users className="w-5 h-5 text-stone-400 group-hover:text-[#22c55e] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-stone-400 text-sm mb-3 tracking-wider" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>会社名</div>
                    <div className="text-white text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      合同会社 One's edge
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-4 pb-8 border-b border-stone-700 hover:border-[#22c55e] transition-all duration-300">
                  <div className="w-12 h-12 border-2 border-stone-700 flex items-center justify-center flex-shrink-0 group-hover:border-[#22c55e] group-hover:bg-[#22c55e]/10 transition-all duration-300">
                    <Calendar className="w-5 h-5 text-stone-400 group-hover:text-[#22c55e] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-stone-400 text-sm mb-3 tracking-wider" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>設立年</div>
                    <div className="text-white text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      2020年11月6日
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-4 pb-8 border-b border-stone-700 hover:border-[#22c55e] transition-all duration-300">
                  <div className="w-12 h-12 border-2 border-stone-700 flex items-center justify-center flex-shrink-0 group-hover:border-[#22c55e] group-hover:bg-[#22c55e]/10 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-stone-400 group-hover:text-[#22c55e] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-stone-400 text-sm mb-3 tracking-wider" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>所在地</div>
                    <div className="text-white text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      岐阜県羽島郡岐南町上印食2-15 シャルマンハウス 201
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Details */}
              <div className="space-y-8">
                <a href="tel:070-2250-2001" className="group flex items-start gap-4 pb-8 border-b border-stone-700 hover:border-[#22c55e] transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 border-2 border-stone-700 flex items-center justify-center flex-shrink-0 group-hover:border-[#22c55e] group-hover:bg-[#22c55e]/10 transition-all duration-300">
                    <Phone className="w-5 h-5 text-stone-400 group-hover:text-[#22c55e] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-stone-400 text-sm mb-3 tracking-wider" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>電話番号</div>
                    <div className="text-white text-lg group-hover:text-[#22c55e] transition-colors duration-300" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      070-2250-2001
                    </div>
                  </div>
                </a>

                <a href="mailto:info@onesedge.co.jp" className="group flex items-start gap-4 pb-8 border-b border-stone-700 hover:border-[#22c55e] transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 border-2 border-stone-700 flex items-center justify-center flex-shrink-0 group-hover:border-[#22c55e] group-hover:bg-[#22c55e]/10 transition-all duration-300">
                    <Mail className="w-5 h-5 text-stone-400 group-hover:text-[#22c55e] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-stone-400 text-sm mb-3 tracking-wider" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>メール</div>
                    <div className="text-white text-lg group-hover:text-[#22c55e] transition-colors duration-300" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      info@onesedge.co.jp
                    </div>
                  </div>
                </a>

                <div className="group flex items-start gap-4 pb-8 border-b border-stone-700 hover:border-[#22c55e] transition-all duration-300">
                  <div className="w-12 h-12 border-2 border-stone-700 flex items-center justify-center flex-shrink-0 group-hover:border-[#22c55e] group-hover:bg-[#22c55e]/10 transition-all duration-300">
                    <Target className="w-5 h-5 text-stone-400 group-hover:text-[#22c55e] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-stone-400 text-sm mb-3 tracking-wider" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>事業内容</div>
                    <div className="text-white space-y-2" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      <div>・通信商材営業代理/代行業務</div>
                      <div>・アウトソーシング事業</div>
                      <div>・固定通信回線移動通信式サービス</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

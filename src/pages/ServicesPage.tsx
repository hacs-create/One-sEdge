'use client';

import { Phone, Users, Wifi, CheckCircle, Target, Lightbulb, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ParallaxImage } from "../components/ParallaxSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SplitTextAnimation } from "../components/SplitTextAnimation";

export function ServicesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Wait for page to render, then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 96;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Scroll to top when page loads without hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  const services = [
    {
      id: "telecom",
      icon: Phone,
      title: "通信商材営業代理/代行業務",
      subtitle: "TELECOM SALES AGENCY",
      description: "通信関連商材の営業代理店として、お客様のビジネスをサポート。専門知識を活かした提案で、最適なソリューションを提供します。",
      image: "https://images.unsplash.com/photo-1760013767150-da8e4ded6286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tJTIwY29tbXVuaWNhdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzYyMzEzOTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: [
        "法人・個人向け通信商材の営業代理",
        "お客様のニーズに合わせた最適なプラン提案",
        "導入後のアフターサポート",
        "通信コスト削減のコンサルティング"
      ],
      longDescription: "通信業界における豊富な経験と専門知識を活かし、法人・個人のお客様に最適な通信ソリューションをご提案します。単なる商材の販売ではなく、お客様のビジネス課題を理解し、長期的な視点でサポートいたします。",
      features: [
        { title: "専門知識", description: "通信業界の豊富な経験と最新知識" },
        { title: "最適提案", description: "お客様に合わせたソリューション" },
        { title: "長期サポート", description: "導入後も継続的にサポート" }
      ]
    },
    {
      id: "outsourcing",
      icon: Users,
      title: "アウトソーシング事業",
      subtitle: "OUTSOURCING SERVICES",
      description: "企業様の業務効率化を支援するアウトソーシングサービス。専門スタッフによる高品質なサポートで、コア業務への集中を実現します。",
      image: "https://images.unsplash.com/photo-1635185481431-661b09594e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRzb3VyY2luZyUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtfGVufDF8fHx8MTc2MjMxMzkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: [
        "業務プロセスの分析と最適化",
        "専門スタッフによる業務代行",
        "人材育成・研修サポート",
        "柔軟なスケールアップ・ダウン対応"
      ],
      longDescription: "企業様の業務効率化を実現するため、高品質なアウトソーシングサービスを提供します。お客様のビジネスに合わせた柔軟な対応と、経験豊富な専門スタッフによるサポートで、コア業務への集中を可能にします。",
      features: [
        { title: "高品質", description: "専門スタッフによる確実な業務遂行" },
        { title: "柔軟性", description: "ビジネスに合わせた柔軟な対応" },
        { title: "効率化", description: "コア業務への集中を実現" }
      ]
    },
    {
      id: "communication",
      icon: Wifi,
      title: "固定通信回線移動通信式サービス",
      subtitle: "NETWORK SOLUTIONS",
      description: "固定通信回線から移動通信まで、幅広い通信サービスを提供。お客様の環境に最適なネットワークソリューションをご提案します。",
      image: "https://images.unsplash.com/photo-1689799515027-878d0b0cd1a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjb21tdW5pY2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIzMTM5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: [
        "固定回線・光回線の提供",
        "モバイル通信サービス",
        "ネットワーク環境の構築・保守",
        "セキュリティ対策の提案・実施"
      ],
      longDescription: "固定通信回線から移動通信まで、あらゆる通信ニーズに対応します。お客様の業務環境や利用状況を詳細に分析し、最適なネットワークソリューションをご提案。安定した通信環境の構築をサポートします。",
      features: [
        { title: "幅広い対応", description: "固定・移動通信まで総合提供" },
        { title: "安定性", description: "高品質で安定した通信環境" },
        { title: "セキュリティ", description: "万全のセキュリティ対策" }
      ]
    }
  ];

  const strengths = [
    {
      icon: Target,
      title: "顧客第一主義",
      description: "お客様のニーズを深く理解し、最適なソリューションを提案します。"
    },
    {
      icon: Users,
      title: "若い人材の育成",
      description: "学歴に関わらず、やる気のある人材を育成し、成長の機会を提供します。"
    },
    {
      icon: Lightbulb,
      title: "柔軟な対応力",
      description: "変化する市場環境に迅速に対応し、常に最新のサービスを提供します。"
    }
  ];

  const steps = [
    { id: "telecom", label: "通信商材営業", title: "Telecom Sales" },
    { id: "outsourcing", label: "アウトソーシング", title: "Outsourcing" },
    { id: "communication", label: "通信サービス", title: "Network Services" },
    { id: "strengths", label: "強み", title: "Our Strengths" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 lg:py-48 bg-stone-900 overflow-hidden" data-dark-section="true">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1681321570365-df53da7dbaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2MjcwOTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Services"
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
              Services
            </SplitTextAnimation>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-stone-300 tracking-[0.2em] text-sm sm:text-base"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              事業内容
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
              <SplitTextAnimation
                className="text-3xl sm:text-4xl lg:text-5xl mb-12 sm:mb-16 text-center text-stone-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
                delay={0}
                duration={0.05}
                splitBy="char"
              >
                私たちにできること
              </SplitTextAnimation>
              <div className="space-y-6 text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                <p className="text-center">
                  「学歴という概念をなくし、誰でも選択肢のある人生へ」
                </p>
                <p>
                  弊社では、身近な通信業界で、セールスの経験を積んでいます。身近な業界だからこそ、安定した成長を見込んでいます。
                </p>
                <p>
                  また、社内で独自のキャリアアップカリキュラムを用意しており研修を終えキャリアを積んだスタッフは歩合の営業や独立にシフトしていきます。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details Sections */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 sm:py-32 lg:py-40 ${isEven ? 'bg-diamond-pattern' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="mb-8">
                      <div className="w-16 h-16 border-2 border-stone-300 flex items-center justify-center mb-6 group-hover:border-[#22c55e] transition-colors duration-300">
                        <Icon className="w-8 h-8 text-stone-700" strokeWidth={1.5} />
                      </div>
                      <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-6" />
                      <h2
                        className="text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight mb-4"
                        style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
                      >
                        {service.id === 'telecom' ? (
                          <>
                            通信商材営業代理/<br className="sm:hidden" />代行業務
                          </>
                        ) : service.title}
                      </h2>
                      <p
                        className="text-stone-500 text-sm tracking-[0.2em]"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-stone-600 leading-relaxed mb-10 text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      {service.longDescription}
                    </p>

                    <div className="space-y-4">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                          <div className="w-6 h-6 border-2 border-stone-300 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#22c55e] group-hover:bg-[#22c55e] transition-all duration-300">
                            <CheckCircle className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                          </div>
                          <p className="text-stone-600 text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'} relative`}
                  >
                    {/* Service Features Box */}
                    <div className="group relative bg-stone-50 p-8 lg:p-10 border-2 border-stone-200 hover:border-[#22c55e]/50 transition-all duration-500 overflow-hidden">
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Title */}
                        <div className="mb-6">
                          <div className="w-16 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-4" />
                          <h3 
                            className="text-xl lg:text-2xl text-stone-900"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            Key Features
                          </h3>
                        </div>
                        
                        {/* Features List */}
                        <div className="space-y-4 lg:space-y-5">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: idx * 0.15 }}
                              className="group/item"
                            >
                              {/* Number and Title */}
                              <div className="flex items-start gap-3 mb-2">
                                <div 
                                  className="text-4xl lg:text-5xl text-[#22c55e]/30 group-hover/item:text-[#22c55e]/60 transition-colors duration-500 leading-none pt-0.5"
                                  style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                  {(idx + 1).toString().padStart(2, '0')}
                                </div>
                                <div className="flex-1 pt-1">
                                  <h4 
                                    className="text-lg lg:text-xl text-stone-900 mb-1.5 group-hover/item:text-[#22c55e] transition-colors duration-500"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                  >
                                    {feature.title}
                                  </h4>
                                  <p 
                                    className="text-stone-600 text-sm"
                                    style={{ fontFamily: "'Manrope', sans-serif" }}
                                  >
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                              
                              {/* Divider line */}
                              {idx < service.features.length - 1 && (
                                <div className="h-px bg-stone-200 mt-4 lg:mt-5 group-hover/item:bg-[#22c55e]/30 transition-colors duration-500" />
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Strengths Section */}
      <section id="strengths" className="py-24 sm:py-32 lg:py-40 bg-stone-900" data-dark-section="true">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20 sm:mb-24"
            >
              <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
              <SplitTextAnimation
                className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
                delay={0}
                duration={0.08}
                splitBy="char"
              >
                Our Strengths
              </SplitTextAnimation>
              <p
                className="text-stone-400 text-sm tracking-[0.2em]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                私たちの強み
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {strengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className="group bg-stone-800/50 p-8 sm:p-10 hover:bg-stone-800 border border-stone-700 hover:border-[#22c55e] transition-all duration-500"
                  >
                    <div className="w-14 h-14 border-2 border-stone-600 flex items-center justify-center mb-6 group-hover:border-[#22c55e] group-hover:bg-[#22c55e] transition-all duration-500">
                      <Icon className="w-7 h-7 text-stone-300 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl mb-4 text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {strength.title}
                    </h3>
                    <p
                      className="text-stone-400 leading-relaxed"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {strength.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-stone-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
              >
                お気軽にご相談ください
              </h2>
              <p className="text-stone-600 leading-relaxed mb-12 text-base sm:text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
                サービスに関するご質問やご相談は、お問い合わせフォームよりお気軽にご連絡ください。
              </p>
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-stone-900 text-white hover:bg-[#22c55e] transition-all duration-300 border-2 border-stone-900 hover:border-[#22c55e]"
                style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: '0.05em' }}
              >
                お問い合わせ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

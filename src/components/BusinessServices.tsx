'use client';

import { Phone, Users, Wifi, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export function BusinessServices() {
  const navigate = useNavigate();

  const handleServiceClick = (sectionId: string) => {
    navigate(`/services#${sectionId}`);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 96;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 500);
  };
  const services = [
    {
      icon: Phone,
      title: "通信商材営業代理/代行業務",
      description: (
        <>
          通信関連商材の営業代理店として、お客様のビジネスをサポート。
          <br />
          専門知識を活かした提案で、最適なソリューションを提供します。
        </>
      ),
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjIyMzgwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      number: "01",
      sectionId: "telecom",
    },
    {
      icon: Users,
      title: "アウトソーシング事業",
      description: (
        <>
          企業様の業務効率化を支援するアウトソーシングサービス。
          <br />
          専門スタッフによる高品質なサポートで、コア業務への集中を実現します。
        </>
      ),
      image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjIyNDUyODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      number: "02",
      sectionId: "outsourcing",
    },
    {
      icon: Wifi,
      title: "固定通信回線移動通信式サービス",
      description: (
        <>
          固定通信回線から移動通信まで、幅広い通信サービスを提供。
          <br />
          お客様の環境に最適なネットワークソリューションをご提案します。
        </>
      ),
      image: "https://images.unsplash.com/photo-1673602343091-5335a3150d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNreWxpbmV8ZW58MXx8fHwxNzYyMzI1NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      number: "03",
      sectionId: "communication",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#22c55e]/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#22c55e]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Services
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
            事業内容
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-stone-600 max-w-2xl leading-relaxed space-y-4"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            <p className="text-base sm:text-lg">『創業間もない私たちに何ができるのか』</p>
            <p className="text-sm sm:text-base whitespace-normal sm:whitespace-nowrap">私たちは、日々仕事を通じてお客様のお役に立てるよう社会の不満やお客様のニーズにアンテナを張り、ビジネスを展開しています。</p>
          </motion.div>
        </div>

        {/* Service Cards - Simple 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                onClick={() => handleServiceClick(service.sectionId)}
                className="group cursor-pointer"
              >
                {/* Card Container */}
                <div className="relative bg-stone-50 p-8 lg:p-10 h-full border border-stone-200 group-hover:border-[#22c55e]/50 transition-all duration-500 overflow-hidden">
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
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-stone-700 group-hover:text-white transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                      {/* Fill animation */}
                      <div className="absolute inset-0 bg-[#22c55e] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </motion.div>
                    
                    {/* Number */}
                    <div 
                      className="text-5xl text-stone-300 group-hover:text-[#22c55e]/30 mb-4 transition-colors duration-500"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.number}
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="text-xl lg:text-2xl text-stone-900 mb-4 leading-tight group-hover:text-[#22c55e] transition-colors duration-500"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.title}
                    </h3>
                    
                    {/* Short Description */}
                    <p 
                      className="text-stone-600 leading-relaxed mb-6 text-sm lg:text-base"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {index === 0 && '通信関連商材の営業代理店として、専門知識を活かした最適なソリューションを提供します。'}
                      {index === 1 && '企業様の業務効率化を支援するアウトソーシングサービスで、コア業務への集中を実現します。'}
                      {index === 2 && '固定通信回線から移動通信まで、お客様の環境に最適なネットワークソリューションをご提案します。'}
                    </p>
                    
                    {/* Link */}
                    <div className="inline-flex items-center gap-2 text-stone-900 group-hover:text-[#22c55e] transition-colors duration-500">
                      <span 
                        className="text-sm tracking-wider uppercase"
                        style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                      >
                        詳しく見る
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

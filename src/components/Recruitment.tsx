'use client';

import { Users, Coffee, Heart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import Link from "next/link";

export function Recruitment() {
  const benefits = [
    {
      icon: Users,
      title: "少人数でアットホーム",
      description: "風通しの良い環境で、一人ひとりの意見を大切にします。",
    },
    {
      icon: Coffee,
      title: "柔軟な働き方",
      description: "ライフスタイルに合わせた勤務スタイルを相談可能です。",
    },
    {
      icon: Heart,
      title: "成長をサポート",
      description: "スキルアップのための学習機会を積極的に提供します。",
    },
  ];

  return (
    <section id="recruitment" className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#22c55e]/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#22c55e]/5 to-transparent pointer-events-none"></div>
      
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
              Careers
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
            採用情報
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-stone-600 max-w-2xl text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            共に成長し、地域に貢献できる仲間を募集しています。
          </motion.p>
        </div>

        {/* Large Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-24 sm:mb-32 max-w-7xl mx-auto"
        >
          <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1746221331496-a87689fc8eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MjI2MjQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Professional workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent"></div>
            
            {/* Floating text overlay */}
            <div className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 right-8 sm:right-16">
              <h3 
                className="text-2xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Work with Purpose
              </h3>
              <p className="text-stone-200 text-sm sm:text-lg max-w-2xl" style={{ fontFamily: "'Manrope', sans-serif" }}>
                あなたの可能性を、私たちと一緒に広げませんか
              </p>
            </div>
          </div>
          {/* Decorative frame */}
          <div className="absolute -bottom-8 -left-8 w-full h-full border-2 border-stone-200 -z-10 hidden lg:block"></div>
        </motion.div>



        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-stone-900 text-white p-12 sm:p-16 lg:p-20 max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#22c55e]/10 to-transparent"></div>
          
          <div className="relative z-10">
            <h3 
              className="text-2xl sm:text-4xl lg:text-5xl mb-8 tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Join Us
            </h3>
            
            <div className="w-16 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8"></div>
            
            <p className="text-stone-300 mb-10 sm:mb-12 leading-relaxed text-sm sm:text-lg max-w-2xl" style={{ fontFamily: "'Manrope', sans-serif" }}>
              ご興味をお持ちいただけましたら、まずはお気軽にお問い合わせください。<br className="hidden sm:block" />
              カジュアルな面談も歓迎です。お会いできることを楽しみにしています。
            </p>
            
            <Link href="/contact">
              <Button
                className="group bg-white hover:bg-[#22c55e] text-stone-900 hover:text-white px-6 sm:px-10 h-12 sm:h-16 text-sm sm:text-base tracking-wide transition-all duration-500 border-2 border-white"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
              >
                <span className="hidden sm:inline">採用に関する</span>お問い合わせ
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

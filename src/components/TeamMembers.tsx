'use client';

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
import teamMemberImage from "figma:asset/b47bdf8d2600924f2bfd13a12c6050494af96b7d.png";

export function TeamMembers() {
  const teamMembers = [
    {
      name: "藤吉　祐成",
      position: "営業部　部長",
      image: teamMemberImage,
      message: "一人ひとりの可能性を信じ、共に成長する組織を目指しています。",
    },
  ];

  return (
    <section id="team" className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern relative overflow-hidden">

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
              Team
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-8 text-stone-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            社員紹介
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent"
          />
        </div>

        {/* Team Members Grid */}
        <div className="flex justify-center max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group bg-white overflow-hidden relative w-full max-w-md"
            >
              {/* Premium border reveal effect */}
              <motion.div 
                className="absolute inset-0 border-2 border-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Member Photo */}
              <div className="relative h-[500px] overflow-hidden mb-6">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                >
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
                
                {/* Premium overlay with shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                </div>
                
                {/* Position badge with animation */}
                <motion.div 
                  className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xs tracking-[0.2em] text-stone-700 uppercase" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>
                    {member.position}
                  </span>
                </motion.div>
              </div>

              {/* Member Info */}
              <div className="px-6 pb-8">
                <motion.h3
                  className="text-2xl sm:text-3xl mb-4 text-stone-900 group-hover:text-[#22c55e] transition-colors duration-500"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.name}
                </motion.h3>
                
                <div className="flex items-start gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-1" strokeWidth={2} />
                  </motion.div>
                  <p
                    className="text-stone-600 leading-relaxed italic"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {member.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

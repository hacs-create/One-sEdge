import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("お問い合わせを受け付けました。ご連絡ありがとうございます。");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#22c55e]/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#22c55e]/5 to-transparent pointer-events-none"></div>
      
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
            <span className="text-xs sm:text-sm tracking-[0.3em] text-stone-400 uppercase" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Contact
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl mb-8 text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            お問い合わせ
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
            className="text-stone-400 max-w-2xl text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3 bg-white/5 backdrop-blur-sm p-8 sm:p-10 lg:p-12 border border-stone-800"
          >
            <h3 
              className="text-xl sm:text-3xl lg:text-4xl mb-10 text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <Label htmlFor="name" className="text-stone-300 text-sm tracking-wider mb-3 block" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>
                  お名前 <span className="text-[#22c55e]">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="山田 太郎"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-stone-950/50 border-stone-700 text-white placeholder:text-stone-600 focus:border-[#22c55e] h-14 transition-all duration-300"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-stone-300 text-sm tracking-wider mb-3 block" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>
                  メールアドレス <span className="text-[#22c55e]">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-stone-950/50 border-stone-700 text-white placeholder:text-stone-600 focus:border-[#22c55e] h-14 transition-all duration-300"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-stone-300 text-sm tracking-wider mb-3 block" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}>
                  お問い合わせ内容 <span className="text-[#22c55e]">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="お問い合わせ内容をご記入ください"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={7}
                  className="bg-stone-950/50 border-stone-700 text-white placeholder:text-stone-600 focus:border-[#22c55e] resize-none transition-all duration-300"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                />
              </div>
              <Button
                type="submit"
                className="group w-full bg-[#22c55e] hover:bg-[#16a34a] text-white h-14 sm:h-16 tracking-wide transition-all duration-500"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
              >
                送信する
                <Send className="ml-2 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Access Section */}
            <div className="bg-neutral-50 p-8 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Address Info */}
                <div className="space-y-6">
                  <h3 
                    className="text-sm tracking-[0.3em] text-neutral-400 uppercase mb-8"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    ACCESS
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-neutral-600 mb-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                        〒501-6012
                      </p>
                      <p className="text-neutral-800 leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                        岐阜県羽島郡岐南町上印食2-15<br />
                        シャルマンハウス 201
                      </p>
                    </div>
                    
                    <div className="pt-4">
                      <p className="text-sm text-neutral-500 mb-2" style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: '0.1em' }}>
                        TEL : <span className="text-neutral-800">070-2250-2001</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Map */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-neutral-300 relative overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.8!2d136.7!3d35.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI0JzAwLjAiTiAxMzbCsDQyJzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(100%)' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* HERE Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="bg-[#a0826d] text-white px-4 py-2 text-xs tracking-wider" style={{ fontFamily: "'Manrope', sans-serif" }}>
                        HERE
                      </div>
                    </div>
                  </div>
                  
                  {/* Google Map Link */}
                  <a 
                    href="https://maps.google.com/maps?q=岐阜県羽島郡岐南町上印食2-15" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-end gap-2 mt-3 text-sm text-neutral-600 hover:text-[#16a34a] transition-colors duration-300 group"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Google Map
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

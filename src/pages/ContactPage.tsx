'use client';

import { Mail, Phone, MapPin, Send, Clock, MessageCircle, HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { SplitTextAnimation } from "../components/SplitTextAnimation";

import { projectId, publicAnonKey } from "../utils/supabase/info";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // フォームデータの検証
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("必須項目を入力してください");
      return;
    }

    // メールアドレスの検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("有効なメールアドレスを入力してください");
      return;
    }

    const submitForm = async () => {
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a645badf/inquiries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          let errorMessage = `Server Error (${response.status})`;
          try {
            const errorData = await response.json();
            if (errorData.error) errorMessage = errorData.error;
          } catch (e) {
            // If JSON parse fails, try text
            const text = await response.text().catch(() => null);
            if (text) errorMessage = `Server Error (${response.status}): ${text.slice(0, 100)}`;
          }
          throw new Error(errorMessage);
        }

        toast.success("お問い合わせを受け付けました。担当者より折り返しご連絡いたします。");
        
        // フォームをリセット
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: ""
        });
      } catch (error: any) {
        console.error(error);
        toast.error(error.message || "送信に失敗しました。時間をおいて再度お試しください。");
      }
    };

    submitForm();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "所在地",
      value: "〒501-6018\n岐阜県羽島郡岐南町上印食2-15\nシャルマンハウス 201"
    },
    {
      icon: Phone,
      label: "電話番号",
      value: "070-2250-2001"
    },
    {
      icon: Mail,
      label: "メールアドレス",
      value: "info@onesedge.co.jp"
    }
  ];

  const faqs = [
    {
      question: "採用についてのお問い合わせはどこからできますか？",
      answer: "採用に関するお問い合わせは、このページのお問い合わせフォームから「採用について」とご記入いただくか、直接お電話でもお受けしております。カジュアル面談も随時受け付けておりますので、お気軽にご連絡ください。"
    },
    {
      question: "事業提携や業務委託の相談は可能ですか？",
      answer: "はい、事業提携や業務委託のご相談も承っております。お問い合わせフォームの件名に「事業提携について」または「業務委託について」とご記入の上、詳細をお聞かせください。担当者より3営業日以内にご連絡いたします。"
    },
    {
      question: "サービス内容の詳細について相談したいのですが？",
      answer: "サービス内容の詳細については、お問い合わせフォームまたはお電話にてお気軽にご相談ください。お客様のニーズに合わせて最適なソリューションをご提案させていただきます。オンラインでの打ち合わせも可能です。"
    },
    {
      question: "問い合わせ後、どのくらいで返答がありますか？",
      answer: "お問い合わせいただいた内容は、通常2営業日以内にご返答させていただいております。お急ぎの場合は、お問い合わせフォームにその旨をご記入いただくか、直接お電話にてご連絡ください。"
    }
  ];

  const inquiryTypes = [
    {
      icon: MessageCircle,
      title: "一般的なお問い合わせ",
      description: "サービス内容やご質問など"
    },
    {
      icon: HelpCircle,
      title: "採用に関するお問い合わせ",
      description: "求人情報や選考プロセスなど"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 lg:py-48 bg-stone-900 overflow-hidden" data-dark-section="true">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
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
              Contact
            </SplitTextAnimation>
            <p className="text-stone-300 tracking-[0.2em] text-sm sm:text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>
              お問い合わせ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {inquiryTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="group relative border-2 border-stone-200 p-8 sm:p-10 bg-white hover:border-[#22c55e] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border-2 border-stone-300 bg-white group-hover:border-[#22c55e] group-hover:bg-[#22c55e] transition-all duration-500">
                      <Icon className="w-7 h-7 text-stone-700 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl mb-3 text-stone-900"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {type.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-stone-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
            >
              会社情報
            </h2>
            <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
              お気軽にお問い合わせください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isPhone = info.label === "電話番号";
              const isEmail = info.label === "メールアドレス";
              const isClickable = isPhone || isEmail;
              const content = (
                <>
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-6 border-2 border-stone-300 bg-white group-hover:border-[#22c55e] group-hover:bg-[#22c55e] transition-all duration-500">
                    <Icon className="w-6 h-6 text-stone-700 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="mb-4 text-stone-500 text-sm tracking-[0.1em]"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                  >
                    {info.label}
                  </h3>
                  <p
                    className={`leading-relaxed whitespace-pre-line text-base ${isClickable ? 'text-stone-900 group-hover:text-[#22c55e]' : 'text-stone-900'} transition-colors duration-500`}
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {info.value}
                  </p>
                </>
              );

              if (isPhone) {
                return (
                  <motion.a
                    key={index}
                    href="tel:070-2250-2001"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-stone-50 border-2 border-stone-200 p-6 sm:p-8 hover:border-[#22c55e] hover:bg-white transition-all duration-500 cursor-pointer block"
                  >
                    {content}
                  </motion.a>
                );
              } else if (isEmail) {
                return (
                  <motion.a
                    key={index}
                    href="mailto:info@onesedge.co.jp"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-stone-50 border-2 border-stone-200 p-6 sm:p-8 hover:border-[#22c55e] hover:bg-white transition-all duration-500 cursor-pointer block"
                  >
                    {content}
                  </motion.a>
                );
              } else {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-stone-50 border-2 border-stone-200 p-6 sm:p-8 hover:border-[#22c55e] hover:bg-white transition-all duration-500"
                  >
                    {content}
                  </motion.div>
                );
              }
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 sm:py-32 lg:py-40 bg-diamond-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-stone-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
            >
              お問い合わせフォーム
            </h2>
            <p className="text-stone-600 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
              サービスに関するご質問、採用に関するお問い合わせなど、お気軽にご連絡ください。<br />
              担当者より折り返しご連絡いたします。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="relative border-2 border-stone-200 bg-white p-8 sm:p-10 lg:p-12 shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-stone-50 to-transparent opacity-50 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-stone-50 to-transparent opacity-50 pointer-events-none"></div>
              
              <div className="relative space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-3 text-stone-700 text-sm tracking-[0.1em]"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                    >
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-stone-300 focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all duration-300 bg-white"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-3 text-stone-700 text-sm tracking-[0.1em]"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                    >
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-stone-300 focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all duration-300 bg-white"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-3 text-stone-700 text-sm tracking-[0.1em]"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                    >
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-300 focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all duration-300 bg-white"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-3 text-stone-700 text-sm tracking-[0.1em]"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                    >
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-stone-300 focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all duration-300 bg-white"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-3 text-stone-700 text-sm tracking-[0.1em]"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                  >
                    件名
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-stone-300 focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all duration-300 bg-white"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-3 text-stone-700 text-sm tracking-[0.1em]"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
                  >
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-4 py-3 border-2 border-stone-300 focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all duration-300 resize-none bg-white"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-stone-900 text-white hover:bg-[#22c55e] transition-all duration-300 shadow-sm hover:shadow-md border-2 border-stone-900 hover:border-[#22c55e]"
                    style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: '0.05em', fontWeight: 600 }}
                  >
                    送信する
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="w-20 h-px bg-gradient-to-r from-[#22c55e] to-transparent mb-8 mx-auto" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-stone-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
            >
              アクセス
            </h2>
            <p className="text-stone-600 leading-relaxed text-base sm:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
              岐阜県羽島郡岐南町上印食2-15 シャルマンハウス 201
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="aspect-[16/9] border-2 border-stone-200 bg-stone-100 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.4686934832733!2d136.76708831194562!3d35.3640089724234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003a9f0c8c1c8c7%3A0x1c1c1c1c1c1c1c1c!2z44CSNTAxLTYwMTgg5bKQ6Zic55yM576955bm6YOh5bKQ5Y2X55S65LiK5Y2w6aOf77yS4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="One's edge 所在地"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

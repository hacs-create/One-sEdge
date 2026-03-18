'use client';

import logoImage from "figma:asset/94d2a1608764c2418d01da3661a2fd1181af5801.png";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-stone-200 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12 max-w-7xl mx-auto">
          {/* Company Logo & Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <img src={logoImage} alt="One's edge" className="w-full h-full object-contain" />
              </div>
              <span 
                className="text-xl tracking-tight bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#15803d] bg-clip-text text-transparent"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                One's edge
              </span>
            </div>
            <p 
              className="text-stone-600 text-sm leading-relaxed"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              一人ひとりの可能性を最大限に引き出し、共に成長し続けるパートナーとして。
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 
              className="text-stone-900 mb-6 text-sm tracking-wider uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
            >
              Sitemap
            </h4>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/"
                    className="text-stone-600 hover:text-[#22c55e] transition-colors duration-300 text-sm inline-block"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    トップページ
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/company"
                    className="text-stone-600 hover:text-[#22c55e] transition-colors duration-300 text-sm inline-block"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services"
                    className="text-stone-600 hover:text-[#22c55e] transition-colors duration-300 text-sm inline-block"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    事業内容
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/recruitment"
                    className="text-stone-600 hover:text-[#22c55e] transition-colors duration-300 text-sm inline-block"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    採用情報
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact"
                    className="text-stone-600 hover:text-[#22c55e] transition-colors duration-300 text-sm inline-block"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 
              className="text-stone-900 mb-6 text-sm tracking-wider uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
            >
              Company
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-1" strokeWidth={1.5} />
                <p 
                  className="text-stone-600 text-sm leading-relaxed"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  岐阜県羽島郡岐南町上印食2-15<br />シャルマンハウス 201
                </p>
              </div>
              <a 
                href="tel:070-2250-2001"
                className="flex items-center gap-3 hover:text-[#22c55e] transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-[#22c55e] flex-shrink-0" strokeWidth={1.5} />
                <p 
                  className="text-stone-600 text-sm hover:text-[#22c55e] transition-colors duration-300"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  070-2250-2001
                </p>
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 
              className="text-stone-900 mb-6 text-sm tracking-wider uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:info@onesedge.co.jp"
                className="flex items-start gap-3 hover:text-[#22c55e] transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p 
                    className="text-stone-600 text-sm hover:text-[#22c55e] transition-colors duration-300"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    info@onesedge.co.jp
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-stone-200 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p 
            className="text-stone-500 text-xs tracking-wider text-center" 
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            © {currentYear} ONE'S EDGE LLC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex justify-center mt-2">
            <Link to="/admin" className="text-stone-300 hover:text-stone-500 text-[10px] transition-colors">
              Admin
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

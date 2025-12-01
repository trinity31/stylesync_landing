"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

interface FooterProps {
  simple?: boolean;
}

export default function Footer({ simple = false }: FooterProps) {
  return (
    <footer className="bg-secondary-gray pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        
        {!simple && (
          <>
            {/* Final CTA */}
            <div className="bg-text-dark rounded-3xl p-10 md:p-16 text-center text-white mb-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800 to-black opacity-50" />
              <div className="relative z-10">
                <motion.h2 
                  className="text-3xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  지금 바로 시작하세요
                </motion.h2>
                <motion.p 
                  className="text-gray-300 text-lg md:text-xl mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  StyleSync AI와 함께 스마트한 아침을 경험하세요.
                </motion.p>
                <motion.button 
                  className="bg-white text-text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-blue transition-colors shadow-lg hover:scale-105 active:scale-95"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  무료로 다운로드
                </motion.button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-200 pt-10">
              <div className="text-2xl font-bold text-text-dark">
                StyleSync<span className="text-accent-blue">AI</span>
              </div>
              
              <div className="flex gap-6 text-mid-gray text-sm">
                <Link href="/privacy" className="hover:text-text-dark transition-colors">개인정보처리방침</Link>
                <Link href="/terms" className="hover:text-text-dark transition-colors">서비스 이용약관</Link>
                <Link href="/contact" className="hover:text-text-dark transition-colors">문의하기</Link>
              </div>

              {/* <div className="flex gap-4">
                <Link href="#" className="text-mid-gray hover:text-text-dark transition-colors">
                  <Mail size={20} />
                </Link>
                <Link href="#" className="text-mid-gray hover:text-text-dark transition-colors">
                  <Github size={20} />
                </Link>
              </div> */}
            </div>
          </>
        )}
        
        <div className="text-center text-gray-400 text-xs mt-8">
          © 2024 StyleSync AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

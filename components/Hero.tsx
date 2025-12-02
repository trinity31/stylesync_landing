"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Apple, Play, Shirt, CloudSun, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-text-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              AI가 매일 아침,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                당신의 스타일
              </span>을 완성합니다
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-mid-gray mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              옷장의 옷을 AI가 자동 분류하고,<br className="md:hidden" /> 
              날씨에 맞는 완벽한 코디를 추천받으세요.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="https://apps.apple.com/kr/app/stylesync-ai/id6755629128" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 active:scale-95 transition-transform"
              >
                <Image 
                  src="/images/appstore_icon_us_black.svg" 
                  alt="Download on the App Store" 
                  width={160} 
                  height={53} 
                  className="h-[53px] w-auto"
                />
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.trinityapps.stylesyncai&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 active:scale-95 transition-transform"
              >
                <Image 
                  src="/images/googleplay_icon_us_black.png" 
                  alt="Get it on Google Play" 
                  width={180} 
                  height={53} 
                  className="h-[53px] w-auto"
                />
              </a>
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="flex-1 relative w-full max-w-md mx-auto md:max-w-none">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-blue/20 rounded-full blur-3xl -z-10" />
            
            {/* Phone Mockup */}
            <motion.div 
              className="relative z-10 mx-auto w-64 md:w-80 aspect-[9/19] bg-white rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-gray-900 rounded-b-2xl" />
              
              {/* Screen Content Placeholder */}
              {/* Screen Content Placeholder */}
              {/* Screen Content */}
              <div className="relative w-full h-full bg-gray-50">
                <Image 
                  src="/images/recommendation.png" 
                  alt="StyleSync AI Recommendation Screen" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Icons */}
            <FloatingIcon icon={<Shirt size={24} />} className="absolute top-10 left-0 md:-left-10 bg-white p-4 rounded-2xl shadow-xl text-blue-500" delay={0} />
            <FloatingIcon icon={<CloudSun size={24} />} className="absolute top-1/2 -right-4 md:-right-12 bg-white p-4 rounded-2xl shadow-xl text-yellow-500" delay={1} />
            <FloatingIcon icon={<Sparkles size={24} />} className="absolute bottom-20 left-4 md:-left-4 bg-white p-4 rounded-2xl shadow-xl text-purple-500" delay={2} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({ icon, className, delay }: { icon: React.ReactNode, className: string, delay: number }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {icon}
    </motion.div>
  );
}

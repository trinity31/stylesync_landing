"use client";

import { motion } from "framer-motion";
import { Shirt, Lightbulb, Bell, Palette } from "lucide-react";

const features = [
  {
    icon: <Shirt size={28} />,
    title: "My Closet",
    description: "내 옷장을 디지털로 관리하고 한눈에 파악하세요.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Today's Pick",
    description: "오늘의 날씨와 일정에 맞는 최적의 코디를 추천합니다.",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    icon: <Bell size={28} />,
    title: "Daily Reminder",
    description: "매일 아침, 외출 전 코디 알림을 받아보세요.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: <Palette size={28} />,
    title: "Smart Tagging",
    description: "AI가 옷의 색상과 패턴을 자동으로 인식하고 태그합니다.",
    color: "bg-purple-50 text-purple-600"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                당신의 옷장을<br />
                <span className="text-accent-blue">스마트하게</span> 관리하세요
              </h2>
              <p className="text-mid-gray text-lg mb-8 leading-relaxed">
                StyleSync AI는 단순한 코디 추천을 넘어,<br />
                당신의 패션 라이프스타일 전반을 관리해주는<br />
                똑똑한 비서입니다.
              </p>
              <button className="text-text-dark font-bold border-b-2 border-text-dark pb-1 hover:text-accent-blue hover:border-accent-blue transition-colors">
                모든 기능 보기 →
              </button>
            </motion.div>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-3xl border border-gray-100 hover:border-accent-blue/30 hover:shadow-lg transition-all bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-dark mb-2">{feature.title}</h3>
                  <p className="text-mid-gray text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

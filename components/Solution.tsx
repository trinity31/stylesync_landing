"use client";

import { motion } from "framer-motion";
import { Camera, CloudSun, Star } from "lucide-react";

const solutions = [
  {
    icon: <Camera size={32} />,
    title: "Magic Closet",
    description: "사진만 찍으면 AI가 자동으로 카테고리, 색상, 스타일을 분석하여 디지털 옷장에 정리합니다.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <CloudSun size={32} />,
    title: "Smart Recommendation",
    description: "실시간 날씨 정보와 내 옷장 데이터를 결합하여 매일 아침 최적의 코디를 제안합니다.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: <Star size={32} />,
    title: "Save & Reuse",
    description: "마음에 드는 코디는 즐겨찾기에 저장하고, 언제든 다시 꺼내볼 수 있습니다.",
    color: "bg-purple-100 text-purple-600"
  }
];

export default function Solution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            StyleSync AI가 해결합니다
          </h2>
          <p className="text-mid-gray text-lg">
            더 스마트한 패션 라이프를 위한 3가지 핵심 솔루션
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${solution.color}`}>
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{solution.title}</h3>
              <p className="text-mid-gray leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

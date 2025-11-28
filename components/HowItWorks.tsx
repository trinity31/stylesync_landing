"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, Shirt } from "lucide-react";

const steps = [
  {
    icon: <Upload size={24} />,
    step: "STEP 01",
    title: "옷 등록",
    description: "가지고 있는 옷을 사진으로 촬영하거나 갤러리에서 업로드하세요."
  },
  {
    icon: <Cpu size={24} />,
    step: "STEP 02",
    title: "AI 분석",
    description: "Gemini AI가 옷의 색상, 패턴, 스타일을 자동으로 분석하고 학습합니다."
  },
  {
    icon: <Shirt size={24} />,
    step: "STEP 03",
    title: "코디 추천",
    description: "오늘의 날씨와 상황에 딱 맞는 2~3가지 코디를 즉시 제안받으세요."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary-gray overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            3단계로 완성되는 나만의 스타일
          </h2>
          <p className="text-mid-gray text-lg">
            복잡한 과정 없이 간편하게 시작하세요.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center bg-white md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none shadow-sm md:shadow-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-24 h-24 bg-white rounded-full border-4 border-secondary-gray flex items-center justify-center mb-6 shadow-sm z-10">
                <div className="w-16 h-16 bg-text-dark text-white rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <div className="text-accent-blue font-bold tracking-wider mb-2">{step.step}</div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{step.title}</h3>
              <p className="text-mid-gray leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

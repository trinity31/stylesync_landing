"use client";

import { motion } from "framer-motion";

const problems = [
  {
    emoji: "😫",
    title: "오늘 날씨에 뭘 입지?",
    description: "일기예보를 봐도 막상 뭘 입어야 할지 감이 안 잡힐 때가 많습니다."
  },
  {
    emoji: "🤔",
    title: "입을 옷이 없어",
    description: "옷장은 꽉 찼는데, 정작 오늘 입고 나갈 마음에 드는 옷이 보이지 않나요?"
  },
  {
    emoji: "⏰",
    title: "아침마다 시간 낭비",
    description: "거울 앞에서 옷을 입었다 벗었다 하느라 매일 아침이 바쁩니다."
  }
];

export default function Problem() {
  return (
    <section className="py-20 bg-secondary-gray">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            매일 아침 고민되는 코디 선택
          </h2>
          <p className="text-mid-gray text-lg">
            우리는 모두 이런 고민을 해본 적이 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-6">{problem.emoji}</div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{problem.title}</h3>
              <p className="text-mid-gray leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

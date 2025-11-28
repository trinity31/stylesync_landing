"use client";

import { motion } from "framer-motion";

const techs = [
  "Gemini 1.5 Flash/Pro",
  "Supabase",
  "OpenWeatherMap",
  "Flutter"
];

export default function TechStack() {
  return (
    <section className="py-16 bg-secondary-gray border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2 
          className="text-2xl font-bold text-text-dark mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          최첨단 AI 기술로 구동됩니다
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white px-6 py-3 rounded-full shadow-sm text-mid-gray font-medium border border-gray-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, color: "#1D1D1F", borderColor: "#A7D8F0" }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

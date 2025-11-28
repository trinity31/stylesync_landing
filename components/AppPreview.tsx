"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [
  { title: "옷장 관리", src: "/images/my_closet.png" },
  { title: "AI 코디 추천", src: "/images/full_outfit_generation.png" },
  { title: "코디 상세", src: "/images/clothing_detail_1.png" },
  { title: "즐겨찾기", src: "/images/clothing_detail_2.png" }
];

export default function AppPreview() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-text-dark mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          앱 미리보기
        </motion.h2>
      </div>

      <div className="flex overflow-x-auto pb-12 gap-8 px-4 md:px-6 snap-x snap-mandatory no-scrollbar justify-start md:justify-center">
        {screenshots.map((screen, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-64 h-[500px] bg-gray-50 rounded-[2.5rem] border-8 border-gray-900 shadow-xl overflow-hidden snap-center relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-gray-900 rounded-b-2xl z-20" />
            <div className="relative w-full h-full bg-white">
              <Image
                src={screen.src}
                alt={screen.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

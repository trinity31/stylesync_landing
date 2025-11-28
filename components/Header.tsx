"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-900">
          StyleSync<span className="text-accent-blue">AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-text-dark/80 hover:text-text-dark transition-colors">
            주요 기능
          </Link>
          <Link href="#how-it-works" className="text-text-dark/80 hover:text-text-dark transition-colors">
            사용 방법
          </Link>

        </nav>


      </div>
    </motion.header>
  );
}
